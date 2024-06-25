Use the [location](/api-reference/10%20UI%20Components/dxDiagram/7%20Interfaces/CustomCommand/location.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/mainToolbar/commands/#location') property to set the location of a command or separator on the main toolbar. This property accepts one of the following values:

- **center**  
 Places the command in the center of the main toolbar.

- **before**  
 Places the command before the central element(s).

- **after**  
 Places the command after the central element(s).

The Diagram UI component displays commands with the same **location** property value in the order in which you listed them. When the main toolbar cannot accommodate all commands, the component places excess commands in the overflow menu.

The example below demonstrates how to customize the main toolbar:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            mainToolbar: {
                visible: true,
                commands: [
                    { name: "undo", location: "before" },
                    { name: "redo", location: "before" },
                    { name: "separator", location: "before" },
                    { name: "copy", location: "center" },
                    { name: "paste", location: "center" },
                    { name: "cut", location: "center" },
                    { name: "separator", location: "center" },
                    { name: "clear", icon: "clearsquare", text: "Clear Diagram", location: "after" }
                ]
            },
            toolbox: {
                visibility: 'hidden',
            },
            historyToolbar: {
                visible: false
            },
            viewToolbar: {
                visible: false
            },
            onCustomCommand: function(e) {
                if(e.name === "clear") {
                    var result = DevExpress.ui.dialog.confirm("Are you sure you want to clear the diagram? This action cannot be undone.", "Warning");
                    result.done(
                        function(dialogResult) {
                            if(dialogResult) {
                                e.component.import("");
                            }
                        }
                    );
                }
            }
        }).dxDiagram("instance");

        $.ajax({
            url: "data/diagram-flow.json",
            dataType: "text",
            success: function(data) {
                diagram.import(data);
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram" (onCustomCommand)="onCustomCommand($event)">
        <dxo-main-toolbar [visible]="true">
            <dxi-command name="undo" location="before"> </dxi-command>
            <dxi-command name="redo" location="before"> </dxi-command>
            <dxi-command name="separator" location="before"> </dxi-command>
            <dxi-command name="copy" location="center"> </dxi-command>
            <dxi-command name="paste" location="center"> </dxi-command>
            <dxi-command name="cut" location="center"> </dxi-command>
            <dxi-command name="separator" location="after"> </dxi-command>
            <dxi-command 
                name="clear" 
                icon="clearsquare" 
                text="Clear Diagram"
                location="after">
            </dxi-command>
        </dxo-main-toolbar>
        <dxo-toolbox visibility="hidden"> </dxo-toolbox>
        <dxo-history-toolbar [visible]="false"> </dxo-history-toolbar>
        <dxo-view-toolbar [visible]="false"> </dxo-view-toolbar>
    </dx-diagram>

    <!-- tab: app.module.ts -->
    import { NgModule, Component, ViewChild, enableProdMode, } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
    import { HttpClient, HttpClientModule } from '@angular/common/http';
    import { DxDiagramModule, DxDiagramComponent } from 'devextreme-angular';
    import dialog from 'devextreme/ui/dialog';

    @Component({
        selector: 'demo-app',
        templateUrl: 'app/app.component.html',
        styleUrls: ['app/app.component.css'],
        preserveWhitespaces: true,
    })
    export class AppComponent {
        @ViewChild(DxDiagramComponent, { static: false }) diagram: DxDiagramComponent;

        constructor(http: HttpClient) {
            http.get('data/diagram-flow.json').subscribe((data) => {
                this.diagram.instance.import(JSON.stringify(data));
            }, (err) => {
                throw 'Data Loading Error';
            });
        }

        onCustomCommand(e) {
            if (e.name === 'clear') {
                const result = dialog.confirm('Are you sure you want to clear the diagram? This action cannot be undone.', 'Warning');
                result.then(
                    (dialogResult) => {
                        if (dialogResult) {
                            e.component.import('');
                        }
                    },
                );
            }
        }
    }

    @NgModule({
        imports: [
            BrowserModule,
            HttpClientModule,
            DxDiagramModule,
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent],
    })
    export class AppModule { }

    platformBrowserDynamic().bootstrapModule(AppModule);

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDiagram
            id="diagram"
            ref="diagram"
            @custom-command="onCustomCommand"
        >
            <DxMainToolbar :visible="true">
                <DxCommand :name="'undo'" :location="'before'" />
                <DxCommand :name="'redo'" :location="'before'" />
                <DxCommand :name="'separator'" :location="'before'" />
                <DxCommand :name="'copy'" :location="'center'" />
                <DxCommand :name="'paste'" :location="'center'" />
                <DxCommand :name="'cut'" :location="'center'" />
                <DxCommand :name="'separator'" :location="'after'" />
                <DxCommand
                    :name="'clear'"
                    :icon="'clearsquare'"
                    :text="'Clear Diagram'"
                    :location="'after'"
                />
            </DxMainToolbar>
            <DxToolbox :visibility="'hidden'" />
            <DxHistoryToolbar :visible="false" />
            <DxViewToolbar :visible="false" />
        </DxDiagram>
    </template>
    <script>
    import { DxDiagram, DxHistoryToolbar, DxViewToolbar, DxMainToolbar, DxCommand, DxToolbox } from 'devextreme-vue/diagram';
    import { confirm } from 'devextreme/ui/dialog';
    import 'whatwg-fetch';

    export default {
        components: {
            DxDiagram, DxHistoryToolbar, DxViewToolbar, DxMainToolbar, DxCommand, DxToolbox
        },
        mounted() {
            var diagram = this.$refs['diagram'].instance;
            fetch('data/diagram-flow.json')
                .then(function(response) {
                    return response.json();
                })
                .then(function(json) {
                    diagram.import(JSON.stringify(json));
                })
                .catch(function() {
                    throw 'Data Loading Error';
                });
        },
        methods: {
            onCustomCommand(e) {
                if(e.name === 'clear') {
                    var result = confirm('Are you sure you want to clear the diagram? This action cannot be undone.', 'Warning');
                    result.then(
                    function(dialogResult) {
                        if(dialogResult) {
                        e.component.import('');
                        }
                    }
                    );
                }
            }
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Diagram, { HistoryToolbar, ViewToolbar, MainToolbar, Command, Toolbox } from 'devextreme-react/diagram';
    import { confirm } from 'devextreme/ui/dialog';
    import 'whatwg-fetch';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.diagramRef = React.createRef();
        }

        onCustomCommand(e) {
            if(e.name === 'clear') {
                var result = confirm('Are you sure you want to clear the diagram? This action cannot be undone.', 'Warning');
                result.then(
                    function(dialogResult) {
                        if(dialogResult) {
                            e.component.import('');
                        }
                    }
                );
            }
        }
        componentDidMount() {
            var diagram = this.diagramRef.current.instance();
            fetch('data/diagram-flow.json')
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
        render() {
            return (
                <Diagram id="diagram" ref={this.diagramRef} onCustomCommand={this.onCustomCommand}>
                    <MainToolbar visible={true}>
                        <Command name="undo" location="before" />
                        <Command name="redo" location="before" />
                        <Command name="separator" location="before" />
                        <Command name="copy" location="center" />
                        <Command name="paste" location="center" />
                        <Command name="cut" location="center" />
                        <Command name="separator" location="after" />
                        <Command name="clear" icon="clearsquare" text="Clear Diagram" location="after" />
                    </MainToolbar>
                    <Toolbox visibility="hidden" />
                    <HistoryToolbar visible={false} />
                    <ViewToolbar visible={false} />
                </Diagram>
            );
        }
    }
    export default App;

---

![Customize main toolbar](/images/diagram/customize-main-toolbar.png)