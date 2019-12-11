If you use a predefined palette, you can still set a custom color for a particular series, range or area using the **color** option.

	<!--JavaScript-->var chartOptions = {
		series: [{
			color: 'red'
			//...
		}, {...}, ...]
    };

	var gaugeOptions = {
		rangeContainer: {
			ranges: [{
				color: 'red'
				//...
			}, {...}, ...]
        }
    };

	var vectorMapOptions = {
		layers: [{
			// ...
			customize: function (elements) {
				$.each(elements, function (i, element) {
					element.applySettings({ 
						// ...
					});
				});
			}
		}]
    };

[note] This approach cannot be used in **BarGauge**.