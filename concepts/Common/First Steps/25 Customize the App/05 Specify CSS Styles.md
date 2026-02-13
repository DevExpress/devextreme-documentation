Specify the following styles to hide the DataGrid header panel:

    <!-- tab: index.css -->
    #task-grid .dx-datagrid-header-panel {
        display: none;
    }

To apply rounded corners to the first and last rows of the DataGrid, specify the following styles:

    <!-- tab: index.css -->
    #task-grid .dx-datagrid-headers, #task-grid .dx-datagrid .dx-datagrid-table .dx-header-row>td:first-child {
        border-top-left-radius: 8px;
    }

    #task-grid .dx-datagrid-headers, #task-grid .dx-datagrid .dx-datagrid-table .dx-header-row>td:last-child {
        border-top-right-radius: 8px;
    }

    #task-grid .dx-datagrid-rowsview {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        border-bottom-style: none;
    }

DevExtreme ships with multiple CSS variables. These allow you to apply theme-dependent customizations. This example applies the `--dx-color-danger` variable to customize "delete" buttons in DataGrid rows:

    <!-- tab: index.css -->
    .dx-link-delete::before {
        color: var(--dx-color-danger)
    }

This example also customizes row deletion dialogs:

    <!-- tab: index.css -->
    .dx-dialog .dx-toolbar-center {
        margin: -8px !important;
        width: calc(100% + 16px);
        border-spacing: 8px 0;
        float: none !important;
    }

    .dx-toolbar-center .dx-button {
        width: 100%;
    }

    .dx-toolbar-center .dx-item {
        padding-right: 0 !important;
    }