
---
##### jQuery

This property supports the following values:

- A template container as a jQuery object or DOM Node
- A function that returns a template container (as a jQuery object or DOM node)

For more information about templates, refer to the following help topic: [DevExtreme {Framework} - Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates').

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            toolbarItems: [
                {
                    // ...
                    template: '<div>Custom Item</div>'
                }
            }]            
        });
    });

##### Angular

For more information about templates, refer to the following help topic: [DevExtreme {Framework} - Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates').

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-popup-toolbar-item ...>
            <div *dxTemplate>
                <div>Custom Item</div>
            </div>
        </dxi-popup-toolbar-item>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
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
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

For more information about templates, refer to the following help topic: [DevExtreme {Framework} - Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates').

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}>
            <DxToolbarItem ...>
                <div>Custom Item</div>
            </DxToolbarItem>
        </Dx{WidgetName}>
    </template>

    <script>

    import Dx{WidgetName}, {
        DxToolbarItem
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxToolbarItem
        },
        // ...
    }
    </script>

##### React

[note] Use the React-specific [render]({basewidgetpath}/Configuration/items/#render) and [component]({basewidgetpath}/Configuration/items/#component) properties instead of **template**.

For more information about templates, refer to the following help topic: [DevExtreme {Framework} - Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates').

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import {WidgetName}, {
        ToolbarItem
    } from 'devextreme-react/{widget-name}';

    const renderCustomItem = () => {
        return <div>Custom Item</div>;
    }

    function App() {
        return (
            <{WidgetName} ... >
                <ToolbarItem ... 
                    render={renderCustomItem}
                >
                </ToolbarItem>
            </{WidgetName}>
        );
    }
    export default App;

---

#include toolbar-buttongroup-widget-template-menu-note
