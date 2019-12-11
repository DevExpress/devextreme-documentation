When you use the *bubble* series type, the series points are displayed as bubbles of different sizes. This series type is especially useful when you visualize a data set with four dimensions: the first two dimensions are indicated by coordinates on the axes, the third - by a color, and the fourth - by the size of the bubble.

![BubbleSeriesType ChartJS](/images/ChartJS/Bubble.png)

To use the *bubble* series type, set *'bubble'* to the **type** option of the series configuration object.

	<!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'bubble'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/concepts/20%20Data%20Visualization/10%20Charts/40%20Data%20Binding '/Documentation/Guide/Data_Visualization/Charts/Data_Binding/') topic.

[note] In addition to the argument and value fields, you should set the data source field that provides a size for bubbles. For this purpose, use the [sizeField](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/sizeField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BubbleSeries/#sizeField') option.

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

* **Bubble Color**	
A color from the chart [palette](/concepts/20%20Data%20Visualization/40%20Common/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Palettes') is used by default. Set a custom color using the series' [color](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BubbleSeries/#color') option. In addition, you can change the color of a bubble when it is hovered or selected using the **color** option of the [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BubbleSeries/hoverStyle/') or [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BubbleSeries/selectionStyle/') object, respectively.

* **Bubble Opacity**	
Specify the opacity of a bubble using the [opacity](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/opacity.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BubbleSeries/#opacity') option.

* **Bubble Label Options**	
Make bubble labels visible by setting the **visible** option of the series' [label](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/BubbleSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BubbleSeries/label/') object to *true*. For details on other label options, refer to the [Series Point Labels](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements/030%20Series%20Point%20Labels.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Series_Point_Labels') topic.

These and other options that can be set for series of the *bubble* type are explained in the [BubbleSeries](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/BubbleSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BubbleSeries/') Reference section. Set the required series options within the [series](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') object of the chart configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartslineandpointseriesbubble/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>