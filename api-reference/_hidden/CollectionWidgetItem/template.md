---
id: CollectionWidgetItem.template
type: template
---
---
##### shortDescription
Specifies a template that should be used to render this item only.

##### return: String | Element | jQuery
A template name or container.

##### param(itemData): CollectionWidgetItem
<!-- %param(itemData)% -->

##### param(itemIndex): Number
<!-- %param(itemIndex)% -->

##### param(itemElement): DxElement
<!-- %param(itemElement)% -->

---
---
##### jQuery

The following types of the specified value are available.

- Assign a string containing the name of the required [template](/api-reference/10%20UI%20Components/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/').
- Assign a jQuery object of the template's container.
- Assign a DOM Node of the template's container.
- Assign a function that returns the jQuery object or a DOM Node of the template's container.

The following example adds a custom item to the component.

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

The following types of the specified value are available.

- Assign a string containing the name of the required [template](/api-reference/10%20UI%20Components/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/').
- Assign a DOM Node of the template's container.

The following example adds a custom item to the component. Note that Angular uses [custom templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates') instead of the **template** property.

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-item ... >
            <div *dxTemplate>
                <div>Custom Item</div>
            </div>
        </dxi-item>
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

The following types of the specified value are available.

- Assign a string containing the name of the required [template](/api-reference/10%20UI%20Components/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/').
- Assign a DOM Node of the template's container.

The following example adds a custom item to the component. Note that Vue uses [custom templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates') instead of the **template** property.

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <dxItem ... >
                <div>Custom Item</div>
            </dxItem>
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

The following types of the specified value are available.

- Assign a string containing the name of the required [template](/api-reference/10%20UI%20Components/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/').
- Assign a DOM Node of the template's container.

The following example adds a custom item to the component. In React, specify the [render](/api-reference/_hidden/CollectionWidgetItem/render.md '{basewidgetpath}/Configuration/items/#render') or [component](/api-reference/_hidden/CollectionWidgetItem/component.md '{basewidgetpath}/Configuration/items/#component') properties.

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

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')

<!-- import * from 'api-reference\10 UI Components\CollectionWidget\1 Configuration\itemTemplate.md' -->