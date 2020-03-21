---
id: dxTreeView.expandItem(itemElement)
---
---
##### shortDescription
Expands an item found using its DOM node.

##### param(itemElement): Node
The item's DOM node.

##### return: Promise<void>
A Promise that is resolved after the TreeView expands the node and rejected if the node does't exists or is disabled. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---
#####See Also#####
- [Expand and Collapse Nodes](/concepts/05%20Widgets/TreeView/20%20Expand%20and%20Collapse%20Nodes/05%20Using%20the%20API.md '/Documentation/Guide/Widgets/TreeView/Expand_and_Collapse_Nodes/#Using_the_API')