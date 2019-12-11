---
default: 'solid'
acceptValues: 'solid' | 'longDash' | 'dash' | 'dot'
type: String
---
---
##### shortDescription
Specifies the dash style of the vertical crosshair line.

---
The following values are available.

* **solid**   
Displays a solid, continuous vertical crosshair line.
* **longDash**   
Displays the vertical crosshair line using long dashes.
* **dash**   
Displays the vertical crosshair line using dashes.
* **dot**    
Displays the vertical crosshair line using dots.
* **Any combination of 'longDash', 'dash' and 'dot'**   
Displays the vertical crosshair line by repeating the specified combination. For instance, 'dashdotdash'.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `DashStyle` enum. This enum accepts the following values: `Solid`, `LongDash`, `Dash` and `Dot`.