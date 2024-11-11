---
id: dxChartSeriesTypes.CommonSeries.label.argumentFormat
type: Format | undefined
default: undefined
---
---
##### shortDescription
Formats the point argument before it is displayed in the point label. To format the point value, use the [format](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/label/format.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/label/#format') property.

---
A point label displays only the point value by default. Using the **label**.[customizeText](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/label/customizeText.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/label/#customizeText') property, you can instruct the label to display the point argument as well. The **argumentFormat** property applies in this case only. This property accepts an object whose fields are described in the [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/Format/') section.

[note]DevExtreme UI components provide a wide choice of [predefined formats](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/Format/#type'). If you are, however, going to use custom formats, link the <a href="https://github.com/jquery/globalize" target="_blank">Globalize</a> library to your project. Learn how to do this from topics in the [Installation](/concepts/Common/Distribution%20Channels/15%20ZIP%20Archive.md '/Documentation/Guide/Common/Distribution_Channels/ZIP_Archive/') section.

#####See Also#####
- [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/Format/') - provides a comprehensive overview of formatting capabilities.
- [Value Formatting](/concepts/Common/Value%20Formatting '/Documentation/Guide/Common/Value_Formatting/') - shows how to apply formatting to various UI component elements.
