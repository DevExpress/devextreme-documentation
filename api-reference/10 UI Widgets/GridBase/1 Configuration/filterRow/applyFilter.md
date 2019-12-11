---
default: 'auto'
acceptValues: 'auto' | 'onClick'
type: String
---
---
##### shortDescription
Specifies when to apply a filter.

---
By default, the filter applies automatically after a user finishes entering a value into a cell of the filter row. Alternatively, the filter can be applied on a click on the *"Apply Filter"* button. To enable this mode, assign *"onClick"* to the **applyFilter** option.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `GridApplyFilterMode` enum. This enum accepts the following values: `Auto` and `OnClick`.