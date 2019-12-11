---
default: 'solid'
acceptValues: 'dash' | 'dot' | 'longDash' | 'solid'
type: String
---
---
##### shortDescription
Sets the label border dash style.

---
The following values are available:

* **solid**   
Displays the border as a solid, continuous line.
* **longDash**    
Displays the border using long dashes.
* **dash**   
Displays the border using dashes.
* **dot**   
Displays the border using dots.
* **Any combination of "longDash", "dash" and "dot"**  
Displays the border by repeating the specified combination. For instance, *"dashdotdash"*.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `DashStyle` enum. This enum accepts the following values: `Solid`, `LongDash`, `Dash` and `Dot`.