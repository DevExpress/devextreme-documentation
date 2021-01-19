To apply a filter in code, set the [filterType](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/filterType.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterType') and [filterValues](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/filterValues.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterValues') options of the field.

The example of filtering data by a field in the hidden 'filter' area is presented below.

	<!--JavaScript-->fields: [
	//...
	{
		area: 'filter', 
		dataField: 'OrderDate',
		groupInterval: 'year', 
		dataType: 'date',
		filterType: 'include',
		filterValues: [2014, 2015]
	}]

The filter above allows you to exclude data for all years except for 2014 and 2015.


[note] If you need to filter data by the [group field](/concepts/05%20Widgets/PivotGrid/050%20Grouping/030%20Fields%20Grouping.md '/Documentation/Guide/Widgets/PivotGrid/Grouping/#Fields_Grouping'), assign an array of arrays to the [filterValues](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/filterValues.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterValues') option. Each item of the **filterValues** array should contain a filtering condition for each field in the group.

You can get and apply filters at runtime using the [filter()](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/filter().md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#filter') and [filter(filterExpr)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#filterfilterExpr') methods.