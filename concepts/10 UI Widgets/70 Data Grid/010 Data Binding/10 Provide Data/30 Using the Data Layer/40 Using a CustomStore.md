When you have a custom web service with its own data accessing logic, use a CustomStore to operate data. This type of store requires the implementation of a function for each data access operation. The **DataGrid** widget supports a full set of CRUD operations (*insert*, *update* and *delete* operations are available with the [editing feature](/concepts/10%20UI%20Widgets/70%20Data%20Grid/070%20Data%20Editing/10%20Data%20Editing.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Editing/') enabled):

- implement the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function to specify how data must be **loaded** from your web service;
- implement the [insert](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/insert.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#insert') function to specify how data must be **added** to your remote data set;
- implement the [update](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/update.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#update') function to specify how data must be **updated** in your remote data set;
- implement the [delete](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#delete) function to specify how data must be **removed** from your remote data set.

The following code snippet shows how to do this. 

	<!--JavaScript-->var gridDataSource = {
		load: function (loadOptions) {
			return $.getJSON('http://mydomain.com/MyDataService');
		},
		update: function (key, values) {
			//Updating data
		},
		insert: function (values) {
			//Inserting data
		},
		remove: function (key) {
			//Deleting data
		}
	}

For details, refer to the [Custom Store](/concepts/10%20UI%20Widgets/70%20Data%20Grid/012%20Use%20Custom%20Store '/Documentation/Guide/UI_Widgets/Data_Grid/Use_Custom_Store/') guide and the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') reference section.

After you have created a data source configuration object, bind it to your grid. Refer to the [Bind Data](/concepts/10%20UI%20Widgets/70%20Data%20Grid/010%20Data%20Binding/20%20Bind%20Data.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Bind_Data') section to learn how to do this.