---
id: LoadOptions.groupSummary
type: Object
---
---
##### shortDescription
A group summary expression. Used with the [group](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/group.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#group') setting.

---
Contains group summary definitions with the following structure, where **summaryType** can be *"sum"*, *"avg"*, *"min"*, *"max"* or *"count"*:

    { selector: "field", summaryType: "sum" }

When this option is specified, each data object should have a **summary** array that contains the resulting values in the same order as the summary definitions.