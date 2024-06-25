You can delete a list item by its index. Pass the index to the [deleteItem(itemIndex)](/api-reference/10%20UI%20Components/dxList/3%20Methods/deleteItem(itemIndex).md '/Documentation/ApiReference/UI_Components/dxList/Methods/#deleteItemitemIndex') method. If the List is [grouped](/concepts/05%20UI%20Components/List/14%20Grouping/01%20In%20the%20Data%20Source.md '/Documentation/Guide/UI_Components/List/Grouping/In_the_Data_Source/'), this method should be given an object with the indexes of the group and the item to be deleted.

---
##### jQuery

    <!--JavaScript-->
    const list = $("#listContainer").dxList("instance");
    // Delete an item with index 1 
    list.deleteItem(1);
    // Delete an item with index 0 from a group with index 2
    list.deleteItem({ group: 2, item: 0 });

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxListModule, DxListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxListComponent, { static: false }) list: DxListComponent;
        // Prior to Angular 8
        // @ViewChild(DxListComponent) list: DxListComponent;
        deleteItem (index) {
            this.list.instance.deleteItem(index);
        }
        deleteItemFromGroup (itemIndex, groupIndex) {
            // Delete an item with `itemIndex` from a group with `groupIndex`
            this.list.instance.deleteItem({ group: groupIndex, item: itemIndex });
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
            deleteItem (index) {
                this.list.deleteItem(index);
            },
            deleteItemFromGroup (itemIndex, groupIndex) {
                // Delete an item with `itemIndex` from a group with `groupIndex`
                this.list.deleteItem({ group: groupIndex, item: itemIndex });
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
        const deleteItem = (index) => {
            list.current.instance().deleteItem(index);
        };
        const deleteItemFromGroup = (itemIndex, groupIndex) => {
            // Delete an item with `itemIndex` from a group with `groupIndex`
            list.current.instance().deleteItem({ group: groupIndex, item: itemIndex });
        };
        return (
            <List ...
                ref={list}
            />
        );
    }

---

[note] If you want to delete an item by key or by data object, do it directly in the data source.

#####See Also#####
#include common-link-callmethods
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection)
- [List API Reference](/api-reference/10%20UI%20Components/dxList '/Documentation/ApiReference/UI_Components/dxList/')

