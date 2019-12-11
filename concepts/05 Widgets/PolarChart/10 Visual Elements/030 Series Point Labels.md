Each [series point](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/020%20Series%20Points/10%20Series%20Points.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Points') can be accompanied by a text label representing data related to the point. These are series point labels. For series of different types, points represent different kinds of data, thus the corresponding point labels can carry a point's value, argument or both. If required, you can also make a label display custom information.

![Point Labels](/images/ChartJS/Polar_SeriesLabels.png)

To change the default label appearance, use options of the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/') object. This object should be defined within the [series](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/010%20Series.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series') whose labels must be customized. If you need to provide the same options for point labels in all series in the chart, define the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/label/') object within the **commonSeriesSettings** configuration object.

	<!--JavaScript-->var polarChartOptions = {
        // ...
		commonSeriesSettings: {
			label: {
				// Common settings for all series
			}
		},
		series: {
			label: {
				// Settings for an individual series
			}
		}
	};

The following list provides an overview of the **label** object options.

* **Visibility**		
To make point labels visible, set the **label** object's [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/#visible') property to _true_. If there are too many labels and they are not required to be shown all together, you can set a maximum for the count of labels that can be shown. For this purpose, use the [maxLabelCount](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/maxLabelCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#maxLabelCount') property of a particular series or of the **commonSeriesSettings** object.

* **Arrangement**		
If required, you can rotate labels using the [rotationAngle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label/rotationAngle.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/#rotationAngle') property. For bar- and stacked bar series, place labels inside the bar. For this purpose, set the [position](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label/position.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/#position') property to the _inside_ value.

* **Text Customization and Formatting**			
Labels represent point values by default. You can change the way these values are shown. For this purpose, use the [format](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/#format') label property. If required, you can set a custom text to be shown by labels. For this purpose, assign a function returning the text to the [customizeText](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label/customizeText.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/#customizeText') property of the **label** object. For details on label formatting, refer to the [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/') section.

* **Font Settings**			
To specify the required font settings for a label text, use properties of the [font](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/font/') object, defining it within the **label** object.

* **Appearance**		
By default, labels are painted in the color of the series whose points they represent. You can set a custom background color for labels. For this purpose, use the [backgroundColor](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label/backgroundColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/#backgroundColor') property of the **label** object. In addition, you can make a label border visible and set up its properties, using the [border](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label/border '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/border/') object. To show labels connected to their points, even when the points are not visible, use connectors. The connector joins a label with its point or a place where the point should be. To make connectors visible, define the [connector](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label/connector '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/connector/') object within the **label** object and set its **visible** property to _true_. If required, you can change the connector's color and width using the corresponding properties of the **connector** object.