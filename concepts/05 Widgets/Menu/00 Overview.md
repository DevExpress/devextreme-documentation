The **Menu** widget is a panel with clickable items. A click on an item opens a drop-down menu, which can contain several submenus.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Menu/Overview/"
}

The following code adds the **Menu** widget to your page. Note that the data source of the widget declares several nesting levels. First-level items produce items for the widget panel, or "root items". Other items go to drop-down menus.

---
##### jQuery

    <!--HTML--><div id="menuContainer"></div>

    <!--JavaScript-->var menuItems = [{
        name: "Video Players",
        items: [
            { name: "HD Video Player", price: 220 },
            { name: "SuperHD Video Player", price: 270 }
        ]
    }, {
        name: "Televisions",
        items: [
            { name: "SuperLCD 42", price: 1200 },
            { name: "SuperLED 42", price: 1450 },
            { name: "SuperLED 50", price: 1600 }
        ]
    }, {
        name: "Monitors",
        items: [{
            name: "19\"",
            items: [
                { name: "DesktopLCD 19", price: 160 }
            ]
        }, {
            name: "21\"",
            items: [
                { name: "DesktopLCD 21", price: 170 },
                { name: "DesktopLED 21", price: 175 }
            ]
        }]
    }];

    $(function () {
        $("#menuContainer").dxMenu({
            items: menuItems,
            displayExpr: "name"
        });
    });

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
            name: "Video Players",
            items: [
                { name: "HD Video Player", price: 220 },
                { name: "SuperHD Video Player", price: 270 }
            ]
        }, {
            name: "Televisions",
            items: [
                { name: "SuperLCD 42", price: 1200 },
                { name: "SuperLED 42", price: 1450 },
                { name: "SuperLED 50", price: 1600 }
            ]
        }, {
            name: "Monitors",
            items: [{
                name: "19\"",
                items: [
                    { name: "DesktopLCD 19", price: 160 }
                ]
            }, {
                name: "21\"",
                items: [
                    { name: "DesktopLCD 21", price: 170 },
                    { name: "DesktopLED 21", price: 175 }
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

---

#####See Also#####
#include common-link-configurewidget
- [Menu - Access the Clicked Item](/concepts/05%20Widgets/Menu/03%20Access%20the%20Clicked%20Item.md '/Documentation/Guide/Widgets/Menu/Access_the_Clicked_Item/')
- [Menu - Customize Item Appearance](/concepts/05%20Widgets/Menu/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Menu/Customize_Item_Appearance')
- [Menu - Change the Orientation](/concepts/05%20Widgets/Menu/10%20Change%20the%20Orientation.md '/Documentation/Guide/Widgets/Menu/Change_the_Orientation')
- [Menu API Reference](/api-reference/10%20UI%20Widgets/dxMenu '/Documentation/ApiReference/UI_Widgets/dxMenu/')

[tags]menu, navigation, collection container, collection widget, overview