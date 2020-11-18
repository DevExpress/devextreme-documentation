---
id: dxChartSeriesTypesCommonSeriesLabel.argumentFormat
type: format
default: undefined
---
---
##### shortDescription
Formats the point argument before it is displayed in the point label. To format the point value, use the [format](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/label/#format') option.

---
A point label displays only the point value by default. Using the **label**.[customizeText](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/label/customizeText.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/label/#customizeText') option, you can instruct the label to display the point argument as well. The **argumentFormat** option applies in this case only. This option accepts an object whose fields are described in the [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') section.

[note]DevExtreme widgets provide a wide choice of [predefined formats](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type'). If you are, however, going to use custom formats, link the <a href="https://github.com/jquery/globalize" target="_blank">Globalize</a> library to your project. Learn how to do this from topics in the [Installation](/concepts/Common/Distribution%20Channels/15%20ZIP%20Archive.md '/Documentation/Guide/Common/Distribution_Channels/ZIP_Archive/') section.

#####See Also#####
- [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') - provides a comprehensive overview of formatting capabilities.
- [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/') - shows how to apply formatting to various widget elements.