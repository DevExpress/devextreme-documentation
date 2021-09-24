---
id: dxPopup.Options.toolbarItems
type: Array<Object>
---
---
##### shortDescription
Configures toolbar items.

---
In the following code, two items are defined on the toolbar: one is plain text, another is the [Button](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/') UI component:

---
##### jQuery

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

##### Angular

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

    #include angular-component-decorator
    export class AppComponent {
        refresh () { /* ... */ }
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <Dx{WidgetName} ... >
            <p>{WidgetName} content</p>
            <DxToolbarItem 
                text="Title" 
                location="before">
            </DxToolbarItem>
            <DxToolbarItem 
                widget="dxButton" 
                :options="buttonOptions" 
                location="after">
            </DxToolbarItem>
        </Dx{WidgetName}>
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

##### React

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

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popup/Overview/",
    name: "Popup"
}