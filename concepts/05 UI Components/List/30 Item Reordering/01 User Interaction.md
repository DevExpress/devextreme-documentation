If you want to allow the user to reorder items on the List, define the [itemDragging](/api-reference/10%20UI%20Components/dxList/1%20Configuration/itemDragging.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemDragging') object and set the [allowReordering](/api-reference/10%20UI%20Components/dxSortable/1%20Configuration/allowReordering.md '/Documentation/ApiReference/UI_Components/dxSortable/Configuration/#allowReordering') property within it to **true**. This setting supplies each List item with a button that enables the user to move the item with drag and drop on mouse-equipped platforms or with touch-and-drag on touch-enabled devices.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            itemDragging: {
                allowReordering: true,
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ...>
        <dxo-item-dragging
            [allowReordering]="true">
        </dxo-item-dragging>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
        <DxList ... >
            <DxItemDragging
                :allow-reordering="true"
            />
        </DxList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxList, {
        DxItemDragging
    } from 'devextreme-vue/list';

    export default {
        components: {
            DxList,
            DxItemDragging
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import List, {
        ItemDragging
    } from 'devextreme-react/list';

    export default function App() {
        return (
            <List ... >
                <ItemDragging
                    allowReordering={true}
                />
            </List>
        );
    }

---

#####See Also#####
#include common-link-configurewidget
