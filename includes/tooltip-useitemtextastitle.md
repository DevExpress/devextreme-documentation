The [useItemTextAsTitle](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#useItemTextAsTitle) property adds a `title` attribute to each item element with the item's display text. The browser displays this text as a native tooltip when a user hovers over the item.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            useItemTextAsTitle: true,
            items: [
                { id: 1, name: "Item 1" },
                { id: 2, name: "Item 2" }
            ],
            displayExpr: "name",
            valueExpr: "id"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}
        [useItemTextAsTitle]="true"
        [items]="items"
        displayExpr="name"
        valueExpr="id">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import { Dx{WidgetName}Module } from "devextreme-angular";

    @Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        standalone: true,
        imports: [Dx{WidgetName}Module]
    })
    export class AppComponent {
        items = [
            { id: 1, name: "Item 1" },
            { id: 2, name: "Item 2" }
        ];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}
            :use-item-text-as-title="true"
            :items="items"
            display-expr="name"
            value-expr="id"
        />
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';

    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' }
    ];
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { {WidgetName} } from 'devextreme-react/{widget-name}';

    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' }
    ];

    export default function App() {
        return (
            <{WidgetName}
                useItemTextAsTitle={true}
                items={items}
                displayExpr="name"
                valueExpr="id"
            />
        );
    }

---
