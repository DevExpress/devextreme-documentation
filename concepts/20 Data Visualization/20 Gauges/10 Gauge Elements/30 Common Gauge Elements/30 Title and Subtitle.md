Gauge widgets can be displayed with a title and a subtitle. These elements usually contain general explanations about the data represented by the gauge. You can, however, place any kind of information in the gauge title and subtitle.

<img src="/Content/images/doc/16_1/ChartJS/GaugesTitleSubtitle.png" alt="ChartJS GaugesTitleSubtitle" style="display:block; margin:0 auto" />

To specify a gauge title and subtitle, use the **title** and its nested **subtitle** options. Both these options accept either a string with the title/subtitle text:

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
You can place a title on any side of your gauge. For this purpose, use the **horizontalAlignment** and **verticalAlignment** options. Note that if this option is specified, the subtitle will be displayed at the same position as the title.

* **Font Settings**    
To customize the appearance of the text, define the font options within the **font** configuration object.