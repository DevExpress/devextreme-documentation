---
default: undefined
type: String | Number
---
---
##### shortDescription
Specifies the group summary item whose values must be used to sort groups.

---
The **summaryItem** option accepts one of the following values.

- The [name](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/name.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#name') of a summary item. The following code sorts groups according to the values of the *'Average Age Group Summary'* item.	

		<!--JavaScript-->$("#gridContainer").dxDataGrid({
			// ...
			summary: {
				groupItems: [{
					column: 'Age',
					summaryType: 'avg',
					name: 'Average Age Group Summary'
				}]
			},
			sortByGroupSummaryInfo: [{
				summaryItem: 'Average Age Group Summary'
			}]
		});
- The index of a summary item in the [groupItems](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/') array. The following code sorts groups according to the values of the group summary item that has index 0.	

		<!--JavaScript-->$("#gridContainer").dxDataGrid({
			// ...
			summary: {
				groupItems: [{
					column: 'Income',
					summaryType: 'min'
				}]
			},
			sortByGroupSummaryInfo: [{
				summaryItem: 0
			}]
		});		
- A summary type. In this case, the grid will use the first item from the **groupItems** array whose [summaryType](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/summaryType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#summaryType') option matches the **summaryItem** option. For example, the following code sorts groups according to the values of the group summary item whose **column** option is *'Income'*.		

		<!--JavaScript-->$("#gridContainer").dxDataGrid({
			// ...
			summary: {
				groupItems: [{
					column: 'Age',
					summaryType: 'avg'
				}, {
					column: 'Income',
					summaryType: 'min'
				}, {
					column: 'Tasks',
					summaryType: 'min'
				}]
			},
			sortByGroupSummaryInfo: [{
				summaryItem: 'min'
			}]
		});
- The [name](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/name.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#name'), [data field](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField') or [caption](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/caption.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#caption') of a column. In this case, the grid will use the first item from the **groupItems** array whose [column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/column.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#column') option matches the **summaryItem** option. For example, the following code declares two group summary items with identical values to the **column** option. However, groups will be sorted only according to the values of the group summary item whose **summaryType** option equals *'min'*, because this item is declared before the other one.		

		<!--JavaScript-->$("#gridContainer").dxDataGrid({
			// ...
			summary: {
				groupItems: [{
					column: 'Income',
					summaryType: 'min'
				},{
					column: 'Income',
					summaryType: 'avg'
				}]
			},
			sortByGroupSummaryInfo: [{
				summaryItem: 'Income'
			}]
		});