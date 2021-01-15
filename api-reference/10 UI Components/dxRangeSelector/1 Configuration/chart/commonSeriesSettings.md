---
id: dxRangeSelector.Options.chart.commonSeriesSettings
type: dxChart_Options_commonSeriesSettings
---
---
##### shortDescription
An object defining the common configuration properties for the chart’s series.

---
Use this object's properties to set the properties for all chart series at once. These properties include properties common to all series types and properties specific to certain series types. So if you have several series of one type, you can set properties specific to this type. If you need to set an individual value for a common or type-specific property, use the corresponding **series** object within the **series** array. The values that are set individually override the corresponding common values.

For information on all the properties of the **commonSeriesSettings** configuration object, refer to its description in the **chartOptions** reference section: [commonSeriesSettings](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/'). Note that the **RangeSelector** UI component may have its own default values for the **commonSeriesSettings** properties. For instance, the **type** property is set to 'area' in the **RangeSelector** UI component. In the **Chart** UI component, this property is set to 'line' by default.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Range_Selector/DiscreteScale/"
}