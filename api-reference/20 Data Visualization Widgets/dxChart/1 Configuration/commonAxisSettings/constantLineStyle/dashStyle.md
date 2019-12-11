---
default: 'solid'
acceptValues: 'dash' | 'dot' | 'longDash' | 'solid'
type: String
---
---
##### shortDescription
Specifies the dash style of constant lines.

---
This option accepts one of the following values.

* **solid**   
Displays solid, continuous constant lines.
* **dash**   
Displays constant lines using short dashes.
* **longDash**   
Displays constant lines using long dashes.
* **dot**    
Displays constant lines using dots.
* **Any combination of 'longDash', 'dash' and 'dot'**   
Displays constant lines by repeating the specified combination. For example, *'dashdotdash'*.

#include common-ref-enum with {
    enum: "`DashStyle`",
    values: "`Solid`, `LongDash`, `Dash`, and `Dot`"
}