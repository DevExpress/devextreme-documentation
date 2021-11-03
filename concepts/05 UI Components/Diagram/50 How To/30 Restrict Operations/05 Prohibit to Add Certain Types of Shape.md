The example below demonstrates how to prevent users from adding more than one shape of each type to a chart:

---
##### jQuery

    $(function() {
        var diagram = $("#diagram").dxDiagram({
            onRequestEditOperation(e) {
                var diagram = $("#diagram").dxDiagram().dxDiagram("instance");
                if (e.operation === 'addShape') {
                    // Gets types of shapes the chart contains
                    var itemsTypes = diagram.getItems().filter(function(item) {
                        return (item.itemType === "shape") && (item.id !== e.args.shape.id);
                    }).map(a => a.type);
                    // Cancels the operation if the chart contains a shape with the same type as the shape that is about to be added
                    if (itemsTypes.indexOf(e.args.shape.type) !== -1) {
                        e.allowed = false;
                        return;
                    }
                }
            },
        }).dxDiagram("instance");
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram" (onRequestEditOperation)="requestEditOperation($event)">
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
        @ViewChild(DxDiagramComponent, { static: false }) diagram: DxDiagramComponent;diagram: DxDiagramComponent
        requestEditOperation(e) {
            var diagram = this.diagram.instance;
            if (e.operation === 'addShape') {
                // Gets types of shapes the chart contains
                var itemsTypes = diagram.getItems().filter(function (item) {
                    return (item.itemType === "shape") && (item.id !==e.args.shape.id);
                }).map(a => a.type);
                // Cancels the operation if the chart contains a shape with the same type as the shape that is about to be added
                if(itemsTypes.indexOf(e.args.shape.type) !== -1) {
                    e.allowed = false;
                    return;
                }
            }
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
                DxDiagram
            },
            methods: {
                onRequestEditOperation(e) {
                    var diagram = this.$refs['diagram'].instance;
                    if (e.operation === 'addShape') {
                        // Gets types of shapes the chart contains
                        var itemsTypes = diagram.getItems().filter(function (item) {
                            return (item.itemType === "shape") && (item.id !==e.args.shape.id);
                        }).map(a => a.type);
                        // Cancels the operation if the chart contains a shape with the same type as the shape that is about to be added
                        if(itemsTypes.indexOf(e.args.shape.type) !== -1) {
                            e.allowed = false;
                            return;
                        }
                    }
                },
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
            var diagram = this.diagramRef.current.instance;
            if (e.operation === 'addShape') {
                // Gets types of shapes the chart contains
                var itemsTypes = diagram.getItems().filter(function (item) {
                    return (item.itemType === "shape") && (item.id !==e.args.shape.id);
                }).map(a => a.type);
                // Cancels the operation if the chart contains a shape with the same type as the shape that is about to be added
                if(itemsTypes.indexOf(e.args.shape.type) !== -1) {
                    e.allowed = false;
                    return;
                }
            }
        }
        render() {
            return (
                <Diagram id="diagram" ref={this.diagramRef} onRequestEditOperation={this.onRequestEditOperation} >
                </Diagram>
            );
        }
    }
    export default App;

---