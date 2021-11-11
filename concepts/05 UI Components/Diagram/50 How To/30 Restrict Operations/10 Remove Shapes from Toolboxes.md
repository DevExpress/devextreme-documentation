In the example below, the Diagram component updates the shape collection in the toolbox and context toolbox as follows:
* Removes a shape from these toolboxes after a user adds it to a chart
* Returns a shape to these toolboxes after a user deletes it from a chart

---
##### jQuery

    $(function () {
        var shapeCount = 0;
        var diagram = $("#diagram").dxDiagram({
            onOptionChanged: function (e) {
                // Detects changes of the Diagram model
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
                        // Removes a shape from the toolboxes if the chart contains a shape of this type
                        if (item.itemType === "shape" && item.type === e.args.shapeType)
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
        optionChanged(e) {
            // Detects changes of the Diagram model
            if (e.name === "hasChanges" && e.value) {
                e.component.option("hasChanges", false);
                    var currentShapeCount = e.component.getItems().filter(function(item) {
                        return (item.itemType ==="shape")
                    }).length;
                    // Updates the toolbox and context toolbox if a shape was added or deleted
                    if (this.shapeCount !== currentShapeCount) {
                        this.shapeCount = currentShapeCount;
                        window.setTimeout(function() {
                            e.component.updateToolbox();
                        }, 0);
                }
            }
        }
        requestEditOperation(e) {
            if (e.operation === "addShapeFromToolbox") {
                    e.component.getItems().forEach(function(item) {
                        // Removes a shape from the toolboxes if the chart contains a shape of this type
                        if (item.itemType === "shape" && item.type === e.args.shapeType)
                            e.allowed = false;
                    });
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
                onOptionChanged(e) {
                    // Detects changes of the Diagram model
                    if (e.name === "hasChanges" && e.value) {
                        e.component.option("hasChanges", false);
                        var currentShapeCount = e.component.getItems().filter(function(item) {
                            return (item.itemType ==="shape")
                        }).length;
                        // Updates the toolbox and context toolbox if a shape was added or deleted
                        if (this.shapeCount !== currentShapeCount) {
                            this.shapeCount = currentShapeCount;
                            window.setTimeout(function() {
                                e.component.updateToolbox();
                            }, 0);
                        }
                    }
                },
                onRequestEditOperation(e) {
                    if (e.operation === "addShapeFromToolbox") {
                        e.component.getItems().forEach(function(item) {
                            // Removes a shape from the toolboxes if the chart contains a shape of this type
                            if (item.itemType === "shape" && item.type === e.args.shapeType)
                                e.allowed = false;
                        });
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
        onOptionChanged(e) {
            // Detects changes of the Diagram model
            if (e.name === "hasChanges" && e.value) {
                e.component.option("hasChanges", false);
                    var currentShapeCount = e.component.getItems().filter(function(item) {
                        return (item.itemType ==="shape")
                    }).length;
                    // Updates the toolbox and context toolbox if a shape was added or deleted
                    if (this.shapeCount !== currentShapeCount) {
                        this.shapeCount = currentShapeCount;
                        window.setTimeout(function() {
                            e.component.updateToolbox();
                        }, 0);
                }
            }
        }
        onRequestEditOperation(e) {
            if (e.operation === "addShapeFromToolbox") {
                    e.component.getItems().forEach(function(item) {
                        // Removes a shape from the toolboxes if the chart contains a shape of this type
                        if (item.itemType === "shape" && item.type === e.args.shapeType)
                            e.allowed = false;
                    });
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