The **PieChart** widget can be displayed with a title. These titles usually contain general explanations about the data represented by that chart. You can, however, place any kind of information in the chart title.

![PieChartTitle](/images/ChartJS/PieChartTitle.png)

To set a chart's title, use the [title](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/title/') option. If you do not need to change any title options except text, assign the required text directly to the **title** option, as it is demonstrated in the code below.

    <!--JavaScript-->var pieChartOptions = {
        // ...
        title: 'Area of Continents'
    };

In case you need to alter more options, set the title text to the [text](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title/text.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/title/#text') field within the **title** configuration object. Then, specify the required options using the same configuration object.

    <!--JavaScript-->var pieChartOptions = {
        // ...
        title: {
			text: 'Area of Continents',
			font: {
				size: 30,
				weight: 100
			}
		}
    };

Several title options that can be set within the **title** object are categorized and listed below.

* **Title Location**    
You can place a title to any side of the chart. For this purpose, use the [horizontalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title/horizontalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/title/#horizontalAlignment') and [verticalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title/verticalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/title/#verticalAlignment') options.

* **Font Settings**    
To customize the appearance of the title text, define the font options within the [font](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/title/font/') configuration object.

You can also configure the chart subtitle using the [subtitle](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title/subtitle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/title/subtitle/') object.