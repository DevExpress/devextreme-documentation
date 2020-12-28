#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/OperationRestrictions/jQuery/Light/"
}

Every time a user attempts an edit operation, the UI component raises the [requestEditOperation](/Documentation/ApiReference/UI_Widgets/dxDiagram/Events/#requestEditOperation) event. Use the **allowed** parameter to either permit or cancel the user action. To identify the operation type and target element, use the event parameters listed below. 

- The **operation** parameter identifies the edit operation. Note that if an [Allow{Operation}](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/editing/) option is set to `false`, the event does not fire for this operation. The table below lists all available operations.

<table class="dx-table">
    <tr>
        <th>Operation</th>
        <th>User action / IU update operation causes the event to be raised</th>
        <th>Allow{Operation} option</th>
    </tr>
    <tr>
        <td>addShape</td>
        <td>A user is about to add a shape / The UI component determines the **Paste** command's visibility.</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/editing/#allowAddShape">allowAddShape</a></td>
    </tr>
    <tr>
        <td>addShapeFromToolbox</td>
        <td>A user starts dragging a shape from the toolbox / The UI component determines the visibility of a shape in the context toolbox.</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/editing/#allowAddShape">allowAddShape</a></td>
    </tr>
    <tr>
        <td>beforeChangeConnectorText</td>
        <td>A user is about to edit a connector's text.</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/editing/#allowChangeConnectorText">allowChangeConnectorText</a></td>
    </tr>
    <tr>
        <td>beforeChangeShapeText</td>
        <td>A user is about to edit a shape's text.</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/editing/#allowChangeShapeText">allowChangeShapeText</a></td>
    </tr>
    <tr>
        <td>changeConnection</td>
        <td>A user is about to link or delink a connector from a shape / The UI component determines a connection point's visibility.</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/editing/#allowChangeConnection">allowChangeConnection</a></td>
    </tr>
    <tr>
        <td>changeConnectorPoints</td>
        <td>A user changed a connector's points.</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/editing/#allowChangeConnectorPoints">allowChangeConnectorPoints</a></td>
    </tr>
    <tr>
        <td>changeConnectorText</td>
        <td>A user changed a connector's text.</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/editing/#allowChangeConnectorText">allowChangeConnectorText</a></td>
    </tr>
    <tr>
        <td>changeShapeText</td>
        <td>A user changed a shape's text.</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/editing/#allowChangeShapeText">allowChangeShapeText</a></td>
    </tr>
    <tr>
        <td>deleteConnector</td>
        <td>A user is about to delete a connector / The UI component determines the **Cut** and **Delete** commands' visibility.</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/editing/#allowDeleteConnector">allowDeleteConnector</a></td>
    </tr>
    <tr>
        <td>deleteShape</td>
        <td>A user is about to delete a shape / The UI component determines the visibility of the **Cut** and **Delete** commands.</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/editing/#allowDeleteShape">allowDeleteShape</a></td>
    </tr>
    <tr>
        <td>moveShape</td>
        <td>A user moved a shape.</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/editing/#allowMoveShape">allowMoveShape</a></td>
    </tr>
    <tr>
        <td>resizeShape</td>
        <td>A user resized a shape.</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/editing/#allowResizeShape">allowResizeShape</a></td>
    </tr>
</table>

- The **args** parameter contains information about the shape or connector that takes part in the edit operation. The parameter's value type depends on the operation type.

<table class="dx-table">
    <tr>
        <th>Edit Operation</th>
        <th>Return Value's Type</th>
    </tr>
    <tr>
    <td>addShape</td>
    <td><a href="/Documentation/ApiReference/Common/Object_Structures/dxDiagramAddShapeArgs/">DiagramAddShapeArgs</a></td>
    </tr>
    <tr>
    <td>addShapeFromToolbox</td>
    <td><a href="/Documentation/ApiReference/Common/Object_Structures/dxDiagramAddShapeFromToolboxArgs/">DiagramAddShapeFromToolboxArgs</a></td>
    </tr>
    <tr>
    <td>beforeChangeConnectorText</td>
    <td><a href="/Documentation/ApiReference/Common/Object_Structures/dxDiagramBeforeChangeConnectorTextArgs/">DiagramBeforeChangeConnectorTextArgs</a></td>
    </tr>
    <tr>
    <td>beforeChangeShapeText</td>
    <td><a href="/Documentation/ApiReference/Common/Object_Structures/dxDiagramBeforeChangeShapeTextArgs/">DiagramBeforeChangeShapeTextArgs</a></td>
    </tr>
    <tr>
    <td>changeConnection</td>
    <td><a href="/Documentation/ApiReference/Common/Object_Structures/dxDiagramChangeConnectionArgs/">DiagramChangeConnectionArgs</a></td>
    </tr>
    <tr>
    <td>changeConnectorPoints</td>
    <td><a href="/Documentation/ApiReference/Common/Object_Structures/dxDiagramChangeConnectorPointsArgs/">DiagramChangeConnectorPointsArgs</a></td>
    </tr>
    <tr>
    <td>changeConnectorText</td>
    <td><a href="/Documentation/ApiReference/Common/Object_Structures/dxDiagramChangeConnectorTextArgs/">DiagramChangeConnectorTextArgs</a></td>
    </tr>
    <tr>
    <td>changeShapeText</td>
    <td><a href="/Documentation/ApiReference/Common/Object_Structures/dxDiagramChangeShapeTextArgs/">DiagramChangeShapeTextArgs</a></td>
    </tr>
    <tr>
    <td>deleteConnector</td>
    <td><a href="/Documentation/ApiReference/Common/Object_Structures/dxDiagramDeleteConnectorArgs/">DiagramDeleteConnectorArgs</a></td>
    </tr>
    <tr>
    <td>deleteShape</td>
    <td><a href="/Documentation/ApiReference/Common/Object_Structures/dxDiagramDeleteShapeArgs/">DiagramDeleteShapeArgs</a></td>
    </tr>
    <tr>
    <td>moveShape</td>
    <td><a href="/Documentation/ApiReference/Common/Object_Structures/dxDiagramMoveShapeArgs/">DiagramMoveShapeArgs</a></td>
    </tr>
    <tr>
    <td>resizeShape</td>
    <td><a href="/Documentation/ApiReference/Common/Object_Structures/dxDiagramResizeShapeArgs/">DiagramResizeShapeArgs</a></td>
    </tr>
</table>

- The **reason** parameter specifies whether the event responds to a user action or requests instruction on related UI command availability.

    - The `checkUIElementAvailability` value indicates that the UI component is updating the UI. Set the **allowed** option to `false` to hide the UI element associated with the specified operation.

    - The `modelModification` value indicates that a user attempts an edit operation. You can specify whether the operation is allowed and display an error message if necessary.

---
##### jQuery

    $(function() {
        $("#diagram").dxDiagram({
            onRequestEditOperation: function(e) {
                if(e.operation === "addShape") {
                    if(e.args.shape.type !== "employee" && e.args.shape.type !== "team") {
                        if(e.reason !== "checkUIElementAvailability")
                            showToast("You can add only a 'Team' or 'Employee' shape.");
                        e.allowed = false;
                    }
                }
                else if(e.operation === "changeShapeText") {
                    if(e.args.text === "") {
                        if(e.reason !== "checkUIElementAvailability")
                            showToast("A shape text cannot be empty.");
                        e.allowed = false;
                    }
                }
                else if(e.operation === "beforeChangeConnectorText") {
                    e.allowed = false;
                }
                ...

##### Angular
    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram" (onRequestEditOperation)="requestEditOperationHandler($event)">

    <!-- tab: app.component.ts -->
    requestEditOperationHandler(e) {
        if(e.operation === "addShape") {
            if(e.args.shape.type !== "employee" && e.args.shape.type !== "team") {
                if(e.reason !== "checkUIElementAvailability")
                    this.showToast("You can add only a 'Team' or 'Employee' shape.");
                e.allowed = false;
            }
        }
        else if(e.operation === "changeShapeText") {
            if(e.args.text === "") {
                if(e.reason !== "checkUIElementAvailability")
                    this.showToast("A shape text cannot be empty.");
                e.allowed = false;
            }
        }
        else if(e.operation === "beforeChangeConnectorText") {
            e.allowed = false;
        }
        ...

##### Vue

    <DxDiagram id="diagram" ref="diagram" @request-edit-operation="onRequestEditOperation" />
    ...
    methods: {
        onRequestEditOperation(e) {
            if(e.operation === 'addShape') {
                if(e.args.shape.type !== 'employee' && e.args.shape.type !== 'team') {
                    if(e.reason !== 'checkUIElementAvailability') {
                        this.showToast('You can add only a \'Team\' or \'Employee\' shape.');
                    }
                e.allowed = false;
                }
            }
            else if(e.operation === 'changeShapeText') {
                if(e.args.text === '') {
                    if(e.reason !== 'checkUIElementAvailability') {
                        this.showToast('A shape text cannot be empty.');
                    }
                e.allowed = false;
                }
            }
            else if(e.operation === 'beforeChangeConnectorText') {
                e.allowed = false;
            }
        ...

##### React

    <Diagram id="diagram" onRequestEditOperation={this.onRequestEditOperation} />
    ...
    onRequestEditOperation(e) {
        if(e.operation === 'addShape') {
            if(e.args.shape.type !== 'employee' && e.args.shape.type !== 'team') {
                if(e.reason !== 'checkUIElementAvailability') {
                this.showToast('You can add only a \'Team\' or \'Employee\' shape.');
                }
                e.allowed = false;
            }
        }
        else if(e.operation === 'changeShapeText') {
            if(e.args.text === '') {
                if(e.reason !== 'checkUIElementAvailability') {
                this.showToast('A shape text cannot be empty.');
                }
                e.allowed = false;
            }
        }
        else if(e.operation === 'beforeChangeConnectorText') {
            e.allowed = false;
        }
        ...

##### ASP.NET Core Controls

    @(Html.DevExtreme().Diagram()
        .ID("diagram")
        .OnRequestEditOperation("onRequestEditOperation")
    )
    ...
    function onRequestEditOperation(e) {
        if(e.operation === "addShape") {
            if(e.args.shape.type !== "employee" && e.args.shape.type !== "team") {
                if(e.reason !== "checkUIElementAvailability")
                    showToast("You can add only a 'Team' or 'Employee' shape.");
                e.allowed = false;
            }
        }
        else if(e.operation === "changeShapeText") {
            if(e.args.text === "") {
                if(e.reason !== "checkUIElementAvailability")
                    showToast("A shape text cannot be empty.");
                e.allowed = false;
            }
        }
        else if(e.operation === "beforeChangeConnectorText") {
            e.allowed = false;
        }
        ...

##### ASP.NET MVC Controls

    @(Html.DevExtreme().Diagram()
        .ID("diagram")
        .OnRequestEditOperation("onRequestEditOperation")
    )
    ...
    function onRequestEditOperation(e) {
        if(e.operation === "addShape") {
            if(e.args.shape.type !== "employee" && e.args.shape.type !== "team") {
                if(e.reason !== "checkUIElementAvailability")
                    showToast("You can add only a 'Team' or 'Employee' shape.");
                e.allowed = false;
            }
        }
        else if(e.operation === "changeShapeText") {
            if(e.args.text === "") {
                if(e.reason !== "checkUIElementAvailability")
                    showToast("A shape text cannot be empty.");
                e.allowed = false;
            }
        }
        else if(e.operation === "beforeChangeConnectorText") {
            e.allowed = false;
        }
        ...

---