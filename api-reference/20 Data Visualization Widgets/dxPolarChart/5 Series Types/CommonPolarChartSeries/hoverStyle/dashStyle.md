---
default: 'solid'
acceptValues: 'solid' | 'longDash' | 'dash' | 'dot'
type: String
---
---
##### propertyOf
..\..\LineSeries\LineSeries.md

##### shortDescription
Specifies the dash style for the line in a hovered series.

---
The following values are available.

* **solid**   
Displays a solid, continuous line.
* **longDash**    
Displays the series using long dashes.
* **dash**   
Displays the series using dashes.
* **dot**   
Displays the series using dots.
* **any combination of 'longDash', 'dash' and 'dot'**   
Displays the series by repeating the specified combination. For instance, 'dashdotdash'.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `DashStyle` enum. This enum accepts the following values: `Solid`, `LongDash`, `Dash` and `Dot`.