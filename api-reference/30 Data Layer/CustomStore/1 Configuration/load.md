---
type: function(options)
---
---
##### shortDescription
The user implementation of the [load(options)](/api-reference/30%20Data%20Layer/Store/3%20Methods/load(options).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#loadoptions') method.

##### param(options): Object
An object specifying data shaping options.

##### field(options.filter): Object
Filter expression.

##### field(options.sort): Object
Sort expression.

##### field(options.select): Object
Select expression.

##### field(options.group): Object
Group expression.

##### field(options.skip): Number
The index of the first loaded item.

##### field(options.take): Number
The number of loaded items.

##### field(options.userData): Object
A bag for holding user-defined parameters.

##### field(options.requireTotalCount): Boolean
Specifies whether the function passed to this option should resolve the jQuery.Deferred with the second argument containing the **totalCount** field.

##### field(options.searchValue): Object
The value to which the search expression value is compared.

##### field(options.searchOperation): String
A search operation expression.

##### field(options.searchExpr): getter|Array
A getter representing a search expression.

##### return: Promise
A promise of a deferred object resolved after data is loaded.

---
This function's implementation has certain specifics depending on the widget in which you use the **CustomStore**. Refer to the **Custom Sources** topic of a specific widget for details:

- [DataGrid](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/25%20Custom%20Sources '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/')
- [PivotGrid](/concepts/05%20Widgets/PivotGrid/035%20Use%20CustomStore '/Documentation/Guide/Widgets/PivotGrid/Use_CustomStore/')
- [TreeList](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/035%20Custom%20Sources '/Documentation/Guide/Widgets/TreeList/Data_Binding/Custom_Sources/')
- [List](/concepts/05%20Widgets/List/03%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/List/Data_Binding/Custom_Sources/')
- [Lookup](/concepts/05%20Widgets/Lookup/03%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/Lookup/Data_Binding/Custom_Sources/')
- [SelectBox](/concepts/05%20Widgets/SelectBox/03%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/SelectBox/Data_Binding/Custom_Sources/')
- [TagBox](/concepts/05%20Widgets/TagBox/02%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/TagBox/Data_Binding/Custom_Sources/')
- [Scheduler](/concepts/05%20Widgets/Scheduler/020%20Data%20Binding/25%20Custom%20Sources.md '/Documentation/Guide/Widgets/Scheduler/Data_Binding/Custom_Sources/')
- [Chart](/concepts/05%20Widgets/Chart/03%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/Chart/Data_Binding/Custom_Sources/') and other data visualization widgets

#####See Also#####
- [Load Data in Raw Mode](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources/1%20Load%20Data%20in%20Raw%20Mode.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode')