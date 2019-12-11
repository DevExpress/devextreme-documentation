---
type: Array<Number, String, Date>
---
---
##### notUsedInTheme

##### shortDescription
The selected range, initial or current.

---
By default, the selected range is the entire [scale](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/'). To specify a different range to be selected initially, assign an array of two values - start and end - to the **value** option. Depending on the [scale type](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/valueType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#valueType'), these values should be of Numeric, String or Date type.

When using [AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options/')/[Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Change_Options/'), bind a scope property/observable value to the **value** option if you need to get or set this option at runtime. With [jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/05%20Get%20and%20Set%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options/') only, use the [getValue()](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/3%20Methods/getValue().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Methods/#getValue') and [setValue(value)](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/3%20Methods/setValue(value).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Methods/#setValuevalue') methods for the same purpose.

#####See Also#####
- [onValueChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#onValueChanged')
- **behavior**.[callValueChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/behavior/callValueChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#callValueChanged')