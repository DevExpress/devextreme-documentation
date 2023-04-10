---
default: undefined
isType: 
uid: viz\vector_map:dxVectorMapLegends
---
---
##### shortDescription
Configures map legends.

---
<!--
A legend is a supplementary map element that helps end-users identify a map area or a map marker. The VectorMap UI component can display several legends simultaneously. To configure legends, declare an array of objects and assign it to the **legends** property. Each object in this array specifies settings of one legend. These settings are described in this section.

Each legend requires the [source](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends/source '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/#source') property to be set. This property specifies whether it is areas or markers that must be accompanied with a legend. Learn more from the description of the **source** property.

A map legend contains several legend items. A legend item consists of a marker and a text. You can change the size of markers using the [markerSize](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends/markerSize.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/#markerSize') property. To provide texts for legend items, you need to implement the [customizeText](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends/customizeText.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/#customizeText') function.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/AreaWithLabelsAndTwoLegends/"
}
-->