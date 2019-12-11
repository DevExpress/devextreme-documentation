The **dataSource** option, like any other option **from the first level** of the widget's configuration object, can be declared as an <a href="http://knockoutjs.com/documentation/observableArrays.html" target="_blank">observable</a> variable. Any changes in the option value will be detected and the widget will be refreshed automatically.

    <!--HTML--><div id="chartContainer" style="height:400px; width: 600px" data-bind="dxChart: {
		dataSource: observableChartDataSource
		...
	}"></div>

    <!--JavaScript-->var myViewModel = {
        observableChartDataSource: ko.observableArray(data),
        //...
    };
    ko.applyBindings(myViewModel);