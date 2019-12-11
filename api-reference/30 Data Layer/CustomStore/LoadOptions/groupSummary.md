---
type: Object
---
---
##### shortDescription
A group summary expression.

---
Contains group summary definitions with the following structure, where **summaryType** can be *"sum"*, *"avg"*, *"min"*, *"max"* or *"count"*:

    { selector: "field", summaryType: "sum" }

When this option is specified, the store expects that each data object has the **summary** array that contains the result values in the same order as the summary definitions.