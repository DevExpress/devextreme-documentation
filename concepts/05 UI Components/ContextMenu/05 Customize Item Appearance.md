For a minor customization of ContextMenu items, you can define [specific fields](/api-reference/10%20UI%20Components/dxContextMenu/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxContextMenu/Configuration/items/') in item data objects. For example, the following code generates three context menu items. Between the first and the second items lies a separator dividing one group of items from another. All the items are supplied with [icons](/concepts/60%20Themes%20and%20Styles/30%20Icons/10%20Built-In%20Icon%20Library.md '/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library').

---

##### jQuery

    <!--JavaScript-->
    var contextMenuItems = [
        { text: 'Zoom In', icon: 'plus' },
        { text: 'Share', icon: 'message', beginGroup: true },
        { text: 'Download', icon: 'download' }
    ];

    $(function() {
        $("#contextMenuContainer").dxContextMenu({
            items: contextMenuItems,
            target: "#someElement",
            visible: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-context-menu
        [items]="contextMenuItems"
        target="#someElement"
        [visible]="true">
    </dx-context-menu>

    <!--TypeScript-->
    import { DxContextMenuModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        contextMenuItems = [
            { text: 'Zoom In', icon: 'plus' },
            { text: 'Share', icon: 'message', beginGroup: true },
            { text: 'Download', icon: 'download' }
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
        <DxContextMenu
            :items="contextMenuItems"
            target="#someElement"
            :visible="true"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxContextMenu from 'devextreme-vue/context-menu';

    export default {
        components: {
            DxContextMenu
        },
        data() {
            return {
                contextMenuItems: [
                    { text: 'Zoom In', icon: 'plus' },
                    { text: 'Share', icon: 'message', beginGroup: true },
                    { text: 'Download', icon: 'download' }
                ]
            };
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { ContextMenu } from 'devextreme-react/context-menu';

    const contextMenuItems = [
        { text: 'Zoom In', icon: 'plus' },
        { text: 'Share', icon: 'message', beginGroup: true },
        { text: 'Download', icon: 'download' }
    ];

    class App extends React.Component {
        render() {
            return (
                <ContextMenu
                    items={contextMenuItems}
                    target="#someElement"
                    visible={true}
                />
            );
        }
    }

    export default App;

---

If you need a more flexible solution, define an [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxContextMenu/Configuration/#itemTemplate'). In Angular and Vue, you can declare it in the markup. In React, you can use a rendering function (shown in the code below) or component:

---

##### Angular

    <!--HTML-->
    <dx-context-menu
        [items]="contextMenuItems"
        target="#someElement"
        itemTemplate="item"
        [visible]="true">
        <div *dxTemplate="let data of 'item'; let i = index">
            <span class="dx-icon-{{data.icon}}"></span> 
            <i style="margin-left:5px">{{data.text}}</i><span> [{{i + 1}}]</span>
        </div>
    </dx-context-menu>

    <!--TypeScript-->
    import { DxContextMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        contextMenuItems = [
            { text: "Zoom In", icon: "plus" },
            { text: "Share", icon: "message" },
            { text: "Download", icon: "download" }
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
        <DxContextMenu
            :items="contextMenuItems"
            target="#someElement"
            item-template="item"
            :visible="true">
            <template #item="{ data, index }">
                <div>
                    <span :class="'dx-icon-' + data.icon"></span> 
                    <i :style="{marginLeft: 5}">{{data.text}}</i><span> [{{index + 1}}]</span>
                </div>
            </template>
        </DxContextMenu>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxContextMenu from 'devextreme-vue/context-menu';

    export default {
        components: {
            DxContextMenu
        },
        data() {
            return {
                contextMenuItems: [
                    { text: "Zoom In", icon: "plus" },
                    { text: "Share", icon: "message" },
                    { text: "Download", icon: "download" }
                ]
            };
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { ContextMenu } from 'devextreme-react/context-menu';

    const contextMenuItems = [
        { text: "Zoom In", icon: "plus" },
        { text: "Share", icon: "message" },
        { text: "Download", icon: "download" }
    ];

    class App extends React.Component {
        render() {
            return (
                <ContextMenu
                    items={contextMenuItems}
                    target="#someElement"
                    itemRender={this.renderItem}
                    visible={true}
                />
            );
        }

        renderItem(data, index) {
            return (
                <div>
                    <span className={`dx-icon-${data.icon}`}></span> 
                    <i style={{ marginLeft: 5 }}>{data.text}</i><span> [{index + 1}]</span>
                </div>
            );
        }
    }

    export default App;

---

If you use jQuery, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for context menu items. To apply this markup, use the **itemTemplate** callback function as shown in the following code:

    <!--JavaScript-->
    var contextMenuItems = [
        { text: "Zoom In", icon: "plus" },
        { text: "Share", icon: "message" },
        { text: "Download", icon: "download" }
    ];

    $(function() {
        $("#contextMenuContainer").dxContextMenu({
            items: contextMenuItems,
            visible: true,
            itemTemplate: function(itemData, itemIndex, itemElement) {
                var iconElement = $("<span></span>");
                iconElement.addClass("dx-icon-" + itemData.icon);
                itemElement.append(iconElement);
                itemElement.append("<i style='margin-left:5px'>" + itemData.text + "</i>" + " [" + itemIndex + "]");
            },
            target: '#someElement'
        });
    });

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Context_Menu/Templates/"
}

You can also customize an individual context menu item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxContextMenu/Configuration/items/#template') field of the item's data object.

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var contextMenuItems = [
        { text: "Zoom In" },
        { text: "Zoom Out" },
        {
            text: "Download",
            template: $("#individualTemplate")
        },
        // ...
    ];

In addition, you can use a 3rd-party template engine to customize UI component appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/UI_Components/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [ContextMenu API Reference](/api-reference/10%20UI%20Components/dxContextMenu '/Documentation/ApiReference/UI_Components/dxContextMenu/')

[tags]context menu, contextMenu, item appearance, customize, templates