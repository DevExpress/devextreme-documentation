---
default: 'count'
acceptValues: 'sum' | 'min' | 'max' | 'avg' | 'count' | 'custom'
type: string
---
---
##### shortDescription
Specifies how to aggregate field data. Cannot be used for the [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/') store type.

---
The following list gives an overview of available summary types.

- *"sum"*		
Sums up all [facts](/concepts/10%20UI%20Widgets/71%20Pivot%20Grid/010%20Visual%20Elements/04%20Summary%20Values.md '/Documentation/Guide/UI_Widgets/Pivot_Grid/Visual_Elements/#Summary_Values') within an area.
- *"min"*		
Calculates the minimum [fact](/concepts/10%20UI%20Widgets/71%20Pivot%20Grid/010%20Visual%20Elements/04%20Summary%20Values.md '/Documentation/Guide/UI_Widgets/Pivot_Grid/Visual_Elements/#Summary_Values')'s value.
- *"max"*		
Calculates the maximum [fact](/concepts/10%20UI%20Widgets/71%20Pivot%20Grid/010%20Visual%20Elements/04%20Summary%20Values.md '/Documentation/Guide/UI_Widgets/Pivot_Grid/Visual_Elements/#Summary_Values')'s value.
- *"avg"*		
Calculates the average of all [facts](/concepts/10%20UI%20Widgets/71%20Pivot%20Grid/010%20Visual%20Elements/04%20Summary%20Values.md '/Documentation/Guide/UI_Widgets/Pivot_Grid/Visual_Elements/#Summary_Values') within an area.
- *"count"*		
Calculates the number of [facts](/concepts/10%20UI%20Widgets/71%20Pivot%20Grid/010%20Visual%20Elements/04%20Summary%20Values.md '/Documentation/Guide/UI_Widgets/Pivot_Grid/Visual_Elements/#Summary_Values') within an area.
- *"custom"*	
Allows you to specify a custom aggregate function using the [calculateCustomSummary](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/calculateCustomSummary.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateCustomSummary') option.

You can allow the user to change the summary type at runtime. Learn how to implement this capability from the [Runtime Summary Type Selection](/concepts/10%20UI%20Widgets/71%20Pivot%20Grid/040%20Summaries/35%20Runtime%20Summary%20Type%20Selection.md '/Documentation/Guide/UI_Widgets/Pivot_Grid/Summaries/#Runtime_Summary_Type_Selection') topic.