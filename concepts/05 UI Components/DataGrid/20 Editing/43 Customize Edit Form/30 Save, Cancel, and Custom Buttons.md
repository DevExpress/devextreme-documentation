Form and popup editing modes include built-in Save and Cancel buttons. If you want to execute custom code on click one of these buttons, specify the [onSaving](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onSaving) or [onEditCanceling](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditCanceling) event handler correspondingly. Assign `true` to the **e.cancel** parameter to cancel the Save or Cancel operations and keep the form or popup opened.

Specify the **editing.texts**.[cancelRowChanges](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/texts/#cancelRowChanges) and **editing.texts**.[saveRowChanges](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/texts/#saveRowChanges) properties to change texts of the Save and Cancel buttons.

To customize the Save and Cancel buttons, re-define them:

- Popup edit mode     
Add the **editing**.[popup](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#popup) object to the DataGrid configuration and declare the Save, Cancel and custom buttons in the **popup**.[toolbarItems](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/) array.

- Form edit mode     
Add the **editing**.[form](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#form) object to the DataGrid configuration and use the **form.items** array to arrange all items you want to display in the edit form. Then, add a [simple item](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/) with a template containing a standalone [Toolbar](/Documentation/Guide/UI_Components/Toolbar/Getting_Started_with_Toolbar/) component. Declare the buttons in this toolbar. Use the following CSS to hide the built-in Save and Cancel buttons:

        #gridForm .dx-datagrid-form-buttons-container {  
            display: none  
        }

Finally, handle the button onClick event to call the [saveEditData](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#saveEditData) and [cancelEditData](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#cancelEditData) methods correspondingly. 

Refer to the following example to learn more:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-datagrid-customize-edit-form-buttons"
}