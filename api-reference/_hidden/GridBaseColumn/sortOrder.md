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
By default, rows are sorted according to the data source. Set the **sortOrder** option to sort rows in a required order. If you need to sort by multiple columns, specify the [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '{basewidgetpath}/Configuration/columns/#sortIndex') option as well, or otherwise, each sorted column will get a sort index according to the position in the **columns** array.

#include common-ref-enum with {
    enum: "`SortOrder`",
    values: "`Asc` and `Desc`"
}

#####See Also#####
- [sorting](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/sorting '{basewidgetpath}/Configuration/sorting/')