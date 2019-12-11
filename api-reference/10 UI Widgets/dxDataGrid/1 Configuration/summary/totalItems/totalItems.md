---
default: undefined
type: array
---
---
##### shortDescription
Specifies items of the total summary.

---
The total summary, which is located in the grid footer, provides a synopsis of all data contained in the grid. It contains several summary items. Each item displays a value that is a product of applying an aggregate function to the data of a specific column.

To specify the items of the total summary, declare an array of objects, each of which contains at least two fields: [column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column') and [summaryType](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType'). The **column** field specifies the identifier of the column that provides data for an aggregate function. The **summaryType** specifies the aggregate function to be applied. The following code snippet shows how to declare two summary items.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		summary: {
			totalItems: [{
				column: 'Age',
				summaryType: 'avg'
			}, {
				column: 'LastName',
				summaryType: 'count'
			}]
		}
    });

By default, a summary item is placed in the column that provides data for it. If you need to place it in another column, assign the identifier of this column to the [showInColumn](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/showInColumn.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#showInColumn') option.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgriddatasummariesgridtotals/" class="button orange small fix-width-155" style="margin-right: 5px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=Ru43cnfrqGM&index=40&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>