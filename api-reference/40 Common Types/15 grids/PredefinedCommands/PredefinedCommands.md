---
id: PredefinedCommands
module: common/grids
export: PredefinedCommands
type: Object
generateTypeLink: 
---
---
##### shortDescription
Predefined commands available in the DevExtreme DataGrid and TreeList.

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
        expression: FilterExprObj | null;
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
    };
    selectAll: {};
    deselectAll: {};
    clearSelection: {};
    sorting: {
        dataField: string;
        sortOrder: SortOrder | 'none';
    };
    clearSorting: {};
