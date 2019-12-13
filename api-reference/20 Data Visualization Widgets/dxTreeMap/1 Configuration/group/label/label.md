---
id: dxTreeMap.Options.group.label
type: Object
---
---
##### shortDescription
Configures the group labels.

---
Each tile or the header of a group contains a text label identifying what this tile or group represents. You can change the font of group labels or their visibility using the fields of the **group**.**label** object. The same properties of tile labels can be changed using the **tile**.[label](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/tile/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/label/') object.

To customize a specific label, use the [customize(options)](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/customize(options).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#customizeoptions') method of the node to which the label belongs.

[note]If the area occupied by a tile or a group header is too small to fit a label in it, the label will not be displayed.

#####See Also#####
- [labelField](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/labelField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#labelField') - specifies the data source field that provides texts for tile and group labels.