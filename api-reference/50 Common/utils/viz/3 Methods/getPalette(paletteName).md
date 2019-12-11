---
module: viz/palette
export: getPalette
---
---
##### shortDescription
Obtains the color sets of a predefined or registered palette.

##### param(paletteName): String
The palette name.

##### return: Object
The palette settings.

---
The returned value is an object of the following structure.

	<!--JavaScript-->{
		simpleSet: ['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69'], // for "Chart", "PieChart" and "BarGauge" 
		indicatingSet: ['#90ba58', '#eeba69', '#a37182'], // for "Chart", "PieChart" and "BarGauge"
		gradientSet: ['#78b6d9', '#eeba69'] // for "VectorMap"
	};

The built-in palettes are listed in the [Appearance Customization](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes') topic.