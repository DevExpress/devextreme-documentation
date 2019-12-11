---
default: undefined
type: Array
---
---
##### shortDescription
Specifies items of the group summary.

---
The group summary provides a synopsis of a group of data. Groups of data are formed in the process of [grouping](/concepts/05%20Widgets/DataGrid/040%20Grouping/010%20Grouping.md '/Documentation/Guide/Widgets/DataGrid/Grouping/'). The group summary contains several items. Each item displays a value that is a product of applying an aggregate function to a group of data.

To specify the items of the group summary, declare an array of objects, each of which contains at least two fields: [column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/column.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#column') and [summaryType](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/summaryType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#summaryType'). The **column** field specifies the identifier of the column that provides data for an aggregate function. The **summaryType** specifies the aggregate function to be applied. The following code snippet shows how to declare two summary items.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		summary: {
			groupItems: [{
				column: 'Age',
				summaryType: 'avg'
			}, {
				column: 'LastName',
				summaryType: 'count'
			}]
		}
	});

A group summary item may be located either in the group row or the group footer. By default, the group row holds all summary items. To locate a summary item in the group footer, set the [showInGroupFooter](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/showInGroupFooter.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#showInGroupFooter') option of this item to *true*.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgriddatasummariesgroupsummarytotals/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=Ru43cnfrqGM&index=40&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>