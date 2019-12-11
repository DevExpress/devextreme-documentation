---
default: 'solid'
acceptValues: 'dash' | 'dot' | 'longDash' | 'solid'
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

#include common-ref-enum with {
    enum: "`DashStyle`",
    values: "`Solid`, `LongDash`, `Dash`, and `Dot`"
}