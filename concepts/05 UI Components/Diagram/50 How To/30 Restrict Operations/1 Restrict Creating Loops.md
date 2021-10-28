The example below demonstrates how to prevent users from connecting a shape to itself.

---
##### jQuery

    $(function() {
        var diagram = $("#diagram").dxDiagram({
            onRequestEditOperation: function(e) {
                if(e.operation === "changeConnection")
                    if(e.args.connector && e.args.connector.fromId === e.args.connector.toId)
                        e.allowed = false;
            },
        }).dxDiagram("instance");
        // ...
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram" (onRequestEditOperation)="requestEditOperationHandler($event)">
    </dx-diagram>

    <!-- tab: app.component.ts -->
    requestEditOperationHandler(e) {
        if(e.operation === "changeConnection")
            if(e.args.connector && e.args.connector.fromId === e.args.connector.toId)
                e.allowed = false;
    }
// ...

##### Vue

    <DxDiagram
        id="diagram"
        ref="diagram"
    @request-edit-operation="onRequestEditOperation"
    </DxDiagram>
    // ...
    import DxDiagram from 'devextreme-vue/diagram';
    export default {
    components: {
        DxDiagram,
    },
    methods: {
        onRequestEditOperation(e) {
        if(e.operation === "changeConnection")
            if(e.args.connector && e.args.connector.fromId === e.args.connector.toId)
                e.allowed = false;
            },
        }
    };
    // ...

##### React

    import Diagram, { Editing } from 'devextreme-react/diagram';
    ...
    <Diagram id="diagram" ref={this.diagramRef} >
        <Editing 
            allowAddShape={false}
            />
    </Diagram>

---