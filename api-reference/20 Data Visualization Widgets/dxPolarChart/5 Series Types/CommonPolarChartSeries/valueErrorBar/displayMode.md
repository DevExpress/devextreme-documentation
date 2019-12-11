---
default: 'auto'
acceptValues: 'auto' | 'high' | 'low' | 'none'
type: String
---
---
##### shortDescription
Specifies whether error bars must be displayed in full or partially.

---
Usually, when displaying error bars, you need both the lower and higher parts of them to indicate the error. This case corresponds to the **displayMode** option equaling *'auto'*. If you need to display the lower or higher parts separately, set this option to *'low'* or *'high'* respectively. To hide error bars, assign *'none'* to this option.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `ValueErrorBarDisplayMode` enum. This enum accepts the following values: `Auto`, `Low`, `High` and `None`.