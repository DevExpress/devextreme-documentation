When data is taking noticeable time to be loaded, which may occur if you use a remote data source, **DataGrid** displays a load panel that notifies the user of the data loading process. 

![DevExtreme DataGrid LoadPanel](/images/DataGrid/LoadPanel.png)

As you can see in the image above, the load panel consists of a loading indicator, a pane and a text. You can configure the load panel using [loadPanel](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/loadPanel '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/') object properties.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		loadPanel: {
			// Load panel is configured here
		}
    });

The following load panel features can be changed using the properties of the **loadPanel** object.

* **Availability**		
By default, the load panel is enabled for remote data sources only. To enable it for any data source, regardless whether it is local or remote, assign *true* to the [enabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/loadPanel/enabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/#enabled') property. To disable the load panel completely, assign *false* to the same property.

* **Pane Visibility**		
The load panel pane is visible by default. If it is not required, hide it by assigning *false* to the [showPane](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/loadPanel/showPane.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/#showPane') property.

* **Loading Indicator Options**		
By default, the loading indicator is visible. If you require hiding it, assign *false* to the [showIndicator](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/loadPanel/showIndicator.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/#showIndicator') property. Additionally, you can specify the image to be displayed as a loading indicator. For this purpose, assign the URL of this image to the [indicatorSrc](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/loadPanel/indicatorSrc.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/#indicatorSrc') property.

* **Text**		
To change the text displayed by the load panel, use its [text](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/loadPanel/text.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/#text') property.

* **Size**		
The size of the load panel can be changed using its [width](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/loadPanel/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/#width') and [height](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/loadPanel/height.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/#height') properties.

Since the grid load panel is practically the DevExtreme [LoadPanel](/api-reference/10%20UI%20Widgets/dxLoadPanel '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/') widget, you can specify any option belonging to this widget in the **loadPanel** object.