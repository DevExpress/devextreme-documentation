If the list of [built-in summary types](/concepts/05%20Widgets/PivotGrid/040%20Summaries/20%20Predefined%20Summaries.md '/Documentation/Guide/Widgets/PivotGrid/Summaries/#Predefined_Summaries') does not contain an option satisfying your requirements, you can implement your own aggregate function. Assign it to the [calculateCustomSummary](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/calculateCustomSummary.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateCustomSummary') option and set the [summaryType](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryType.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType') option to *"custom"*. In this case, the function assigned to the **calculateCustomSummary** field will be called for each [fact](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/04%20Summary%20Values.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values') and the overall result will be used as a summary value. The example below shows how to implement the **variance** aggregation function.

    <!--JavaScript-->var pivotGridSettings = {
		//...
		dataSource: {
			//...
			fields: [{
				//...
				area: 'data',
				caption: 'Var',
				summaryType: 'custom',
				calculateCustomSummary: function (options) {
                    if (options.summaryProcess == 'start') {
                        options.totalValue = 0; //Sum
                        options.sum2 = 0; //Sum of squared values
                        options.n = 0;
                    }
                    if (options.summaryProcess == 'calculate') {
                        options.totalValue += options.value;
                        options.sum2 += Math.pow(options.value, 2);
                        options.n++;
                    }
                    if (options.summaryProcess == 'finalize') {
                        options.totalValue = options.sum2 - Math.pow(options.totalValue, 2) / options.n;
                        options.totalValue /= options.n - 1;
                    }
				}
			},
			//...
			]
		}
	};