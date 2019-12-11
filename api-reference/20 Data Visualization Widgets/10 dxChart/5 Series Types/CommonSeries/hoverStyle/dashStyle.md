---
default: 'solid'
acceptValues: 'solid' | 'longDash' | 'dash' | 'dot'
type: string
---
---
##### propertyOf
..\..\LineSeries\LineSeries.md,..\..\StackedLineSeries\StackedLineSeries.md,..\..\FullStackedLineSeries\FullStackedLineSeries.md,..\..\StackedSplineSeries\StackedSplineSeries.md,..\..\FullStackedSplineSeries\FullStackedSplineSeries.md,..\..\SplineSeries\SplineSeries.md,..\..\StepLineSeries\StepLineSeries.md

##### shortDescription
Specifies the dash style of the series line when the series is in the hovered state. Applies only to line-like series.

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