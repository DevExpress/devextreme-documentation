The following list points out the differences in editing modes.

- [**Row**](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/10%20Row%20Mode.md '/Documentation/Guide/UI_Components/{WidgetName}/Editing/#User_Interaction/Row_Mode')       
A user edits one row at a time. The UI component saves changes when the row leaves the editing state.

    #include btn-open-demo with {
        href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RowEditingAndEditingEvents"
    }

- [**Batch**](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/30%20Batch%20Mode.md '/Documentation/Guide/UI_Components/{WidgetName}/Editing/#User_Interaction/Batch_Mode')     
A user edits data cell by cell. The UI component does not save changes until a user clicks the global *"Save"* button.

    #include btn-open-demo with {
        href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/BatchEditing/"
    }

- [**Cell**](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/20%20Cell%20Mode.md '/Documentation/Guide/UI_Components/{WidgetName}/Editing/#User_Interaction/Cell_Mode')      
Differs from the batch mode in that the UI component saves changes when the cell leaves the editing state.

    #include btn-open-demo with {
        href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CellEditingAndEditingAPI/"
    }

- [**Form**](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/40%20Form%20Mode.md '/Documentation/Guide/UI_Components/{WidgetName}/Editing/#User_Interaction/Form_Mode')      
On entering the editing state, a row becomes a form with editable fields. The UI component saves changes after a user clicks the *"Save"* button.

    #include btn-open-demo with {
        href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/FormEditing/"
    }

- [**Popup**](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/50%20Popup%20Mode.md '/Documentation/Guide/UI_Components/{WidgetName}/Editing/#User_Interaction/Popup_Mode')     
Differs from the form mode in that the form with editable fields is placed in a popup window.

    #include btn-open-demo with {
        href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/PopupEditing/"
    }

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-datagrid-show-grid-in-popup-edit-form"
}
