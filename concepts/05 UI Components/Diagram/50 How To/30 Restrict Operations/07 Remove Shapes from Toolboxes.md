The example below removes a shape from the toolbox and context toolbox after a user adds this shape on a chart and brings a shape back after a user deletes it:

---
##### jQuery

    $(function () {
        var shapeCount = 0;
        var diagram = $("#diagram").dxDiagram({
            onOptionChanged: function (e) {
                if (e.name === "hasChanges" && e.value) {
                    e.component.option("hasChanges", false);
                    var currentShapeCount = e.component.getItems().filter(function(item) {
                        return (item.itemType ==="shape")
                    }).length;
                    // Updates the toolbox and context toolbox if a shape was added or deleted
                    if (shapeCount !== currentShapeCount) {
                        shapeCount = currentShapeCount;
                        window.setTimeout(function() {
                            e.component.updateToolbox();
                        }, 0);
                    }
                }
            },
            onRequestEditOperation(e) {
                 
                if (e.operation === "addShapeFromToolbox") {
                    e.component.getItems().forEach(function(item) {
                        // If the chart contains a shape of this type
                        if (item.itemType === "shape" && item.type === e.args.shapeType)
                            // Removes the shape from the toolbox and context toolbox
                            e.allowed = false;
                    });
                }
            },
        })
        .dxDiagram("instance");
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram" (onOptionChanged)="optionChanged($event)" (onRequestEditOperation)="requestEditOperation($event)">
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
        shapeCount: any;
        requestEditOperation(e) {
            if (e.operation === "addShapeFromToolbox") {
                    e.component.getItems().forEach(function(item) {
                        if (item.itemType === "shape" && item.type === e.args.shapeType)
                            e.allowed = false;
                    });
                }
        }
        optionChanged(e) {
            if (e.name === "hasChanges" && e.value) {
                e.component.option("hasChanges", false);
                    var currentShapeCount = e.component.getItems().filter(function(item) {
                        return (item.itemType ==="shape")
                    }).length;
                    if (this.shapeCount !== currentShapeCount) {
                        this.shapeCount = currentShapeCount;
                        window.setTimeout(function() {
                            e.component.updateToolbox();
                        }, 0);
                }
            }
        }
    }

##### Vue

    <template>
        <DxDiagram
            id="diagram"
            ref="diagram"
            @request-edit-operation="onRequestEditOperation"
            @option-changed="onOptionChanged">
        </DxDiagram>
    </template>
    <script>
        import DxDiagram from 'devextreme-vue/diagram';
        var shapeCount = 0;
        export default {
            components: {
                DxDiagram
            },
            methods: {
                onRequestEditOperation(e) {
                    if (e.operation === "addShapeFromToolbox") {
                        e.component.getItems().forEach(function(item) {
                            if (item.itemType === "shape" && item.type === e.args.shapeType)
                                e.allowed = false;
                        });
                    }
                },
                onOptionChanged(e) {
                    if (e.name === "hasChanges" && e.value) {
                        e.component.option("hasChanges", false);
                        var currentShapeCount = e.component.getItems().filter(function(item) {
                            return (item.itemType ==="shape")
                        }).length;
                        if (this.shapeCount !== currentShapeCount) {
                            this.shapeCount = currentShapeCount;
                            window.setTimeout(function() {
                                e.component.updateToolbox();
                            }, 0);
                        }
                    }
                },
            }
        };
    </script>


##### React

    import React from 'react';
    import Diagram from 'devextreme-react/diagram';
    var shapeCount;

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.diagramRef = React.createRef();
            this.onRequestEditOperation = this.onRequestEditOperation.bind(this);
            this.onOptionChanged = this.onOptionChanged.bind(this);
        }
        onRequestEditOperation(e) {
            if (e.operation === "addShapeFromToolbox") {
                    e.component.getItems().forEach(function(item) {
                        if (item.itemType === "shape" && item.type === e.args.shapeType)
                            e.allowed = false;
                    });
                }
        }
        onOptionChanged(e) {
            if (e.name === "hasChanges" && e.value) {
                e.component.option("hasChanges", false);
                    var currentShapeCount = e.component.getItems().filter(function(item) {
                        return (item.itemType ==="shape")
                    }).length;
                    if (this.shapeCount !== currentShapeCount) {
                        this.shapeCount = currentShapeCount;
                        window.setTimeout(function() {
                            e.component.updateToolbox();
                        }, 0);
                }
            }
        }
        render() {
            return (
                <Diagram id="diagram" ref={this.diagramRef} onRequestEditOperation={this.onRequestEditOperation} onOptionChanged={this.onOptionChanged}>
                </Diagram>
            );
        }
    }
    export default App;

---