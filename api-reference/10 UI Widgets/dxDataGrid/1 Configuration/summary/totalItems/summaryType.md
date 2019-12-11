---
default: undefined
acceptValues: 'sum' | 'min' | 'max' | 'avg' | 'count' | 'custom'
type: String
---
---
##### shortDescription
Specifies how to aggregate data for a summary item.

---
A summary item displays a value that is a product of applying an aggregate function to the data of a [specific column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column'). This aggregate function is defined by the summary type. The following list gives an overview of available summary types.

- *"sum"*		
Sums up all values in a column.
- *"min"*		
Calculates the minimum value in a column.
- *"max"*		
Calculates the maximum value in a column.
- *"avg"*		
Calculates the average of all values in a column.
- *"count"*		
Calculates the number of rows.
- *"custom"*	
Allows you to specify a custom aggregate function using the [calculateCustomSummary](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/calculateCustomSummary.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/#calculateCustomSummary') option.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `SummaryType` enum. This enum accepts the following values: `Sum`, `Min`, `Max`, `Avg`, `Count` and `Custom`.