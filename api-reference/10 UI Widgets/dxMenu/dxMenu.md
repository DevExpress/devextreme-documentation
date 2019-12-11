---
module: ui/menu
inherits: ..\dxMenuBase\dxMenuBase.md
---
---
##### widgettree
dataSource: [
    { text: "Video Players" },
    { text: "Televisions" },
    {
        text: "Monitors",
        items: [
            { text: "DesktopLCD 19" },
            { text: "DesktopLCD 21" },
            { text: "DesktopLED 21" }
        ]
    }
]

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Menu** widget is a panel with clickable items. A click on an item opens a drop-down menu, which can contain several submenus.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxMenu` jQuery plug-in.

        <!--HTML-->
        <div id="menu"></div>

    <!---->

        <!--JavaScript-->
        var menuItems = [
            { text: "Hide" },
            { text: "Delete" },
            {
                text: "Clipboard",
                items: [
                    { text: "Copy text" },
                    { text: "Clear text" },
                    { text: "Paste text" }
                ]
            }
        ];
        $("#menu").dxMenu({
            items: menuItems
        });

- **Knockout**  
 Add a div element and apply the `dxMenu` binding to this element.

        <!--HTML-->
        <div data-bind="dxMenu: {
            items: menuItems
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-menu` directive to this element.

        <!--HTML-->
        <div dx-menu="{
            items: menuItems
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

You can find detailed information on the principles of working with the widget in the [dxMenu section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/40%20Menu%20Widgets/1%20List%20of%20Menu%20Widgets/10%20dxMenu.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Menu_Widgets/#List_of_Menu_Widgets/dxMenu') of the [Menu Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/40%20Menu%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Menu_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationmenumenumenu/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="https://www.youtube.com/watch?v=XR3HePJDa70" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>