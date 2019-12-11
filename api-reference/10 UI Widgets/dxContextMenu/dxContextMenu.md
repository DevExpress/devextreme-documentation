---
module: ui/context_menu
inherits: ..\dxMenuBase\dxMenuBase.md
---
---
##### widgettree
dataSource: [
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
],
visible: true

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **ContextMenu** widget displays a single- or multi-level context menu. An end user invokes this menu by a right click or a long press.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxContextMenu` jQuery plug-in.

        <!--HTML-->
        <div id="targetElement"></div>
        <div id="contextMenu"></div>

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
        $("#contextMenu").dxContextMenu({
            items: menuItems,
            target: '#targetElement'
        });

- **Knockout**  
 Add a div element and apply the `dxContextMenu` binding to this element.

        <!--HTML-->
        <div id="targetElement"></div>
        <div data-bind="dxContextMenu: {
            items: menuItems,
            target: '#targetElement'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-context-menu` directive to this element.

        <!--HTML-->
        <div id="targetElement"></div>
        <div dx-context-menu="{
            items: menuItems,
            target: '#targetElement'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

You can find detailed information on the principles of working with the widget in the [dxContextMenu section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/40%20Menu%20Widgets/1%20List%20of%20Menu%20Widgets/20%20dxContextMenu.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Menu_Widgets/#List_of_Menu_Widgets/dxContextMenu') of the [Menu Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/40%20Menu%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Menu_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistscontextmenucontextmenucontextmenu/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>