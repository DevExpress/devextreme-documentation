---
default: 'solid'
acceptValues: 'dash' | 'dot' | 'longDash' | 'solid'
type: String
---
---
##### shortDescription
Specifies the dash style of the crosshair lines.

---
This option accepts one of the following values.

* **solid**   
Displays solid, continuous crosshair lines.
* **dash**   
Displays the crosshair lines using short dashes.
* **longDash**   
Displays the crosshair lines using long dashes.
* **dot**    
Displays the crosshair lines using dots.
* **Any combination of 'longDash', 'dash' and 'dot'**   
Displays the crosshair lines by repeating the specified combination. For example, *'dashdotdash'*.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `DashStyle` enum. This enum accepts the following values: `Solid`, `LongDash`, `Dash` and `Dot`.