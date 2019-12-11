A series point is a visual representation of a data point. In a pie chart, series points are displayed as circular sectors. The size of the sector depends on the value proportion of the series point relative to the other series points.

![PieChartSeriesPoints](/images/ChartJS/PieChartSeriesPoints.png)

Several point options that you can specify are categorized and listed as follows.

* **Appearance**    
By default, pie slices are displayed using the colors from the default palette. You can set a custom palette with the [palette](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/palette.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#palette') option. Alternatively, set a single color for all slices at once using the [color](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/#color') option.    
Direct the chart slices the way you want using the [segmentsDirection](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/segmentsDirection.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#segmentsDirection') option.

* **Border**    
Change the visibility of the slice borders using the **visible** option of the [border](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/border '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/border/') object. In addition, set a custom color and width using the border's **color** and **width** options.

* **Hover Options**    
The appearance of a pie slice is changed when it is hovered over. You can paint the hovered slice in another color, apply hatching to it and change the style of the slice border using the options of the [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/hoverStyle/') object.

* **Selection Options**    
Set a custom color, hatching and border settings for selected pie slices. For this purpose, define the corresponding options in the [selectionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/selectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/#selectionMode') object.

Series points can be accompanied with labels. For further information, refer to the [Series Point Labels](/concepts/05%20Widgets/PieChart/10%20Visual%20Elements/030%20Series%20Point%20Labels.md '/Documentation/Guide/Widgets/PieChart/Visual_Elements/#Series_Point_Labels') topic.
