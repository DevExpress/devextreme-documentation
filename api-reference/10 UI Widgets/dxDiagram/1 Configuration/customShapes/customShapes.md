---
id: dxDiagram.Options.customShapes
type: Array<Object>
default: []
---
---
##### shortDescription
Provide access to an array of custom shapes.

---
Use the **customShapes** option to extend a collection of built-in shapes with custom shapes.

Use the [toolbox](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/toolbox '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/toolbox/') option to add the custom shapes to the toolbox.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            customShapes: [{
                category: "hardware",
                type: "internet",
                title: "Internet",
                backgroundImageUrl: "images/shapes/internet.svg",
                backgroundImageLeft: 0.15,
                backgroundImageTop: 0,
                backgroundImageWidth: 0.7,
                backgroundImageHeight: 0.7,
                defaultWidth: 0.75,
                defaultHeight: 0.75,
                defaultText: "Internet",
                allowEditText: true,
                textLeft: 0,
                textTop: 0.7,
                textWidth: 1,
                textHeight: 0.3,
                connectionPoints: [
                    { x: 0.5, y: 0 },
                    { x: 0.9, y: 0.5 },
                    { x: 0.5, y: 1 },
                    { x: 0.1, y: 0.5 }
                ]
            },
            ...
        ],
        toolbox: {
            groups: [{ category: "hardware", title: "Hardware" }]
        }
    }).dxDiagram("instance");

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram">
        <dxi-custom-shape 
            category="hardware"
            type="internet"
            title="Internet"
            backgroundImageUrl="images/shapes/internet.svg"
            [backgroundImageLeft]="0.15"
            [backgroundImageTop]="0"
            [backgroundImageWidth]="0.7"
            [backgroundImageHeight]="0.7"
            [defaultWidth]="0.75"
            [defaultHeight]="0.75"
            defaultText="Internet"
            [allowEditText]="false"
            [textLeft]="0"
            [textTop]="0.7"
            [textWidth]="1"
            [textHeight]="0.3">
            <dxi-connection-point [x]="0.5" [y]="0"></dxi-connection-point>
            <dxi-connection-point [x]="0.9" [y]="0.5"></dxi-connection-point>
            <dxi-connection-point [x]="0.5" [y]="1"></dxi-connection-point>
            <dxi-connection-point [x]="0.1" [y]="0.5"></dxi-connection-point>
        </dxi-custom-shape>
        ...
        <dxo-toolbox>
            <dxi-group category="hardware" title="Hardware"></dxi-group>
        </dxo-toolbox>
    </dx-diagram>

    <!-- tab: app.component.ts -->
    import { NgModule, Component, ViewChild, enableProdMode } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
    import { HttpClient, HttpClientModule } from '@angular/common/http';

    import { DxDiagramModule, DxDiagramComponent } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild(DxDiagramComponent, { static: false }, { static: false }) diagram: DxDiagramComponent;
        // Prior to Angular 8
        // @ViewChild(DxDiagramComponent, { static: false }) diagram: DxDiagramComponent;

        constructor(http: HttpClient) {
            http.get('data/diagram-hardware.json').subscribe(data => {
                this.diagram.instance.import(JSON.stringify(data));
            }, err => {
                throw 'Data Loading Error'
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
    <dx-diagram
        id="diagram"
        ref="diagram"
    >
        <dx-custom-shape
        :category="'hardware'"
        :type="'internet'"
        :title="'Internet'"
        :background-image-url="'images/shapes/internet.svg'"
        :background-image-left="0.15"
        :background-image-top="0"
        :background-image-width="0.7"
        :background-image-height="0.7"
        :default-width="0.75"
        :default-height="0.75"
        :default-text="'Internet'"
        :allow-edit-text="true"
        :text-left="0"
        :text-top="0.7"
        :text-width="1"
        :text-height="0.3"
        >
        <dx-connection-point
            :x="0.5"
            :y="0"
        />
        <dx-connection-point
            :x="0.9"
            :y="0.5"
        />
        <dx-connection-point
            :x="0.5"
            :y="1"
        />
        <dx-connection-point
            :x="0.1"
            :y="0.5"
        />
        </dx-custom-shape>
        ...
        <dx-toolbox :visible="true">
        <dx-group
            :category="'hardware'"
            :title="'Hardware'"
        />
        </dx-toolbox>
    </dx-diagram>
    </template>

    <script>
    import { DxDiagram, DxGroup, DxToolbox, DxCustomShape, DxConnectionPoint } from 'devextreme-vue/diagram';
    import 'whatwg-fetch';

    export default {
    components: {
        DxDiagram, DxGroup, DxToolbox, DxCustomShape, DxConnectionPoint
    },
    mounted() {
        var diagram = this.$refs['diagram'].instance;
        fetch('data/diagram-hardware.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            diagram.import(JSON.stringify(json));
        })
        .catch(function() {
            throw 'Data Loading Error';
        });
    }
    };
    </script>


##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Diagram, { CustomShape, ConnectionPoint, Group, Toolbox } from 'devextreme-react/diagram';

    class App extends React.Component {
    constructor(props) {
        super(props);

        this.diagramRef = React.createRef();
    }

        render() {
            return (
                <Diagram id="diagram" ref={this.diagramRef}>
                    <CustomShape
                        category="hardware"
                        type="internet"
                        title="Internet"
                        backgroundImageUrl="images/shapes/internet.svg"
                        backgroundImageLeft={0.15}
                        backgroundImageTop={0}
                        backgroundImageWidth={0.7}
                        backgroundImageHeight={0.7}
                        defaultWidth={0.75}
                        defaultHeight={0.75}
                        defaultText="Internet"
                        allowEditText={true}
                        textLeft={0}
                        textTop={0.7}
                        textWidth={1}
                        textHeight={0.3}>
                    <ConnectionPoint x={0.5} y={0} />
                    <ConnectionPoint x={0.9} y={0.5} />
                    <ConnectionPoint x={0.5} y={1} />
                    <ConnectionPoint x={0.1} y={0.5} />
                    </CustomShape>
                    ...
                    <Toolbox>
                        <Group category="hardware" title="Hardware" />
                    </Toolbox>
                </Diagram>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!-- tab: CustomShapesWithIcons.cshtml -->
    @(Html.DevExtreme().Diagram()
        .ID("diagram")
        .CustomShapes(cs => {
            cs.Add()
                .Category("hardware")
                .Type("internet")
                .Title("Internet")
                .BackgroundImageUrl("../../Content/Images/shapes/internet.svg")
                .BackgroundImageLeft(0.15)
                .BackgroundImageTop(0)
                .BackgroundImageWidth(0.7)
                .BackgroundImageHeight(0.7)
                .DefaultWidth(1.9)
                .DefaultHeight(1.9)
                .DefaultText("Internet")
                .AllowEditText(true)
                .TextLeft(0)
                .TextTop(0.7)
                .TextWidth(1)
                .TextHeight(0.3)
                .ConnectionPoints(cp => {
                    cp.Add().X(0.5).Y(0);
                    cp.Add().X(0.9).Y(0.5);
                    cp.Add().X(0.5).Y(1);
                    cp.Add().X(0.1).Y(0.5);

                });
            ...    
        })
        .Toolbox(tb => tb
            .Groups(g => g.Add().Category("hardware").Title("Hardware"))
        )
    )    

---


#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithIcons/"
}