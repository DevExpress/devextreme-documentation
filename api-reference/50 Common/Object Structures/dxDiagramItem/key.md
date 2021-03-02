---
id: dxDiagramItem.key
type: Object
---
---
##### shortDescription
Gets the item's key from a data source.

---
If a user removes a shape and then undoes the action, the Diagram inserts the shape back and generates a **new GUID** for its **key** value. If you specify key values manually, subscribe to the **onInserting** data source event to assign the key values.