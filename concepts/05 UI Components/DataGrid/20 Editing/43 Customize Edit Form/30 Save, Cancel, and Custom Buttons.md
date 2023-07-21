Form and popup edit modes include built-in Save and Cancel buttons. If you want to execute custom code on a click on either button, specify the [onSaving](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/onSaving.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onSaving') or [onEditCanceling](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/onEditCanceling.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditCanceling') event handler, respectively. Assign `true` to the **e.cancel** parameter to cancel a pending Save or Cancel operation and keep the form or pop-up window open.

Specify **editing.texts**.[cancelRowChanges](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/texts/cancelRowChanges.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/texts/#cancelRowChanges') and **editing.texts**.[saveRowChanges](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/texts/saveRowChanges.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/texts/#saveRowChanges') properties to change Save and Cancel button captions.

To customize Save and Cancel buttons, you need to redefine them:

- Popup edit mode     
Add the **editing**.[popup](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/popup.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#popup') object to the DataGrid configuration object and declare Save, Cancel, and custom buttons in the **popup**.[toolbarItems](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/toolbarItems '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/') array.

- Form edit mode     
Add the **editing**.[form](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/form.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#form') object to the DataGrid configuration object and use the **form.items** array to arrange all items you want to display in the edit form. Then, add a [simple item](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/') with a template containing a standalone [Toolbar](/concepts/05%20UI%20Components/Toolbar/00%20Getting%20Started%20with%20Toolbar '/Documentation/Guide/UI_Components/Toolbar/Getting_Started_with_Toolbar/') component. Declare buttons in this toolbar. Use the following CSS to hide built-in Save and Cancel buttons:

        #gridForm .dx-datagrid-form-buttons-container {  
            display: none  
        }

Finally, handle the button onClick event to call [saveEditData](/api-reference/10%20UI%20Components/GridBase/3%20Methods/saveEditData().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#saveEditData') and [cancelEditData](/api-reference/10%20UI%20Components/GridBase/3%20Methods/cancelEditData().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#cancelEditData') methods, respectively. 

Refer to the following example to learn more: <a href="https://github.com/DevExpress-Examples/devextreme-datagrid-customize-edit-form-buttons" target="_blank">How to customize built-in Edit Form buttons and add a custom button</a>.