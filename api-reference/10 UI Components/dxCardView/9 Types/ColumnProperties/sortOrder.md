---
id: ColumnProperties.sortOrder
firedEvents: optionChanged
type: Enums.SortOrder | undefined
---
---
##### shortDescription
Specifies the sort order of column values.

---
Rows initially follow the order of the data source. To change the order, set the **sortOrder** property to *"asc"* for ascending or *"desc"* for descending. For multi-column sorting, set the [sortIndex]({basewidgetpath}/Configuration/columns/#sortIndex). Without this, sorted columns receive a sort index based on their placement in the **columns** array.