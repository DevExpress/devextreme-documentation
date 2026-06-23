Use the [onItemRendered](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#onItemRendered) event to add a `title` attribute to each item element after it is rendered. The browser displays this text as a native tooltip when a user hovers over the item.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            items: [
                { text: "Item 1", hint: "Description for item 1" },
                { text: "Item 2", hint: "Description for item 2" }
            ],
            onItemRendered: function(e) {
                $(e.itemElement).attr("title", e.itemData.hint);
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}
        [items]="items"
        (onItemRendered)="onItemRendered($event)">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import { Dx{WidgetName}Module } from "devextreme-angular";
    import { ItemRenderedEvent } from "devextreme/ui/{widget-name}";

    @Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        standalone: true,
        imports: [Dx{WidgetName}Module]
    })
    export class AppComponent {
        items = [
            { text: "Item 1", hint: "Description for item 1" },
            { text: "Item 2", hint: "Description for item 2" }
        ];

        onItemRendered(e: ItemRenderedEvent) {
            (e.itemElement as HTMLElement).title = e.itemData.hint;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}
            :items="items"
            @item-rendered="onItemRendered"
        />
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';
    import type { ItemRenderedEvent } from 'devextreme/ui/{widget-name}';

    const items = [
        { text: 'Item 1', hint: 'Description for item 1' },
        { text: 'Item 2', hint: 'Description for item 2' }
    ];

    function onItemRendered(e: ItemRenderedEvent) {
        (e.itemElement as HTMLElement).title = e.itemData.hint;
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback } from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { {WidgetName} } from 'devextreme-react/{widget-name}';
    import type { ItemRenderedEvent } from 'devextreme/ui/{widget-name}';

    const items = [
        { text: 'Item 1', hint: 'Description for item 1' },
        { text: 'Item 2', hint: 'Description for item 2' }
    ];

    export default function App() {
        const onItemRendered = useCallback((e: ItemRenderedEvent) => {
            (e.itemElement as HTMLElement).title = e.itemData.hint;
        }, []);

        return (
            <{WidgetName}
                items={items}
                onItemRendered={onItemRendered}
            />
        );
    }

---
