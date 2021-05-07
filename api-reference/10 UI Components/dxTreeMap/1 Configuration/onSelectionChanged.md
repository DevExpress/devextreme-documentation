---
id: dxTreeMap.Options.onSelectionChanged
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a node is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): dxTreeMap
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.node): dxTreeMapNode
The node whose selection state has been changed; described in the [Node](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/') section.

---
To identify whether the selection has been applied or canceled, call the node's [isSelected()](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node/3%20Methods/isSelected().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#isSelected') method. To identify whether the clicked node is a single tile or a group of tiles, use the node's [isLeaf()](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node/3%20Methods/isLeaf().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#isLeaf') method.