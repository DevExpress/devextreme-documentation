---
default: undefined
type: Object
---
---
##### shortDescription
Specifies options of a lookup column.

---
Use a lookup column if you need to restrict the set of values that can be chosen when a user edits or filters a grid column. In a lookup column, each cell is a drop-down menu where items represent available values. Additionally, you can use a lookup column when you need to substitute displayed values for required values.

For example, consider that you have two arrays of objects: *Drivers* and *Buses*.

	<!--JavaScript-->var drivers = [
		{ DriverID: 1, FirstName: 'John', LastName: 'Smith', BusID: 2 },
		{ DriverID: 2, FirstName: 'Lizzy', LastName: 'Cook', BusID: 1 },
		{ DriverID: 3, FirstName: 'Brian', LastName: 'Hawkins', BusID: 3 }
	];

	var buses = [
		{ BusID: 1, Plates: '123456' },
		{ BusID: 2, Plates: 'AB-1234'  },
		{ BusID: 3, Plates: 'CD-9876' }
	];

The objects of the *Drivers* array have the *BusID* field, which binds these two arrays together. If the *Drivers* array takes on the role of the main grid data source, the *BusID* grid column displays the IDs of buses, which do not matter to a user. In this situation, it will be more convenient to display the bus license plates specified in the *Plates* field. For this purpose, the *Buses* array must be set as a lookup data source for the *BusID* grid column using the **lookup** | [dataSource](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/lookup/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/#dataSource') option. Then, the **valueExpr** option must be set to *"BusID"* indicating the field whose values should be replaced. These values will be replaced by the values of the field specified by the **displayExpr** option.

	<!--JavaScript-->$(function () {
		$("#gridContainer").dxDataGrid({
			dataSource: drivers,
			// ...
			columns: [
				// ...
				{ dataField: 'BusID', lookup: { dataSource: buses, valueExpr: 'BusID', displayExpr: 'Plates' } },
				// ...
			]
		});
	});

With this code applied, the *"BusID"* grid column contains the bus license plates instead of the bus IDs. Moreover, now the user can choose a plate number using the drop-down menu in a filter row cell to filter records, or a column cell to edit this cell. If these features are not required, assign *false* to the [allowFiltering](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering') or [allowEditing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowEditing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowEditing') column option correspondingly.