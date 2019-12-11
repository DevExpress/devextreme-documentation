---
default: 'solid'
acceptValues: 'solid' | 'longDash' | 'dash' | 'dot'
type: String
---
---
##### shortDescription
Sets a dash style for the series border (in area-like series) or for the series point border (in bar-like and bubble series) when a user selects the series.

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