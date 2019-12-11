To obtain the color sets of a registered palette, use the **DevExpress.viz.getPalette(paletteName)** method. This method returns an object of the following type.

	<!--JavaScript-->{
		simpleSet: ['#60a69f', '#78b6d9', ...], // palette colors for "Chart", "PieChart" and "BarGauge"
		indicatingSet: ['#90ba58', '#eeba69', ...], // palette colors for "CircularGauge" and "LinearGauge"
		gradientSet: ['#78b6d9', '#eeba69'] // palette colors for "VectorMap"
	};