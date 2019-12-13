---
id: dxTreeMapNode.isHovered()
---
---
##### shortDescription
Indicates whether the node is in the hover state or not.

##### return: Boolean
**true** if the node is in the hover state; **false** otherwise.

---
[note]When the user pauses on a group, the group changes its style. The tiles belonging to that group also change their style. However, the **isHovered()** method of the tiles will return **false**, although visually they have entered the hover state.