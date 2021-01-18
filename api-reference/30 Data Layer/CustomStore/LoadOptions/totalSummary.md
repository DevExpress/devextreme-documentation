---
id: LoadOptions.totalSummary
type: any
---
---
##### shortDescription
A total summary expression.

---
Contains summary definitions with the following structure, where **summaryType** can be *"sum"*, *"avg"*, *"min"*, *"max"* or *"count"*:

    { selector: "field", summaryType: "sum" }

When this property is specified, the store expects the result to have the **summary** array that contains the result values in the same order as the summary definitions.