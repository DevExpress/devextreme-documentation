In order to provide the best usability, data in a grid is divided into pages containing a reasonable number of records. This feature noticeably improves the performance of the **DataGrid** widget. Paging settings are specified by the fields of the [paging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/paging '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/') configuration object.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		paging: {
			// Paging settings are specified here
		}
    });

To specify the number of records one page contains, assign an integer number to the **pageSize** field of this object.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		paging: {
			pageSize: 10
		}
    });

A grid can start displaying data from a particular page. To specify the page, use the **pageIndex** field of the **paging** object. Note that the page index is zero-based. Thus, page 1 has index 0, page 2 - index 1, etc. For example, the following code specifies the page 10 to be displayed initially.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		paging: {
			pageIndex: 9
		}
    });

When you do not need paging, disable it by setting the **paging** | **enabled** field to *false*. Note that in this case, all data will be loaded at once, which may affect grid performance.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		paging: {
			enabled: false
		}
    });

In the following subtopics, you will learn to configure and use scrolling and pager navigation.