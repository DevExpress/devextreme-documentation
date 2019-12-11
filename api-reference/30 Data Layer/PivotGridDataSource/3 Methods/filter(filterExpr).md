---
##### shortDescription
Applies a new [filter expression](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#filter'). Cannot be used for the [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/') store type.

##### param(filterExpr): Object
A filter expression.

---
To apply a new filtering expression, call the [reload()](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/reload().md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#reload') method. The usage example is shown below.

    <!--JavaScript-->pivotGridDataSource.filter("price", "<", 100);
    pivotGridDataSource.reload()

For information on filter expressions, refer to the [Filtering](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering') section of the Data Layer article.