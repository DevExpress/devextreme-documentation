The example below demonstrates how to prevent users from moving a shape from one container to another:

##### jQuery

    $(function() {
        var containers = {};
        var diagram = $("#diagram").dxDiagram({
            onRequestEditOperation: function(e) {
                if(e.operation === "moveShape")
                    if(containers[e.args.shape.id] !== e.args.shape.containerId)
                        e.allowed = false;
            },
            onSelectionChanged: function(e) {
                e.component.getItems().forEach((item) => {containers[item.id] = item.containerId;});
            },
            // ...
        }).dxDiagram("instance");
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram" (onSelectionChanged)="selectionChanged($event)" (onRequestEditOperation)="requestEditOperation($event)">
        <!-- ... -->
    </dx-diagram>

    <!-- tab: app.component.ts -->
    import { Component, ViewChild} from '@angular/core';
    import { DxDiagramModule, DxDiagramComponent } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        @ViewChild(DxDiagramComponent, { static: false }) diagram: DxDiagramComponent; diagram: DxDiagramComponent;
        containers: any = {};
        requestEditOperation(e) {
            if (e.operation === "moveShape")
            if (this.containers[e.args.shape.id] !== e.args.shape.containerId)
                e.allowed = false;
        }
        selectionChanged(e) {
            e.component.getItems().forEach((item) => {
                this.containers[item.id] = item.containerId;
            });
        }
    }

##### Vue

    <template>
        <DxDiagram
            id="diagram"
            ref="diagram"
            @request-edit-operation="onRequestEditOperation"
            @selection-changed="onSelectionChanged">
        </DxDiagram>
    </template>
    <script>
        import DxDiagram from 'devextreme-vue/diagram';
        var containers = {};
        export default {
            components: {
                DxDiagram
            },
            methods: {
                onRequestEditOperation(e) {
                    if(e.operation === "moveShape")
                        if(containers[e.args.shape.id] !== e.args.shape.containerId)
                            e.allowed = false;
                },
                onSelectionChanged(e) {
                    e.component.getItems().forEach((item) => {containers[item.id] = item.containerId;});
                }
            },
            // ...
        };
    </script>

##### React

    import React from 'react';
    import Diagram, from 'devextreme-react/diagram';
    var containers = {};
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.diagramRef = React.createRef();
            this.onRequestEditOperation = this.onRequestEditOperation.bind(this);
            this.onSelectionChanged = this.onSelectionChanged.bind(this);
        }
        onRequestEditOperation(e) {
            if(e.operation === "moveShape")
                if(containers[e.args.shape.id] !== e.args.shape.containerId)
                    e.allowed = false;
        }
        onSelectionChanged(e) {
             e.component.getItems().forEach((item) => {containers[item.id] = item.containerId;});
        }
        render() {
            return (
                <Diagram id="diagram" ref={this.diagramRef} onRequestEditOperation={this.onRequestEditOperation} onSelectionChanged={this.onSelectionChanged}>
                </Diagram>
            );
        }
    }
    export default App;

---