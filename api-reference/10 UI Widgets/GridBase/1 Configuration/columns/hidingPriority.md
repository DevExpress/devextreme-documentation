---
default: undefined
type: Number
---
---
##### shortDescription
Specifies the order in which columns are hidden when the widget adapts to the screen or container size. Ignored if [allowColumnResizing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/allowColumnResizing.md '{basewidgetpath}/Configuration/#allowColumnResizing') is **true** and [columnResizingMode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnResizingMode.md '{basewidgetpath}/Configuration/#columnResizingMode') is *"widget"*.

---
The **hidingPriority** is a unique positive integer that ascends from right to left beginning with 0 by default. Columns with low **hidingPriority** are hidden first.

[note]Specifying **hidingPriority** for at least one column enables the column hiding feature and cancels the default hiding priorities.

#####See Also#####
- [columnHidingEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnHidingEnabled.md '{basewidgetpath}/Configuration/#columnHidingEnabled')
- [onAdaptiveDetailRowPreparing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onAdaptiveDetailRowPreparing.md '{basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing')