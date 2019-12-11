---
default: undefined
acceptValues: 'solid' | 'longDash' | 'dash' | 'dot'
type: String
---
---
##### shortDescription
Specifies a dash style for the border of a series point.

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

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `DashStyle` enum. This enum accepts the following values: `Solid`, `LongDash`, `Dash` and `Dot`.