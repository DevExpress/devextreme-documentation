The **dataSource** option, like any other property **from the first level** of the UI component's configuration object, can be declared as an <a href="http://knockoutjs.com/documentation/observableArrays.html" target="_blank">observable</a> variable. Any changes in the property value will be detected and the UI component will be refreshed automatically.

    <!--HTML--><div id="chartContainer" style="height:400px; width: 600px" data-bind="dxChart: {
		dataSource: observableChartDataSource
		...
	}"></div>

    <!--JavaScript-->var myViewModel = {
        observableChartDataSource: ko.observableArray(data),
        //...
    };
    ko.applyBindings(myViewModel);