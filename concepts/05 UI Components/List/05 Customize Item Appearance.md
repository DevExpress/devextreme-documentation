For a minor customization of List items, you can define [specific fields](/api-reference/10%20UI%20Components/dxList/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxList/Configuration/items/') in item data objects. For example, the following code generates three items: each item has a badge, the second is disabled and the third is hidden.

---
##### jQuery

    <!--JavaScript-->const fruits = [
        { text: "Apples", badge: 10 },
        { text: "Oranges", badge: 12, disabled: true },
        { text: "Lemons", badge: 15, visible: false }
    ];

    $(function() {
        $("#listContainer").dxList({
            dataSource: fruits
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruits = [
            { text: "Apples", badge: 10 },
            { text: "Oranges", badge: 12, disabled: true },
            { text: "Lemons", badge: 15, visible: false }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-list
        [dataSource]="fruits">
    </dx-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList
            :data-source="fruits"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxList from 'devextreme-vue/list';

    const fruits = [
        { text: "Apples", badge: 10 },
        { text: "Oranges", badge: 12, disabled: true },
        { text: "Lemons", badge: 15, visible: false }
    ];

    export default {
        components: {
            DxList
        },
        data() {
            return {
                fruits
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import List from 'devextreme-react/list';

    const fruits = [
        { text: "Apples", badge: 10 },
        { text: "Oranges", badge: 12, disabled: true },
        { text: "Lemons", badge: 15, visible: false }
    ];

    export default function App() {
        return (
            <List
                dataSource={fruits}
            />
        );
    }

---

If you need a more flexible solution, define an [itemTemplate](/api-reference/10%20UI%20Components/dxList/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemTemplate'). In Angular and Vue, you can declare it in the markup. In React, you can use a rendering function (shown in the code below) or component:

---

##### Angular

    <!--HTML-->
    <dx-list
        [dataSource]="fruits"
        itemTemplate="listItem">
        <div *dxTemplate="let item of 'listItem'">
            <b>{{item.name}}</b><br />
            <p style="margin:0px">{{item.count}}</p>
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruits = [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 },
            { name: "Pears", count: 20 },
            { name: "Pineapples", count: 3 }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList
            :data-source="fruits"
            item-template="list-item">
            <template #list-item="{ data }">
                <div>
                    <b>{{ data.name }}</b>
                    <br />
                    <p style="margin:0px">{{ data.count }}</p>
                </div>
            </template>
        </DxList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxList from 'devextreme-vue/list';

    const fruits = [
        { name: "Apples", count: 10 },
        { name: "Oranges", count: 12 },
        { name: "Lemons", count: 15 },
        { name: "Pears", count: 20 },
        { name: "Pineapples", count: 3 }
    ];

    export default {
        components: {
            DxList
        },
        data() {
            return {
                fruits
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import List from 'devextreme-react/list';

    const fruits = [
        { name: "Apples", count: 10 },
        { name: "Oranges", count: 12 },
        { name: "Lemons", count: 15 },
        { name: "Pears", count: 20 },
        { name: "Pineapples", count: 3 }
    ];

    const ListItem = (data) => {
        return (
            <div>
                <b>{ data.name }</b>
                <br />
                <p style={{ margin: '0px' }}>{ data.count }</p>
            </div>
        );
    };

    export default function App() {
        return (
            <List
                dataSource={fruits}
                itemRender={ListItem}
            />
        );
    }

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for items. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Components/dxList/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    const fruits = [
        { name: "Apples", count: 10 },
        { name: "Oranges", count: 12 },
        { name: "Lemons", count: 15 },
        { name: "Pears", count: 20 },
        { name: "Pineapples", count: 3 }
    ];

    $(function() {
        $("#listContainer").dxList({
            dataSource: fruits,
            itemTemplate: function(data, _, element) {
                element.append(
                    $("<b>").text(data.fruit), $("<br />"),
                    $("<p>").text(data.count).css("margin", 0)
                )
            }
        });
    });

You can also customize an individual List item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/items/#template') field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    const fruits = [
        { name: "Apples", count: 10 },
        { name: "Oranges", count: 12, template: $("#individualTemplate") },
        // ...
    ];


#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ItemTemplate/",
    name: "Built-In Template Engine"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/Item3rdPartyEngineTemplate/",
    name: "3rd-Party Template Engine"
}

#####See Also#####
- [List API Reference](/api-reference/10%20UI%20Components/dxList '/Documentation/ApiReference/UI_Components/dxList/')

[tags]list, item appearance, customize, templates, template