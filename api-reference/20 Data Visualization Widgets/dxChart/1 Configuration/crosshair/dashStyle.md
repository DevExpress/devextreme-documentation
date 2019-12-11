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

#include common-ref-enum with {
    enum: "`DashStyle`",
    values: "`Solid`, `LongDash`, `Dash`, and `Dot`"
}