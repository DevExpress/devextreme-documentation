---
dep: ..\layers\sizeGroups.md
default: undefined
type: Array
---
---
##### shortDescription
Allows you to display [bubbles](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#type') with similar attributes in the same size.

---
If you have specified the [field that provides marker-sizing data](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/sizeGroupingField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#sizeGroupingField'), you need to specify groups into which this data must be classified. For this purpose, assign an array of numbers to the [sizeGroups](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/sizeGroups.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#sizeGroups') option. Each pair of numbers in this array defines a range of data values.

For example, consider that the **sizeGroups** array contains four items: [0, 1, 2, 3]. This array specifies three ranges, or groups: 0-1, 1-2 and 2-3. Thus, data values will be split up into three groups. Each group will be assigned a size correlating with the group values. This size will be calculated automatically taking into account the [minSize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/minSize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#minSize') and [maxSize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/maxSize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#maxSize') values. Markers of those data values that does not match neither group will have a default size.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapbubblemarkers/"
}