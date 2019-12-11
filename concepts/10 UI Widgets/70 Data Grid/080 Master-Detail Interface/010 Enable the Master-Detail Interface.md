To enable the master-detail interface, assign *true* to the [masterDetail](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/masterDetail '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/') | [enabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/masterDetail/enabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#enabled') option. This will display a **master-detail expand button** on the left side of each row. The master-detail expand button is used to display the detail section of a master row. Unless you [define a detail section markup](/concepts/10%20UI%20Widgets/70%20Data%20Grid/080%20Master-Detail%20Interface/020%20Define%20Detail%20Section%20Markup.md '/Documentation/Guide/UI_Widgets/Data_Grid/Master-Detail_Interface/#Define_Detail_Section_Markup'), the detail section is empty.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		masterDetail: {
			enabled: true
		}
	});

![](/Content/images/doc/16_1/DataGrid/MasterDetail_Empty.png)