---
default: 'solid'
acceptValues: 'solid' | 'longDash' | 'dash' | 'dot'
type: String
---
---
##### shortDescription
Specifies a dash style for a constant line.

---
The following values are available.

* **solid**   
Displays a solid, continuous constant line.
* **longDash**   
Displays a constant line using long dashes.
* **dash**   
Displays a constant line using dashes.
* **dot**    
Displays a constant line using dots.
* **Any combination of 'longDash', 'dash' and 'dot'**   
Displays a constant line by repeating the specified combination. For instance, 'dashdotdash'.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `DashStyle` enum. This enum accepts the following values: `Solid`, `LongDash`, `Dash` and `Dot`.