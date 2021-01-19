For a minor customization of tabs, you can define [specific fields](/api-reference/10%20UI%20Widgets/dxTabs/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/items/') in item data objects. For example, the following code generates three tabs: the first has an icon, the second has a [badge](/api-reference/_hidden/dxTabPanelItem/badge.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#badge'), the third is disabled.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#tabsContainer").dxTabs({
            items: [
                { text: "User", icon: 'user' },
                { text: "Comment", badge: "New" },
                { text: "Find", disabled: true }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-tabs
        [items]="tabs">
    </dx-tabs>

    <!--TypeScript-->
    import { DxTabsModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tabs = [
            { text: "User", icon: 'user' },
            { text: "Comment", badge: "New" },
            { text: "Find", disabled: true }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTabsModule
        ],
        // ...
    })

##### Vue

    <!--tab: App.vue-->
    <template>
        <DxTabs
            :items="tabs" />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTabs from "devextreme-vue/tabs";

    export default {
        components: {
            DxTabs
        },
        data() {
            return {
                tabs: [
                    { text: "User", icon: 'user' },
                    { text: "Comment", badge: "New" },
                    { text: "Find", disabled: true }
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

    import { Tabs } from 'devextreme-react/tabs';

    const tabs = [
        { text: "User", icon: 'user' },
        { text: "Comment", badge: "New" },
        { text: "Find", disabled: true }
    ];

    class App extends React.Component {
        render() {
            return (
                <Tabs
                    items={tabs}
                />
            );
        }
    }

    export default App;

---

If you need a more flexible solution, define an [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#itemTemplate'). In Angular and Vue, you can declare it in the markup. In React, you can use a rendering function (shown in the code below) or component:

---
##### Angular

    <!--HTML-->
    <dx-tabs
        [items]="tabs"
        itemTemplate="tabItem">
        <div *dxTemplate="let itemData of 'tabItem'">
            <p style="color:#6600cc;">{{itemData.text}}</p>
        </div>
    </dx-tabs>

    <!--TypeScript-->
    import { DxTabsModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tabs = [
            { text: "User" },
            { text: "Comment" },
            { text: "Find" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTabsModule
        ],
        // ...
    })

##### Vue

    <!--tab: App.vue-->
    <template>
        <DxTabs
            :items="tabs"
            item-template="item">
            <template #item="{ data }">
                <p style="color: #6600cc;">{{data.text}}</p>
            </template>
        </DxTabs>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTabs from "devextreme-vue/tabs";

    export default {
        components: {
            DxTabs
        },
        data() {
            return {
                tabs: [
                    { text: "User" },
                    { text: "Comment" },
                    { text: "Find" }
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
    
    import { Tabs } from 'devextreme-react/tabs';

    const tabs = [
        { text: "User" },
        { text: "Comment" },
        { text: "Find" }
    ];
    
    const renderTabItem = (itemData) => {
        return (
            <p style={{color: '#6600cc'}}>{itemData.text}</p>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <Tabs
                    items={tabs}
                    itemRender={renderTabItem}
                />
            );
        }
    }

    export default App;
    
---

If you use jQuery, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for tabs. To apply this markup, use the **itemTemplate** callback function as shown in the following code:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#tabsContainer").dxTabs({
            items: [
                { text: "User" },
                { text: "Comment" },
                { text: "Find" }
            ],
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<p style='color:#6600cc;'>" + itemData.text + "</p>");
            }
        });
    });

---

You can also customize individual tabs. In Angular, Vue, and React, declare them using the [dxItem](/api-reference/10%20UI%20Widgets/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Components/Markup_Components/dxItem/') component. When using jQuery, you can declare the tabs as scripts and reference them in the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/items/#template') property or assign a customization function straight to this property.

---
##### jQuery

    <!--HTML-->
    <div id="tabsContainer"></div>
    <script id="individualTabTemplate" type="text/html">
        <span>Comment</span>
    </script>

    <!--JavaScript-->
    $(function() {
        $("#tabsContainer").dxTabs({
            items: [{ 
                template: function() {
                    return $("<span>").text("User");
                }
            }, { 
                template: $("#individualTabTemplate")
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-tabs>
        <dxi-item>
            <span>User</span>
        </dxi-item>
        <dxi-item>
            <span>Comment</span>
        </dxi-item>
    </dx-tabs>

    <!--TypeScript-->
    import { DxTabsModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTabsModule
        ],
        // ...
    })

##### Vue

    <!--tab: App.vue-->
    <template>
        <DxTabs>
            <DxItem>
                <template #default>
                    <span>User</span>
                </template>
            </DxItem>
            <DxItem>
                <template #default>
                    <span>Comment</span>
                </template>
            </DxItem>
        </DxTabs>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTabs, { DxItem } from "devextreme-vue/tabs";

    export default {
        components: {
            DxTabs,
            DxItem
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Tabs, Item } from 'devextreme-react/tabs';

    class App extends React.Component {
        render() {
            return (
                <Tabs>
                    <Item>
                        <span>User</span>
                    </Item>
                    <Item>
                        <span>Comment</span>
                    </Item>
                </Tabs>
            );
        }
    }

    export default App;

---

In addition, you can use a 3rd-party template engine to customize UI component appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Tabs Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tabs/Overview)
- [Tabs API Reference](/api-reference/10%20UI%20Widgets/dxTabs '/Documentation/ApiReference/UI_Components/dxTabs/')

[tags]tabs, item appearance, customize, templates, template, custom template
