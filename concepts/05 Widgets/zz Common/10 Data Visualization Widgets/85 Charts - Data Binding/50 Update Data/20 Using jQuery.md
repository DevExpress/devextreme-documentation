When using jQuery, rebind the data source to your widget in order to update data in this widget. To do this, obtain its instance at first. The following code snippet demonstrates how this can be done for a pie chart.

	<!--JavaScript-->var pieChart = $("#pieChartContainer").dxPieChart("instance");

After that, call the **option()** method of this instance. Pass an object with the specified **dataSource** field to this method.

	<!--JavaScript-->pieChart.option({ dataSource: updatedDataSource });

Alternatively, you can call the **option()** method with two arguments: the name of the option that must be changed and a new value for this option.

	<!--JavaScript-->pieChart.option('dataSource', updatedDataSource);

After the option is changed, your widget will be refreshed automatically.