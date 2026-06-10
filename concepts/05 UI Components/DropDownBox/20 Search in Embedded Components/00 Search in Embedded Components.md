DropDownBox does not support filtering on its own because it has no built-in content. To add search functionality, embed a component that supports data filtering. DataGrid and TreeList are the most suitable options when you need partial data loading. Both components offer multiple ways to filter content:

- [Searching API](https://js.devexpress.com/jQuery/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Search_Api)
- [Filtering API](https://js.devexpress.com/jQuery/Documentation/Guide/UI_Components/DataGrid/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering)

This article describes how to implement search functionality when a DataGrid or TreeList is embedded inside the DropDownBox, and explains the key differences between the two approaches.

You can use the following GitHub examples as a starting point:

- [DropDownBox with embedded DataGrid](https://github.com/DevExpress-Examples/devextreme-dropdownbox-filter-data-in-nested-widget)
- [DropDownBox with embedded TreeList](https://github.com/DevExpress-Examples/devextreme-dropdownbox-implement-search-for-treelist)

## General Configuration

Both implementations share the same general structure. The sections below describe each part.

Enable `acceptCustomValue` and set `valueChangeEvent` to an empty string to handle user input. Both examples use [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data) as a data source.

### displayExpr

displayExpr defines what text appears in the DropDownBox input field when a value is selected. For example:

    function displayExpr(item) {
        if (!item || typeof item !== 'object') return '';
        return `${item.Employee}: ${item.StoreState} - ${item.StoreCity} <${item.OrderNumber}>`;
    }


To display a value from a lookup column in the DropDownBox input field, pre-load the lookup data and resolve it in `displayExpr`:

---
##### jQuery

    let lookupItems = [];
    const lookupDataSource = makeAsyncDataSource('ID', `${url}/TaskEmployees`);

    lookupDataSource.load().then((items) => {
        lookupItems = items;
        $('#treeBox').dxDropDownBox('instance')?.repaint();
    });

    function displayExpr(item) {
        if (!lookupItems.length) return 'Loading...';
        const employeeData = lookupItems.find(
            (employee) => employee.ID === item.Task_Assigned_Employee_ID,
        );
        if (!employeeData) return item.Task_Subject || '';
        return `${employeeData.Name}: ${item.Task_Subject} (${item.Task_Status})`;
    }

##### Angular

    // app.component.ts
    (this.service.lookupStore.load() as Promise<Employee[]>).then((items) => {
        this.displayExpr = (item: Task): string =>
            this.service.getDisplayExpr(item, items);
    });

    // app.service.ts
    getDisplayExpr(item: Task, lookupItems: Employee[]): string {
        if (!lookupItems?.length) return 'Loading...';
        const employee = lookupItems.find(e => e.ID === item.Task_Assigned_Employee_ID);
        if (!employee) return item.Task_Subject || '';
        return `${employee.Name}: ${item.Task_Subject} (${item.Task_Status})`;
    }

##### Vue

    // DropDownList.vue
    const lookupItems = ref<Employee[]>([]);

    onMounted(() => {
        lookupStore.load().then((items: Employee[]) => {
            lookupItems.value = items;
            dropDownBoxRef.value?.instance?.repaint();
        });
    });

    function displayExpr(item: Task): string {
        if (!lookupItems.value.length) return 'Loading...';
        const employee = lookupItems.value.find(
            (e) => e.ID === item.Task_Assigned_Employee_ID
        );
        if (!employee) return item.Task_Subject || '';
        return `${employee.Name}: ${item.Task_Subject} (${item.Task_Status})`;
    }

##### React

    // DropDownList.tsx
    const [lookupItems, setLookupItems] = useState<Employee[]>([]);

    useEffect(() => {
        lookupStore.load().then((items: Employee[]) => {
            setLookupItems(items);
            dropDownBoxRef.current?.instance().repaint();
        });
    }, []);

    const displayExpr = useCallback((item: Task | null): string => {
        if (!item) return '';
        if (!lookupItems.length) return 'Loading...';
        const employee = lookupItems.find(
            (e) => e.ID === item.Task_Assigned_Employee_ID
        );
        if (!employee) return item.Task_Subject || '';
        return `${employee.Name}: ${item.Task_Subject} (${item.Task_Status})`;
    }, [lookupItems]);

---

Why the difference? DataGrid displays flat data where all fields are stored in the same record. TreeList in this example uses a lookup column where the display value (Name) comes from a related dataset. When the DropDownBox needs to format the selected value, it can only access the raw record — so employee names must be pre-loaded and resolved manually.

### onInput

Both implementations debounce the input with setTimeout and open the dropdown if it is closed. After that, the search logic diverges.

In DataGrid, `dataSource.searchValue(text)` is used which works together with the configured `searchExpr`:

---
##### jQuery

    onInput: (e) => {
        clearTimeout(searchTimerId);
        searchTimerId = setTimeout(() => {
            const dropDownBox = e.component;
            if (!dropDownBox.option('opened')) dropDownBox.open();

            const text = dropDownBox.option('text') || '';
            dataSource.searchValue(text);

            if (isSearchIncomplete(dropDownBox)) {
                const onChanged = () => {
                    const items = dataSource.items();
                    if (items.length > 0) {
                        dataGridInstance.option('focusedRowKey', items[0].OrderNumber);
                    }
                    dropDownBox.focus();
                    dataSource.off('changed', onChanged);
                };
                dataSource.on('changed', onChanged);
                dataSource.load();
            }
        }, searchTimeout);
    }

##### Angular

    onInput(e: DxDropDownBoxTypes.InputEvent): void {
        if (this.searchTimer) clearTimeout(this.searchTimer);
        this.searchTimer = setTimeout(() => {
            if (!this.gridBoxOpened) this.gridBoxOpened = true;
            const text = e.component.option('text');
            this.dataSource.searchValue(text ?? null);
            if (this.isSearchIncomplete(e.component)) {
                const onChanged = (): void => {
                    const items = this.dataSource.items();
                    if (items.length > 0) {
                        this.focusedRowKey = items[0].OrderNumber;
                    }
                    this.focusInput();
                    this.dataSource.off('changed', onChanged);
                };
                this.dataSource.on('changed', onChanged);
                this.dataSource.load().catch(() => {});
            }
        }, this.searchTimeout);
    }

##### Vue

    function onInput(e: DxDropDownBoxTypes.InputEvent): void {
        if (searchTimer.value) clearTimeout(searchTimer.value);
        searchTimer.value = setTimeout(() => {
            if (!gridBoxOpened.value) gridBoxOpened.value = true;
            const text = e.component.option('text');
            props.dataSource.searchValue(text ?? null);
            if (isSearchIncomplete(e.component)) {
                const onChanged = (): void => {
                    const items = props.dataSource.items();
                    if (items.length > 0) {
                        focusedRowKey.value = items[0].OrderNumber;
                    }
                    dropDownBoxRef.value?.instance?.focus();
                    props.dataSource.off('changed', onChanged);
                };
                props.dataSource.on('changed', onChanged);
                props.dataSource.load().catch(() => {});
            }
        }, props.searchTimeout);
    }

##### React

    const onInput = useCallback((e: DropDownBoxTypes.InputEvent) => {
        if (searchTimer.current) clearTimeout(searchTimer.current);
        searchTimer.current = setTimeout(() => {
            if (!gridBoxOpened) setGridBoxOpened(true);
            const text = e.component.option('text');
            dataSource.searchValue(text ?? null);
            if (isSearchIncomplete(e.component)) {
                dataSource.on('changed', onChanged);
                dataSource.load().catch(() => {});
            }
        }, searchTimeout);
    }, [dataSource, gridBoxOpened, searchTimeout]);

##### ASP.NET Core Controls

    function onInput(e) {
        clearTimeout(searchTimerId);
        searchTimerId = setTimeout(() => {
            const dropDownBox = e.component;
            if (!dropDownBox.option('opened')) dropDownBox.open();
            performSearch({
                dropDownBox,
                dataSource: getGridDataSource(),
                grid: dataGridInstance,
            });
        }, searchTimeout);
    }

---

In TreeList, since the lookup column is used, the lookup datasource is queried first to resolve matching IDs, which are then assembled into a filter expression applied to the main DataSource:

---
##### jQuery

    onInput(e) {
        clearTimeout(searchTimerId);
        const instance = e.component;
        if (!instance.option('opened')) instance.open();
        searchTimerId = performSearch({
            e, lookupDataSource, dataSource, searchTimeout, searchExprVal,
        });
    }

##### Angular

    onInput(e: DxDropDownBoxTypes.InputEvent): void {
        if (this.searchTimerId) clearTimeout(this.searchTimerId);
        const instance = e.component;
        if (!this.dropDownBoxOpened) this.dropDownBoxOpened = true;
        if (this.service.isSearchIncomplete(instance)) {
            const text = instance.option('text');
            if (text) {
                this.searchTimerId = setTimeout(() => {
                    this.service.applySearchFilter(
                        text, this.searchExprValue, this.dataSource
                    );
                }, this.searchTimeout);
            } else {
                this.dataSource.filter(null);
            }
            this.focusInput();
        }
    }

##### Vue

    function onInput(e: DxDropDownBoxTypes.InputEvent): void {
        if (searchTimerId) clearTimeout(searchTimerId);
        const instance = e.component;
        if (!dropDownBoxOpened.value) dropDownBoxOpened.value = true;
        if (isSearchIncomplete(instance)) {
            const text = instance.option('text');
            if (text) {
                searchTimerId = setTimeout(() => {
                    applySearchFilter(text, props.searchExprValue, props.dataSource);
                }, searchTimeoutValue.value);
            } else {
                props.dataSource.filter(null);
            }
            focusInput();
        }
    }

##### React

    const onInput = useCallback((e: DropDownBoxTypes.InputEvent): void => {
        if (searchTimerIdRef.current) clearTimeout(searchTimerIdRef.current);
        const instance = e.component;
        if (!dropDownBoxOpened) setDropDownBoxOpened(true);
        if (isSearchIncomplete(instance)) {
            const text = instance.option('text');
            if (text) {
                searchTimerIdRef.current = setTimeout(() => {
                    applySearchFilter(text, searchExprValue, dataSource);
                }, searchTimeout);
            } else {
                dataSource.filter(null);
            }
            focusInput();
        }
    }, [searchTimerIdRef, dropDownBoxOpened, searchExprValue, dataSource, searchTimeout]);

---
The `applySearchFilter` function (called inside `performSearch`):

    function applySearchFilter({ text, lookupField, dataField, searchExprVal, lookupDataSource, dataSource }) {
        // Step 1: find employees whose Name contains the typed text
        lookupDataSource.load({ filter: [lookupField, 'contains', text] }).done((items) => {
            const filterParts = [];

            // Step 2: optionally also search in a non-lookup field (e.g., Task_Subject)
            if (Array.isArray(searchExprVal)) {
                filterParts.push([searchExprVal[1], 'contains', text]);
            }

            // Step 3: add an OR condition for each matched employee ID
            items.forEach((item, index) => {
                if (filterParts.length > 0 || index > 0) filterParts.push('or');
                filterParts.push([dataField, '=', item.ID]);
            });

            // Step 4: apply the filter (use a "no-results" filter if nothing matched)
            const filterExpr = filterParts.length > 0 ? filterParts : [dataField, '=', -1];
            dataSource.filter(filterExpr);
            dataSource.load();
        });
    }

The `searchValue` / `searchExpr` work on the fields stored in the dataset. When a column is a lookup (the displayed value comes from a related table), the main dataset only contains the raw ID. There is no built-in way to search by the resolved display text — so the lookup must be queried separately and its results converted to an ID-based filter.

### isSearchIncomplete

The `isSearchIncomplete` function returns `true` if the user has changed the input text and a new search needs to be applied (i.e., `text` differs from the current `displayValue`):

    function isSearchIncomplete(dropDownBox) {
        let displayValue = dropDownBox.option('displayValue');
        let text = dropDownBox.option('text') || '';
        displayValue = displayValue && displayValue.length && displayValue[0];
        return text !== displayValue;
    }

### onOpened

The onOpened handler is called each time the drop-down popup opens. Its responsibilities are:

- Move focus into the inner widget when opened
- Clear the inner widget's selection when the DropDownBox input value has been reset

Both implementations share the same logic structure. The following example shows the DataGrid implementation:

---
##### jQuery

    function onOpened(e) {
        const dropDownBox = e.component;
        const gridFirstLoadCompleted = dropDownBox.option('gridFirstLoadCompleted');

        const handleOptionChanged = (args) => {
            const grid = args.component;
            const triggerCondition = gridFirstLoadCompleted
                ? args.name === 'opened'
                : args.name === 'focusedRowKey' || args.name === 'focusedRowIndex';

            if (triggerCondition) {
                grid.off('optionChanged', handleOptionChanged);
                requestAnimationFrame(() => {
                    grid.focus();
                    if (gridFirstLoadCompleted) grid.option('opened', false);
                });
            }
        };

        dataGridInstance.on('optionChanged', handleOptionChanged);

        if (gridFirstLoadCompleted) {
            dataGridInstance.option('opened', true);
        }

        const isTextEqualToDisplayValue =
            dropDownBox.option('text') === dropDownBox.option('displayValue')[0];
        const shouldClearSelection =
            (dropDownBox.option('value') && !dropDownBox.option('text')) ||
            !isTextEqualToDisplayValue;

        if (shouldClearSelection && dataGridInstance.option('selectedRowKeys').length) {
            dataGridInstance.option('resetSelection', true);
            dataGridInstance.option('selectedRowKeys', []);
        }
    }

##### Angular

    onOpened(e: DxDropDownBoxTypes.OpenedEvent): void {
        const gridFirstLoadCompleted = this.gridFirstLoadCompleted;
        const dropDownBox = e.component;

        const handleOptionChanged = (args: DxDataGridTypes.OptionChangedEvent): void => {
            const grid = args.component;
            const triggerCondition = gridFirstLoadCompleted
                ? args.name === 'opened'
                : args.name === 'focusedRowKey' || args.name === 'focusedRowIndex';

            if (triggerCondition) {
                grid.off('optionChanged', handleOptionChanged);
                requestAnimationFrame(() => {
                    grid.focus();
                    grid.option('opened', false);
                });
            }
        };

        this.dataGrid.instance.on('optionChanged', handleOptionChanged);

        if (gridFirstLoadCompleted) {
            this.dataGrid.instance.option('opened', true);
        }

        const displayValue = dropDownBox.option('displayValue') as string[];
        const isTextEqualToDisplayValue = dropDownBox.option('text') === displayValue[0];
        const shouldClearSelection =
            (dropDownBox.option('value') && !dropDownBox.option('text')) ||
            !isTextEqualToDisplayValue;

        if (shouldClearSelection && this.selectedRowKeys?.length) {
            this.resetSelection = true;
            this.selectedRowKeys = [];
        }
    }

##### Vue

    function onOpened(e: DxDropDownBoxTypes.OpenedEvent): void {
        const _gridFirstLoadCompleted = gridFirstLoadCompleted.value;
        const dropDownBox = e.component;

        function handleOptionChanged(args: DxDataGridTypes.OptionChangedEvent): void {
            const grid = args.component;
            const triggerCondition = _gridFirstLoadCompleted
                ? args.name === 'opened'
                : args.name === 'focusedRowKey' || args.name === 'focusedRowIndex';

            if (triggerCondition) {
                grid.off('optionChanged', handleOptionChanged);
                requestAnimationFrame(() => {
                    grid.focus();
                    grid.option('opened', false);
                });
            }
        }

        dataGridRef.value?.instance?.on('optionChanged', handleOptionChanged);

        if (gridFirstLoadCompleted.value) {
            dataGridRef.value?.instance?.option('opened', true);
        }

        const { text, value } = dropDownBox.option();
        const displayValue = dropDownBox.option('displayValue') as string[];
        const shouldClearSelection = (value && !text) || text !== displayValue[0];

        if (shouldClearSelection && selectedRowKeys.value?.length) {
            selectedRowKeys.value = [];
        }
    }

##### React

    const onOpened = useCallback((e: DropDownBoxTypes.OpenedEvent) => {
        const isFirstLoadComplete = gridFirstLoadCompleted.current;
        const dropDownBox = e.component;

        function handleOptionChanged(args: DataGridTypes.OptionChangedEvent): void {
            const grid = args.component;
            const triggerCondition = isFirstLoadComplete
                ? args.name === 'opened'
                : args.name === 'focusedRowKey' || args.name === 'focusedRowIndex';

            if (triggerCondition) {
                grid.off('optionChanged', handleOptionChanged);
                requestAnimationFrame(() => {
                    grid.focus();
                    grid.option('opened', false);
                });
            }
        }

        dataGridRef.current?.instance().on('optionChanged', handleOptionChanged);

        if (gridFirstLoadCompleted.current) {
            dataGridRef.current?.instance().option('opened', true);
        }

        const displayValue = dropDownBox.option('displayValue') as string[];
        const shouldClearSelection =
            (dropDownBox.option('value') && !dropDownBox.option('text')) ||
            dropDownBox.option('text') !== displayValue[0];

        if (shouldClearSelection && selection.selectedRowKeys?.length) {
            dispatch({ type: 'RESET' });
        }
    }, []);

##### ASP.NET Core Controls

    function onOpened(e) {
        const dropDownBox = e.component;
        const gridFirstLoadCompleted = dropDownBox.option('gridFirstLoadCompleted');

        const handleOptionChanged = (args) => {
            const grid = args.component;
            const triggerCondition = gridFirstLoadCompleted
                ? args.name === 'opened'
                : args.name === 'focusedRowKey' || args.name === 'focusedRowIndex';

            if (triggerCondition) {
                grid.off('optionChanged', handleOptionChanged);
                requestAnimationFrame(() => {
                    grid.focus();
                    if (gridFirstLoadCompleted) grid.option('opened', false);
                });
            }
        };

        dataGridInstance.on('optionChanged', handleOptionChanged);

        if (gridFirstLoadCompleted) {
            dataGridInstance.option('opened', true);
        }

        const isTextEqualToDisplayValue =
            dropDownBox.option('text') === dropDownBox.option('displayValue')[0];
        const shouldClearSelection =
            (dropDownBox.option('value') && !dropDownBox.option('text')) ||
            !isTextEqualToDisplayValue;

        if (shouldClearSelection && dataGridInstance.option('selectedRowKeys').length) {
            dataGridInstance.option('resetSelection', true);
            dataGridInstance.option('selectedRowKeys', []);
        }
    }

---

Why `requestAnimationFrame`? The `onOpened` event fires when the popup starts opening, but the animation may not be complete yet. Calling `.focus()` before the popup is fully visible can cause the browser to scroll unexpectedly or silently fail. `requestAnimationFrame` defers execution to the next paint frame, by which time the popup is fully visible and its content is rendered.

### onClosed

The onClosed handler fires when the drop-down popup closes — whether a user selected a value, pressed Escape, clicked outside, or simply dismissed it without confirming. Its job is to restore the DropDownBox and the inner widget to a consistent state when the popup closes without a confirmed selection.

The core check in both implementations compares `text` (what is currently visible in the input) against `displayValue` (the formatted representation of the currently selected value). If they differ, it means the user typed something that did not result in a confirmed selection — either no match was found, or the user dismissed the popup mid-search:

---
##### jQuery

    function onClosed(e) {
        const dropDownBox = e.component;
        const hasLoadedItems = dataGridInstance.getVisibleRows().length;
        const text = dropDownBox.option('text');
        const displayValue = (dropDownBox.option('displayValue') || [])[0];

        if (!hasLoadedItems) {
            dropDownBox.reset(null);
            dataSource.searchValue('');
            dataSource.load();
            return;
        }
        if (text && text !== displayValue) {
            const firstKey = dataGridInstance.getKeyByRowIndex(0);
            dataGridInstance.selectRows(firstKey);
            dataGridInstance.option('focusedRowKey', firstKey);
        }
    }

##### Angular

    onClosed(e: DxDropDownBoxTypes.ClosedEvent): void {
        const dropDownBox = e.component;
        const hasLoadedItems = this.dataGrid.instance.getVisibleRows().length;
        const text = dropDownBox.option('text');
        const displayValue = dropDownBox.option('displayValue') as string[];

        if (!hasLoadedItems) {
            dropDownBox.reset('');
            this.dataSource.searchValue('');
            this.dataSource.load().catch(() => {});
            return;
        }
        if (text && text !== displayValue[0]) {
            const firstKey = this.dataGrid.instance.getKeyByRowIndex(0);
            this.selectedRowKeys = [firstKey];
            this.focusedRowKey = firstKey;
        }
    }

##### Vue

    function onClosed(e: DxDropDownBoxTypes.ClosedEvent): void {
        const dropDownBox = e.component;
        const hasLoadedItems = dataGridRef.value?.instance?.getVisibleRows().length;
        const text = dropDownBox.option('text');
        const displayValue = dropDownBox.option('displayValue') as string[];

        if (!hasLoadedItems) {
            dropDownBox.reset('');
            props.dataSource.searchValue('');
            props.dataSource.load().catch(() => {});
            return;
        }
        if (text && text !== displayValue[0]) {
            const firstKey = dataGridRef.value?.instance?.getKeyByRowIndex(0);
            dropDownValue.value = firstKey ?? null;
            selectedRowKeys.value = firstKey ? [firstKey] : [];
            focusedRowKey.value = firstKey ?? null;
        }
    }

##### React

    const onClosed = useCallback((e: DropDownBoxTypes.ClosedEvent) => {
        const dropDownBox = e.component;
        const hasLoadedItems = dataGridRef.current?.instance().getVisibleRows().length;
        const text = dropDownBox.option('text');
        const displayValue = dropDownBox.option('displayValue') as string[];

        if (!hasLoadedItems) {
            dropDownBox.reset('');
            dataSource.searchValue('');
            dataSource.load().catch(() => {});
            return;
        }
        if (text && text !== displayValue[0]) {
            const firstKey = dataGridRef.current?.instance().getKeyByRowIndex(0);
            dispatch({ type: 'SELECT_VALUE', value: firstKey });
        }
    }, [dataSource]);

##### ASP.NET Core Controls

    function onClosed(e) {
        const dropDownBox = e.component;
        const hasLoadedItems = dataGridInstance.getVisibleRows().length;
        const text = dropDownBox.option('text');
        const displayValue = (dropDownBox.option('displayValue') || [])[0];

        if (!hasLoadedItems) {
            dropDownBox.reset(null);
            dataSource.searchValue('');
            dataSource.load();
            return;
        }
        if (text && text !== displayValue) {
            const firstKey = dataGridInstance.getKeyByRowIndex(0);
            dataGridInstance.selectRows(firstKey);
            dataGridInstance.option('focusedRowKey', firstKey);
        }
    }

---


[note] This approach supports single selection only. To implement multiple selection, use the [TagBox](/api-reference/10%20UI%20Components/dxTagBox '/Documentation/ApiReference/UI_Components/dxTagBox/') component instead.


## Summary: Search Implementation Depends on Whether You Search a Lookup Column

<table class="dx-table">
    <tr>
        <th>Aspect</th>
        <th>Search by regular field (no lookup column involved)</th>
        <th>Search by lookup column display value (lookup involved)</th>
    </tr>
    <tr>
        <td>Typical component</td>
        <td>DataGrid / TreeList</td>
        <td>DataGrid / TreeList</td>
    </tr>
    <tr>
        <td>What user types</td>
        <td>Text that exists in the main dataset (same record).</td>
        <td>Text that exists in the main dataset or/and text that exists in a related dataset (lookup display value)</td>
    </tr>
    <tr>
        <td>Main API used for search</td>
        <td><a href="https://js.devexpress.com/jQuery/Documentation/ApiReference/Data_Layer/DataSource/Methods/#searchValuevalue">DataSource.searchValue(value)</a></td>
        <td><a href="https://js.devexpress.com/jQuery/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr">DataSource.filter(filterExpr)</a></td>
    </tr>
    <tr>
        <td>Search fields configuration</td>
        <td><a href="https://js.devexpress.com/jQuery/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr">searchExpr</a> specifies the field(s) to search</td>
        <td><code>searchExpr</code> is not enough for lookup display text; you must build an ID-based filter</td>
    </tr>
    <tr>
        <td>Extra datasource required</td>
        <td>No</td>
        <td>Yes (lookup datasource / store to resolve typed text → matching IDs)</td>
    </tr>
    <tr>
        <td>Filtering logic</td>
        <td>The DataSource performs searching internally using <code>searchExpr</code> + <code>searchValue</code></td>
        <td>You query the lookup datasource by display field (for example, <code>Name contains text</code>), map results to keys, then build an <code>OR</code> filter like <code>[EmployeeID, '=', 1] or [EmployeeID, '=', 5]</code></td>
    </tr>
    <tr>
        <td>Reset search on close</td>
        <td><code>dataSource.searchValue('')</code></td>
        <td><code>dataSource.filter(null)</code></td>
    </tr>
</table>



## See Also

- [DropDownBox — Configuration](https://js.devexpress.com/jQuery/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/)
- [DropDownBox — `onInput`](https://js.devexpress.com/jQuery/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#onInput)
- [DataSource — `searchValue`](https://js.devexpress.com/jQuery/Documentation/ApiReference/Data_Layer/DataSource/Methods/#searchValuevalue)
- [DataSource — `searchExpr`](https://js.devexpress.com/jQuery/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr)
- [DataSource — `filter`](https://js.devexpress.com/jQuery/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr)
- [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [DropDownBox with embedded DataGrid — Example](https://github.com/DevExpress-Examples/devextreme-dropdownbox-filter-data-in-nested-widget)
- [DropDownBox with embedded TreeList — Example](https://github.com/DevExpress-Examples/devextreme-dropdownbox-implement-search-for-treelist)
