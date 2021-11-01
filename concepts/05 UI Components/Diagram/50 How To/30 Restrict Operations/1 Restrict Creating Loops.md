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
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram" (onRequestEditOperation)="requestEditOperationHandler($event)">
    </dx-diagram>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        requestEditOperationHandler(e) {
            if(e.operation === "changeConnection")
                if(e.args.connector && e.args.connector.fromId === e.args.connector.toId)
                    e.allowed = false;
        }
    }

##### Vue

    <template>
        <DxDiagram
            id="diagram"
            ref="diagram"
            @request-edit-operation="onRequestEditOperation">
        </DxDiagram>
    </template>
    <script>
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
    </script>

##### React

    import React from 'react';
    import Diagram from 'devextreme-react/diagram';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.diagramRef = React.createRef();
            this.onRequestEditOperation = this.onRequestEditOperation.bind(this);
        }
        onRequestEditOperation(e) {
                if(e.operation === 'changeConnection')
                    if(e.args.connector && e.args.connector.fromId === e.args.connector.toId)
                        e.allowed = false;
        }
        render() {
            return (
                <Diagram id="diagram" ref={this.diagramRef} onRequestEditOperation={this.onRequestEditOperation}>
                </Diagram>
            );
        }
    }

    export default App;

---