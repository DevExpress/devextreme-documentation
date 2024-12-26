You can display Menu items from the [items](/api-reference/10%20UI%20Components/dxMenu/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/') array or a [data source](/api-reference/10%20UI%20Components/dxMenu/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#dataSource'). This tutorial uses the first technique. To see how to use the [dataSource](/api-reference/10%20UI%20Components/dxMenu/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#dataSource'), refer to the following demo: [Menu Overview Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Menu/Overview/).

To create a base Menu level, define the component in the markup and populate it with items one by one. You can use predefined item properties to customize the items. For example, the code example below uses [icon](/api-reference/_hidden/dxMenuBaseItem/icon.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#icon') and [text](/api-reference/_hidden/dxMenuBaseItem/text.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#text') item properties. To further customize the appearance and content of items, use an [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#itemTemplate') to customize all items simultaneously or the item [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#template') property to customize individual items.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const menu = $("#menu").dxMenu({
            items: [
                {
                    icon: 'home'
                },
                {   
                    text: 'About'
                },
                {   
                    text: 'Products'
                },
                {
                    icon: 'cart'
                }
            ]
        }).dxMenu('instance');
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
            <link rel="stylesheet" type="text/css" href="index.css">
        </head>
        <body>
            <div id="container">
                <div id="menu"></div>
            </div>
        </body>
    </html>


##### Angular

    <!-- tab: app.component.html -->
    <div id="container">
        <dx-menu>
            <dxi-item 
                icon="home"
            >
            </dxi-item>
            <dxi-item 
                text="About"
            >
            </dxi-item>
            <dxi-item 
                text="Products"
            >
            </dxi-item>
            <dxi-item 
                icon="cart"
            >
            </dxi-item>    
        </dx-menu>
    </div>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    
    import { DxMenuModule } from "devextreme-angular";
    
    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxMenuModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="container">
            <dxMenu>
                <dxItem 
                    icon="home"
                >
                </dxItem>
                <dxItem 
                    text="About" 
                >
                </dxItem>
                <dxItem 
                    text="Products"
                >
                </dxItem>
                <dxItem
                    icon="cart"
                >
                </dxItem>
            </dxMenu>
        </div>
    </template>

    <script>
        import DxMenu, { DxItem } from 'devextreme-vue/menu';

        export default {
            components: {
                DxMenu,
                DxItem
            },
            data() {
                return {
                    
                };
            }
        }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Menu, { Item } from 'devextreme-react/menu';

    function App() {
        return (
            <div>
                <div id="container">
                    <Menu>
                        <Item
                            icon="home"
                        >
                        </Item>
                        <Item
                            text="About"
                        >
                        </Item>
                        <Item
                            text="Products"
                        >
                        </Item>
                        <Item
                            icon="cart"
                        >
                        </Item>
                    </Menu>
                </div>
            </div>
        );
    }

    export default App;

---
