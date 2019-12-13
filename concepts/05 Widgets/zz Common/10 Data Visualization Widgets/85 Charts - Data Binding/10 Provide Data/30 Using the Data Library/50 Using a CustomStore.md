When you have a custom web service with its own data accessing logic, use a CustomStore to operate that data. This type of store requires the implementation of a function for each data access operation. To provide data for **Chart**, **PieChart** or **Sparkline**, implement the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function at least. As an example of such an implementation, consider the following code snippet.

	<!--JavaScript-->var dataSource = new DevExpress.data.DataSource({
		load: function (loadOptions) {
			var d = new $.Deferred();
			$.getJSON('http://mydomain.com/MyDataService')
				.done(function (data) {
					// ...
					// process data here
					// ...
					d.resolve(data); 
			});
			return d.promise();
		}
	});

To see more examples of CustomStore implementation, refer to the [Custom Sources](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources') topic. In addition, you can review the full list of CustomStore options in the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') reference section.

After you have created a DataSource, you need to bind it to your chart. Refer to the [Bind Data](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/85%20Charts%20-%20Data%20Binding/20%20Bind%20Data.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Bind_Data/') section to learn how to do this.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ClientSideDataProcessing/"
}
