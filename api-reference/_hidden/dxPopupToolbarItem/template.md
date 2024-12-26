The following types of the specified value are available.

- Assign a jQuery object of the template's container.
- Assign a DOM Node of the template's container.
- Assign a function that returns the jQuery object or a DOM Node of the template's container.

[note]You cannot use the [dxTemplate](/api-reference/10%20UI%20Components/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/') component as a **toolbarItems** template.

The following example adds a custom item to the Popup toolbar. Note that Angular and Vue use [custom templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates') instead of the **template** property. In React, specify the [render](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/#render) or [component](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/#component) properties.

---
##### jQuery

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

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

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
