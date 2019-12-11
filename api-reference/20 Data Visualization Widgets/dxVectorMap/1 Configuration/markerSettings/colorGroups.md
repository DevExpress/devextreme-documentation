---
dep: ..\layers\colorGroups.md
default: undefined
type: Array
---
---
##### deprecated
Use the **layers** | **colorGroups** option instead.

##### shortDescription
Allows you to paint markers with similar attributes in the same color.

---
If you have specified the [field that provides marker-coloring data](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/colorGroupingField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#colorGroupingField'), you need to specify groups into which this data must be classified. For this purpose, assign an array of numbers to the [colorGroups](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/colorGroups.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#colorGroups') option. Each pair of numbers in this array defines a range of data values.

For example, consider that the **colorGroups** array contains four items: [0, 1, 2, 3]. This array specifies three ranges, or groups: 0-1, 1-2 and 2-3. Thus, data values will be split up into three groups. Each group will be assigned a color from the [palette](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/palette.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#palette') in order to paint the corresponding markers. Markers of those data values that do not match either group will be drawn in a default color.