---
acceptValues: 'currency' | 'fixedPoint' | 'percent' | 'decimal' | 'exponential' | 'largeNumber' | 'thousands' | 'millions' | 'billions' | 'trillions' | 'longDate' | 'longTime' | 'longDateLongTime' | 'monthAndDay' | 'monthAndYear' | 'quarterAndYear' | 'shortDate' | 'shortTime' | 'shortDateShortTime' | 'second' | 'millisecond' | 'day' | 'month' | 'quarter' | 'year' | 'dayOfWeek' | 'hour' | 'minute'
type: String
---
---
##### shortDescription
Specifies a predefined format.

---
Depending on the values you need to format, choose one of the predefined formats. They can be divided into the following groups.

- **Numeric Formats**  
*'fixedPoint', 'percent', 'decimal', 'exponential', 'largeNumber', 'thousands', 'millions', 'billions', 'trillions'*
- **Date-Time Formats**  
*'longDate', 'longTime', 'longDateLongTime', 'monthAndDay', 'monthAndYear', 'quarterAndYear', 'shortDate', 'shortTime', 'shortDateShortTime', 'millisecond', 'second', 'minute', 'hour', 'day', 'dayOfWeek', 'month', 'quarter', 'year'*
- **Currency Formats**  
*'currency'*

The *'fixedPoint', 'decimal'* or *'currency'* format can be paired with the *'largeNumber', 'thousands', 'millions', 'billions'* or *'trillions'* format using a space separator, e.g., *'fixedPoint thousands'*.

If **type** is the only field you need to specify in the **format** object, assign the value of this field straight to the **format** option as shown below.

    <!--JavaScript-->format: 'shortDate'

[note]The **type** option will not be applied if you have specified the [formatter](/api-reference/50%20Common/Object%20Structures/format/formatter.md '/Documentation/ApiReference/Common/Object_Structures/format/#formatter') function.

#####See Also#####
- **format** | [currency](/api-reference/50%20Common/Object%20Structures/format/currency.md '/Documentation/ApiReference/Common/Object_Structures/format/#currency') - specifies the currency code for the currency format.
- **format** | [precision](/api-reference/50%20Common/Object%20Structures/format/precision.md '/Documentation/ApiReference/Common/Object_Structures/format/#precision') - specifies the precision of values that have a numeric or currency format.