---
id: dxVectorMap.Options.legends
type: Array<Object>
inherits: BaseLegend
default: undefined
---
---
##### shortDescription
Configures map legends.

---
A legend is a supplementary map element that helps end-users identify a map area or a map marker. The **VectorMap** widget can display several legends simultaneously. To configure legends, declare an array of objects and assign it to the **legends** option. Each object in this array specifies settings of one legend. These settings are described in this section.

Each legend requires the [source](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends/source '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#source') option to be set. This option specifies whether it is areas or markers that must be accompanied with a legend. Learn more from the description of the **source** option.

A map legend contains several legend items. A legend item consists of a marker and a text. You can change the size of markers using the [markerSize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends/markerSize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#markerSize') option. To provide texts for legend items, you need to implement the [customizeText](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends/customizeText.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#customizeText') function.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/AreaWithLabelsAndTwoLegends/"
}