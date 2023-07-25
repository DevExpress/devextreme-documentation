Do not specify the following properties in the form object:

- [readOnly](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/readOnly.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#readOnly')    
Use **column**.[allowEditing](/api-reference/_hidden/GridBaseColumn/allowEditing.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowEditing') instead.

- [template](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template') for items that have a [data field](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#dataField')     
Use **column**.[editCellTemplate](/api-reference/_hidden/dxDataGridColumn/editCellTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editCellTemplate') instead.

- Any event handler (properties whose name starts with "on")

- [validationRules](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/validationRules.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#validationRules') for items that have a [data field](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#dataField')    
Assign validation rules to DataGrid [columns](/api-reference/_hidden/GridBaseColumn/validationRules.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#validationRules').

- [formData](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#formData')    
DataGrid uses internal binding logic for the edit form. You can call the [cellValue](/api-reference/10%20UI%20Components/GridBase/3%20Methods/cellValue(rowIndex_dataField).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#cellValuerowIndex_dataField') method to get and set values.

    ---
    ##### jQuery

        <!-- tab: index.js -->
        const grid = $("#data-grid-container").dxDataGrid("instance");
        const key = grid.option("editing.editRowKey");
        index = grid.getRowIndexByKey(key); // get
        value = grid.cellValue(index, "CompanyName"); //set
        grid.cellValue(index, "CompanyName", "new value");

    ---