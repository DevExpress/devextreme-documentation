The following table gives an overview of scrolling-related methods exposed by the List.

<table class="dx-table">
    <tr>
        <th>Method</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>scrollHeight()</td>
        <td>Returns the height of the scrollable content in pixels.</td>
    </tr>
    <tr>
        <td>scrollToItem(itemIndex)</td>
        <td>Scrolls the <b>List</b> to the item with a specific index.</td>
    </tr>
    <tr>
        <td>scrollToItem(itemElement)</td>
        <td>Scrolls the <b>List</b> to a specific <a href="http://www.w3schools.com/js/js_htmldom_nodes.asp">DOM node</a>.</td>
    </tr>
    <tr>
        <td>scrollTo(location)</td>
        <td>Scrolls the <b>List</b> to a location specified in pixels.</td>
    </tr>
    <tr>
        <td>scrollBy(distance)</td>
        <td>Scrolls the <b>List</b> from the current location by a distance specified in pixels.</td>
    </tr>
    <tr>
        <td>scrollTop()</td>
        <td>Returns a pixel-measured value that shows how far the <b>List</b> is scrolled from the top.</td>
    </tr>
</table>

The following examples shows how to call these methods.

---
##### jQuery

    <!--JavaScript-->
    const list = $("#listContainer").dxList("instance");
    const listItems = list.option("items");

    // Scrolls the List to the last item
    list.scrollToItem(listItems.length-1);

    // Scrolls a grouped List to the first item of the last group
    list.scrollToItem({
        group: listItems.length-1,
        item: 0
    });

<!---->

    <!--JavaScript-->
    // Finds the DOM nodes of all items and scrolls the List to the last node
    const listItemNodes = $("#listContainer").find(".dx-list-item");
    list.scrollToItem(listItemNodes[listItemNodes.length-1]);

    // Finds the DOM nodes of all groups and scrolls the List to the last node
    const listGroupNodes = $("#listContainer").find(".dx-list-group");
    list.scrollToItem(listGroupNodes[listGroupNodes.length-1]);

<!---->

    <!--JavaScript-->
    const contentHeight = list.scrollHeight();
    const scrolledFromTopBy = list.scrollTop();
    list.scrollTo(200);
    list.scrollBy(100);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxListModule, DxListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxListComponent, { static: false }) list: DxListComponent;
        // Prior to Angular 8
        // @ViewChild(DxListComponent) list: DxListComponent;
        scrollToLastItem() {
            const listItems = this.list.instance.option("items");
            this.list.instance.scrollToItem(listItems.length-1);
            // OR
            // Find the DOM nodes of all items and scroll to the last node
            const listItemNodes = document.getElementsByClassName("dx-list-item");
            this.list.instance.scrollToItem(listItemNodes[listItemNodes.length-1]);
        }
        scrollToLastGroup() {
            const listItems = this.list.instance.option("items");
            this.list.instance.scrollToItem({
                group: listItems.length-1,
                item: 0
            });
            // OR
            // Find the DOM nodes of all groups and scroll to the last node
            const listGroupNodes = document.getElementsByClassName("dx-list-group");
            this.list.instance.scrollToItem(listGroupNodes[listGroupNodes.length-1]);
        }
        getListHeight() {
            return this.list.instance.scrollHeight();
        }
        getScrolledDistanceFromTop() {
            return this.list.instance.scrollTop();
        }
        scrollTo() {
            this.list.instance.scrollTo(200);
        }
        scrollBy() {
            this.list.instance.scrollBy(100);
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
            scrollToLastItem() {
                const listItems = this.list.option("items");
                this.list.scrollToItem(listItems.length-1);
                // OR
                // Find the DOM nodes of all items and scroll to the last node
                const listItemNodes = document.getElementsByClassName("dx-list-item");
                this.list.scrollToItem(listItemNodes[listItemNodes.length-1]);
            },
            scrollToLastGroup() {
                const listItems = this.list.option("items");
                this.list.scrollToItem({
                    group: listItems.length-1,
                    item: 0
                });
                // OR
                // Find the DOM nodes of all groups and scroll to the last node
                const listGroupNodes = document.getElementsByClassName("dx-list-group");
                this.list.scrollToItem(listGroupNodes[listGroupNodes.length-1]);
            },
            getListHeight() {
                return this.list.scrollHeight();
            },
            getScrolledDistanceFromTop() {
                return this.list.scrollTop();
            },
            scrollTo() {
                this.list.scrollTo(200);
            },
            scrollBy() {
                this.list.scrollBy(100);
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
        const scrollToLastItem = () => {
            const listItems = list.current.instance().option("items");
            list.current.instance().scrollToItem(listItems.length-1);
            // OR
            // Find the DOM nodes of all items and scroll to the last node
            const listItemNodes = document.getElementsByClassName("dx-list-item");
            list.current.instance().scrollToItem(listItemNodes[listItemNodes.length-1]);
        };
        const scrollToLastGroup = () => {
            const listItems = list.current.instance().option("items");
            list.current.instance().scrollToItem({
                group: listItems.length-1,
                item: 0
            });
            // OR
            // Find the DOM nodes of all groups and scroll to the last node
            const listGroupNodes = document.getElementsByClassName("dx-list-group");
            list.current.instance().scrollToItem(listGroupNodes[listGroupNodes.length-1]);
        };
        const getListHeight = () => {
            return list.current.instance().scrollHeight();
        };
        const getScrolledDistanceFromTop = () => {
            return list.current.instance().scrollTop();
        };
        const scrollTo = () => {
            list.current.instance().scrollTo(200);
        };
        const scrollBy = () => {
            list.current.instance().scrollBy(100);
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
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI)
- [List API Reference](/api-reference/10%20UI%20Components/dxList '/Documentation/ApiReference/UI_Components/dxList/')