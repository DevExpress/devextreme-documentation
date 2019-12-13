---
id: LoadOptions.totalSummary
type: Object
---
---
##### shortDescription
A total summary expression.

---
Contains summary definitions with the following structure, where **summaryType** can be *"sum"*, *"avg"*, *"min"*, *"max"* or *"count"*:

    { selector: "field", summaryType: "sum" }

When this option is specified, the store expects the result to have the **summary** array that contains the result values in the same order as the summary definitions.