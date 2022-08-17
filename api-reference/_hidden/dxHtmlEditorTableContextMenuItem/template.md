The following types of the specified value are available.

- Assign a string containing the name of the required [template](/api-reference/10%20UI%20Components/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/').
- Assign a jQuery object of the template's container.
- Assign a DOM Node of the template's container.
- Assign a function that returns the jQuery object or a DOM Node of the template's container.

The following example adds a custom item to the component. Note that Angular and Vue use [custom templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates') instead of the **template** property. In React, specify the [render]({basewidgetpath}/Configuration/tableContextMenu/items/#render) or [component]({basewidgetpath}/Configuration/tableContextMenu/items/#component) properties.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            tableContextMenu: {
                items: [
                    {
                        // ...
                        template: '<div>Custom Item</div>'
                    }
                ]  
            }           
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-table-context-menu>
            <dxi-item ...>
                <div *dxTemplate>
                    <div>Custom Item</div>
                </div>
            </dxi-item>
        </dxo-table-context-menu>
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
            <DxTableContextMenu>
                <DxItem ...>
                    <div>Custom Item</div>
                </DxItem>
            </DxTableContextMenu>
        </Dx{WidgetName}>
    </template>

    <script>

    import Dx{WidgetName}, {
        DxContextMenu, DxItem
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxContextMenu,
            DxItem
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        ContextMenu, Item
    } from 'devextreme-react/{widget-name}';

    const renderCustomItem = () => {
        return <div>Custom Item</div>;
    }

    function App() {
        return (
            <{WidgetName} ... >
                <TableContextMenu>
                    <Item ... 
                        render={renderCustomItem}
                    >
                    </Item>
                </TableContextMenu>
            </{WidgetName}>
        );
    }
    export default App;

---

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')