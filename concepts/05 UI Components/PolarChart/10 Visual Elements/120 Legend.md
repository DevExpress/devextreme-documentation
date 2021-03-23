The PolarChart UI component can include a legend - an explanatory component that helps a user distinguish and identify series. Each series is represented by an item on the legend. An item marker identifies the series color. An item label displays the series title.

![Legend](/images/ChartJS/Polar_Legend.png)

To change the default legend appearance, use the properties of the [legend](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/legend '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/') configuration object. The following code demonstrates how to access it.

	<!--JavaScript-->var polarChartOptions = {
		legend: {
			// ...
		},
		// ...
	};

The following list provides an overview of the **legend** object properties.

* **Visibility**		
To change the legend's visibility, use the **legend**.[visible](/api-reference/10%20UI%20Components/BaseLegend/visible.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/#visible') property.

* **Location**		
To specify the location of the legend, use its [verticalAlignment](/api-reference/10%20UI%20Components/BaseLegend/verticalAlignment.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/#verticalAlignment') and [horizontalAlignment](/api-reference/10%20UI%20Components/BaseLegend/horizontalAlignment.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/#horizontalAlignment') properties. In addition, you can change the interval between the legend and neighboring chart elements using the [margin](/api-reference/10%20UI%20Components/BaseLegend/margin '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/margin/') property.

* **Border**		
Make the legend's border visible by setting the **visible** property of the legend's [border](/api-reference/10%20UI%20Components/BaseLegend/border '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/border/') object. In addition, you can change the border's width, corner radius and color, using the [width](/api-reference/10%20UI%20Components/BaseLegend/border/width.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/border/#width'), [cornerRadius](/api-reference/10%20UI%20Components/BaseLegend/border/cornerRadius.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/border/#cornerRadius') and [color](/api-reference/10%20UI%20Components/BaseLegend/border/color.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/border/#color') properties of the **border** configuration object.

* **Items Layout**		
Items can be placed in a row or a column. To specify how to arrange legend items, use the [orientation](/api-reference/10%20UI%20Components/BaseLegend/orientation.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/#orientation') property. There can also be several rows and columns in a legend. To set the number of rows and columns to be used, use the legend's [rowCount](/api-reference/10%20UI%20Components/BaseLegend/rowCount.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/#rowCount') and [columnCount](/api-reference/10%20UI%20Components/BaseLegend/columnCount.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/#columnCount') properties. These rows and columns must be placed within a legend separated by a space between each other, and from the legend's border. To specify the spacing parameters, use the legend's [rowItemSpacing](/api-reference/10%20UI%20Components/BaseLegend/rowItemSpacing.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/#rowItemSpacing'), [columnItemSpacing](/api-reference/10%20UI%20Components/BaseLegend/columnItemSpacing.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/#columnItemSpacing'), [paddingLeftRight](/api-reference/10%20UI%20Components/BaseLegend/paddingLeftRight.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/#paddingLeftRight') and [paddingTopBottom](/api-reference/10%20UI%20Components/BaseLegend/paddingTopBottom.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/#paddingTopBottom') properties. In addition, you can specify how item labels must be located relative to item markers. For this purpose, change the **legend**. [itemTextPosition](/api-reference/10%20UI%20Components/BaseLegend/itemTextPosition.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/#itemTextPosition') property.

* **Items Appearance**		
You can enlarge or shrink item markers. To do this, use the [markerSize](/api-reference/10%20UI%20Components/BaseLegend/markerSize.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/#markerSize') property. In addition, you can specify the required font for item labels. For this purpose, use the legend's [font](/api-reference/10%20UI%20Components/BaseLegend/font '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/font/') property, which represents an object that allows you to set font properties such as **color**, **opacity**, **family** and **size**.

* **Hover Mode**		
You can specify whether or not to highlight the corresponding series when a legend item is hovered over. To do this, use the legend's [hoverMode](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/legend/hoverMode.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/legend/#hoverMode') property.