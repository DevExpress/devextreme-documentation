This topic covers search by field values (no lookup column involved) in a [DropDownBox](/api-reference/10%20UI%20Components/dxDropDownBox '/Documentation/ApiReference/UI_Components/dxDropDownBox/') with an embedded [DataGrid](/api-reference/10%20UI%20Components/dxDataGrid '/Documentation/ApiReference/UI_Components/dxDataGrid/'). The approach uses [`DataSource.searchExpr`](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchExpr.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr') and [`DataSource.searchValue`](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/searchValue(value).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#searchValuevalue') to filter rows as the user types.

[note] For a similar example that involves a lookup column, see [Search by Lookup Column (TreeList)](/concepts/05%20UI%20Components/DropDownBox/20%20Search%20in%20Embedded%20Components/10%20Search%20by%20Lookup%20Column%20(TreeList).md '/Documentation/Guide/UI_Components/DropDownBox/Search_in_Embedded_Components/Search_by_Lookup_Column_(TreeList)/').

The full working code is available in the GitHub repository:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-dropdownbox-filter-data-in-nested-widget"
}

### 1) Configure DropDownBox to Accept User Input

- Activate [`acceptCustomValue`](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/acceptCustomValue.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#acceptCustomValue') so the user can type text.
- Set [`valueChangeEvent`](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/valueChangeEvent.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#valueChangeEvent') to an empty string to prevent the component from trying to interpret typing as a value change.

---
##### jQuery

    <!-- tab: index.js -->
    $('#gridBox').dxDropDownBox({
        acceptCustomValue: true,
        valueChangeEvent: '',
        openOnFieldClick: false,
        // ...
    });

##### Angular

    <!-- tab: drop-down-grid.component.html -->
    <dx-drop-down-box
        [acceptCustomValue]="true"
        valueChangeEvent=""
        [openOnFieldClick]="false"
        ...
    >
    </dx-drop-down-box>

##### Vue

    <!-- tab: DropDownBoxWithDataGrid.vue -->
    <DxDropDownBox
        :accept-custom-value="true"
        value-change-event=""
        :open-on-field-click="false"
        ...
    />

##### React

    <!-- tab: DropDownGrid.tsx -->
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

### 2) Create a `DataSource` That Supports Search

Use the following `DataSource` members:

- [`searchExpr`](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchExpr.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr') — fields used for searching
- [`searchValue`](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/searchValue(value).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#searchValuevalue') — current search string

---
##### jQuery

    <!-- tab: index.js -->
    const dataSource = new DevExpress.data.DataSource({
        store: DevExpress.data.AspNet.createStore({
            key: 'OrderNumber',
            loadUrl: 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/orders',
        }),
        searchExpr: 'Employee',
    });

##### Angular

    <!-- tab: drop-down-grid.component.ts -->
    @Input() dataSource!: DataSource;

    <!-- tab: app.component.ts -->
    import AspNetData from 'devextreme-aspnet-data-nojquery';
    import { DataSource } from 'devextreme-angular/common/data';

    this.dataSource = new DataSource({
        store: AspNetData.createStore({
            key: 'OrderNumber',
            loadUrl: `${url}/Orders`,
        }),
        searchExpr: 'Employee',
    });

##### Vue

    <!-- tab: DropDownBoxWithDataGrid.vue -->
    import AspNetData from 'devextreme-aspnet-data-nojquery';
    import { DataSource } from 'devextreme-vue/common/data';

    const dataSource = new DataSource({
        store: AspNetData.createStore({
            key: 'OrderNumber',
            loadUrl: `${url}/Orders`,
        }),
        searchExpr: 'Employee',
    });

##### React

    <!-- tab: DropDownGrid.tsx -->
    import AspNetData from 'devextreme-aspnet-data-nojquery';
    import { DataSource } from 'devextreme-react/common/data';

    const dataSource = new DataSource({
        store: AspNetData.createStore({
            key: 'OrderNumber',
            loadUrl: `${url}/Orders`,
        }),
        searchExpr: 'Employee',
    });

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid<SampleOrder>()
        .DataSource(d => d.Mvc().Controller("SampleData").LoadAction("Get").Key("OrderID"))
        .DataSourceOptions(op => { op.SearchExpr(new[] { "CustomerName" }); })
        // ...
    )

---

### 3) Configure `displayExpr`

Use [`displayExpr`](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#displayExpr') to define how a selected record is displayed in the input:

    function displayExpr(item) {
        if (!item || typeof item !== 'object') return '';
        return `${item.Employee}: ${item.StoreState} - ${item.StoreCity} <${item.OrderNumber}>`;
    }

### 4) Configure the Embedded DataGrid in `contentTemplate`

Configure the DropDownBox component.  Use [`contentTemplate`](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#contentTemplate') to embed a DataGrid.

To activate focused row and single row selection, specify the following settings:

- Enable [`focusedRowEnabled`](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/focusedRowEnabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#focusedRowEnabled') to allow keyboard navigation.
- Use [`focusedRowKey`](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/focusedRowKey.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#focusedRowKey') so search can focus the first match.
- Use single selection: [`selection.mode`](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/selection/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#mode').

---
##### jQuery

    <!-- tab: index.js -->
    contentTemplate: (e, container) => {
        const dropDownBox = e.component;
        const value = dropDownBox.option('value');
        const $dataGridContainer = $('<div>');
        container.append($dataGridContainer);
        $dataGridContainer.dxDataGrid({
            dataSource,
            paging: { enabled: true, pageSize: 10 },
            focusedRowEnabled: true,
            focusedRowKey: value,
            autoNavigateToFocusedRow: false,
            remoteOperations: true,
            scrolling: { mode: 'virtual' },
            selection: { mode: 'single' },
            selectedRowKeys: [value],
            height: '100%',
            width: '100%',
            columnAutoWidth: true,
            onContentReady: () => {
                if (!dropDownBox.option('gridFirstLoadCompleted')) {
                    dropDownBox.option('gridFirstLoadCompleted', true);
                }
            },
            onSelectionChanged: (args) => {
                if (!args.component.option('resetSelection')) {
                    const keys = args.selectedRowKeys;
                    dropDownBox.option('value', keys.length ? keys[0] : null);
                    dropDownBox.focus();
                }
                args.component.option('resetSelection', false);
            },
            columns: [
                { dataField: 'OrderNumber', caption: 'ID', dataType: 'number' },
                { dataField: 'OrderDate', dataType: 'date', format: 'shortDate' },
                { dataField: 'StoreCity', dataType: 'string' },
                { dataField: 'StoreState', dataType: 'string' },
                { dataField: 'Employee', dataType: 'string' },
                { dataField: 'SaleAmount', dataType: 'number', format: { type: 'currency', precision: 2 } },
            ],
        });
        dataGridInstance = $dataGridContainer.dxDataGrid('instance');
        return container;
    },

##### Angular

    <!-- tab: drop-down-grid.component.html -->
    <div *dxTemplate="let data of 'content'">
        <dx-data-grid
            #dataGrid
            [dataSource]="dataSource"
            height="100%"
            width="100%"
            [focusedRowEnabled]="true"
            [(focusedRowKey)]="focusedRowKey"
            [(selectedRowKeys)]="selectedRowKeys"
            [autoNavigateToFocusedRow]="false"
            [remoteOperations]="true"
            [columnAutoWidth]="true"
            (onKeyDown)="dataGridKeyDown($event)"
            (onContentReady)="dataGridContentReady($event)"
            (onSelectionChanged)="onSelectionChanged($event)"
        >
            <dxi-data-grid-column dataField="OrderNumber" caption="ID" dataType="number"></dxi-data-grid-column>
            <dxi-data-grid-column dataField="OrderDate" dataType="date"></dxi-data-grid-column>
            <dxi-data-grid-column dataField="StoreState" dataType="string"></dxi-data-grid-column>
            <dxi-data-grid-column dataField="StoreCity" dataType="string"></dxi-data-grid-column>
            <dxi-data-grid-column dataField="Employee" dataType="string"></dxi-data-grid-column>
            <dxi-data-grid-column dataField="SaleAmount" dataType="number">
                <dxo-data-grid-format type="currency" [precision]="2"></dxo-data-grid-format>
            </dxi-data-grid-column>
            <dxo-data-grid-paging [enabled]="true" [pageSize]="10"></dxo-data-grid-paging>
            <dxo-data-grid-selection mode="single"></dxo-data-grid-selection>
            <dxo-data-grid-scrolling mode="virtual"></dxo-data-grid-scrolling>
        </dx-data-grid>
    </div>

##### Vue

    <!-- tab: DropDownBoxWithDataGrid.vue -->
    <template #default>
        <DxDataGrid
            ref="dataGridRef"
            :data-source="dataSource"
            height="100%"
            width="100%"
            :focused-row-enabled="true"
            v-model:focused-row-key="focusedRowKey"
            :selected-row-keys="selectedRowKeys"
            :auto-navigate-to-focused-row="false"
            :remote-operations="true"
            :column-auto-width="true"
            @key-down="dataGridKeyDown"
            @content-ready="dataGridContentReady"
            @selection-changed="onSelectionChanged"
        >
            <DxColumn data-field="OrderNumber" caption="ID" data-type="number" />
            <DxColumn data-field="OrderDate" data-type="date" />
            <DxColumn data-field="StoreState" data-type="string" />
            <DxColumn data-field="StoreCity" data-type="string" />
            <DxColumn data-field="Employee" data-type="string" />
            <DxColumn data-field="SaleAmount" data-type="number">
                <DxFormat type="currency" :precision="2" />
            </DxColumn>
            <DxPaging :enabled="true" :page-size="10" />
            <DxSelection mode="single" />
            <DxScrolling mode="virtual" />
        </DxDataGrid>
    </template>

##### React

    <!-- tab: DropDownGrid.tsx -->
    <DataGrid
        ref={dataGridRef}
        dataSource={dataSource}
        height="100%"
        width="100%"
        focusedRowEnabled={true}
        focusedRowKey={selection.focusedRowKey}
        selectedRowKeys={selection.selectedRowKeys}
        autoNavigateToFocusedRow={false}
        remoteOperations={true}
        columnAutoWidth={true}
        onKeyDown={dataGridKeyDown}
        onFocusedRowChanged={onFocusedRowChanged}
        onSelectionChanged={onSelectionChanged}
    >
        <Column dataField="OrderNumber" caption="ID" dataType="number" />
        <Column dataField="OrderDate" dataType="date" />
        <Column dataField="StoreState" dataType="string" />
        <Column dataField="StoreCity" dataType="string" />
        <Column dataField="Employee" dataType="string" />
        <Column dataField="SaleAmount" dataType="number">
            <Format type="currency" precision={2} />
        </Column>
        <Paging enabled={true} pageSize={10} />
        <Selection mode="single" />
        <Scrolling mode="virtual" />
    </DataGrid>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @using (Html.DevExtreme().NamedTemplate("EmbeddedDataGridSingle"))
    {
        @(Html.DevExtreme().DataGrid<SampleOrder>()
            .ID("embedded-datagrid")
            .DataSource(d => d.Mvc().Controller("SampleData").LoadAction("Get").Key("OrderID"))
            .DataSourceOptions(op => { op.SearchExpr(new[] { "CustomerName" }); })
            .Paging(p => p.PageSize(10))
            .FocusedRowEnabled(true)
            .FocusedRowKey(new JS("component.option('value')"))
            .RemoteOperations(true)
            .AutoNavigateToFocusedRow(false)
            .Scrolling(s => s.Mode(GridScrollingMode.Virtual))
            .Selection(s => s.Mode(SelectionMode.Single))
            .SelectedRowKeys(new JS("[component.option('value')]"))
            .Height("100%")
            .Width("100%")
            .ColumnAutoWidth(true)
            .Columns(columns =>
            {
                columns.AddFor(m => m.OrderID).Caption("ID");
                columns.AddFor(m => m.OrderDate).Format("shortDate");
                columns.AddFor(m => m.CustomerName);
                columns.AddFor(m => m.ShipCountry);
                columns.AddFor(m => m.ShipCity);
            })
            .OnSelectionChanged("function(e){ dataGridSelectionChanged(e, component); }")
            .OnKeyDown("dataGridKeyDown")
            .OnContentReady("function(e){ dataGridContentReady(e, component); }")
            .OnInitialized("dataGridInitialized")
        )
    }

---

### 5) Implement Search in `onInput`

Handle the DropDownBox [`onInput`](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/onInput.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#onInput') event:

1. Ensure the dropdown is open
2. Apply `dataSource.searchValue(text)`
3. Load results and move focus to the first match

---
##### jQuery

    <!-- tab: index.js -->
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
    },

##### Angular

    <!-- tab: drop-down-grid.component.ts -->
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

    <!-- tab: DropDownBoxWithDataGrid.vue -->
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
                        focusedRowKey.value = (items[0] as OrderItem).OrderNumber;
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

    <!-- tab: DropDownGrid.tsx -->
    const onChanged = useCallback(() => {
        const items = dataSource.items();
        if (items.length > 0) {
            dispatch({ type: 'SET_FOCUSED_KEY', key: items[0].OrderNumber });
        }
        dropDownBoxRef.current?.instance().focus();
        dataSource.off('changed', onChanged);
    }, []);

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

### 6) Detect Whether the User Is Searching (`isSearchIncomplete`)

The `isSearchIncomplete` function returns `true` if the user has changed the input text and a new search must be applied. It compares `text` (what the user typed) against the component's internal `displayValue` (the formatted display text of the currently selected value):

    function isSearchIncomplete(dropDownBox) {
        let displayValue = dropDownBox.option('displayValue');
        let text = dropDownBox.option('text') || '';
        displayValue = displayValue && displayValue.length && displayValue[0];
        return text !== displayValue;
    }

### 7) Focus Management in `onOpened`

When the popup opens and the DropDownBox raises its [`onOpened`](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/onOpened.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#onOpened') event, move focus into the DataGrid.

The example implementation waits until the grid is ready (first open) or until the popup animation is complete (subsequent opens), then calls `grid.focus()`.

---
##### jQuery

    <!-- tab: index.js -->
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

    <!-- tab: drop-down-grid.component.ts -->
    onOpened(e: DxDropDownBoxTypes.OpenedEvent): void {
        let gridFirstLoadCompleted = this.gridFirstLoadCompleted;
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
        if (this.gridFirstLoadCompleted) {
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

    <!-- tab: DropDownBoxWithDataGrid.vue -->
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

    <!-- tab: DropDownGrid.tsx -->
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

### 8) Reset Component State in `onClosed`

When the popup closes, the [`onClosed`](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/onClosed.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#onClosed') event restores consistent state if the user typed something but did not confirm a selection.

- If nothing was loaded, reset the DropDownBox and clear `searchValue`
- If a search was in progress (`text !== displayValue`), auto-select the first row

---
##### jQuery

    <!-- tab: index.js -->
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

    <!-- tab: drop-down-grid.component.ts -->
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

    <!-- tab: DropDownBoxWithDataGrid.vue -->
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

    <!-- tab: DropDownGrid.tsx -->
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

[note] This implementation supports single selection only. To implement multiple selection, use the [TagBox](/api-reference/10%20UI%20Components/dxTagBox '/Documentation/ApiReference/UI_Components/dxTagBox/') component instead.

#####See Also#####
- [DropDownBox - Configuration](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/')
- [DropDownBox - onInput](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/onInput.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#onInput')
- [DataGrid - Configuration](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/')
- [DataSource - searchExpr](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchExpr.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr')
- [DataSource - searchValue(value)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/searchValue(value).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#searchValuevalue')
- [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [Search by Lookup Column (TreeList)](/concepts/05%20UI%20Components/DropDownBox/20%20Search%20in%20Embedded%20Components/10%20Search%20by%20Lookup%20Column%20(TreeList).md '/Documentation/Guide/UI_Components/DropDownBox/Search_in_Embedded_Components/Search_by_Lookup_Column_(TreeList)/')
