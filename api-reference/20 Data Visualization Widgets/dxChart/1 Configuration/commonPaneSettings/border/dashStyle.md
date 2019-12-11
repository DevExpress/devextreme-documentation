---
default: 'solid'
acceptValues: 'solid' | 'longDash' | 'dash' | 'dot'
type: String
---
---
##### shortDescription
Specifies the dash style of the pane border.

---
This option accepts one of the following values.

* **solid**   
Displays a solid, continuous border.
* **dash**   
Displays the border using short dashes.
* **longDash**   
Displays the border using long dashes.
* **dot**    
Displays the border using dots.
* **Any combination of 'longDash', 'dash' and 'dot'**   
Displays the border by repeating the specified combination. For example, *'dashdotdash'*.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `DashStyle` enum. This enum accepts the following values: `Solid`, `LongDash`, `Dash` and `Dot`.