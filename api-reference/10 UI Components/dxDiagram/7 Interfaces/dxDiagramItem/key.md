---
id: dxDiagramItem.key
type: Object
---
---
##### shortDescription
Gets the item's key from a data source.

---
If a user removes an item and then undoes the action, the Diagram inserts the item back and generates a **new GUID** for its **key** value. A new GUID is also generated for pasted and cloned items. If you specify key values (IDs in a data source) manually, subscribe to the **onInserting** data source event to assign the values.