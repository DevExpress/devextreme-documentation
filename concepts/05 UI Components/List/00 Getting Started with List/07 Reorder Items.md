The List supports drag & drop functionality that allows users to reorder list items. To configure it, define the [itemDragging](/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemDragging) object. Within this object, set the [allowReordering](/Documentation/ApiReference/UI_Components/dxSortable/Configuration/#allowReordering) property to **true**.

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
            [allowReordering]="true"
        >
        </dxo-item-dragging>
    </dx-list>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    //...

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...   
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxList...>
                <DxItemDragging
                    :allow-reordering="true"
                 >
                </DxItemDragging>
            </DxList>
        </div>
    </template>

    <script>
    // ...
    import DxList, {DxItemDragging} from "devextreme-vue/list";
    import service from './products.service';

    export default {
        components: {
            // ...
            DxItemDragging
        },
        data() {
            // ...
        },
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ItemDragging/"
}
