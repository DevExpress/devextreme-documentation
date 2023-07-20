Do not specify the following properties in the form object:

- [readOnly](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#readOnly)    
Use **column**.[allowEditing](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowEditing) instead.

- [template](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template) for items that have a [data field](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#dataField)     
Use **column**.[editCellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editCellTemplate) instead.

- Any event handler (properties whose name starts with "on")

- [validationRules](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#validationRules) for items that have a [data field](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#dataField)    
Assign validation rules to DataGrid [columns](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#validationRules).

- [formData](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#formData)    
DataGrid uses internal binding logic for the edit form. You can call the [cellValue](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#cellValuerowIndex_dataField) method to get and set values.

    ---
    ##### jQuery

        <!-- tab: index.js -->
        const grid = $("#data-grid-container").dxDataGrid("instance");
        const key = grid.option("editing.editRowKey");
        index = grid.getRowIndexByKey(key); // get
        value = grid.cellValue(index, "CompanyName"); //set
        grid.cellValue(index, "CompanyName", "new value");

    ---