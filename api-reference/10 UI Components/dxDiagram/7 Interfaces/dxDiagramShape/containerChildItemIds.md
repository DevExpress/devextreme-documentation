---
id: dxDiagramShape.containerChildItemIds
type: Array<String>
---
---
##### shortDescription
Gets identifiers of shapes stored in the container.

---

Use the **containerChildItemIds** property to get identifiers of shapes stored in a `horizontalContainer` or `verticalContainer` shape. If the container stores no shapes or the shape is not a container, the property returns an empty string 

When a user pastes or clones several items in a diagram, the control adds the items to the model one by one. For each added item, the [requestEditOperation](/api-reference/10%20UI%20Components/dxDiagram/4%20Events/requestEditOperation.md '/Documentation/ApiReference/UI_Components/dxDiagram/Events/#requestEditOperation') event fires. In the event handler, you can access the processed item. However, if you call the [getItemById(id)](/api-reference/10%20UI%20Components/dxDiagram/3%20Methods/getItemById(id).md '/Documentation/ApiReference/UI_Components/dxDiagram/Methods/#getItemByIdid') method to access a container's child item, you can get the `undefined`result if the item is not added to the model yet.