Follow these steps to configure custom client-side data aggregation for a field:

1. Make sure that the [remoteOperations](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/remoteOperations.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations') option is not set or set to **false**.

1. Set the field's [summaryType](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryType.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType') option to *"custom"*.

1. Implement the [calculateCustomSummary](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/calculateCustomSummary.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateCustomSummary') function as detailed in its description.