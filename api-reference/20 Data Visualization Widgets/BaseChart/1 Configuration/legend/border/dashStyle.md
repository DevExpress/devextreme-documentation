---
default: 'solid'
acceptValues: 'dash' | 'dot' | 'longDash' | 'solid'
type: String
---
---
##### shortDescription
Specifies the border's dash style in the legend.

---
The following values are available:

* **solid**   
Displays a solid, continuous line.
* **longDash**   
Displays a border using long dashes.
* **dash**   
Displays a border using dashes.
* **dot**    
Displays a border using dots.
* **Any combination of 'longDash', 'dash' and 'dot'**   
Displays a border by repeating the specified combination. For instance, 'dashdotdash'.

#include common-ref-enum with {
    enum: "`DashStyle`",
    values: "`Solid`, `LongDash`, `Dash`, and `Dot`"
}