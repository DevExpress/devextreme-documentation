---
default: undefined
acceptValues: 'solid' | 'longDash' | 'dash' | 'dot'
type: String
---
---
##### propertyOf
..\..\AreaSeries\AreaSeries.md,..\..\StackedAreaSeries\StackedAreaSeries.md,..\..\FullStackedAreaSeries\FullStackedAreaSeries.md,..\..\StackedSplineAreaSeries\StackedSplineAreaSeries.md,..\..\FullStackedSplineAreaSeries\FullStackedSplineAreaSeries.md,..\..\SplineAreaSeries\SplineAreaSeries.md,..\..\StepAreaSeries\StepAreaSeries.md,..\..\RangeAreaSeries\RangeAreaSeries.md,..\..\BarSeries\BarSeries.md,..\..\StackedBarSeries\StackedBarSeries.md,..\..\FullStackedBarSeries\FullStackedBarSeries.md,..\..\RangeBarSeries\RangeBarSeries.md,..\..\BubbleSeries\BubbleSeries.md

##### shortDescription
Sets a dash style for the series border (in area-like series) or for the series point border (in bar-like and bubble series).

---
The following values are available.

* **solid**   
Displays the border as a solid, continuous line.
* **longDash**    
Displays the border using long dashes.
* **dash**   
Displays the border using dashes.
* **dot**   
Displays the border using dots.
* **Any combination of 'longDash', 'dash' and 'dot'**  
Displays the border by repeating the specified combination. For instance, *'dashdotdash'*.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `DashStyle` enum. This enum accepts the following values: `Solid`, `LongDash`, `Dash` and `Dot`.