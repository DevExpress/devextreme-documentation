---
id: dxDiagram.getItemById(id)
---
---
##### shortDescription
Returns a [shape](/api-reference/10%20UI%20Components/dxDiagram/7%20Interfaces/dxDiagramShape '/Documentation/ApiReference/UI_Components/dxDiagram/Interfaces/dxDiagramShape/') or [connector](/api-reference/10%20UI%20Components/dxDiagram/7%20Interfaces/dxDiagramConnector '/Documentation/ApiReference/UI_Components/dxDiagram/Interfaces/dxDiagramConnector/') object specified by its internal identifier.

##### return: dxDiagramItem
A **dxDiagramItem** object descendant (dxDiagramShape or dxDiagramConnector).

##### param(id): String
The item identifier.

---
When a user pastes or clones several items in a diagram, the control adds the items to the model one by one. For each added item, the [requestEditOperation](/api-reference/10%20UI%20Components/dxDiagram/4%20Events/requestEditOperation.md '/Documentation/ApiReference/UI_Components/dxDiagram/Events/#requestEditOperation') event fires. In the event handler, you can access the processed item. However, if you call the **getItemById** method to access an attached connector (see the [attachedConnectorIds](/api-reference/10%20UI%20Components/dxDiagram/7%20Interfaces/dxDiagramShape/attachedConnectorIds.md '/Documentation/ApiReference/UI_Components/dxDiagram/Interfaces/dxDiagramShape/#attachedConnectorIds') property) or a container's child item (see the [containerChildItemIds](/api-reference/10%20UI%20Components/dxDiagram/7%20Interfaces/dxDiagramShape/containerChildItemIds.md '/Documentation/ApiReference/UI_Components/dxDiagram/Interfaces/dxDiagramShape/#containerChildItemIds') property), you can get the `undefined`result if the item is not added to the model yet.