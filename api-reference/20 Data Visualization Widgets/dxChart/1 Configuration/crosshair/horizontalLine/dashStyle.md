---
default: 'solid'
acceptValues: 'dash' | 'dot' | 'longDash' | 'solid'
type: String
---
---
##### shortDescription
Specifies the dash style of the horizontal crosshair line.

---
This option accepts one of the following values.

* **solid**   
Displays a solid, continuous crosshair line.
* **dash**   
Displays the horizontal crosshair line using short dashes.
* **longDash**   
Displays the horizontal crosshair line using long dashes.
* **dot**    
Displays the horizontal crosshair line using dots.
* **Any combination of 'longDash', 'dash' and 'dot'**   
Displays the horizontal crosshair line by repeating the specified combination. For example, *'dashdotdash'*.

#include common-ref-enum with {
    enum: "`DashStyle`",
    values: "`Solid`, `LongDash`, `Dash`, and `Dot`"
}