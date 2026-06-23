If you use a custom [itemTemplate](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#itemTemplate), add a `title` attribute to the root element of the template to display the item text as a native browser tooltip:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            items: [
                { id: 1, name: "John Doe", email: "john@example.com" },
                { id: 2, name: "Jane Smith", email: "jane@example.com" }
            ],
            displayExpr: "name",
            valueExpr: "id",
            itemTemplate: function(itemData) {
                return $("<div>")
                    .attr("title", itemData.name)
                    .append($("<b>").text(itemData.name))
                    .append($("<br>"))
                    .append($("<small>").text(itemData.email));
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}
        [items]="items"
        displayExpr="name"
        valueExpr="id"
        itemTemplate="itemTemplate">
        <div *dxTemplate="let item of 'itemTemplate'" [title]="item.name">
            <b>{{ item.name }}</b><br/>
            <small>{{ item.email }}</small>
        </div>
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
            { id: 1, name: "John Doe", email: "john@example.com" },
            { id: 2, name: "Jane Smith", email: "jane@example.com" }
        ];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}
            :items="items"
            display-expr="name"
            value-expr="id"
            item-template="item"
        >
            <template #item="{ data }">
                <div :title="data.name">
                    <b>{{ data.name }}</b><br/>
                    <small>{{ data.email }}</small>
                </div>
            </template>
        </Dx{WidgetName}>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';

    const items = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { {WidgetName} } from 'devextreme-react/{widget-name}';

    const items = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];

    function ItemTemplate({ data }: { data: { name: string; email: string } }) {
        return (
            <div title={data.name}>
                <b>{data.name}</b><br/>
                <small>{data.email}</small>
            </div>
        );
    }

    export default function App() {
        return (
            <{WidgetName}
                items={items}
                displayExpr="name"
                valueExpr="id"
                itemRender={(data) => <ItemTemplate data={data} />}
            />
        );
    }

---

To display a styled [Tooltip](/Documentation/ApiReference/UI_Components/dxTooltip/) with custom content, initialize the Tooltip component inside `itemTemplate`:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            items: [
                { id: 1, name: "Item 1", description: "Detailed description 1" },
                { id: 2, name: "Item 2", description: "Detailed description 2" }
            ],
            displayExpr: "name",
            valueExpr: "id",
            itemTemplate: function(itemData, index, element) {
                var itemEl = $("<span>")
                    .attr("id", "item_" + itemData.id)
                    .text(itemData.name);

                $("<div>").dxTooltip({
                    target: "#item_" + itemData.id,
                    showEvent: "mouseenter",
                    hideEvent: "mouseleave",
                    contentTemplate: function() {
                        return itemData.description;
                    }
                }).appendTo(element);

                itemEl.appendTo(element);
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}
        [items]="items"
        displayExpr="name"
        valueExpr="id"
        itemTemplate="itemTemplate">
        <div *dxTemplate="let item of 'itemTemplate'">
            <span [id]="'item_' + item.id">{{ item.name }}</span>
            <dx-tooltip
                [target]="'#item_' + item.id"
                showEvent="mouseenter"
                hideEvent="mouseleave">
                <div *dxTemplate="let t of 'content'">{{ item.description }}</div>
            </dx-tooltip>
        </div>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import { Dx{WidgetName}Module, DxTooltipModule } from "devextreme-angular";

    @Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        standalone: true,
        imports: [Dx{WidgetName}Module, DxTooltipModule]
    })
    export class AppComponent {
        items = [
            { id: 1, name: "Item 1", description: "Detailed description 1" },
            { id: 2, name: "Item 2", description: "Detailed description 2" }
        ];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}
            :items="items"
            display-expr="name"
            value-expr="id"
            item-template="item"
        >
            <template #item="{ data }">
                <div>
                    <span :id="'item_' + data.id">{{ data.name }}</span>
                    <DxTooltip
                        :target="'#item_' + data.id"
                        show-event="mouseenter"
                        hide-event="mouseleave">
                        <template #content>{{ data.description }}</template>
                    </DxTooltip>
                </div>
            </template>
        </Dx{WidgetName}>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';
    import { DxTooltip } from 'devextreme-vue/tooltip';

    const items = [
        { id: 1, name: 'Item 1', description: 'Detailed description 1' },
        { id: 2, name: 'Item 2', description: 'Detailed description 2' }
    ];
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { {WidgetName} } from 'devextreme-react/{widget-name}';
    import { Tooltip } from 'devextreme-react/tooltip';

    const items = [
        { id: 1, name: 'Item 1', description: 'Detailed description 1' },
        { id: 2, name: 'Item 2', description: 'Detailed description 2' }
    ];

    function ItemTemplate({ data }: { data: { id: number; name: string; description: string } }) {
        return (
            <div>
                <span id={`item_${data.id}`}>{data.name}</span>
                <Tooltip
                    target={`#item_${data.id}`}
                    showEvent="mouseenter"
                    hideEvent="mouseleave">
                    {data.description}
                </Tooltip>
            </div>
        );
    }

    export default function App() {
        return (
            <{WidgetName}
                items={items}
                displayExpr="name"
                valueExpr="id"
                itemRender={(data) => <ItemTemplate data={data} />}
            />
        );
    }

---

You can replace `"mouseenter"` and `"mouseleave"` with other events such as `"click"`, `"dblclick"`, `"focus"`, or `"blur"` to control when the Tooltip is displayed.

To display a tooltip only for truncated items, compare `element.scrollWidth` with `element.clientWidth` and set the `title` attribute or display the Tooltip conditionally.

To display HTML content in the tooltip, return an HTML string from `contentTemplate` in the [Tooltip](/Documentation/ApiReference/UI_Components/dxTooltip/) component or from `itemTemplate`.
