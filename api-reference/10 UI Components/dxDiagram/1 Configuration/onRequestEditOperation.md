---
id: dxDiagram.Options.onRequestEditOperation
type: function(e)
default: null
---
---
##### shortDescription
A function that allows you to prohibit an edit operation at run time.

##### param(e): ui/diagram:RequestEditOperationEvent
Information about the event.

##### field(e.allowed): Boolean
Specifies whether the edit operation is allowed.
**Default value:** true.

##### field(e.args): dxDiagramAddShapeArgs | dxDiagramAddShapeFromToolboxArgs | dxDiagramDeleteShapeArgs | dxDiagramDeleteConnectorArgs | dxDiagramChangeConnectionArgs | dxDiagramChangeConnectorPointsArgs | dxDiagramBeforeChangeShapeTextArgs | dxDiagramChangeShapeTextArgs | dxDiagramBeforeChangeConnectorTextArgs | dxDiagramChangeConnectorTextArgs | dxDiagramResizeShapeArgs | dxDiagramMoveShapeArgs
An object that contains information about the processed shape or connector. The parameter's value type depends on the operation.

##### field(e.component): {WidgetName}
The UI component instance's name.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.operation): String
The processed operation.

##### field(e.reason): Enums.RequestEditOperationReason
Identifies the reason why the event is raised.

---
The **operation** parameter identifies the edit operation. Note that if an [Allow{Operation}](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/editing '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/editing/') property is set to `false`, the event does not fire for this operation. The table below lists all available operations.

<table class="dx-table">
    <tr>
        <th>Operation</th>
        <th>User action / IU update operation causes the event to be raised</th>
    </tr>
    <tr>
        <td>addShape</td>
        <td>A user is about to add a shape / The UI component determines the **Paste** command's visibility.</td>
    </tr>
    <tr>
        <td>addShapeFromToolbox</td>
        <td>The UI component determines the visibility of a shape in the toolbox or context toolbox.</td>
    </tr>
    <tr>
        <td>beforeChangeConnectorText</td>
        <td>A user is about to edit a connector's text.</td>
    </tr>
    <tr>
        <td>beforeChangeShapeText</td>
        <td>A user is about to edit a shape's text.</td>
    </tr>
    <tr>
        <td>changeConnection</td>
        <td>A user is about to link or delink a connector from a shape / The UI component determines a connection point's visibility.</td>
    </tr>
    <tr>
        <td>changeConnectorPoints</td>
        <td>A user changed a connector's points.</td>
    </tr>
    <tr>
        <td>changeConnectorText</td>
        <td>A user changed a connector's text.</td>
    </tr>
    <tr>
        <td>changeShapeText</td>
        <td>A user changed a shape's text.</td>
    </tr>
    <tr>
        <td>deleteConnector</td>
        <td>A user is about to delete a connector / The UI component determines the **Cut** and **Delete** commands' visibility.</td>
    </tr>
    <tr>
        <td>deleteShape</td>
        <td>A user is about to delete a shape / The UI component determines the visibility of the **Cut** and **Delete** commands.</td>
    </tr>
    <tr>
        <td>moveShape</td>
        <td>A user moved a shape.</td>
    </tr>
    <tr>
        <td>resizeShape</td>
        <td>A user resized a shape.</td>
    </tr>
</table>

For more information, refer to the following section: [Prohibit Individual Operations](/concepts/05%20UI%20Components/Diagram/28%20Restrict%20Edit%20Operations/20%20Prohibit%20Individual%20Operations.md '/Documentation/Guide/UI_Components/Diagram/Restrict_Edit_Operations/#Prohibit_Individual_Operations')

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/OperationRestrictions"
}

When a user pastes or clones several items in a diagram, the control adds the items to the model one by one. For each added item, the **RequestEditOperation** event fires. In the event handler, you can access the processed item. However, if you call the [getItemById(id)](/api-reference/10%20UI%20Components/dxDiagram/3%20Methods/getItemById(id).md '/Documentation/ApiReference/UI_Components/dxDiagram/Methods/#getItemByIdid') method to access an attached connector (see the [attachedConnectorIds](/api-reference/10%20UI%20Components/dxDiagram/7%20Interfaces/dxDiagramShape/attachedConnectorIds.md '/Documentation/ApiReference/UI_Components/dxDiagram/Interfaces/dxDiagramShape/#attachedConnectorIds') property) or a container's child item (see the [containerChildItemIds](/api-reference/10%20UI%20Components/dxDiagram/7%20Interfaces/dxDiagramShape/containerChildItemIds.md '/Documentation/ApiReference/UI_Components/dxDiagram/Interfaces/dxDiagramShape/#containerChildItemIds') property), you can get the `undefined`result if the item is not added to the model yet.

#####See Also#####
- [Restrict Edit Operations](/concepts/05%20UI%20Components/Diagram/28%20Restrict%20Edit%20Operations '/Documentation/Guide/UI_Components/Diagram/Restrict_Edit_Operations')