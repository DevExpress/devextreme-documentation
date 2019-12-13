---
id: dxTreeMap.Options.childrenField
type: String
default: 'items'
---
---
##### shortDescription
Specifies the name of the data source field that provides nested items for a group. Applies to hierarchical data sources only.

---
In hierarchical data sources, objects normally have at least one nested array of objects. To specify the field providing this array, assign its name to the **childrenField** option. Such hierarchical objects will be visualized by groups of tiles.

#####See Also#####
- [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource') - specifies the origin of data for the widget.
- [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/valueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#valueField') - specifies the data source field that provides values for tiles.
- [labelField](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/labelField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#labelField') - specifies the data source field that provides texts for tile and group labels.