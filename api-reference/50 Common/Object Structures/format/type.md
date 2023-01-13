---
id: Format.type
acceptValues: 'billions' | 'currency' | 'day' | 'decimal' | 'exponential' | 'fixedPoint' | 'largeNumber' | 'longDate' | 'longTime' | 'millions' | 'millisecond' | 'month' | 'monthAndDay' | 'monthAndYear' | 'percent' | 'quarter' | 'quarterAndYear' | 'shortDate' | 'shortTime' | 'thousands' | 'trillions' | 'year' | 'dayOfWeek' | 'hour' | 'longDateLongTime' | 'minute' | 'second' | 'shortDateShortTime'
type: String
---
---
##### shortDescription
Specifies a predefined format. Does not apply if you have specified the [formatter](/api-reference/50%20Common/Object%20Structures/format/formatter.md '/Documentation/ApiReference/Common/Object_Structures/Format/#formatter') function.

---
Depending on the values you need to format, you can choose one of the following predefined formats:

**Numeric Formats**

    <!-- tab: JavaScript -->
    const smallNumber = 1.2345;

    type: "fixedPoint" // 1
    type: "decimal" // 1.2345
    type: "percent" // 123%
    type: "currency" // $1

<!---->

    <!-- tab: JavaScript -->
    const largeNumber = 1000000000;

    type: "exponential" // 1.0E+9
    type: "thousands" // 1,000,000K
    type: "millions" // 1,000M
    type: "billions" // 1B
    type: "trillions" // 0T
    type: "largeNumber" // 1B (uses "thousands", "millions", "billions", or "trillions", depending on the value)

[note]

- Set the [precision](/api-reference/50%20Common/Object%20Structures/format/precision.md '/Documentation/ApiReference/Common/Object_Structures/format/#precision') property to show fractional numbers.

- Set the [currency](/api-reference/50%20Common/Object%20Structures/format/currency.md '/Documentation/ApiReference/Common/Object_Structures/format/#currency') property to use a currency other than USD. Alternatively, you can set the [GlobalConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig/globalConfig.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/').[defaultCurrency](/api-reference/50%20Common/Object%20Structures/GlobalConfig/defaultCurrency.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#defaultCurrency') property to apply the same currency to all DevExtreme components.

- The *"fixedPoint"*, *"decimal"*, and *"currency"* format types can be paired with *"largeNumber", "thousands", "millions", "billions"*, and *"trillions"*, for example: *"fixedPoint thousands"*.

- Editor components, such as [NumberBox](https://js.devexpress.com/Demos/WidgetsGallery/Demo/NumberBox/Overview/), do not support large number formats. If you want to apply these formats, you can implement the [formatter](/api-reference/50%20Common/Object%20Structures/format/formatter.md '/Documentation/ApiReference/Common/Object_Structures/format/#formatter') and [parser](/api-reference/50%20Common/Object%20Structures/format/parser.md '/Documentation/ApiReference/Common/Object_Structures/format/#parser') functions or specify a [custom format string](/concepts/Common/Value%20Formatting/10%20Format%20UI%20Component%20Values/20%20Custom%20Format%20String.md '/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Format_String').

[/note]

**Date-Time Formats**  

    <!-- tab: JavaScript -->
    const date = new Date(2021, 6, 15, 20, 45, 34);

    type: "longDate" // Thursday, July 15, 2021
    type: "longTime" // 8:45:34 PM
    type: "longDateLongTime" // Thursday, July 15, 2021, 8:45:34 PM
    type: "monthAndDay" // July 15
    type: "monthAndYear" // July 2021
    type: "quarterAndYear" // Q3 2021
    type: "shortDate" // 7/15/2021
    type: "shortTime" // 8:45 PM
    type: "shortDateShortTime" // 7/15/2021, 8:45 PM
    type: "millisecond" // 000
    type: "second" // 34
    type: "minute" // 45
    type: "hour" // 20
    type: "day" // 15
    type: "dayOfWeek" // Thursday
    type: "month" // July
    type: "quarter" // Q3
    type: "year" // 2021

If the **type** is the only field you need to specify in the **format** object, assign the value of this field straight to the **format** property as shown below.

    <!--JavaScript-->format: "shortDate"

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingIntl/"
}

#####See Also#####
- [Value Formatting](/concepts/Common/Value%20Formatting '/Documentation/Guide/Common/Value_Formatting/')
