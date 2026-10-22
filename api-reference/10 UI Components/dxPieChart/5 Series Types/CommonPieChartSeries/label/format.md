---
id: dxPieChartSeriesTypes.CommonPieChartSeries.label.format
type: Format | undefined
default: undefined
---
---
##### shortDescription
Formats a value before it is displayed in a point label.

---
See the [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') section for information on accepted values.

#include common-global-format-note with {
    property: "format",
    globalFormats: "[numberFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#numberFormat)"
}

When this property value is `undefined`, the date-time axes display larger date range boundaries in labels. For example, if an axis displays months, it also displays a year near each instance of January. If an axis displays days, it also displays the month near each first visible day mark.

#####See Also#####
- [customizeText](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/customizeText.md '{currentpath}/#customizeText')
- [Value Formatting](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/00%20Value%20Formatting.md '/Documentation/Guide/Common/Localization_and_Globalization/Value_Formatting/')
