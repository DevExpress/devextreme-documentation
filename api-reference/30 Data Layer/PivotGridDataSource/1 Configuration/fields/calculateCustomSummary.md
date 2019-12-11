---
type: function(options)
---
---
##### shortDescription
Allows you to use a custom aggregate function to calculate the summary values. Cannot be used for the [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/') store type.

##### param(options): object
Summary information.

##### field(options.summaryProcess): string
Indicates the stage of the summary value calculation; possible values are <i>'start'</i>, <i>'calculate'</i> or <i>'finalize'</i>.

##### field(options.value): any
The data value for aggregation.

##### field(options.totalValue): any
The resulting summary value.

---
If [predefined aggregate functions](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryType.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType') do not meet your requirements, implement a custom one and assign it to the **calculateCustomSummary** option. If the **summaryType** property is set to *'custom'*, this function will be called for each value from the data field.

The calculation of a summary value is conducted in several phases. Usually, you need to initialize **totalValue** on start. Then, you modify **totalValue** in the calculation phase. In the final phase, you adjust **totalValue**. To identify the current phase, use the **summaryProcess** field of the object passed as a parameter.

The following code demonstrates a general structure of the **calculateCustomSummary** function.

	<!--JavaScript-->var pivotGridOptions = {
        dataSource: {
            //...
            fields: [{
                //...
                summaryType: 'custom',
                calculateCustomSummary: function (options) {
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
            },
            //...
			]
		}
	}