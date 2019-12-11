---
id: dxChartSeriesTypes.CommonSeries.label.format
type: format
default: undefined
---
---
##### shortDescription
Formats the point value before it will be displayed in the point label.

---
This option accepts an object whose fields are described in the [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') section. However, there is one more field, called **percentPrecision**, which is available only to full-stacked-like series, where one point always has an absolute and a percentage value. The **percentPrecision** field specifies how many digits after the decimal point to save in the percentage value. See an example in the following code.

    format: {
        type: "fixedPoint", // the format of absolute values
        precision: 1, // the precision of absolute values (123.456 --> 123.4)
        percentPrecision: 2 // the precision of percentage values (12.3456 % --> 12.34 %)
    }

[note]DevExtreme widgets provide a wide choice of [predefined formats](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type'). If you are, however, going to use custom formats, link the <a href="https://github.com/jquery/globalize" target="_blank">Globalize</a> library to your project. Learn how to do this from topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/10%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

#####See Also#####
- [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') - provides a comprehensive overview of formatting capabilities.
- [Data Formatting](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/#Data_Formatting) - shows how to apply formatting to various widget elements.