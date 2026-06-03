---
id: FilterExprTree
module: common/grids
export: FilterExprTree
---
---
##### shortDescription
A complex filter expression in a flat data structure.

---
**FilterExprTree** stores a filter expression tree as a flat list rather than a hierarchical structure. This flat structure improves compatibility with AI services for the AI Assistant's `filterValue` command.

This object includes the following fields:

- **rootId**: The ID of the root [FilterExprNode]({basewidgetpath}/FilterExprNode/). This node is evaluated first. **rootId** must match the **id** value of an object in the **nodes** array.
- **nodes**: An array of [FilterExprNode]({basewidgetpath}/FilterExprNode/) objects. Each node must have a unique **id**.
