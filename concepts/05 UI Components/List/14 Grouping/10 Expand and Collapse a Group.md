If the user should be able to collapse or expand a group in the List, set the [collapsibleGroups](/api-reference/10%20UI%20Components/dxList/1%20Configuration/collapsibleGroups.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#collapsibleGroups') property to **true**. In this case, the user can collapse or expand a group with a click on the group header.

---
##### jQuery

    <!--JavaScript-->const fruitsVegetables = [{
        key: "Fruits",
        items: [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 }
        ]
    }, {
        // ...
    }];

    $(function() {
        $("#listContainer").dxList({
            dataSource: fruitsVegetables,
            grouped: true,
            collapsibleGroups: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-list
        [dataSource]="fruitsVegetables"
        [grouped]="true"
        [collapsibleGroups]="true">
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruitsVegetables = [{
            key: "Fruits",
            items: [
                { name: "Apples", count: 10 },
                { name: "Oranges", count: 12 },
                { name: "Lemons", count: 15 }
            ]
        }, {
            // ...
        }];
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
            :data-source="fruitsVegetables"
            :grouped="true"
            :collapsible-groups="true"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxList from 'devextreme-vue/list';

    const fruitsVegetables = [{
        key: "Fruits",
        items: [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 }
        ]
    }, {
        // ...
    }];

    export default {
        components: {
            DxList
        },
        data() {
            return {
                fruitsVegetables
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import List from 'devextreme-react/list';

    const fruitsVegetables = [{
        key: "Fruits",
        items: [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 }
        ]
    }, {
        // ...
    }];

    export default function App() {
        return (
            <List
                dataSource={fruitsVegetables}
                grouped={true}
                collapsibleGroups={true}
            />
        );
    }

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/GroupedList/"
}

To collapse or expand a specific group programmatically, call the [collapseGroup(groupIndex)](/api-reference/10%20UI%20Components/dxList/3%20Methods/collapseGroup(groupIndex).md '/Documentation/ApiReference/UI_Components/dxList/Methods/#collapseGroupgroupIndex') or [expandGroup(groupIndex)](/api-reference/10%20UI%20Components/dxList/3%20Methods/expandGroup(groupIndex).md '/Documentation/ApiReference/UI_Components/dxList/Methods/#expandGroupgroupIndex') method.

---
##### jQuery

    <!--JavaScript-->
    const list = $("#listContainer").dxList("instance");
    list.collapseGroup(0); // collapses the group with index 0
    list.expandGroup(4); // expands the group with index 4

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxListModule, DxListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxListComponent, { static: false }) list: DxListComponent;
        // Prior to Angular 8
        // @ViewChild(DxListComponent) list: DxListComponent;
        collapseGroup (groupIndex) {
            this.list.instance.collapseGroup(groupIndex);
        }
        expandGroup (groupIndex) {
            this.list.instance.expandGroup(groupIndex);
        }
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
        <DxList ...
            :ref="listRefKey"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxList from 'devextreme-vue/list';

    const listRefKey = "my-list";
    // ...
    export default {
        components: {
            DxList
        },
        data() {
            return {
                // ...
                listRefKey
            }
        },
        methods: {
            collapseGroup(groupIndex) {
                this.list.collapseGroup(groupIndex);
            },
            expandGroup(groupIndex) {
                this.list.expandGroup(groupIndex);
            }
        },
        computed: {
            list: function() {
                return this.$refs[listRefKey].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useRef } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import List from 'devextreme-react/list';
    // ...
    export default function App() {
        const list = useRef(null);
        const collapseGroup = (groupIndex) => {
            list.current.instance().collapseGroup(groupIndex);
        };
        const expandGroup = (groupIndex) => {
            list.current.instance().expandGroup(groupIndex);
        };
        return (
            <List ...
                ref={list}
            />
        );
    }

---

#####See Also#####
#include common-link-callmethods
- [List - Grouping in the Data Source](/concepts/05%20UI%20Components/List/14%20Grouping/01%20In%20the%20Data%20Source.md '/Documentation/Guide/UI_Components/List/Grouping/In_the_Data_Source/')
- [List API Reference](/api-reference/10%20UI%20Components/dxList '/Documentation/ApiReference/UI_Components/dxList/')

[tags]list, expand, collapse, collapsibleGroups, collapseGroup, expandGroup