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
    <dx-list...
        [itemDragging]="itemDraggingSettings>
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
        itemDraggingSettings = {
            allowReordering: true
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxList...
                :item-dragging="itemDraggingSettings">
            </DxList>
        </div>
    </template>

    <script>
    // ...
    import service from './products.service';

    export default {
        // ...
        data() {
            // ...
            itemDraggingSettings = {
                allowReordering: true
            };
        },
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    //...
    const itemDraggingSettings = {
        allowReordering: true
    }

    function App() {
        return (
            <div className="App">
                <List...
                    itemDragging={itemDraggingSettings}>
                </List>
            </div>
        );
    }

    export default App;


    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ItemDragging/"
}
