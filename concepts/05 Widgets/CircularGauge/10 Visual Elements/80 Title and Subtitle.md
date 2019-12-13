The **CircularGauge** can be displayed with a title and a subtitle. These elements usually contain general explanations about the data represented by the gauge. You can, however, place any kind of information in the gauge title and subtitle.

<img src="/Content/images/doc/19_2/ChartJS/CircularGaugeTitleSubtitle.png" alt="DevExtreme HTML5 JavaScript Gauges  CircularGaugeTitleSubtitle" style="display:block; margin:0 auto" />

To specify a gauge title and subtitle, use the [title](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/title/') and its nested [subtitle](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title/subtitle '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/title/subtitle/') options. Both these options accept either a string with the title/subtitle text:

    <!--JavaScript-->var gaugeOptions = {
        title: {
			text: 'Gauge Title',
			subtitle: 'Gauge Subtitle'
		}
    };

...or an object that configures more title/subtitle options.

	<!--JavaScript-->var gaugeOptions = {
		title: {
			text: 'Gauge Title',
			font: {
				size: 30,
				weight: 400
			},
			subtitle: {
				text: 'Gauge Subtitle',
				font: {
					size: 15,
					weight: 100
				}
			}
		}
    };

Several title options that can be set within the **title** and **subtitle** objects are categorized and listed below.

* **Location**    
You can place a title on any side of your gauge. For this purpose, use the [horizontalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title/horizontalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/title/#horizontalAlignment') and [verticalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title/verticalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/title/#verticalAlignment') options. Note that if these options are specified, the subtitle will be displayed at the same position as the title.

* **Font Settings**    
To customize the appearance of the text, define the font options within the [font](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/title/font/') configuration object.