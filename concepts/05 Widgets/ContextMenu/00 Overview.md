The **ContextMenu** widget displays a single- or multi-level context menu. An end user invokes this menu by a right click or a long press.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ContextMenu/Basics/"
}

The following code adds the **ContextMenu** widget to your page and binds it to an image using the [target](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/target.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#target') option. Note that the data source of the widget declares several nesting levels. Items in the resulting context menu mirror this structure.

---
#####jQuery

    <!--HTML--><img id="someImage" src="http://here/goes/my.jpg">
    <div id="contextMenuContainer"></div>

    <!--JavaScript-->var contextMenuItems = [
        { text: "Zoom In" },
        { text: "Zoom Out" },
        {
            text: "Share",
            items: [{
                text: "Send to a friend",
                items: [
                    { text: "Log in with Facebook" },
                    { text: "Log in with Twitter" }
                ]
            }, {
                text: "Send to a group",
                items: [
                    { text: "Log in with Facebook" },
                    { text: "Log in with Twitter" }
                ]
            }]
        },
        { text: "Comment" }
    ];

    $(function () {
        $("#contextMenuContainer").dxContextMenu({
            items: contextMenuItems,
            target: "#someImage"
        });
    });

#####Angular

    <!--HTML-->
    <img id="someImage" src="http://here/goes/my.jpg">
    <dx-context-menu
        [items]="contextMenuItems"
        target="#someImage">
    </dx-context-menu>

    <!--TypeScript-->
    import { DxContextMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        contextMenuItems = [
            { text: "Zoom In" },
            { text: "Zoom Out" },
            {
                text: "Share",
                items: [{
                    text: "Send to a friend",
                    items: [
                        { text: "Log in with Facebook" },
                        { text: "Log in with Twitter" }
                    ]
                }, {
                    text: "Send to a group",
                    items: [
                        { text: "Log in with Facebook" },
                        { text: "Log in with Twitter" }
                    ]
                }]
            },
            { text: "Comment" }
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxContextMenuModule
         ],
         // ...
     })

---

#####See Also#####
#include common-link-configurewidget
- [ContextMenu - Access the Clicked Item](/concepts/05%20Widgets/ContextMenu/03%20Access%20the%20Clicked%20Item.md '/Documentation/Guide/Widgets/ContextMenu/Access_the_Clicked_Item/')
- [ContextMenu - Customize Item Appearance](/concepts/05%20Widgets/ContextMenu/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/ContextMenu/Customize_Item_Appearance')
- [ContextMenu - Open and Close](/concepts/05%20Widgets/ContextMenu/10%20Open%20and%20Close%20the%20Context%20Menu '/Documentation/Guide/Widgets/ContextMenu/Open_and_Close_the_Context_Menu/')
- [ContextMenu API Reference](/api-reference/10%20UI%20Widgets/dxContextMenu '/Documentation/ApiReference/UI_Widgets/dxContextMenu/')

[tags]context menu, contextMenu, navigation, collection container, collection widget, overview