---
default: 'solid'
acceptValues: 'dash' | 'dot' | 'longDash' | 'solid'
type: String
---
---
##### propertyOf
..\..\LineSeries\LineSeries.md

##### shortDescription
Specifies the dash style for the line in a selected series.

---
The following values are available.

* **solid**   
Displays a solid, continuous line.
* **longDash**    
Displays the series using long dashes.
* **dash**   
Displays the series using dashes.
* **dot**   
Displays the series using dots.
* **any combination of 'longDash', 'dash' and 'dot'**   
Displays the series by repeating the specified combination. For instance, 'dashdotdash'.

#include common-ref-enum with {
    enum: "`DashStyle`",
    values: "`Solid`, `LongDash`, `Dash`, and `Dot`"
}