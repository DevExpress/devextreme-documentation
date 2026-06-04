---
id: DataGridPredefinedCommands
module: ui/data_grid
export: DataGridPredefinedCommands
type: PredefinedCommands | Object
inherits: PredefinedCommands
generateTypeLink: 
---
---
##### shortDescription
Predefined commands available in the DevExtreme DataGrid.

---
The following code snippet lists available commands with their arguments:

    columnsVisibility: {
        dataField: string;
        visible: boolean;
    };
    columnsReorder: {
        dataField: string;
        visibleIndex: number;
    };
    columnsPinning: {
        dataField: string;
        fixed: boolean;
        fixedPosition?: 'left' | 'right';
    };
    columnsResize: {
        dataField: string;
        width: number | string;
    };
    filterValue: {
        expression: FilterExprTree | null;
    };
    clearFilter: {};
    focusRowByKey: {
        key: string | number | Array<CompositeKeyPair>;
    };
    focusRowByIndex: {
        index: number;
    };
    paging: {
        enabled: boolean;
    };
    pageSize: {
        pageSize: number;
    };
    pageIndex: {
        pageIndex: number;
    };
    searching: {
        text: string;
    };
    selectByKeys: {
        keys: Array<string | number | Array<CompositeKeyPair>>;
        preserve: boolean;
    };
    selectByIndexes: {
        indexes: number[];
        mode: 'select' | 'deselect';
    };
    selectAll: {};
    deselectAll: {};
    clearSelection: {};
    sorting: {
        dataField: string;
        sortOrder: SortOrder | 'none';
    };
    clearSorting: {};
    grouping: {
        dataField: string;
        groupIndex: number;
    };
    clearGrouping: {};
    summary: {
        totalItems: Array<SummaryCommandTotalItem>;
        groupItems: Array<SummaryCommandGroupItem>;
    };
    clearSummary: {};
