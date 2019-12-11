When you have a custom web service with its own data accessing logic, use a [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') to operate data. This type of Store requires the implementation of a function for each data access operation. To use a CustomStore in **PivotGrid**, implement the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function specifying how data must be loaded from your web service. In this function, create a <a href="http://api.jquery.com/Types/#Deferred" target="_blank">jQuery.Deferred</a> object. Then, get data from your web service. After data has been obtained successfully, resolve the Deferred object with received data and an additional object. The following code snippet shows how to do this. In this example, the **getJSON** function is used to acquire data.

	<!--JavaScript-->var pivotGridDataSource = {
		load: function (loadOptions) {
			var d = $.Deferred();
			$.getJSON('http://mydomain.com/MyDataService').done(function (data) {
                // process data here
                d.resolve(data); 
			}).fail(d.reject);
			return d.promise();
		}
	}

A CustomStore has many more configuration options than those described in this topic. For a complete list, refer to the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') reference section.

After you have created a data source configuration object, bind it to your grid. Refer to the [Bind Data](/concepts/05%20Widgets/PivotGrid/030%20Data%20Binding/20%20Bind%20Data.md '/Documentation/Guide/Widgets/PivotGrid/Data_Binding/#Bind_Data') section to learn how to do this.