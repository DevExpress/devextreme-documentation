---
id: GridBase.Options.paging.pageSize
type: Number
default: 20
firedEvents: optionChanged
---
---
##### shortDescription
Specifies the page size.

---
[note] The page size determines how many rows the widget loads at a time. All the loaded rows are rendered. If this reduces the widget's speed, set the [rowRenderingMode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/scrolling/rowRenderingMode.md '{basewidgetpath}/Configuration/scrolling/#rowRenderingMode') to "virtual" to render only the rows in the viewport. Alternatively, you can decrease the page size.

#####See Also#####
- **pager**.[allowedPageSizes](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/pager/allowedPageSizes.md '{basewidgetpath}/Configuration/pager/#allowedPageSizes')
- [pageSize(value)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/pageSize(value).md '{basewidgetpath}/Methods/#pageSizevalue')
