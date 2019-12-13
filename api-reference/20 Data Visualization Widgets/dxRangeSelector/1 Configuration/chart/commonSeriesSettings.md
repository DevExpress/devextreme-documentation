---
id: dxRangeSelector.Options.chart.commonSeriesSettings
type: dxChart_Options_commonSeriesSettings
---
---
##### shortDescription
An object defining the common configuration options for the chart’s series.

---
Use this object's properties to set the options for all chart series at once. These options include options common to all series types and options specific to certain series types. So if you have several series of one type, you can set options specific to this type. If you need to set an individual value for a common or type-specific option, use the corresponding **series** object within the **series** array. The values that are set individually override the corresponding common values.

For information on all the properties of the **commonSeriesSettings** configuration object, refer to its description in the **chartOptions** reference section: [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/'). Note that the **RangeSelector** widget may have its own default values for the **commonSeriesSettings** options. For instance, the **type** option is set to 'area' in the **RangeSelector** widget. In the **Chart** widget, this option is set to 'line' by default.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Range_Selector/DiscreteScale/"
}