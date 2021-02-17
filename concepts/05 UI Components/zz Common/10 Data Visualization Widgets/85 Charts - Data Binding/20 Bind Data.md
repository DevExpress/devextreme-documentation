Regardless of the approach you've chosen to provide data, after implementing a data source, bind it to your UI component using its **dataSource** property. The code snippet below demonstrates how to do this for the Chart UI component.

	<!--JavaScript-->var chartDataSource = // ...
	
	var chartOptions = {
		dataSource: chartDataSource
	};