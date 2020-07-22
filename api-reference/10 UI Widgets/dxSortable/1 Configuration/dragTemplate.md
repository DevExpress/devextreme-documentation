---
id: dxSortable.Options.dragTemplate
type: template
default: undefined
---
---
##### shortDescription
Specifies custom markup to be shown instead of the item being dragged.

##### param(dragInfo): Object
Information about the item being dragged.

##### field(dragInfo.fromIndex): Number
The item's original position.

##### field(dragInfo.itemData): any
The item's data.

##### field(dragInfo.itemElement): dxElement
#include draganddrop-ref-itemelementparam

##### param(containerElement): dxElement
A container in which the template should be rendered.

##### return: String | Element | jQuery
#include common-template-return-value

---
<!-- Description goes here -->