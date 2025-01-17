---
id: dxChartSeriesTypes.CommonSeries.label.format
type: Format | undefined
default: undefined
---
---
##### shortDescription
Formats the point value before it is displayed in the point label.

---
See the [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') section for information on accepted values.

If you specify the format with an object and apply it to a full-stacked-like series, this object can also contain the **percentPrecision** field. Full-stacked-like series points have absolute and percentage values. The **percentPrecision** field specifies how many decimal digits the percentage values should have:

    <!-- tab: JavaScript -->
    format: {
        type: "fixedPoint", // the format of absolute values
        precision: 1, // the precision of absolute values (123.456 --> 123.4)
        percentPrecision: 2 // the precision of percentage values (12.3456 % --> 12.34 %)
    }

#####See Also#####
- [customizeText](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/label/customizeText.md '{currentpath}/#customizeText')
- [Value Formatting](/concepts/Common/Value%20Formatting '/Documentation/Guide/Common/Value_Formatting/')
