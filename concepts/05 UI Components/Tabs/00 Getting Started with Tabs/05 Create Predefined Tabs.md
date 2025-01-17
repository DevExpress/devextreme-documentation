You can create tab items in the [items](/api-reference/10%20UI%20Components/dxTabs/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/items/') array, or populate tab items from a [dataSource](/api-reference/10%20UI%20Components/dxTabs/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#dataSource'). This tutorial uses the first technique. To see how to use the [dataSource](/api-reference/10%20UI%20Components/dxTabs/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#dataSource'), refer to the following demo: [Tabs Overview Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tabs/Overview/).

You can use predefined item features to customize the items. The code below creates a Tabs component with a fixed [width](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/width.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#width') and populates it with three items. The first item has a [badge](/api-reference/_hidden/dxTabPanelItem/badge.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#badge'). The second item uses [text](/api-reference/_hidden/CollectionWidgetItem/text.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#text') and is [disabled](/api-reference/_hidden/CollectionWidgetItem/disabled.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#disabled'). The third item has an [icon](/api-reference/_hidden/dxTabPanelItem/icon.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#icon').

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#tabs").dxTabs({
            width: 300,
            items: [
                {
                    badge: 'First'
                },
                {
                    text: 'Second',
                    disabled: true                
                },
                {
                    icon: 'favorites',
                    text: 'Third'                
                }
            ]
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_24_2/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_24_2/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
            <link rel="stylesheet" type="text/css" href="index.css">
        </head>
        <body>
            <div id="tabs"></div>
        </body>
    </html>

##### Angular

    <!-- tab: app.component.html -->
    <dx-tabs
        [width]="300"
    >
        <dxi-item 
            badge="First"
        >
        </dxi-item>
        <dxi-item 
            text="Second"
            [disabled]="true"
        >
        </dxi-item>
        <dxi-item 
            text="Third"
            icon="favorites"
        >
        </dxi-item>
    </dx-tabs>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxTabsModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTabsModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dxTabs
            :width="300"
        >
            <dxItem 
                badge="First"
            >
            </dxItem>
            <dxItem 
                text="Second"
                :disabled="true" 
            >
            </dxItem>
            <dxItem 
                text="Third"
                icon="favorites"
            >
            </dxItem>
        </dxTabs>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxTabs, { DxItem } from 'devextreme-vue/tabs';

    export default {
        components: {
            DxTabs
            DxItem
        },
        data() {
            return {

            }
        },
        methods: {    
            
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Tabs, { Item } from 'devextreme-react/tabs';

    import 'devextreme/dist/css/dx.light.css';

    function App() {
        return (
            <Tabs
                width={300}
            >
                <Item
                    badge="First"
                >
                </Item>
                <Item
                    text="Second"
                    disabled={true}
                >
                </Item>
                <Item
                    text="Third"
                    icon="favorites"
                >
                </Item>
            </Tabs>
        );
    }

    export default App;

---

