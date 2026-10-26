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

When this property value is `undefined`, date-time axis labels include higher-level range boundaries. For example, if an axis displays months, each January label includes a year number. If an axis displays days, the first visible label in a month includes the month name.

#####See Also#####
- [customizeText](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/customizeText.md '{currentpath}/#customizeText')
- [Value Formatting](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/00%20Value%20Formatting.md '/Documentation/Guide/Common/Localization_and_Globalization/Value_Formatting/')
