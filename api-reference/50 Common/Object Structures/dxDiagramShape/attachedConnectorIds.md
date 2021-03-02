---
id: dxDiagramShape.attachedConnectorIds
type: Array<String>
---
---
##### shortDescription
Gets an array of attached connector identifiers.

---
When a user pastes or clones several items in a diagram, the control adds the items to the model one by one. For each added item, the [requestEditOperation](/Documentation/ApiReference/UI_Components/dxDiagram/Events/#requestEditOperation) event fires. In the event handler, you can access the processed item. However, if you call the [getItemById(id)](/Documentation/ApiReference/UI_Components/dxDiagram/Methods/#getItemByIdid) method to access an attached connector, you can get the `undefined`result if the item is not added to the model yet.