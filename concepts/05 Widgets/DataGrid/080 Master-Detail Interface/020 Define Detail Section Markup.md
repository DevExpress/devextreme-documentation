After enabling the master-detail interface, specify a template for detail sections. Templates allow you to place virtually anything into the detail sections. For instance, you can display another **DataGrid** or any other [UI widget](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/') there. To define a template, use the grid's **masterDetail** | [template](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/masterDetail/template.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#template') option.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		masterDetail: {
			enabled: true,
			template: function (container, info) {
				$('<div>').dxDataGrid({ // create a div container and place the **DataGrid** widget in it
					
					// configure the widget here

				}).appendTo(container); // append the div container to the detail section's container
			}
		}
	});

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridmaster-detailmasterdetailssimple/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

For more information on specifying the template for the detail sections, see the [template](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/masterDetail/template.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#template') option description.

[note] If you need to display a very large amount of data in the detail sections, consider using the [TabPanel](/api-reference/10%20UI%20Widgets/dxTabPanel '/Documentation/ApiReference/UI_Widgets/dxTabPanel/') widget to organize data in tabs.

Once loaded, the detail section's content remains cached until the grid's [page](/concepts/05%20Widgets/DataGrid/015%20Data%20Navigation/20%20Pager%20Navigation.md '/Documentation/Guide/Widgets/DataGrid/Data_Navigation/#Pager_Navigation') switches or web page reloads. It prevents data from loading from the [data source](/concepts/05%20Widgets/DataGrid/010%20Data%20Binding '/Documentation/Guide/Widgets/DataGrid/Data_Binding/') each time a user expands the detail section. Cashing increases the loading speed of detail sections expanded multiple times and reduces the server load if you use the [remote data source](/concepts/05%20Widgets/DataGrid/010%20Data%20Binding/20%20OData%20Service.md '/Documentation/Guide/Widgets/DataGrid/Data_Binding/OData_Service/').
