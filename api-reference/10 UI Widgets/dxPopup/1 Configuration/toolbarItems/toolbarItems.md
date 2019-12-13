---
id: dxPopup.Options.toolbarItems
type: Array<Object>
---
---
##### shortDescription
Configures toolbar items.

---
In the following code, two items are defined on the toolbar: one is plain text, another is the [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/') widget:

---
#####jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            toolbarItems: [{
                text: "Title",
                location: "before"
            }, {
                widget: "dxButton",
                location: "after",
                options: { 
                    text: "Refresh", 
                    onClick: function(e) { /* ... */ }
                }
            }]
        });
    });

    <!-- tab: index.html -->
    <div id="{widgetName}Container">
        <p>{WidgetName} content</p>
    </div>

#####Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <div *dxTemplate="let data of 'content'">
            <p>{WidgetName} content</p>
        </div>
        <dxi-toolbar-item
            text="Title"
            location="before">
        </dxi-toolbar-item>
        <dxi-toolbar-item
            widget="dxButton"
            location="after"
            [options]="{
                text: 'Refresh',
                onClick: refresh
            }">
        </dxi-toolbar-item>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        refresh () { /* ... */ }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### ASP.NET MVC Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().{WidgetName}()
        <!-- ... -->
        .ContentTemplate(@<text>
            <p>{WidgetName} content</p>
        </text>)
        .ToolbarItems(ti => {
            ti.Add()
                .Text("Title")
                .Location(ToolbarItemLocation.Before);
            ti.Add()
                .Widget(w => w.Button()
                    .Text("Refresh")
                    .OnClick("refresh"))
                .Location(ToolbarItemLocation.After);
        }
    )
    
    <script type="text/javascript">
        function refresh() { /* ... */ }
    </script>

#####Vue

    <!-- tab: App.vue -->
    <template> 
        <dx-{widget-name} ... >
            <p>{WidgetName} content</p>
            <dx-toolbar-item 
                text="Title" 
                location="before">
            </dx-toolbar-item>
            <dx-toolbar-item 
                widget="dxButton" 
                :options="buttonOptions" 
                location="after">
            </dx-toolbar-item>
        <dx-{widget-name}>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, { DxToolbarItem } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                buttonOptions: {
                    text: 'Refresh',
                    onClick: function(e) { /* ... */ }
                }
            }
        }
    }
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, ToolbarItem } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        constructor() {
            this.buttonOptions = {
                text: 'Refresh',
                onClick: function(e) { /* ... */ }
            };
        }
        render() {
            return (
                <{WidgetName} ... >
                    <p>{WidgetName} Content</p>
                    <ToolbarItem 
                        text="Title" 
                        location="before">
                    </ToolbarItem>
                    <ToolbarItem 
                        widget="dxButton" 
                        location="after" 
                        options={this.buttonOptions}>
                    </ToolbarItem>
                </{WidgetName}>
            );
        }
    }
    export default App;

---