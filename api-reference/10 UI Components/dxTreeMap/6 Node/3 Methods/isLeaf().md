---
id: dxTreeMapNode.isLeaf()
---
---
##### shortDescription
Indicates whether the node is visualized by a tile or a group of tiles.

##### return: Boolean
If **true**, the node is a tile; if **false**, the node is a group of tiles.

---
[note]When a node is being drilled down/up, its visual representation is converted from tile to group and back. Thus, the **isLeaf()** method may return different values for the same node at different stages of the application flow.