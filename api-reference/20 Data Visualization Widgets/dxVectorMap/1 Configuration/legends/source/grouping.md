---
id: dxVectorMap.Options.legends.source.grouping
type: String
notUsedInTheme: 
---
---
##### shortDescription
Specifies the type of the legend grouping.

---
The **VectorMap**'s legend supports three grouping types.

- **color**        
Can be used if you have grouped map markers or areas in several differently-colored groups. For more information, refer to the layers's [colorGroupingField](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/colorGroupingField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#colorGroupingField') and [colorGroups](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/colorGroups.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#colorGroups') option descriptions.

- **size**        
Available for markers of a bubble [type](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#type') only. Can be used if you have grouped bubble markers in several groups and specified a size for bubbles in each group. For more information, refer to the [sizeGroupingField](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/sizeGroupingField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#sizeGroupingField') and [sizeGroups](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/sizeGroups.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#sizeGroups') option descriptions.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/AreaWithLabelsAndTwoLegends/"
}