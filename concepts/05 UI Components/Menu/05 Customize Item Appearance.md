For a minor customization of Menu items, you can define [specific fields](/api-reference/10%20UI%20Components/dxMenu/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/') in item data objects. For example, the following code generates two root items with two drop-down menu items each. The root items are supplied with [icons](/concepts/60%20Themes%20and%20Styles/30%20Icons/10%20Built-In%20Icon%20Library.md '/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library').

---

##### jQuery

    <!--JavaScript-->
    var menuItems = [{
        text: 'Upload', icon: 'upload',
        items: [
            { text: 'From your computer' },
            { text: 'From a cloud service' }
        ]
    }, {
        text: 'Share', icon: 'message',
        items: [
            { text: 'Log in with Facebook' },
            { text: 'Log in with Twitter' }
        ]
    }];

    $(function() {
        $("#menuContainer").dxMenu({
            items: menuItems
        });
    });

    <!--HTML-->
    <div id="menuContainer"></div>

##### Angular

    <!--HTML-->
    <dx-menu
        [items]="menuItems">
    </dx-menu>

    <!--TypeScript-->
    import { DxMenuModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        menuItems = [{
            text: 'Upload', icon: 'upload',
            items: [
                { text: 'From your computer' },
                { text: 'From a cloud service' }
            ]
        }, {
            text: 'Share', icon: 'message',
            items: [
                { text: 'Log in with Facebook' },
                { text: 'Log in with Twitter' }
            ]
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxMenuModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxMenu
            :items="menuItems"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxMenu from 'devextreme-vue/menu';

    export default {
        components: {
            DxMenu
        },
        data() {
            return {
                menuItems: [{
                    text: 'Upload', icon: 'upload',
                    items: [
                        { text: 'From your computer' },
                        { text: 'From a cloud service' }
                    ]
                }, {
                    text: 'Share', icon: 'message',
                    items: [
                        { text: 'Log in with Facebook' },
                        { text: 'Log in with Twitter' }
                    ]
                }]
            };
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Menu } from 'devextreme-react/menu';

    const menuItems = [{
        text: 'Upload', icon: 'upload',
        items: [
            { text: 'From your computer' },
            { text: 'From a cloud service' }
        ]
    }, {
        text: 'Share', icon: 'message',
        items: [
            { text: 'Log in with Facebook' },
            { text: 'Log in with Twitter' }
        ]
    }];

    class App extends React.Component {
        render() {
            return (
                <Menu
                    items={menuItems}
                />
            );
        }
    }

    export default App;

---

If you need a more flexible solution, define an [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#itemTemplate').

---
##### jQuery

    <!--JavaScript-->
    var menuItems = [{
        text: 'Upload',
        items: [
            { text: 'From your computer' },
            { text: 'From a cloud service' }
        ]
    }, {
        text: 'Share',
        items: [
            { text: 'Log in with Facebook' },
            { text: 'Log in with Twitter' }
        ]
    }];

    $(function() {
        $("#menuContainer").dxMenu({
            items: menuItems,
            itemTemplate: function(itemData, itemIndex, itemElement) {
                itemElement.append("<i>" + itemData.text + "</i>");
            }
        });
    });

    <!--HTML-->
    <div id="menuContainer"></div>

##### Angular

    <!--HTML-->
    <dx-menu
        [items]="menuItems"
        itemTemplate="items">
        <div *dxTemplate="let item of 'items'">
            <i>{{item.text}}</i>
        </div>
    </dx-menu>

    <!--TypeScript-->
    import { DxMenuModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        menuItems = [{
            text: 'Upload',
            items: [
                { text: 'From your computer' },
                { text: 'From a cloud service' }
            ]
        }, {
            text: 'Share',
            items: [
                { text: 'Log in with Facebook' },
                { text: 'Log in with Twitter' }
            ]
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxMenuModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxMenu
            :items="menuItems"
            item-template="item">
            <template #item="{ data }">
                <i>{{data.text}}</i>
            </template>
        </DxMenu>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxMenu from 'devextreme-vue/menu';

    export default {
        components: {
            DxMenu
        },
        data() {
            return {
                menuItems: [{
                    text: 'Upload',
                    items: [
                        { text: 'From your computer' },
                        { text: 'From a cloud service' }
                    ]
                }, {
                    text: 'Share',
                    items: [
                        { text: 'Log in with Facebook' },
                        { text: 'Log in with Twitter' }
                    ]
                }]
            };
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Menu } from 'devextreme-react/menu';

    const menuItems = [{
        text: 'Upload',
        items: [
            { text: 'From your computer' },
            { text: 'From a cloud service' }
        ]
    }, {
        text: 'Share',
        items: [
            { text: 'Log in with Facebook' },
            { text: 'Log in with Twitter' }
        ]
    }];

    const renderMenuItem = (itemData) => {
        return (
            <i>{itemData.text}</i>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <Menu
                    items={menuItems}
                    itemRender={renderMenuItem}
                />
            );
        }
    }

    export default App;

---

---
##### jQuery

You can also customize an individual menu item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#template') field of the item's data object.

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <i>Upload</i>
    </script>

    <!--JavaScript-->
    var menuItems = [{
        text: "Upload", icon: "upload",
        template: $("#individualTemplate"),
        items: [
            { 
                template: function() {
                    return $("<i>").text("From your computer");
                }
            }
        ]
    }];

    $(function() {
        $("#menuContainer").dxMenu({
            items: menuItems
        });
    });

---



#####See Also#####
- [Menu Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Menu/Overview)
- [Menu API Reference](/api-reference/10%20UI%20Components/dxMenu '/Documentation/ApiReference/UI_Components/dxMenu/')

[tags]menu, item appearance, customize, templates
