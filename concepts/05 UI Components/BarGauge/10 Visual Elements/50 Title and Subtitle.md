The **BarGauge** can be displayed with a title and a subtitle. These elements usually contain general explanations about the data represented by the gauge. You can, however, place any kind of information in the gauge title and subtitle.

<img src="/images/ChartJS/BarGaugeTitleSubtitle.png" alt="DevExtreme HTML5 JavaScript Gauges dxBarGauge BarGauge Title Subtitle" style="display:block; margin:0 auto" />

To specify a gauge title and subtitle, use the [title](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/title '/Documentation/ApiReference/UI_Components/dxBarGauge/Configuration/title/') and its nested [subtitle](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/title/subtitle '/Documentation/ApiReference/UI_Components/dxBarGauge/Configuration/title/subtitle/') properties. Both these properties accept either a string with the title/subtitle text:

    <!--JavaScript-->var gaugeOptions = {
        title: {
			text: 'Gauge Title',
			subtitle: 'Gauge Subtitle'
		}
    };

...or an object that configures more title/subtitle properties.

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

Several title properties that can be set within the **title** and **subtitle** objects are categorized and listed below.

* **Location**    
You can place a title on any side of your gauge. For this purpose, use the [horizontalAlignment](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/title/horizontalAlignment.md '/Documentation/ApiReference/UI_Components/dxBarGauge/Configuration/title/#horizontalAlignment') and [verticalAlignment](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/title/verticalAlignment.md '/Documentation/ApiReference/UI_Components/dxBarGauge/Configuration/title/#verticalAlignment') properties. Note that if these properties are specified, the subtitle will be displayed at the same position as the title.

* **Font Settings**    
To customize the appearance of the text, define the font properties within the [font](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/title/font '/Documentation/ApiReference/UI_Components/dxBarGauge/Configuration/title/font/') configuration object.