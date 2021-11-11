The example below demonstrates how to show default and custom commands in the context menu depending on the selected item:

---
##### jQuery

    $(function () {
        var diagram = $("#diagram").dxDiagram({
            onSelectionChanged: function(e) {
                // Displays the "showGrid" and "snapToGrid" commands when a user selects no items
                if (e.items.length === 0)
                    e.component.option("contextMenu.commands", ["showGrid", "snapToGrid"]);
                else 
                    // Displays the "fontName", "fontSize", and "selectShapes" commands when a user selects a shape
                    if (e.items[0].itemType === "shape")   
                        e.component.option("contextMenu.commands", ["fontName", "fontSize", {name: "selectShapes", text: "Select All Shapes"}]);
                    // Displays the "connectorLineStart", "connectorLineEnd", and "selectConnectors" commands when a user selects a connector
                    else 
                        e.component.option("contextMenu.commands", ["connectorLineStart", "connectorLineEnd", {name: "selectConnectors", text: "Select All Connectors"}]);
            },
            onCustomCommand: function(e) {
                if (e.name == "selectShapes") {
                    var shapes = e.component.getItems().filter(function(item) {
                        return (item.itemType === "shape")
                    });
                    e.component.setSelectedItems(shapes);
                }
                if (e.name == "selectConnectors") {
                    var connectors = e.component.getItems().filter(function(item) {
                        return (item.itemType === "connector")
                    });
                    e.component.setSelectedItems(connectors);
                }
            },
        }).dxDiagram("instance");
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram" (onSelectionChanged)="selectionChanged($event)" (onCustomCommand)="customCommand($event)">
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
        selectionChanged(e) {
            // Displays the "showGrid" and "snapToGrid" commands if a user selects no items
            if (e.items.length === 0)
                    e.component.option("contextMenu.commands", ["showGrid", "snapToGrid"]);
            else 
                // Displays the "fontName", "fontSize", and "selectShapes" commands when a user selects a shape
                if (e.items[0].itemType === "shape")   
                    e.component.option("contextMenu.commands", ["fontName", "fontSize", {name: "selectShapes", text: "Select All Shapes"}]);
                else
                    // Displays the "connectorLineStart", "connectorLineEnd", and "selectConnectors" commands when a user selects a connector
                    e.component.option("contextMenu.commands", ["connectorLineStart", "connectorLineEnd", {name: "selectConnectors", text: "Select All Connectors"}]);
        }
        customCommand(e) {
            if (e.name == "selectShapes") {
                var shapes = e.component.getItems().filter(function(item) {
                    return (item.itemType === "shape")
                });
                e.component.setSelectedItems(shapes);
            }
            if (e.name == "selectConnectors") {
                var connectors = e.component.getItems().filter(function(item) {
                    return (item.itemType === "connector")
                });
                e.component.setSelectedItems(connectors);
            }
        }
    }

##### Vue

    <template>
        <DxDiagram
            id="diagram"
            ref="diagram"
            @selection-changed="onSelectionChanged"
            @custom-command="onCustomCommand">
        </DxDiagram>
    </template>
    <script>
        import DxDiagram from 'devextreme-vue/diagram';
        export default {
            components: {
                DxDiagram
            },
            methods: {
                onSelectionChanged(e) {
                    // Displays the "showGrid" and "snapToGrid" commands if a user selects no items
                    if (e.items.length === 0)
                        e.component.option("contextMenu.commands", ["showGrid", "snapToGrid"]);
                    else
                        // Displays the "fontName", "fontSize", and "selectShapes" commands when a user selects a shape
                        if (e.items[0].itemType === "shape")   
                            e.component.option("contextMenu.commands", ["fontName", "fontSize", {name: "selectShapes", text: "Select All Shapes"}]);
                        else
                            // Displays the "connectorLineStart", "connectorLineEnd", and "selectConnectors" commands when a user selects a connector
                            e.component.option("contextMenu.commands", ["connectorLineStart", "connectorLineEnd", {name: "selectConnectors", text: "Select All Connectors"}]);
                },
                onCustomCommand(e) {
                    if (e.name == "selectShapes") {
                        var shapes = e.component.getItems().filter(function(item) {
                            return (item.itemType === "shape")
                        });
                        e.component.setSelectedItems(shapes);
                    }
                    if (e.name == "selectConnectors") {
                        var connectors = e.component.getItems().filter(function(item) {
                            return (item.itemType === "connector")
                        });
                        e.component.setSelectedItems(connectors);
                    }
                },
        };
    </script>


##### React

    import React from 'react';
    import Diagram from 'devextreme-react/diagram';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.diagramRef = React.createRef();
            this.onSelectionChanged = this.onSelectionChanged.bind(this);
            this.onCustomCommand = this.onCustomCommand.bind(this);
        }
        onSelectionChanged(e) {
            // Displays the "showGrid" and "snapToGrid" commands when a user selects no items
            if (e.items.length === 0)
                    e.component.option("contextMenu.commands", ["showGrid", "snapToGrid"]);
                else
                    // Displays the "fontName", "fontSize", and "selectShapes" commands when a user selects a shape
                    if (e.items[0].itemType === "shape")   
                        e.component.option("contextMenu.commands", ["fontName", "fontSize", {name: "selectShapes", text: "Select All Shapes"}]);
                    else
                        // Displays the "connectorLineStart", "connectorLineEnd", and "selectConnectors" commands when a user selects a connector
                        e.component.option("contextMenu.commands", ["connectorLineStart", "connectorLineEnd", {name: "selectConnectors", text: "Select All Connectors"}]);
        }
        onCustomCommand(e) {
            if (e.name == "selectShapes") {
                var shapes = e.component.getItems().filter(function(item) {
                    return (item.itemType === "shape")
                });
                e.component.setSelectedItems(shapes);
            }
            if (e.name == "selectConnectors") {
                var connectors = e.component.getItems().filter(function(item) {
                    return (item.itemType === "connector")
                });
                e.component.setSelectedItems(connectors);
            }
        }
        render() {
            return (
                <Diagram id="diagram" ref={this.diagramRef} onSelectionChanged={this.onSelectionChanged} onCustomCommand={this.onCustomCommand}>
                </Diagram>
            );
        }
    }
    export default App;

---