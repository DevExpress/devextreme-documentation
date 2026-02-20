DevExtreme components assign classes to nested elements. You can specify custom CSS styles for these classes to customize your app. For a list of common DevExtreme classes, refer to the following topic: [CSS Classes](/Documentation/ApiReference/UI_Components/CSS_Classes/).

This example applies rounded corners to the first and last rows of the DataGrid:

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

DevExtreme defines multiple theme-dependent CSS variables. You can use these variables to customize UI elements. This example applies the `--dx-color-danger` variable to "Delete" buttons in DataGrid rows:

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