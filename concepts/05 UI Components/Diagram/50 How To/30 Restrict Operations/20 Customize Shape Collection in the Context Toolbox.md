The following example demonstrates how to hide shapes in the context toolbox depending on the connector's start node type:

---
##### jQuery

    $(function() {
        var currentShapeId;
        var diagram = $("#diagram").dxDiagram({
            onRequestEditOperation: function(e) {
                if (e.operation === "changeConnection" && e.args.connector)
                    // Gets the connector's start node identifier
                    this.currentShapeId = e.args.connector.fromId;
                if (e.operation === "addShapeFromToolbox") {
                    // Gets the connector's start node type
                    var currentShape = $("#diagram").dxDiagram().dxDiagram("instance").getItemById(this.currentShapeId);
                    if (e.args.shapeType === "terminator") 
                        // If the connector's start node type is "decision"
                        if (currentShape && currentShape.type === "decision")
                            // Hides the "terminator" shape in the context toolbox
                            e.allowed = false;
                } 
            },
            contextToolbox: {
                enabled: true,
                shapeIconsPerRow: 3,
                shapes: [ "process", "decision", "terminator" ],
            },
        })
        .dxDiagram("instance");
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram" (onRequestEditOperation)="requestEditOperation($event)">
        <dxo-context-toolbox [enabled]="true" [shapes]='["process", "decision", "terminator"]' [shapeIconsPerRow]="3">
        </dxo-context-toolbox>
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
        @ViewChild(DxDiagramComponent, { static: false }) diagram: DxDiagramComponent;
        currentShapeId : number;
        requestEditOperation(e) {
            if (e.operation === "changeConnection" && e.args.connector)
                // Gets the connector's start node identifier
                this.currentShapeId = e.args.connector.fromId;
            if (e.operation === "addShapeFromToolbox") {
                // Gets the connector's start node type
                var currentShape = this.diagram.instance.getItemById(this.currentShapeId);
                if (e.args.shapeType === "terminator") 
                    // If the connector's start node type is "decision"
                    if (currentShape && currentShape.type === "decision")
                        // Hides the "terminator" shape in the context toolbox
                        e.allowed = false;
            }
        }
    }

##### Vue

    <template>
        <DxDiagram
            id="diagram"
            ref="diagram"
            @request-edit-operation="onRequestEditOperation">
            <DxContextToolbox
                :shape-icons-per-row="3"
                :width="100"
                :shapes="['process', 'decision', 'terminator']"
            />
        </DxDiagram>
    </template>
    <script>
        import { DxDiagram, DxContextToolbox} from 'devextreme-vue/diagram';
        var currentShapeId;
        export default {
            components: {
                DxDiagram, DxContextToolbox
            },
            methods: {
                onRequestEditOperation(e) {
                    if (e.operation === "changeConnection" && e.args.connector)
                        // Gets the connector's start node identifier
                        this.currentShapeId = e.args.connector.fromId;
                    if (e.operation === "addShapeFromToolbox") {
                        // Gets the connector's start node type
                        var currentShape = this.$refs['diagram'].instance.getItemById(this.currentShapeId);
                        if (e.args.shapeType === "terminator")
                            // If the connector's start node type is "decision"
                            if (currentShape && currentShape.type === "decision")
                                // Hides the "terminator" shape in the context toolbox
                                e.allowed = false;
                    } 
                }
            }
        };
    </script>

##### React

    import React from 'react';
    import Diagram, { ContextToolbox,} from 'devextreme-react/diagram';
    var currentShapeId;

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.diagramRef = React.createRef();
            this.onRequestEditOperation = this.onRequestEditOperation.bind(this);
        }
        onRequestEditOperation(e) {
            if (e.operation === 'changeConnection' && e.args.connector)
                // Gets the connector's start node identifier
                this.currentShapeId = e.args.connector.fromId;
            if (e.operation === 'addShapeFromToolbox') {
                // Gets the connector's start node type
                var currentShape = this.diagramRef.current.instance.getItemById(this.currentShapeId);
                if (e.args.shapeType === 'terminator')
                    // If the connector's start node type is "decision" 
                    if (currentShape && currentShape.type === 'decision')
                        // Hides the "terminator" shape in the context toolbox
                        e.allowed = false;
            }
        }
        render() {
            return (
                <Diagram id="diagram" ref={this.diagramRef} onRequestEditOperation={this.onRequestEditOperation} >
                    <ContextToolbox shapeIconsPerRow={3} width={100} shapes={['process', 'decision', 'terminator']}>
                    </ContextToolbox>
                </Diagram>
            );
        }
    }
    export default App;

---