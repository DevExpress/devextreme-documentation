---
id: dxToolbar.Options.items.template
type: template
---
---
##### shortDescription
Specifies the template used to render this item.

##### return: String | Element | jQuery
The template name or container.

##### param(itemData): CollectionWidgetItem
<!-- %param(itemData)% -->

##### param(itemIndex): Number
<!-- %param(itemIndex)% -->

##### param(itemElement): DxElement
<!-- %param(itemElement)% -->

---
---
##### jQuery

This property supports the following values:

- Template container as a jQuery object or DOM Node
- A function that returns a template container (as a jQuery object or DOM node)

For more information about templates, refer to the following help topic: [DevExtreme {Framework} - Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates').

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            items: [
                {
                    // ...
                    template: '<div>Custom Item</div>'
                }
            ]
        });
    });

##### Angular

For more information about templates, refer to the following help topic: [DevExtreme {Framework} - Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates').

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-{widget-name}-item ... >
            <div *dxTemplate>
                <div>Custom Item</div>
            </div>
        </dxi-{widget-name}-item>
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
        <Dx{WidgetName} ... >
            <DxItem ... >
                <div>Custom Item</div>
            </DxItem>
        </Dx{WidgetName}>
    </template>

    <script>

    import Dx{WidgetName}, {
        DxItem
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxItem
        },
        // ...
    }
    </script>

##### React

[note] Use the React-specific [render]({basewidgetpath}/Configuration/items/#render) and [component]({basewidgetpath}/Configuration/items/#component) properties instead of **template**.

For more information about templates, refer to the following help topic: [DevExtreme {Framework} - Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates').

    <!-- tab: App.js -->
    import React from 'react';

    import {WidgetName}, {
        Item
    } from 'devextreme-react/{widget-name}';

    const renderCustomItem = () => {
        return <div>Custom Item</div>;
    }

    const App() = () => {
        return (
            <{WidgetName} ... >
                <Item ...
                    render={renderCustomItem}
                >
                </Item>
            </{WidgetName}>
        );
    }
    export default App;

---

#include toolbar-buttongroup-widget-template-menu-note

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')

<!-- import * from 'api-reference\10 UI Components\CollectionWidget\1 Configuration\itemTemplate.md' -->
