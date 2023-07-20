Form and popup edit modes include built-in Save and Cancel buttons. If you want to execute custom code on a click on either button, specify the [onSaving](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onSaving) or [onEditCanceling](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditCanceling) event handler, respectively. Assign `true` to the **e.cancel** parameter to cancel a pending Save or Cancel operation and keep the form or popup window open.

Specify **editing.texts**.[cancelRowChanges](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/texts/#cancelRowChanges) and **editing.texts**.[saveRowChanges](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/texts/#saveRowChanges) properties to change Save and Cancel button captions.

To customize Save and Cancel buttons, you need to redefine them:

- Popup edit mode     
Add the **editing**.[popup](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#popup) object to the DataGrid configuration object and declare Save, Cancel, and custom buttons in the **popup**.[toolbarItems](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/) array.

- Form edit mode     
Add the **editing**.[form](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#form) object to the DataGrid configuration object and use the **form.items** array to arrange all items you want to display in the edit form. Then, add a [simple item](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/) with a template containing a standalone [Toolbar](/Documentation/Guide/UI_Components/Toolbar/Getting_Started_with_Toolbar/) component. Declare buttons in this toolbar. Use the following CSS to hide built-in Save and Cancel buttons:

        #gridForm .dx-datagrid-form-buttons-container {  
            display: none  
        }

Finally, handle the button onClick event to call [saveEditData](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#saveEditData) and [cancelEditData](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#cancelEditData) methods, respectively. 

Refer to the following example to learn more:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-datagrid-customize-edit-form-buttons"
}