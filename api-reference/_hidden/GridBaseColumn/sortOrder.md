---
id: GridBaseColumn.sortOrder
acceptValues: undefined | 'asc' | 'desc'
type: String
default: undefined
firedEvents: optionChanged
---
---
##### shortDescription
Specifies the sort order of column values.

---
By default, rows are sorted according to the data source. To sort rows in an ascending or descending order, set the **sortOrder** property to *"asc"* or *"desc"*. If you need to sort by multiple columns, specify the [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '{basewidgetpath}/Configuration/columns/#sortIndex'). Otherwise, each sorted column will get a sort index according to its position in the **columns** array.

#include common-ref-enum with {
    enum: "`SortOrder`",
    values: "`Asc` and `Desc`"
}

#####See Also#####
- [sorting](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/sorting '{basewidgetpath}/Configuration/sorting/')
- [sortingMethod]({basewidgetpath}/Configuration/columns/#sortingMethod)
- [calculateSortValue]({basewidgetpath}/Configuration/columns/#calculateSortValue)