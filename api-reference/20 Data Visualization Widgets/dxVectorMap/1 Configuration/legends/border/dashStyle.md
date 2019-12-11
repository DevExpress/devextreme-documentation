---
default: 'solid'
acceptValues: 'dash' | 'dot' | 'longDash' | 'solid'
type: String
---
---
##### shortDescription
Specifies the dash style of the legend border.

---
The following values are available:

* **solid**   
Displays the border using a solid, continuous line.
* **longDash**   
Displays the border using long dashes.
* **dash**   
Displays the border using dashes.
* **dot**    
Displays the border using dots.
* **Any combination of 'longDash', 'dash' and 'dot'**   
Displays the border by repeating the specified combination. For instance, 'dashdotdash'.

#include common-ref-enum with {
    enum: "`DashStyle`",
    values: "`Solid`, `LongDash`, `Dash`, and `Dot`"
}