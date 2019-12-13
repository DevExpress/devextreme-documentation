The [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') is a place in the pivot grid widget where you can put fields. Each field whose data is displayed in the pivot grid is bound to a particular area. There are four different areas.

* **Row area** &#8212; the first pivot grid dimension, which is used to group data. The categories generated from fields in this area are displayed in the [row header](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers'). Dimensional areas should contain dimensional fields only (fields describing categories that can be used to group or filter data).

* **Column area** &#8212; the second pivot grid dimension, which is used to group data. Its characteristics are similar to the row area, except that its fields are displayed in the [column header](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers').

* **Filter area** &#8212; the third dimensional area. It has no visual representation, although you can perform filtering based on this area fields' data. <!-- Link to Filtering -->

* **Data area** &#8212; the non-dimensional area containing fields with data and aggregation methods. Fields in this area are called **data fields** (**measures** in OLAP terminology). Data from the fields of this area is used to calculate **summary values** displayed in the pivot grid cells.

With the **PivotGrid** widget you can organize fields related to a single dimension into groups. To learn more about this functionality, refer to the [Fields Grouping](/concepts/05%20Widgets/PivotGrid/050%20Grouping/030%20Fields%20Grouping.md '/Documentation/Guide/Widgets/PivotGrid/Grouping/#Fields_Grouping') article.

[note] Fields with no area defined will not be displayed in the pivot grid, although, they will be available in the [Field Chooser](/api-reference/10%20UI%20Widgets/dxPivotGridFieldChooser '/Documentation/ApiReference/UI_Widgets/dxPivotGridFieldChooser/'), which can be used to put a field into an area.

![](/Content/images/doc/19_2/DataGrid/PivotGrid_3D.png)

The order of fields in an area is significant, because the area is hierarchical and its fields define different hierarchy levels. Changing the order of hierarchy levels will change the meaning of your area. For example, consider the "time" dimension: if an area is configured as follows, data will be grouped by years and within each year - by months.

    <!--JavaScript-->
	fields: [{
		area: 'column',
		dataField: 'OrderDate',
		dataType: 'date',
		groupInterval: 'year'
	}, {
		area: 'column',
		dataField: 'OrderDate',
		dataType: 'date',
		groupInterval: 'month'
	},
	// ...
	]

![](/Content/images/doc/19_2/DataGrid/PivotGridAreas_YearMonth.png)

<!-- link to Data Grouping -->

Alternatively, you can group data by months and within months &#8212; by years.

    <!--JavaScript-->
	fields: [{
		area: 'column',
		dataField: 'OrderDate',
		dataType: 'date',
		groupInterval: 'month'
	}, {
		area: 'column',
		dataField: 'OrderDate',
		dataType: 'date',
		groupInterval: 'year'
	},
	// ...
	]

In this case, you will see data for each month summarized across all years. If you expand a month, you will see years (only those containing data of the expanded month) and the data will be split more precisely.

![](/Content/images/doc/19_2/DataGrid/PivotGridAreas_MonthYear.png)

The ordering of fields in an area is defined either by their position in the [fields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') array or by the [areaIndex](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/areaIndex.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#areaIndex') option (if it is set). Note that the fields whose [areaIndex](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/areaIndex.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#areaIndex') option is set to a value (any value) will be displayed before fields with no **areaIndex** defined.

An example of the [areaIndex](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/areaIndex.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#areaIndex') option is presented in the [Get or Set Field Options](/concepts/05%20Widgets/PivotGrid/020%20Fields%20and%20Areas/30%20API/30%20Get%20or%20Set%20Field%20Options.md '/Documentation/Guide/Widgets/PivotGrid/Fields_and_Areas/#API/Get_or_Set_Field_Options') section.