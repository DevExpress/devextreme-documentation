---
default: 'solid'
acceptValues: 'dash' | 'dot' | 'longDash' | 'solid'
type: String
---
---
##### propertyOf
..\LineSeries\LineSeries.md,..\StackedLineSeries\StackedLineSeries.md,..\FullStackedLineSeries\FullStackedLineSeries.md,..\StackedSplineSeries\StackedSplineSeries.md,..\FullStackedSplineSeries\FullStackedSplineSeries.md,..\SplineSeries\SplineSeries.md,..\StepLineSeries\StepLineSeries.md

##### shortDescription
Specifies the dash style of the series line. Applies only to line-like series.

---
This option accepts one of the following values.

* **solid**   
Displays a solid, continuous series line.
* **dash**   
Displays the series line using short dashes.
* **longDash**   
Displays the series line using long dashes.
* **dot**    
Displays the series line using dots.
* **Any combination of 'longDash', 'dash' and 'dot'**   
Displays the series line by repeating the specified combination. For example, *'dashdotdash'*.

#include common-ref-enum with {
    enum: "`DashStyle`",
    values: "`Solid`, `LongDash`, `Dash`, and `Dot`"
}