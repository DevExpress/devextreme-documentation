---
default: 'solid'
acceptValues: 'dash' | 'dot' | 'longDash' | 'solid'
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

#include common-ref-enum with {
    enum: "`DashStyle`",
    values: "`Solid`, `LongDash`, `Dash`, and `Dot`"
}