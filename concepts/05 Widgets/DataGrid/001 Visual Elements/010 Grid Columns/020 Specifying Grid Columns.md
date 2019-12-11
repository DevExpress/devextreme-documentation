By default, grid columns are generated on the base of the [data source](/concepts/05%20Widgets/DataGrid/010%20Data%20Binding '/Documentation/Guide/Widgets/DataGrid/Data_Binding/') specified for **DataGrid**: one column for one field of a data source object. If you are not satisfied with the result, declare the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array. The way you must declare it depends on the purposes you aim. If you want to change the set of presented columns or alter their order, fill this array with names of data source fields providing data for columns. The following code snippet illustrates this case.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		columns: ['CompanyName', 'ContactName', 'City', 'Country']
    });

If you need to adjust grid column settings, declare **columns** as an array of objects. Each object must specify settings of one grid column. In this case, the name of a data source field should be assigned to the [dataField](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField') property. For an example, see the following code snippet.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		columns: [{
				dataField: 'CompanyName',
				// Settings of the "Company Name" column are specified here
			}, {
				dataField: 'ContactName',
				// Settings of the "Contact Name" column are specified here
			}, {
				dataField: 'City',
				// Settings of the "City" column are specified here
			},
			// ...
		]
    });

These approaches can be combined. For example, you can specify some columns by objects, and other columns by the names of their data source fields.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		columns: [
			'CompanyName',
			{
				dataField: 'ContactName',
				// Settings of the "Contact Name" column are specified here
			}, {
				dataField: 'City',
				// Settings of the "City" column are specified here
			},
			// ...
		]
    });

Moreover, you can configure grid columns without declaring the **columns** array. Instead, change the required column settings within a callback function assigned to the grid's [customizeColumns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/customizeColumns.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeColumns') property. The array of grid columns can be accessed using the parameter of this function. Fields of each object in this array represent column properties identical to the properties described in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') reference section. This approach is useful when you need to adjust only a few of column settings.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		customizeColumns: function (columns) {
			columns[0].width = 100;
			columns[1].width = 210;
		},
		// ...
    });

Grid columns have many more features, a comprehensive list of which follows.

* **Visibility**		
Each column is considered visible by default. To hide it, assign *false* to the [visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visible') property of a column. The headers of hidden columns appear in the [column chooser](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/120%20Column%20Chooser.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Column_Chooser').

* **Appearance**		
You can completely change the appearance of a grid column. For this purpose, implement a CSS class and assign its name to the [cssClass](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/cssClass.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cssClass') property of the column. Additionally, you can hide the lines separating one column from another by setting the [showColumnLines](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/showColumnLines.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#showColumnLines') property to *false*.

* **Size**		
By default, all grid columns have equal width. Using the [columnAutoWidth](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columnAutoWidth.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnAutoWidth') property, you can force the columns to adjust their widths to their content. If you want to specify a width for a column explicitly, use the [width](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width') property of this column. In addition, you can allow a user to resize grid columns at runtime. For this purpose, assign *true* to the grid's [allowColumnResizing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/allowColumnResizing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnResizing') property. The height of grid columns is calculated automatically depending on the height of the widget's container.

* **Text Formatting**		
Values of a column can be displayed with an applied [format](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/format.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format'). If required, you can also customize them by assigning a callback function to the [customizeText](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/customizeText.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#customizeText') property of the column. This function must return the text to be displayed in the column.