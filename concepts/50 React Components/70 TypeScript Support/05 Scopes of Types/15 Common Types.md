**Modular Projects**

Common types are usually in the `ComponentTypes` namespace. If a common type is missing, file an issue in our [Support Center](https://supportcenter.devexpress.com/ticket/create).

When using a type for multiple components, it can be unclear from which module to import:

    import { DataGrid, DataGridTypes } from 'devextreme-react/data-grid';
    import { Popup, PopupTypes } from 'devextreme-react/pop-up';

    const toolbarItemsLocation: DataGridTypes.ToolbarItemLocation = 'center';
    // or
    const toolbarItemsLocation: PopupTypes.ToolbarItemLocation = 'center';

In such cases, import the type from a common module:

    import { ToolbarItemLocation } from 'devextreme-react/common';
    const toolbarItemsLocation: ToolbarItemLocation;

Alternatively, define a union:

    type ToolbarItemLocation = DataGridTypes.ToolbarItemLocation | PopupTypes.ToolbarItemLocation;
    const toolbarItemsLocation: ToolbarItemLocation = 'center';

**Non-Modular Projects**

Common types are located in the following namespaces:

- DevExpress.common

- DevExpress.common.charts

- DevExpress.common.grids

<!-- ... -->

    const toolbarItemsLocation: DevExpress.common.ToolbarItemLocation;