This topic covers search by a lookup column display value in a [DropDownBox](/api-reference/10%20UI%20Components/dxDropDownBox '/Documentation/ApiReference/UI_Components/dxDropDownBox/') with an embedded [TreeList](/api-reference/10%20UI%20Components/dxTreeList '/Documentation/ApiReference/UI_Components/dxTreeList/'). Because the search target is a display value from a related dataset, the approach resolves the typed text to matching IDs via the lookup data source, then applies a [`DataSource.filter`](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr') on the main data source.

[note] This example demonstrates search when the TreeList uses a lookup column and you want the DropDownBox search to work by the lookup display value (for example, employee name), not by the stored key. If you do not need a lookup column, see [Search by Regular Field (DataGrid)](/concepts/05%20UI%20Components/DropDownBox/20%20Search%20in%20Embedded%20Components/05%20Search%20by%20Regular%20Field%20(DataGrid).md '/Documentation/Guide/UI_Components/DropDownBox/Search_in_Embedded_Components/Search_by_Regular_Field_(DataGrid)/').

### 1) Configure DropDownBox to Accept User Input

To allow typing and handle user input:

- Enable [`acceptCustomValue`](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/acceptCustomValue.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#acceptCustomValue').
- Set [`valueChangeEvent`](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/valueChangeEvent.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#valueChangeEvent') to an empty string.

---
##### jQuery

    <!-- tab: index.js -->
    $('#treeBox').dxDropDownBox({
        acceptCustomValue: true,
        valueChangeEvent: '',
        openOnFieldClick: false,
        // ...
    });

##### Angular

    <!-- tab: drop-down-list.component.html -->
    <dx-drop-down-box
        [acceptCustomValue]="true"
        valueChangeEvent=""
        [openOnFieldClick]="false"
        ...
    >
    </dx-drop-down-box>

##### Vue

    <!-- tab: DropDownList.vue -->
    <DxDropDownBox
        :accept-custom-value="true"
        value-change-event=""
        :open-on-field-click="false"
        ...
    />

##### React

    <!-- tab: DropDownList.tsx -->
    <DropDownBox
        acceptCustomValue={true}
        valueChangeEvent=""
        openOnFieldClick={false}
        ...
    />

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DropDownBox()
        .AcceptCustomValue(true)
        .ValueChangeEvent("")
        .OpenOnFieldClick(false)
        // ...
    )

---

### 2) Create the Main `DataSource` for TreeList

TreeList search in this scenario uses [`DataSource.filter`](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr') instead of `searchValue`, because the typed text must first be resolved to IDs via the lookup data source.

---
##### jQuery

    <!-- tab: index.js -->
    const dataSource = new DevExpress.data.DataSource({
        store: makeAsyncDataSource('Task_ID', `${url}/Tasks`),
    });

##### Angular

    <!-- tab: app.component.ts -->
    this.dataSource = new DataSource({
        store: AspNetData.createStore({
            key: 'Task_ID',
            loadUrl: `${url}/Tasks`,
        }),
    });

##### Vue

    <!-- tab: DropDownList.vue -->
    const dataSource = new DataSource({
        store: AspNetData.createStore({
            key: 'Task_ID',
            loadUrl: `${url}/Tasks`,
        }),
    });

##### React

    <!-- tab: DropDownList.tsx -->
    const dataSource = new DataSource({
        store: AspNetData.createStore({
            key: 'Task_ID',
            loadUrl: `${url}/Tasks`,
        }),
    });

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().TreeList()
        .DataSource(d => d.Mvc()
            .Controller("SampleData")
            .LoadAction("GetTasks")
            .Key("Task_ID")
        )
        // ...
    )

---

### 3) Configure `displayExpr`

Use [`displayExpr`](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#displayExpr') to define how a selected item appears in the input field.

Because the displayed text depends on lookup data (employee name from a related dataset), pre-load that data and resolve it in `displayExpr`:

---
##### jQuery

    <!-- tab: index.js -->
    let lookupItems = [];
    const lookupDataSource = makeAsyncDataSource('ID', `${url}/TaskEmployees`);

    lookupDataSource.load().then((items) => {
        lookupItems = items;
        $('#treeBox').dxDropDownBox('instance')?.repaint();
    });

    function displayExpr(item) {
        if (!lookupItems || !lookupItems.length) return 'Loading...';
        if (!item) return '';
        const employeeData = lookupItems.find(
            (employee) => employee.ID === item.Task_Assigned_Employee_ID,
        );
        if (!employeeData) return item.Task_Subject || '';
        return `${employeeData.Name}: ${item.Task_Subject} (${item.Task_Status})`;
    }

##### Angular

    <!-- tab: app.service.ts -->
    getDisplayExpr(item: Task, lookupItems: Employee[]): string {
        if (!lookupItems?.length) return 'Loading...';
        if (!item) return '';
        const employee = lookupItems.find(e => e.ID === item.Task_Assigned_Employee_ID);
        if (!employee) return item.Task_Subject || '';
        return `${employee.Name}: ${item.Task_Subject} (${item.Task_Status})`;
    }

    <!-- tab: app.component.ts -->
    (this.service.lookupStore.load() as Promise<Employee[]>).then((items) => {
        this.displayExpr = (item: Task): string =>
            this.service.getDisplayExpr(item, items);
    });

##### Vue

    <!-- tab: DropDownList.vue -->
    const lookupItems = ref<Employee[]>([]);

    onMounted(() => {
        lookupStore.load().then((items: Employee[]) => {
            lookupItems.value = items;
            dropDownBoxRef.value?.instance?.repaint();
        });
    });

    function displayExpr(item: Task): string {
        if (!lookupItems.value.length) return 'Loading...';
        if (!item) return '';
        const employee = lookupItems.value.find(
            (e) => e.ID === item.Task_Assigned_Employee_ID
        );
        if (!employee) return item.Task_Subject || '';
        return `${employee.Name}: ${item.Task_Subject} (${item.Task_Status})`;
    }

##### React

    <!-- tab: DropDownList.tsx -->
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

##### ASP.NET Core Controls

    function displayExpr(item) {
        if (!lookupItems || !lookupItems.length) return 'Loading...';
        if (!item) return '';
        const employeeData = lookupItems.find(
            (employee) => employee.ID === item.Task_Assigned_Employee_ID,
        );
        if (!employeeData) return item.Task_Subject || '';
        return `${employeeData.Name}: ${item.Task_Subject} (${item.Task_Status})`;
    }

---

### 4) Configure the Embedded TreeList in `contentTemplate`

Use DropDownBox [`contentTemplate`](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#contentTemplate') to render the TreeList. Enable [`focusedRowEnabled`](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/focusedRowEnabled.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#focusedRowEnabled') and set single [`selection.mode`](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/selection/mode.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/selection/#mode').

---
##### jQuery

    <!-- tab: index.js -->
    contentTemplate(templateData, container) {
        const dropDownInstance = templateData.component;
        const value = dropDownInstance.option('value');
        const treeListContainer = $('<div>').dxTreeList({
            dataSource,
            hasItemsExpr: 'Has_Items',
            remoteOperations: { filtering: true, sorting: true, grouping: true },
            parentIdExpr: 'Task_Parent_ID',
            columnAutoWidth: true,
            wordWrapEnabled: true,
            showBorders: true,
            height: 400,
            width: '100%',
            focusedRowEnabled: true,
            selection: { mode: 'single' },
            scrolling: { mode: 'virtual' },
            selectedRowKeys: [value],
            focusedRowKey: value,
            onContentReady: () => {
                if (!dropDownInstance.option('listFirstLoadCompleted')) {
                    dropDownInstance.option('listFirstLoadCompleted', true);
                }
            },
            onSelectionChanged(args) {
                const { resetSelection } = args.component.option();
                if (!resetSelection) {
                    const keys = args.selectedRowKeys;
                    dropDownInstance.option('value', keys.length ? keys[0] : null);
                    dropDownInstance.focus();
                }
                args.component.option('resetSelection', false);
            },
            columns: [
                { dataField: 'Task_ID' },
                {
                    dataField: 'Task_Assigned_Employee_ID',
                    caption: 'Employee',
                    minWidth: 120,
                    lookup: { dataSource: lookupDataSource, valueExpr: 'ID', displayExpr: 'Name' },
                },
                { dataField: 'Task_Subject', width: 300 },
                { dataField: 'Task_Start_Date', caption: 'Start Date', dataType: 'date' },
                { dataField: 'Task_Status', caption: 'Status' },
                { dataField: 'Task_Due_Date', caption: 'Due Date', dataType: 'date' },
            ],
        });
        container.append(treeListContainer);
        treeList = treeListContainer.dxTreeList('instance');
        return container;
    },

##### Angular

    <!-- tab: drop-down-list.component.html -->
    <div *dxTemplate="let data of 'content'">
        <dx-tree-list
            #treeListRef
            [dataSource]="dataSource"
            hasItemsExpr="Has_Items"
            parentIdExpr="Task_Parent_ID"
            [columnAutoWidth]="true"
            [wordWrapEnabled]="true"
            [showBorders]="true"
            [height]="400"
            [width]="'100%'"
            [focusedRowEnabled]="true"
            [(focusedRowKey)]="focusedRowKey"
            [(selectedRowKeys)]="selectedRowKeys"
            (onContentReady)="treeListOnContentReady($event)"
            (onKeyDown)="treeListOnKeyDown($event)"
            (onSelectionChanged)="onSelectionChanged($event)"
        >
            <dxo-tree-list-remote-operations
                [filtering]="true" [sorting]="true" [grouping]="true">
            </dxo-tree-list-remote-operations>
            <dxo-tree-list-selection mode="single"></dxo-tree-list-selection>
            <dxo-tree-list-scrolling mode="virtual"></dxo-tree-list-scrolling>
            <dxi-tree-list-column dataField="Task_ID"></dxi-tree-list-column>
            <dxi-tree-list-column
                dataField="Task_Assigned_Employee_ID"
                caption="Employee"
                [minWidth]="120"
            >
                <dxo-tree-list-lookup
                    [dataSource]="service.lookupStore"
                    valueExpr="ID"
                    displayExpr="Name"
                ></dxo-tree-list-lookup>
            </dxi-tree-list-column>
            <dxi-tree-list-column dataField="Task_Subject" [width]="300"></dxi-tree-list-column>
            <dxi-tree-list-column dataField="Task_Start_Date" caption="Start Date" dataType="date"></dxi-tree-list-column>
            <dxi-tree-list-column dataField="Task_Status" caption="Status"></dxi-tree-list-column>
            <dxi-tree-list-column dataField="Task_Due_Date" caption="Due Date" dataType="date"></dxi-tree-list-column>
        </dx-tree-list>
    </div>

##### Vue

    <!-- tab: DropDownList.vue -->
    <template #content>
        <DxTreeList
            ref="treeListRef"
            :data-source="dataSource"
            has-items-expr="Has_Items"
            parent-id-expr="Task_Parent_ID"
            :column-auto-width="true"
            :word-wrap-enabled="true"
            :show-borders="true"
            :height="400"
            width="100%"
            :focused-row-enabled="true"
            v-model:focused-row-key="focusedRowKey"
            v-model:selected-row-keys="selectedRowKeys"
            @content-ready="treeListOnContentReady"
            @key-down="treeListOnKeyDown"
            @selection-changed="onSelectionChanged"
        >
            <DxRemoteOperations :filtering="true" :sorting="true" :grouping="true" />
            <DxSelection mode="single" />
            <DxScrolling mode="virtual" />
            <DxColumn data-field="Task_ID" />
            <DxColumn data-field="Task_Assigned_Employee_ID" caption="Employee" :min-width="120">
                <DxLookup :data-source="lookupStore" value-expr="ID" display-expr="Name" />
            </DxColumn>
            <DxColumn data-field="Task_Subject" :width="300" />
            <DxColumn data-field="Task_Start_Date" caption="Start Date" data-type="date" />
            <DxColumn data-field="Task_Status" caption="Status" />
            <DxColumn data-field="Task_Due_Date" caption="Due Date" data-type="date" />
        </DxTreeList>
    </template>

##### React

    <!-- tab: DropDownList.tsx -->
    <TreeList
        ref={treeListRef}
        dataSource={dataSource}
        hasItemsExpr="Has_Items"
        parentIdExpr="Task_Parent_ID"
        columnAutoWidth
        wordWrapEnabled
        showBorders
        height={400}
        width="100%"
        focusedRowEnabled
        focusedRowKey={selection.focusedRowKey}
        selectedRowKeys={selection.selectedRowKeys}
        onContentReady={treeListOnContentReady}
        onKeyDown={treeListOnKeyDown}
        onFocusedRowChanged={onFocusedRowChanged}
        onSelectionChanged={onSelectionChanged}
    >
        <RemoteOperations filtering sorting grouping />
        <Selection mode="single" />
        <Scrolling mode="virtual" />
        <Column dataField="Task_ID" />
        <Column dataField="Task_Assigned_Employee_ID" caption="Employee" minWidth={120}>
            <Lookup dataSource={lookupStore} valueExpr="ID" displayExpr="Name" />
        </Column>
        <Column dataField="Task_Subject" width={300} />
        <Column dataField="Task_Start_Date" caption="Start Date" dataType="date" />
        <Column dataField="Task_Status" caption="Status" />
        <Column dataField="Task_Due_Date" caption="Due Date" dataType="date" />
    </TreeList>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().TreeList()
        .DataSource(d => d.Mvc().Controller("SampleData").LoadAction("GetTasks").Key("Task_ID"))
        .ParentIdExpr("Task_Parent_ID")
        .HasItemsExpr("Has_Items")
        .RemoteOperations(r => r.Filtering(true).Sorting(true).Grouping(true))
        .ColumnAutoWidth(true)
        .WordWrapEnabled(true)
        .ShowBorders(true)
        .Height(400)
        .Width("100%")
        .FocusedRowEnabled(true)
        .FocusedRowKey(new JS("component.option('value')"))
        .Selection(s => s.Mode(SelectionMode.Single))
        .SelectedRowKeys(new JS("[component.option('value')]"))
        .Scrolling(s => s.Mode(TreeListScrollingMode.Virtual))
        .Columns(c => {
            c.Add().DataField("Task_ID");
            c.Add().DataField("Task_Assigned_Employee_ID").Caption("Employee").MinWidth(120)
                .Lookup(l => l.DataSource(ds => ds.Mvc().Controller("SampleData").LoadAction("GetEmployees"))
                    .ValueExpr("ID").DisplayExpr("Name"));
            c.Add().DataField("Task_Subject").Width(300);
            c.Add().DataField("Task_Start_Date").Caption("Start Date").DataType(GridColumnDataType.Date);
            c.Add().DataField("Task_Status").Caption("Status");
            c.Add().DataField("Task_Due_Date").Caption("Due Date").DataType(GridColumnDataType.Date);
        })
        .OnContentReady("treeListOnContentReady")
        .OnFocusedRowChanged("treeListOnFocusedRowChanged")
        .OnKeyDown("treeListOnKeyDown")
        .OnSelectionChanged("treeListOnSelectionChanged")
        .OnInitialized("treeListOnInitialized")
    )

---

### 5) Implement Search in `onInput`

Use DropDownBox [`onInput`](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/onInput.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#onInput') to open the dropdown and trigger the search. Because the search targets a lookup column display value, the typed text must first be resolved to matching IDs via the lookup data source, then applied as a [`DataSource.filter`](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr') on the main data source:

    function applySearchFilter(text, lookupField, dataField, searchExprVal, lookupDataSource, dataSource) {
        // Step 1: find employees whose Name contains the typed text
        lookupDataSource.load({ filter: [lookupField, 'contains', text] }).done((items) => {
            const filterParts = [];

            // Step 2: optionally also search in a non-lookup field (for example, Task_Subject)
            if (Array.isArray(searchExprVal)) {
                filterParts.push([searchExprVal[1], 'contains', text]);
            }

            // Step 3: add an OR condition for each matched employee ID
            items.forEach((item, index) => {
                if (filterParts.length > 0 || index > 0) filterParts.push('or');
                filterParts.push([dataField, '=', item.ID]);
            });

            // Step 4: apply the filter (use a "no-results" sentinel if nothing matched)
            const filterExpr = filterParts.length > 0 ? filterParts : [dataField, '=', -1];
            dataSource.filter(filterExpr);
            dataSource.load();
        });
    }

---
##### jQuery

    <!-- tab: index.js -->
    onInput(e) {
        clearTimeout(searchTimerId);
        const instance = e.component;
        if (!instance.option('opened')) instance.open();
        searchTimerId = performSearch({
            e, lookupDataSource, dataSource, searchTimeout, searchExprVal,
        });
    },

##### Angular

    <!-- tab: drop-down-list.component.ts -->
    onInput(e: DxDropDownBoxTypes.InputEvent): void {
        if (this.searchTimerId) clearTimeout(this.searchTimerId);
        const instance = e.component;
        if (!this.dropDownBoxOpened) this.dropDownBoxOpened = true;
        if (this.service.isSearchIncomplete(instance)) {
            const text = instance.option('text');
            if (text) {
                this.searchTimerId = setTimeout(() => {
                    this.service.applySearchFilter(text, this.searchExprValue, this.dataSource);
                }, this.searchTimeout);
            } else {
                this.dataSource.filter(null);
            }
            this.focusInput();
        }
    }

##### Vue

    <!-- tab: DropDownList.vue -->
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

    <!-- tab: DropDownList.tsx -->
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

##### ASP.NET Core Controls

    function dropDownBoxOnInput(e) {
        clearTimeout(searchTimerId);
        const instance = e.component;
        if (!instance.option('opened')) instance.open();
        const dataSource = treeList.getDataSource();
        searchTimerId = performSearch(e, dataSource);
    }

---

### 6) Detect Whether the User Is Searching (`isSearchIncomplete`)

The `isSearchIncomplete` function returns `true` if the user has changed the input text and a new search must be applied (that is, `text` differs from the current `displayValue`):

    function isSearchIncomplete(dropDownBox) {
        let displayValue = dropDownBox.option('displayValue');
        let text = dropDownBox.option('text') || '';
        displayValue = displayValue && displayValue.length && displayValue[0];
        return text !== displayValue;
    }

### 7) Focus Management in `onOpened`

When the popup opens, move focus into the TreeList. Use DropDownBox [`onOpened`](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/onOpened.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#onOpened').

The example implementation waits until the TreeList is ready (first open) or until the popup animation completes (subsequent opens), then calls `list.focus()`. It also clears the TreeList selection when the input text no longer matches the selected value.

---
##### jQuery

    <!-- tab: index.js -->
    function onOpened(e) {
        const dropDownBox = e.component;
        const listFirstLoadCompleted = dropDownBox.option('listFirstLoadCompleted');
        const handleOptionChanged = (args) => {
            const list = args.component;
            const triggerCondition = listFirstLoadCompleted
                ? args.name === 'opened'
                : args.name === 'focusedRowKey' || args.name === 'focusedColumnIndex';
            if (triggerCondition) {
                list.off('optionChanged', handleOptionChanged);
                requestAnimationFrame(() => {
                    list.focus();
                    if (listFirstLoadCompleted) list.option('opened', false);
                });
            }
        };
        treeList.on('optionChanged', handleOptionChanged);
        if (listFirstLoadCompleted) {
            treeList.option('opened', true);
        }
        const { text, value } = dropDownBox.option();
        const isTextEqualToDisplayValue = text === dropDownBox.option('displayValue')[0];
        const shouldClearSelection = (value && !text) || !isTextEqualToDisplayValue;
        if (shouldClearSelection && treeList.option('selectedRowKeys').length) {
            treeList.option('resetSelection', true);
            treeList.selectRows([]);
            treeList.pageIndex(0).then(() => {
                treeList.option('focusedRowIndex', 0);
                treeList.option('focusedRowKey', firstRowKey);
            });
        }
    }

##### Angular

    <!-- tab: drop-down-list.component.ts -->
    onOpened(e: DxDropDownBoxTypes.OpenedEvent): void {
        const treeListInstance = this.treeListRef?.instance;
        const dropDownBox = e.component;
        const handleOptionChanged = (args: DxTreeListTypes.OptionChangedEvent): void => {
            const list = args.component;
            const triggerCondition = this.listFirstLoadCompleted
                ? args.name === 'opened'
                : args.name === 'focusedRowKey' || args.name === 'focusedColumnIndex';
            if (triggerCondition) {
                list.off('optionChanged', handleOptionChanged);
                setTimeout(() => {
                    list.focus();
                    list.option('opened', false);
                }, 100);
            }
        };
        treeListInstance.on('optionChanged', handleOptionChanged);
        if (this.listFirstLoadCompleted && !this.service.isSearchIncomplete(dropDownBox)) {
            treeListInstance.option('opened', true);
        }
        const { text, value } = dropDownBox.option();
        const displayValue = dropDownBox.option('displayValue') as string[] | undefined;
        const shouldClearSelection = (value && !text) || text !== displayValue?.[0];
        if (shouldClearSelection && this.selectedRowKeys.length) {
            this.resetSelectionFlag = true;
            this.selectedRowKeys = [];
            treeListInstance.pageIndex(0).then(() => {
                this.focusedRowIndex = 0;
                this.focusedRowKey = firstRowKey;
                this.focusInput();
            }).catch(() => {});
        }
    }

##### Vue

    <!-- tab: DropDownList.vue -->
    function onOpened(e: DxDropDownBoxTypes.OpenedEvent): void {
        const treeListInstance = treeListRef.value?.instance;
        const dropDownBox = e.component;
        function handleOptionChanged(args: DxTreeListTypes.OptionChangedEvent): void {
            const list = args.component;
            const triggerCondition = listFirstLoadCompleted
                ? args.name === 'openTrigger'
                : args.name === 'focusedRowKey' || args.name === 'focusedColumnIndex';
            if (triggerCondition) {
                list.off('optionChanged', handleOptionChanged);
                requestAnimationFrame(() => {
                    list.focus();
                    list.option('openTrigger', 'closed');
                });
            }
        }
        treeListInstance?.on('optionChanged', handleOptionChanged);
        if (listFirstLoadCompleted) {
            treeListInstance?.option('openTrigger', 'opened');
        }
        const { text, value: dropDownValue } = dropDownBox.option();
        const displayValue = dropDownBox.option('displayValue') as string[] | undefined;
        const shouldClearSelection = (dropDownValue && !text) || text !== displayValue?.[0];
        if (shouldClearSelection) {
            selectedRowKeys.value = [];
            treeListInstance?.pageIndex(0).then(() => {
                treeListInstance?.option('focusedRowIndex', 0);
                focusedRowKey.value = FIRST_ROW_KEY;
                focusInput();
            }).catch(() => {});
        }
    }

##### React

    <!-- tab: DropDownList.tsx -->
    const onOpened = useCallback((e: DropDownBoxTypes.OpenedEvent): void => {
        const treeListInstance = treeListRef.current?.instance();
        const dropDownBox = e.component;
        function handleOptionChanged(args: TreeListTypes.OptionChangedEvent): void {
            const list = args.component;
            const triggerCondition = listFirstLoadCompletedRef.current
                ? args.name === 'openTrigger'
                : args.name === 'focusedRowKey' || args.name === 'focusedColumnIndex';
            if (triggerCondition) {
                list.off('optionChanged', handleOptionChanged);
                requestAnimationFrame(() => {
                    list.focus();
                    list.option('openTrigger', 'closed');
                });
            }
        }
        treeListInstance?.on('optionChanged', handleOptionChanged);
        if (listFirstLoadCompletedRef.current) {
            treeListInstance?.option('openTrigger', 'opened');
        }
        const { text, value: dropDownValue } = dropDownBox.option();
        const dropDownDisplayValue = dropDownBox.option('displayValue') as string[] | undefined;
        const shouldClearSelection = (dropDownValue && !text) || text !== dropDownDisplayValue?.[0];
        if (shouldClearSelection) {
            dispatch({ type: 'RESET' });
            treeListInstance?.pageIndex(0).then(() => {
                treeListInstance?.option('focusedRowIndex', 0);
                dispatch({ type: 'SET_FOCUSED_KEY', key: FIRST_ROW_KEY });
                focusInput();
            }).catch(() => {});
        }
    }, [focusInput, listFirstLoadCompletedRef, treeListRef]);

##### ASP.NET Core Controls

    function dropDownBoxOnOpened(e) {
        handleDropDownOpened(e);
    }

    function handleDropDownOpened(e) {
        if (!treeList) return;
        const dropDownBox = e.component;
        const listFirstLoadCompleted = dropDownBox.option('listFirstLoadCompleted');
        const handleOptionChanged = (args) => {
            const list = args.component;
            const triggerCondition = listFirstLoadCompleted
                ? args.name === 'opened'
                : args.name === 'focusedRowKey' || args.name === 'focusedColumnIndex';
            if (triggerCondition) {
                list.off('optionChanged', handleOptionChanged);
                requestAnimationFrame(() => {
                    list.focus();
                    if (listFirstLoadCompleted) list.option('opened', false);
                });
            }
        };
        treeList.on('optionChanged', handleOptionChanged);
        if (listFirstLoadCompleted) {
            treeList.option('opened', true);
        }
        const { text, value } = dropDownBox.option();
        const isTextEqualToDisplayValue = text === dropDownBox.option('displayValue')[0];
        const shouldClearSelection = (value && !text) || !isTextEqualToDisplayValue;
        if (shouldClearSelection && treeList.option('selectedRowKeys').length) {
            treeList.option('resetSelection', true);
            treeList.selectRows([]);
            treeList.pageIndex(0).then(() => {
                treeList.option('focusedRowIndex', 0);
                treeList.option('focusedRowKey', firstRowKey);
            });
        }
    }

---

### 8) Reset State in `onClosed`

When the popup closes, DropDownBox [`onClosed`](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/onClosed.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#onClosed') restores consistent state if the user typed something but did not confirm a selection. The search state is cleared by calling `dataSource.filter(null)`.

---
##### jQuery

    <!-- tab: index.js -->
    function onClosed(e) {
        const dropDownBox = e.component;
        const { text } = dropDownBox.option();
        const displayValue = dropDownBox.option('displayValue')[0];
        const resetValue = text && text !== displayValue;
        if (!hasLoadedItems) {
            dropDownBox.reset(null);
            dataSource.filter(null);
            dataSource.load();
        }
        if (resetValue && !treeList.option('selectedRowKeys').length) {
            treeList.option('autoSelection', true);
            const firstKey = treeList.getKeyByRowIndex(0);
            treeList.selectRows([firstKey]);
            treeList.option('focusedRowKey', firstKey);
        }
    }

##### Angular

    <!-- tab: drop-down-list.component.ts -->
    onClosed(e: DxDropDownBoxTypes.ClosedEvent): void {
        const treeListInstance = this.treeListRef?.instance;
        const dropDownBox = e.component;
        const text = dropDownBox.option('text');
        const displayValue = (dropDownBox.option('displayValue') as string[] | undefined)?.[0];
        const resetValue = text && text !== displayValue;
        if (!this.hasLoadedItems) {
            this.value = null;
            this.selectedRowKeys = [];
            this.dataSource.filter(null);
            this.dataSource.load().then(() => {}).catch(() => {});
        }
        if (resetValue && !this.selectedRowKeys.length) {
            this.autoSelectionFlag = true;
            const firstKey = treeListInstance.getKeyByRowIndex(0) as number;
            this.selectedRowKeys = [firstKey];
            this.focusedRowKey = firstKey;
        }
    }

##### Vue

    <!-- tab: DropDownList.vue -->
    function onClosed(e: DxDropDownBoxTypes.ClosedEvent): void {
        const treeListInstance = treeListRef.value?.instance;
        const dropDownBox = e.component;
        const text = dropDownBox.option('text');
        const displayValue = (dropDownBox.option('displayValue') as string[] | undefined)?.[0];
        const resetValue = text && text !== displayValue;
        if (!hasLoadedItems) {
            value.value = null;
            selectedRowKeys.value = [];
            props.dataSource.filter(null);
            props.dataSource.load().catch(() => {});
        }
        if (resetValue && !selectedRowKeys.value.length && treeListInstance) {
            const firstKey = treeListInstance.getKeyByRowIndex(0) as number;
            value.value = firstKey;
            selectedRowKeys.value = [firstKey];
            focusedRowKey.value = firstKey;
        }
    }

##### React

    <!-- tab: DropDownList.tsx -->
    const onClosed = useCallback((e: DropDownBoxTypes.ClosedEvent): void => {
        const treeListInstance = treeListRef.current?.instance();
        const dropDownBox = e.component;
        const text = dropDownBox.option('text');
        const dropDownDisplayValue = (dropDownBox.option('displayValue') as string[] | undefined)?.[0];
        const resetValue = text && text !== dropDownDisplayValue;
        if (!hasLoadedItemsRef.current) {
            dispatch({ type: 'SELECT_VALUE', value: null });
            dataSource.filter(null);
            dataSource.load().catch(() => {});
        }
        if (resetValue && !selection.selectedRowKeys.length && treeListInstance) {
            const firstKey = treeListInstance.getKeyByRowIndex(0) as number;
            dispatch({ type: 'SELECT_VALUE', value: firstKey });
        }
    }, [selection.selectedRowKeys.length, dataSource]);

##### ASP.NET Core Controls

    function dropDownBoxOnClosed(e) {
        const dataSource = treeList.getDataSource();
        resetSearchState(e, dataSource);
    }

    function resetSearchState(e, dataSource) {
        if (!treeList) return;
        const dropDownBox = e.component;
        const { text } = dropDownBox.option();
        const displayValue = dropDownBox.option('displayValue')[0];
        const resetValue = text && text !== displayValue;
        if (!hasLoadedItems) {
            dropDownBox.reset(null);
            dataSource.filter(null);
            dataSource.load();
        }
        if (resetValue && !treeList.option('selectedRowKeys').length) {
            treeList.option('autoSelection', true);
            const firstKey = treeList.getKeyByRowIndex(0);
            treeList.selectRows([firstKey]);
            treeList.option('focusedRowKey', firstKey);
        }
    }

---

[note] This approach supports single selection only. To implement multiple selection, use the [TagBox](/api-reference/10%20UI%20Components/dxTagBox '/Documentation/ApiReference/UI_Components/dxTagBox/') component instead.

### Example

See this example for more details: [DropDownBox with embedded TreeList](https://github.com/DevExpress-Examples/devextreme-dropdownbox-implement-search-for-treelist).

#####See Also#####
- [DropDownBox - Configuration](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/')
- [DropDownBox - onInput](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/onInput.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#onInput')
- [TreeList - Configuration](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/')
- [DataSource - filter(filterExpr)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr')
- [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [Search by Regular Field (DataGrid)](/concepts/05%20UI%20Components/DropDownBox/20%20Search%20in%20Embedded%20Components/05%20Search%20by%20Regular%20Field%20(DataGrid).md '/Documentation/Guide/UI_Components/DropDownBox/Search_in_Embedded_Components/Search_by_Regular_Field_(DataGrid)/')
