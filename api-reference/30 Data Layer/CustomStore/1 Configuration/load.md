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
An array with data or a Promise that is resolved after data is loaded.
#include ref-promisedistinction

---
Refer to the following help topic for information on how to implement the **load** function: [Custom Data Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/').

#####See Also#####
- [Load Data in Raw Mode](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/3%20Custom%20Sources/1%20Load%20Data%20in%20Raw%20Mode.md '/Documentation/Guide/Data_Binding/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode')