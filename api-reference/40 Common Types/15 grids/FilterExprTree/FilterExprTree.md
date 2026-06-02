---
id: FilterExprTree
module: common/grids
export: FilterExprTree
---
---
##### shortDescription
A complex filter expression in a flat data structure.

---
**FilterExprTree** stores a filter expression tree in a flat list instead of a hierarchical structure. A flat data structure ensures broader AI service compatibility for the `filterValue` AI Assistant command.

This object includes the following fields:

- **rootId**: The ID of the root [FilterExprNode]({basewidgetpath}/FilterExprNode/). This node is evaluated first. **rootId** must match the **id** value of an object in the **nodes** array.
- **nodes**: An array of [FilterExprNode]({basewidgetpath}/FilterExprNode/) objects. Each node must have a unique `id`.
