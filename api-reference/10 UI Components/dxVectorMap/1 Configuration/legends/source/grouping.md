---
id: dxVectorMap.Options.legends.source.grouping
type: String
notUsedInTheme: 
---
---
##### shortDescription
Specifies the type of the legend grouping.

---
The VectorMap's legend supports two grouping types.

- **color**        
Can be used if you have grouped map markers or areas in several differently-colored groups. For more information, refer to the layers's [colorGroupingField](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/colorGroupingField.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#colorGroupingField') and [colorGroups](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/colorGroups.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#colorGroups') property descriptions.

- **size**        
Available for markers of a bubble [type](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/type.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#type') only. Can be used if you have grouped bubble markers in several groups and specified a size for bubbles in each group. For more information, refer to the [sizeGroupingField](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/sizeGroupingField.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#sizeGroupingField') and [sizeGroups](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/sizeGroups.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#sizeGroups') property descriptions.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/AreaWithLabelsAndTwoLegends/"
}