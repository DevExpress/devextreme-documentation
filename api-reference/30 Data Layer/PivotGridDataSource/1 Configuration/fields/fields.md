---
default: undefined
type: Array
---
---
##### shortDescription
An array of pivot grid fields.

---
If the [store](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/') type you use is not [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/'), you need to describe data from the data source for **PivotGrid** by assigning a list of fields to this option. Each pivot grid field must be associated with the field in the [store](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/') using the [dataField](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/dataField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField') option. 

Fields can be instantly placed into the pivot grid by assigning a value to the [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') option. If this option is **undefined**, the field will be displayed in the [Field Chooser](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/fieldChooser '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldChooser/') only.

[note] If this array is not specified and the [retrieveFields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/retrieveFields.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#retrieveFields') option is set to **true**, the fields will be generated automatically and placed to the [Field Chooser](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/fieldChooser '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldChooser/').