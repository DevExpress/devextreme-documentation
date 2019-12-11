---
default: undefined
acceptValues: undefined | 'asc' | 'desc'
type: String
---
---
##### shortDescription
Specifies the sort order of column values.

---
By default, rows are sorted according to the data source. Set the **sortOrder** option to sort rows in a required order. If you need to sort by multiple columns, specify the [sortIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/sortIndex.md '{basewidgetpath}/Configuration/columns/#sortIndex') option as well, or otherwise, each sorted column will get a sort index according to the position in the **columns** array.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `SortOrder` enum. This enum accepts the following values: `Asc` and `Desc`.

#####See Also#####
- [sorting](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/sorting '{basewidgetpath}/Configuration/sorting/')