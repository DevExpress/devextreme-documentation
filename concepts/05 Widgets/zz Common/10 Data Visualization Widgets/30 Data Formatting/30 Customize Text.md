When you need to customize text after (or instead of) applying a format, use the **customizeText** function. This function returns the final text. Its parameter contains data about the element whose text is being customized. The actual contents of this parameter depend on the element. For example, the following code customizes the text of the **Chart**'s [value axis labels](/concepts/05%20Widgets/Chart/20%20Axes/15%20Axis%20Labels.md '/Documentation/Guide/Widgets/Chart/Axes/Axis_Labels/') after applying a *'fixedPoint'* format.

	<!--JavaScript-->var data = [
        { quarter: 'QI', quantity: 26.252 },
        { quarter: 'QII', quantity: 26.5 },
        { quarter: 'QIII', quantity: 26.375 },
        { quarter: 'QIV', quantity: 25.75 }
    ];

	var chartOptions = {
		dataSource: data,
		// ...
		valueAxis: {
            // ...
			label: {
				format: {
                    type: 'fixedPoint',
				    precision: 2
                },
				customizeText: function (data) {
					return data.valueText + 'ml' ;
				}
			}
		}
	};

![Custom Text](/images/ChartJS/FormattingCustomizeText.png)

When providing a custom text for tooltips, use the **customizeTooltip** function instead of **customizeText**. This function must return an object wherein the required text is assigned to the *'text'* field. In the following code, the **customizeTooltip** function combines the formatted value and argument of a point.

    <!--JavaScript-->var chartOptions = {
		// ...
		tooltip: {
            enabled: true,
            format: { 
                type: 'fixedPoint',
                precision: 2
            },
            argumentFormat: {
                skeleton: 'Md'
            },
            customizeTooltip: function (data) {
                return { 
                    text: data.valueText + ' on ' + data.argumentText
                };
            }
        }
	};

![Custom Text with Argument Value](/images/ChartJS/FormattingCustomizeTextWithArgumentNewTooltip.png)