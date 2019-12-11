---
default: 'solid'
acceptValues: 'dash' | 'dot' | 'longDash' | 'solid'
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

#include common-ref-enum with {
    enum: "`DashStyle`",
    values: "`Solid`, `LongDash`, `Dash`, and `Dot`"
}