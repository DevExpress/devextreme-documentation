You can display an image in the background of **RangeSelector**. To do this, use the options within the **background**.[image](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/background/image '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/background/image/') object. Specify the URL of the required image using the **url** option. Then, choose where to place this image on your range selector using the **location** option.

	<!--JavaScript-->
	var rangeSelectorOptions = {
		// ...
		background: {
			image: {
				url: '/Content/images/doc/19_2/ChartJS/flight.png',
				location: 'center'
			}
		}
	};

In case your image does not cover the whole range selector's background, [set up a color](/concepts/05%20Widgets/RangeSelector/10%20Visual%20Elements/40%20Background/50%20Setting%20Up%20a%20Color.md '/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/#Background/Setting_Up_a_Color') for the uncovered area using the **background**.**color** option.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/ImageOnBackground/"
}
