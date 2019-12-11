To configure a data field for using one of the predefined aggregation methods, set the [summaryType](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryType.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType') option to one of the following values.

- *"sum"*		
Sums up all [facts](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/04%20Summary%20Values.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values') within an area.
- *"min"*		
Calculates the minimum [fact](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/04%20Summary%20Values.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values')'s value.
- *"max"*		
Calculates the maximum [fact](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/04%20Summary%20Values.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values')'s value.
- *"avg"*		
Calculates the average of all [facts](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/04%20Summary%20Values.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values') within an area.
- *"count"*		
Calculates the number of [facts](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/04%20Summary%20Values.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values') within an area.

You can configure the type of a value held in a field using the [dataType](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/dataType.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataType') option. This is useful when field data has an unusual format, for example, a date saved as a string. When the **dataType** is not set, it is defined automatically.