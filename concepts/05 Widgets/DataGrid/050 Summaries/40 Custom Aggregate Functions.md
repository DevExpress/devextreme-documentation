If built-in [aggregate functions](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType') do not satisfy your needs, you can use your own one by setting the [summaryType](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType') option to 'custom'. With this setting, the function assigned to the [calculateCustomSummary](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/calculateCustomSummary.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/#calculateCustomSummary') field of the **summary** object will be used for counting the summary item. The example below shows how to implement the **variance** aggregation function.

    <!--JavaScript-->var sum2,
	    n;
	$("#gridContainer").dxDataGrid({
		// ...
		summary: {
			totalItems: [{
				column: 'val',
				summaryType: 'custom',
				name: 'variance'
			}],
			calculateCustomSummary: function (options) {
				if (options.name == 'variance') {
					if (options.summaryProcess == 'start') {
						options.totalValue = 0; //sum
						sum2 = 0; //sum of squared values
						n = 0;
					}
					if (options.summaryProcess == 'calculate') {
						options.totalValue += options.value;
						sum2 += Math.pow(options.value, 2);
						n++;
					}
					if (options.summaryProcess == 'finalize') {
						options.totalValue = sum2 - Math.pow(options.totalValue, 2) / n;
						options.totalValue /= n - 1;
					}
				}
			}
		}
	});

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgriddatasummariescustomsummarytotals/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>