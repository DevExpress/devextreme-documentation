---
id: GridBase.Options.selection.mode
acceptValues: 'multiple' | 'none' | 'single'
type: String
default: 'none'
---
---
##### shortDescription
Specifies the selection mode.

---
The following selection modes are available in the widget:

- **Single**        
Only one row can be in the selected state at a time.

- **Multiple**          
Several rows can be in the selected state at a time.

#include common-ref-enum with {
    enum: "`SelectionMode`",
    values: "`None`, `Single`, and `Multiple`"
}