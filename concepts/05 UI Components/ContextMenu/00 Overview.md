The ContextMenu UI component displays a single- or multi-level context menu. An end user invokes this menu by a right click or a long press.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ContextMenu/Basics/"
}

The following code adds the ContextMenu UI component to your page and binds it to an image using the [target](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/target.md '/Documentation/ApiReference/UI_Components/dxContextMenu/Configuration/#target') property. Note that the data source of the UI component declares several nesting levels. Items in the resulting context menu mirror this structure.

---

##### jQuery

    <!--JavaScript-->
    var contextMenuItems = [
        { text: 'Zoom In' },
        { text: 'Zoom Out' },
        {
            text: 'Share',
            items: [{
                text: 'Send to a friend',
                items: [
                    { text: 'Log in with Facebook' },
                    { text: 'Log in with Twitter' }
                ]
            }, {
                text: 'Send to a group',
                items: [
                    { text: 'Log in with Facebook' },
                    { text: 'Log in with Twitter' }
                ]
            }]
        },
        { text: 'Comment' }
    ];

    $(function() {
        $("#contextMenuContainer").dxContextMenu({
            items: contextMenuItems,
            target: "#someImage"
        });
    });

    <!--HTML-->
    <img id="someImage" src="http://here/goes/my.jpg">
    <div id="contextMenuContainer"></div>

##### Angular

    <!--HTML-->
    <img id="someImage" src="http://here/goes/my.jpg">
    <dx-context-menu
        [items]="contextMenuItems"
        target="#someImage">
    </dx-context-menu>

    <!--TypeScript-->
    import { DxContextMenuModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        contextMenuItems = [
            { text: 'Zoom In' },
            { text: 'Zoom Out' },
            {
                text: 'Share',
                items: [{
                    text: 'Send to a friend',
                    items: [
                        { text: 'Log in with Facebook' },
                        { text: 'Log in with Twitter' }
                    ]
                }, {
                    text: 'Send to a group',
                    items: [
                        { text: 'Log in with Facebook' },
                        { text: 'Log in with Twitter' }
                    ]
                }]
            },
            { text: 'Comment' }
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxContextMenuModule
         ],
         // ...
     })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <img
                id="someImage"
                src="http://here/goes/my.jpg"
            >
            <DxContextMenu
                :items="contextMenuItems"
                target="#someImage"
            />
        </div>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxContextMenu from 'devextreme-vue/context-menu';

    export default {
        components: {
            DxContextMenu
        },
        data() {
            return {
                contextMenuItems: [
                    { text: 'Zoom In' },
                    { text: 'Zoom Out' },
                    {
                        text: 'Share',
                        items: [{
                            text: 'Send to a friend',
                            items: [
                                { text: 'Log in with Facebook' },
                                { text: 'Log in with Twitter' }
                            ]
                        }, {
                            text: 'Send to a group',
                            items: [
                                { text: 'Log in with Facebook' },
                                { text: 'Log in with Twitter' }
                            ]
                        }]
                    },
                    { text: 'Comment' }
                ]
            };
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { ContextMenu } from 'devextreme-react/context-menu';

    const contextMenuItems = [
        { text: 'Zoom In' },
        { text: 'Zoom Out' },
        {
            text: 'Share',
            items: [{
                text: 'Send to a friend',
                items: [
                    { text: 'Log in with Facebook' },
                    { text: 'Log in with Twitter' }
                ]
            }, {
                text: 'Send to a group',
                items: [
                    { text: 'Log in with Facebook' },
                    { text: 'Log in with Twitter' }
                ]
            }]
        },
        { text: 'Comment' }
    ];

    class App extends React.Component {
        render() {
            return (
                <div>
                    <img id="someImage" src="http://here/goes/my.jpg" />
                    <ContextMenu
                        items={contextMenuItems}
                        target="#someImage"
                    />
                </div>
            );
        }
    }

    export default App;

---

#####See Also#####
#include common-link-configurewidget
- [ContextMenu - Access the Clicked Item](/concepts/05%20Widgets/ContextMenu/03%20Access%20the%20Clicked%20Item.md '/Documentation/Guide/UI_Components/ContextMenu/Access_the_Clicked_Item/')
- [ContextMenu - Customize Item Appearance](/concepts/05%20Widgets/ContextMenu/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/UI_Components/ContextMenu/Customize_Item_Appearance')
- [ContextMenu - Open and Close](/concepts/05%20Widgets/ContextMenu/10%20Open%20and%20Close%20the%20Context%20Menu '/Documentation/Guide/UI_Components/ContextMenu/Open_and_Close_the_Context_Menu/')
- [ContextMenu API Reference](/api-reference/10%20UI%20Widgets/dxContextMenu '/Documentation/ApiReference/UI_Components/dxContextMenu/')

[tags]dxcontextmenu, context menu, contextMenu, navigation, collection container, collection UI component, overview