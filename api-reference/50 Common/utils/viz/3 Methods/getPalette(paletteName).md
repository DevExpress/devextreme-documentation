---
##### shortDescription
Obtains the color sets of a predefined or registered palette.

##### param(paletteName): string
The palette name.

##### return: object
The palette settings.

---
The returned value is an object of the following structure.

	<!--JavaScript-->{
		simpleSet: ['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69'], // for "Chart", "PieChart" and "BarGauge" 
		indicatingSet: ['#90ba58', '#eeba69', '#a37182'], // for "CircularGauge" and "LinearGauge"
		gradientSet: ['#78b6d9', '#eeba69'] // for "VectorMap"
	};

The built-in palettes are listed in the [Appearance Customization](/concepts/20%20Data%20Visualization/40%20Common/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Palettes') topic.