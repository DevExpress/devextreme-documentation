You can reorder List items from code in the following ways.

- **By index**        
Pass the index to the [reorderItem(itemIndex, toItemIndex)](/api-reference/10%20UI%20Components/dxList/3%20Methods/reorderItem(itemIndex_toItemIndex).md '/Documentation/ApiReference/UI_Components/dxList/Methods/#reorderItemitemIndex_toItemIndex') method. If the List is [grouped](/concepts/05%20UI%20Components/List/14%20Grouping/01%20In%20the%20Data%20Source.md '/Documentation/Guide/UI_Components/List/Grouping/In_the_Data_Source/'), this method should be given two objects with the indexes of the groups and the items.

---
##### jQuery

    <!--JavaScript-->
    const list = $("#listContainer").dxList("instance");
    // Place an item with index 1 after an item with index 5 
    list.reorderItem(1, 5);
    // Take an item with index 0 from a group with index 2
    // and place it to a group with index 4 after an item with index 2 
    list.reorderItem(
        { group: 2, item: 0 },
        { group: 4, item: 2 }
    );


##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxListModule, DxListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxListComponent, { static: false }) list: DxListComponent;
        // Prior to Angular 8
        // @ViewChild(DxListComponent) list: DxListComponent;
        reorderItems (index1, index2) {
            // Place an item with `index1` after an item with `index2` 
            this.list.instance.reorderItem(index1, index2);
        }
        reorderItemsInGroups (groupIndex1, itemIndex1, groupIndex2, itemIndex2) {
            // Take an item with index `itemIndex1` from a group with `groupIndex1`
            // and place it to a group with `groupIndex2` after an item with `itemIndex2`
            this.list.instance.reorderItem(
                { group: groupIndex1, item: itemIndex1 },
                { group: groupIndex2, item: itemIndex2 }
            );
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
            reorderItems (index1, index2) {
                // Place an item with `index1` after an item with `index2` 
                this.list.reorderItem(index1, index2);
            },
            reorderItemsInGroups (groupIndex1, itemIndex1, groupIndex2, itemIndex2) {
                // Take an item with index `itemIndex1` from a group with `groupIndex1`
                // and place it to a group with `groupIndex2` after an item with `itemIndex2`
                this.list.reorderItem(
                    { group: groupIndex1, item: itemIndex1 },
                    { group: groupIndex2, item: itemIndex2 }
                );
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
        const reorderItems = (index1, index2) => {
            // Place an item with `index1` after an item with `index2` 
            list.current.instance().reorderItem(index1, index2);
        };
        const reorderItemsInGroups = (groupIndex1, itemIndex1, groupIndex2, itemIndex2) => {
            // Take an item with index `itemIndex1` from a group with `groupIndex1`
            // and place it to a group with `groupIndex2` after an item with `itemIndex2`
            list.current.instance().reorderItem(
                { group: groupIndex1, item: itemIndex1 },
                { group: groupIndex2, item: itemIndex2 }
            );
        }
        return (
            <List ...
                ref={list}
            />
        );
    }

---

#####See Also#####
#include common-link-callmethods
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection)
- [List API Reference](/api-reference/10%20UI%20Components/dxList '/Documentation/ApiReference/UI_Components/dxList/')

