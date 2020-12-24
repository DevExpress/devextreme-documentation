---
id: CustomStore.Options.load
type: function(options)
---
---
##### shortDescription
Specifies a custom implementation of the [load(options)](/api-reference/30%20Data%20Layer/Store/3%20Methods/load(options).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#loadoptions') method.

##### param(options): LoadOptions
Data processing settings.

##### return: Promise<any> | Array<any>
An array with data or a Promise that is resolved after data is loaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---
This function's implementation has certain specifics depending on the UI component in which you use the **CustomStore**. Refer to the **Custom Sources** topic of a specific UI component for details:

- [DataGrid](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')
- [PivotGrid](/concepts/05%20Widgets/PivotGrid/035%20Use%20CustomStore '/Documentation/Guide/Widgets/PivotGrid/Use_CustomStore/')
- [TreeList](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')
- [List](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')
- [Lookup](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')
- [SelectBox](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')
- [TagBox](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')
- [Scheduler](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')
- [Chart](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/') and other data visualization UI components

#####See Also#####
- [Load Data in Raw Mode](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/3%20Custom%20Sources/1%20Load%20Data%20in%20Raw%20Mode.md '/Documentation/Guide/Data_Binding/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode')