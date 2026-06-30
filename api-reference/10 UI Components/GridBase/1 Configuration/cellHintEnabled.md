---
id: GridBase.Options.cellHintEnabled
type: Boolean
default: true
---
---
##### shortDescription
Enables hints that appear when users hover over truncated cells.

---
When **cellHintEnabled** is `true`, {WidgetName} adds the [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/title) element attribute to truncated cells to display native (browser-specific) hints.

[note] This property has no effect for columns where [cellTemplate]({basewidgetpath}/Configuration/columns/#cellTemplate) is configured. To display native hints in these columns, add the **title** attribute to the **cellTemplate** container element. To display custom hints, configure the DevExtreme [Tooltip](/Documentation/Guide/UI_Components/Tooltip/Overview/) component.

#####See Also#####

- **columns[]**.[width](/api-reference/_hidden/GridBaseColumn/width.md '{basewidgetpath}/Configuration/columns/#width')
- [columnAutoWidth]({basewidgetpath}/Configuration/#columnAutoWidth)