---
id: dxTreeMap.Options.labelField
type: String
default: 'name'
---
---
##### shortDescription
Specifies the name of the [data source](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource') field that provides texts for tile and group labels.

---
Each tile or group of tiles is accompanied by a text label. Usually, a label displays the name of the tile or the group. However, you can put any desired text into it. For this purpose, call the [label(label)](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/label(label).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#labellabel') method of the node whose label must be changed. You can call this method, for example, when all nodes are [initialized](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/onNodesInitialized.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onNodesInitialized') or when they are [being rendered](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/onNodesRendering.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onNodesRendering').

If you need to change the appearance of all labels, use the **tile**.[label](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/tile/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/label/') and **group**.[label](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/group/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/group/label/') objects. To change the appearance of a particular label, use the [customize(options)](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/customize(options).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#customizeoptions') function of the node to which the label belongs.

#####See Also#####
- [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource') - specifies the origin of data for the widget.
- [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/valueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#valueField') - specifies the data source field that provides values for tiles.
- [childrenField](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/childrenField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#childrenField') - specifies the data source field that provides nested items for a group.