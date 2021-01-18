To prohibit an operation, set the corresponding *allow{Operation}* [editing](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/editing/) property to `false`.

---
##### jQuery

    $(function() {
        var diagram = $("#diagram").dxDiagram({
            editing: {
                allowAddShape: false,
                allowChangeConnection: false,
                allowChangeConnectorPoints: false,
                allowChangeConnectorText: false,
                allowChangeShapeText: false,
                allowDeleteConnector: false,
                allowDeleteShape: false,
                allowMoveShape: false,
                allowResizeShape: false,
            },
        }).dxDiagram("instance");

##### Angular

    <dx-diagram #diagram id="diagram" >
        <dxo-editing 
            [allowAddShape]="false"
            [allowChangeConnection]="false"
            [allowChangeConnectorPoints]="false"
            [allowChangeConnectorText]="false"
            [allowChangeShapeText]="false"
            [allowDeleteConnector]="false"
            [allowDeleteShape]="false"
            [allowMoveShape]="false"
            [allowResizeShape]="false">
        </dxo-editing>
    </dx-diagram>

##### Vue

    <DxDiagram
        id="diagram"
        ref="diagram">
        <DxEditing
            :allow-add-shape="false"
            :allow-change-connection="false"
            :allow-change-connector-points="false"
            :allow-change-connector-text="false"
            :allow-change-shape-text="false"
            :allow-delete-connector="false"
            :allow-delete-shape="false"
            :allow-move-shape="false"
            :allow-resize-shape="false">
        />
    </DxDiagram>
    ...
    import { DxDiagram, DxEditing } from 'devextreme-vue/diagram';
    export default {
    components: {
        DxDiagram, DxEditing
    },
    ...

##### React

    import Diagram, { Editing } from 'devextreme-react/diagram';
    ...
    <Diagram id="diagram" ref={this.diagramRef} >
        <Editing 
            allowAddShape={false}
            allowChangeConnection={false}
            allowChangeConnectorPoints={false}
            allowChangeConnectorText={false}
            allowChangeShapeText={false}
            allowDeleteConnector={false}
            allowDeleteShape={false}
            allowMoveShape={false}
            allowResizeShape={false} />
    </Diagram>


##### ASP.NET Core Controls

    @(Html.DevExtreme().Diagram()
        .ID("diagram")
        .Editing(e => e
            .AllowAddShape(false)
            .AllowChangeConnection(false)
            .AllowChangeConnectorPoints(false)
            .AllowChangeConnectorText(false)
            .AllowChangeShapeText(false)
            .AllowDeleteConnector(false)
            .AllowDeleteShape(false)
            .AllowMoveShape(false)
            .AllowResizeShape(false)
        )
    )

##### ASP.NET MVC Controls

    @(Html.DevExtreme().Diagram()
        .ID("diagram")
        .Editing(e => e
            .AllowAddShape(false)
            .AllowChangeConnection(false)
            .AllowChangeConnectorPoints(false)
            .AllowChangeConnectorText(false)
            .AllowChangeShapeText(false)
            .AllowDeleteConnector(false)
            .AllowDeleteShape(false)
            .AllowMoveShape(false)
            .AllowResizeShape(false)
        )
    )

---