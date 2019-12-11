---
type: function(options)
---
---
##### shortDescription
Allows you to use a custom aggregate function to calculate the value of a summary item.

##### param(options): Object
Summary information.

##### field(options.component): Object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(options.name): String
The <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#name">name</a> of the summary item.

##### field(options.summaryProcess): String
Indicates the stage of the summary item calculation; equals <i>'start'</i>, <i>'calculate'</i> or <i>'finalize'</i>.

##### field(options.value): any
If the custom summary item is calculated by a <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column">column</a>, this field contains the value from a cell of this column. Otherwise, it contains a whole object from the data source.

##### field(options.totalValue): any
The resulting summary item value.

---
If [predefined aggregate functions](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType') do not meet your requirements, implement a custom one and assign it to the **calculateCustomSummary** option. This function will be called for each summary item whose **summaryType** property is set to *'custom'*.

When implementing the function, you can access useful information through the object passed to this function as its argument. Use the **name** field of this object to identify the summary item. 

To access data, use the **value** field. This data depends on whether you have set the [column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column') field of the summary item or not. If you have, the **value** field contains the value from a cell of this column. Otherwise, it contains a whole object from the data source.

The calculation of a summary item value is conducted in several phases. Usually, you need to initialize **totalValue** on start. Then, you modify **totalValue** in the calculation phase. In the final phase, you adjust **totalValue**. To identify the current phase, check the value of the **summaryProcess** field.

The following code demonstrates a general structure of the **calculateCustomSummary** function. In this code, the [totalItems](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/') array contains two custom summary items. Within the **calculateCustomSummary** function, the **name** field identifies each summary item. Actions that follow depend on the calculation stage, which is obtained using the **summaryProcess** field.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		summary: {
			totalItems: [
				{ summaryType: 'custom', name: 'CustomSummary1' },
				{ summaryType: 'custom', name: 'CustomSummary2' }
			],
			calculateCustomSummary: function (options) {
				// Calculating "CustomSummary1"
				if (options.name == 'CustomSummary1') {
					if (options.summaryProcess == 'start') {
						// Initializing "totalValue" here
					}
					if (options.summaryProcess == 'calculate') {
						// Modifying "totalValue" here
					}
					if (options.summaryProcess == 'finalize') {
						// Assigning the final value to "totalValue" here
					}
				}

				// Calculating "CustomSummary2"
				if (options.name == 'CustomSummary2') {
					// ...
					// Same "if" statements here
				}
			}
		}
    });

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgriddatasummariescustomsummarytotals/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>