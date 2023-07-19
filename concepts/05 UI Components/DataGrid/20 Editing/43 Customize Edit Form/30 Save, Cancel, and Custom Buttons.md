Form and popup editing modes include built-in Save and Cancel buttons. If you want to execute custom code on click one of these buttons, specify the [onSaving](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onSaving) or [onEditCanceling](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditCanceling) event handler correspondingly. Assign `true` to the **e.cancel** parameter to cancel the Save or Cancel operations and keep the form or popup opened.

Specify the **editing.texts**.[cancelRowChanges](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/texts/#cancelRowChanges) and **editing.texts**.[saveRowChanges](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/texts/#saveRowChanges) properties to change texts of the Save and Cancel buttons.

To customize the Save and Cancel buttons, re-define them. Then, handle the onClick event for the buttons to call the [saveEditData](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#saveEditData) and [cancelEditData](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#cancelEditData) methods correspondingly. 

Refer to the following example to learn more:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-datagrid-customize-edit-form-buttons"
}