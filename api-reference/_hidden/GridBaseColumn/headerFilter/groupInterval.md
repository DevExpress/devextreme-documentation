---
id: GridBaseColumn.headerFilter.groupInterval
acceptValues: 'day' | 'hour' | 'minute' | 'month' | 'quarter' | 'second' | 'year'
type: String | Number
default: undefined
---
---
##### shortDescription
Specifies how the header filter combines values into groups.

---
For date columns, set this option to one of the string values. Groups in date columns are hierarchical, and the string value indicates up to which level the hierarchy is formed. The default level is *"day"*, which means that each group has the following structure: *"year" &rarr; "months" &rarr; "days"*.

For numeric columns, assign a number to this option. This number designates a step with which groups should be generated. Column values are classified into these groups.

#include common-ref-enum with {
    enum: "`HeaderFilterGroupInterval`",
    values: "`Year`, `Quarter`, `Month`, `Day`, `Hour`, `Minute`, and `Second`"
}