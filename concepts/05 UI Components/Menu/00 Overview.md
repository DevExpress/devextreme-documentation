The **Menu** UI component is a panel with clickable items. A click on an item opens a drop-down menu, which can contain several submenus.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Menu/Overview/"
}

The following code adds the **Menu** UI component to your page. Note that the data source of the UI component declares several nesting levels. First-level items produce items for the UI component panel, or "root items". Other items go to drop-down menus.

---

##### jQuery

    <!--JavaScript-->
    var menuItems = [{
        name: 'Video Players',
        items: [
            { name: 'HD Video Player', price: 220 },
            { name: 'SuperHD Video Player', price: 270 }
        ]
    }, {
        name: 'Televisions',
        items: [
            { name: 'SuperLCD 42', price: 1200 },
            { name: 'SuperLED 42', price: 1450 },
            { name: 'SuperLED 50', price: 1600 }
        ]
    }, {
        name: 'Monitors',
        items: [{
            name: '19"',
            items: [
                { name: 'DesktopLCD 19', price: 160 }
            ]
        }, {
            name: '21"',
            items: [
                { name: 'DesktopLCD 21', price: 170 },
                { name: 'DesktopLED 21', price: 175 }
            ]
        }]
    }];

    $(function() {
        $("#menuContainer").dxMenu({
            items: menuItems,
            displayExpr: "name"
        });
    });

    <!--HTML-->
    <div id="menuContainer"></div>

##### Angular

    <!--HTML-->
    <dx-menu
        [items]="menuItems"
        displayExpr="name">
    </dx-menu>

    <!--TypeScript-->
    import { DxMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        menuItems = [{
            name: 'Video Players',
            items: [
                { name: 'HD Video Player', price: 220 },
                { name: 'SuperHD Video Player', price: 270 }
            ]
        }, {
            name: 'Televisions',
            items: [
                { name: 'SuperLCD 42', price: 1200 },
                { name: 'SuperLED 42', price: 1450 },
                { name: 'SuperLED 50', price: 1600 }
            ]
        }, {
            name: 'Monitors',
            items: [{
                name: '19"',
                items: [
                    { name: 'DesktopLCD 19', price: 160 }
                ]
            }, {
                name: '21"',
                items: [
                    { name: 'DesktopLCD 21', price: 170 },
                    { name: 'DesktopLED 21', price: 175 }
                ]
            }]
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
            display-expr="name"
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
                    name: 'Video Players',
                    items: [
                        { name: 'HD Video Player', price: 220 },
                        { name: 'SuperHD Video Player', price: 270 }
                    ]
                }, {
                    name: 'Televisions',
                    items: [
                        { name: 'SuperLCD 42', price: 1200 },
                        { name: 'SuperLED 42', price: 1450 },
                        { name: 'SuperLED 50', price: 1600 }
                    ]
                }, {
                    name: 'Monitors',
                    items: [{
                        name: '19"',
                        items: [
                            { name: 'DesktopLCD 19', price: 160 }
                        ]
                    }, {
                        name: '21"',
                        items: [
                            { name: 'DesktopLCD 21', price: 170 },
                            { name: 'DesktopLED 21', price: 175 }
                        ]
                    }]
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
        name: 'Video Players',
        items: [
            { name: 'HD Video Player', price: 220 },
            { name: 'SuperHD Video Player', price: 270 }
        ]
    }, {
        name: 'Televisions',
        items: [
            { name: 'SuperLCD 42', price: 1200 },
            { name: 'SuperLED 42', price: 1450 },
            { name: 'SuperLED 50', price: 1600 }
        ]
    }, {
        name: 'Monitors',
        items: [{
            name: '19"',
            items: [
                { name: 'DesktopLCD 19', price: 160 }
            ]
        }, {
            name: '21"',
            items: [
                { name: 'DesktopLCD 21', price: 170 },
                { name: 'DesktopLED 21', price: 175 }
            ]
        }]
    }];

    class App extends React.Component {
        render() {
            return (
                <Menu
                    items={menuItems}
                    displayExpr="name"
                />
            );
        }
    }

    export default App;

---

#####See Also#####
#include common-link-configurewidget
- [Menu - Access the Clicked Item](/concepts/05%20Widgets/Menu/03%20Access%20the%20Clicked%20Item.md '/Documentation/Guide/UI_Components/Menu/Access_the_Clicked_Item/')
- [Menu - Customize Item Appearance](/concepts/05%20Widgets/Menu/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/UI_Components/Menu/Customize_Item_Appearance')
- [Menu - Change the Orientation](/concepts/05%20Widgets/Menu/10%20Change%20the%20Orientation.md '/Documentation/Guide/UI_Components/Menu/Change_the_Orientation')
- [Menu API Reference](/api-reference/10%20UI%20Widgets/dxMenu '/Documentation/ApiReference/UI_Components/dxMenu/')

[tags]dxmenu, menu, navigation, collection container, collection UI component, overview