Users can drag and drop list items to reorder them. To configure this functionality, define the [itemDragging](/api-reference/10%20UI%20Components/dxList/1%20Configuration/itemDragging.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemDragging') object. Within this object, set the [allowReordering](/api-reference/10%20UI%20Components/dxSortable/1%20Configuration/allowReordering.md '/Documentation/ApiReference/UI_Components/dxSortable/Configuration/#allowReordering') property to **true**.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#list').dxList({
            // ...
            itemDragging: {
                allowReordering: true,
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-list...>
        <dxo-item-dragging 
            [allowReordering]="true">
        </dxo-item-dragging>
    </dx-list>


##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxList...>
                <DxItemDragging
                    :allow-reordering="true"
                 />
            </DxList>
        </div>
    </template>

    <script>
    // ...
    import DxList, { DxItemDragging } from "devextreme-vue/list";

    export default {
        components: {
            // ...
            DxItemDragging
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    //...
    import List, { ItemDragging } from "devextreme-react/list";

    function App() {
        return (
            <div className="App">
                <List...>
                    <ItemDragging 
                        allowReordering={true} 
                    />
                </List>
            </div>
        );
    }

    export default App;


    
---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ItemDragging/"
}
