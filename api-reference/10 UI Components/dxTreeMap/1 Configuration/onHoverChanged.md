---
id: dxTreeMap.Options.onHoverChanged
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed after the pointer enters or leaves a node.

##### param(e): HoverChangedEvent
Information about the event.

---
To identify whether the pointer has entered or left the node, call the node's [isHovered()](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node/3%20Methods/isHovered().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#isHovered') method. To identify whether the node is a single tile or a group of tiles, use the node's [isLeaf()](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node/3%20Methods/isLeaf().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#isLeaf') method.