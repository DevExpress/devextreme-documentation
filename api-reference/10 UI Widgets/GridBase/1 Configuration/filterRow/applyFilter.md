---
id: GridBase.Options.filterRow.applyFilter
acceptValues: 'auto' | 'onClick'
type: String
default: 'auto'
---
---
##### shortDescription
Specifies when to apply a filter.

---
By default, the filter applies automatically after a user finishes entering a value into a cell of the filter row. Alternatively, the filter can be applied on a click on the *"Apply Filter"* button. To enable this mode, assign *"onClick"* to the **applyFilter** option.

#include common-ref-enum with {
    enum: "`GridApplyFilterMode`",
    values: "`Auto` and `OnClick`"
}