---
default: 'solid'
acceptValues: 'dash' | 'dot' | 'longDash' | 'solid'
type: String
---
---
##### shortDescription
Specifies a dash style for the borders of point labels.

---
The following values are available.

* **solid**   
Displays a solid, continuous line.
* **longDash**    
Displays a border using long dashes.
* **dash**   
Displays a border using dashes.
* **dot**   
Displays a border using dots.
* **any combination of 'longDash', 'dash' and 'dot'**   
Displays a border by repeating the specified combination. For instance, 'dashdotdash'.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `DashStyle` enum. This enum accepts the following values: `Solid`, `LongDash`, `Dash` and `Dot`.