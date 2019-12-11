---
dep: ..\layers\colorGroupingField.md
default: undefined
type: String
---
---
##### deprecated
Use the **layers** | **colorGroupingField** option instead.

##### shortDescription
Specifies the field that provides data to be used for coloring areas.

---
If you need for the color of a specific map area to depend on the value of one of its  [attributes](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Area/3%20Methods/attribute(name).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/Methods/#attributename'), assign the name of this attribute to the **colorGroupingField** option. The attribute must contain numeric values. After that, specify groups into which attribute values must be classified. For this purpose, assign an array to the [colorGroups](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/colorGroups.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#colorGroups') option. Each group in this array will be assigned a color from the [palette](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/palette.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#palette').

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormappalette/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>