---
uid: common/grids:RowDragging.dragTemplate
type: template | undefined
default: undefined
---
---
##### shortDescription
Specifies custom markup to be shown instead of the item being dragged.

##### param(dragInfo): Object
Information about the item being dragged.

##### field(dragInfo.itemData): any
The item's data.

##### field(dragInfo.itemElement): DxElement
#include draganddrop-ref-itemelementparam

##### param(containerElement): DxElement
A container in which the template should be rendered.

##### return: String | Element | jQuery
#include common-template-return-value

---
<!--
&lt;!-- Description goes here --&gt;
-->