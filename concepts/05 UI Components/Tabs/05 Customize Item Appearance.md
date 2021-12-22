For a minor customization of tabs, you can define [specific fields](/api-reference/10%20UI%20Components/dxTabs/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/items/') in item data objects. For example, the following code generates three tabs: the first has an icon, the second has a [badge](/api-reference/_hidden/dxTabPanelItem/badge.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#badge'), the third is disabled.

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

If you need a more flexible solution, define an [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#itemTemplate').

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

---
##### jQuery

You can also customize individual tabs. Declare them as scripts and reference them in the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/items/#template') property or assign a customization function straight to this property.

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

You can also customize individual tabs. Declare them using the [dxItem](/api-reference/10%20UI%20Components/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Components/Markup_Components/dxItem/') component.

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

You can also customize individual tabs. Declare them using the [dxItem](/api-reference/10%20UI%20Components/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Components/Markup_Components/dxItem/') component.

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

You can also customize individual tabs. Declare them using the [dxItem](/api-reference/10%20UI%20Components/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Components/Markup_Components/dxItem/') component.

    <!--tab: App.js-->
    import React from 'react';
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



#####See Also#####
- [Tabs Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tabs/Overview)
- [Tabs API Reference](/api-reference/10%20UI%20Components/dxTabs '/Documentation/ApiReference/UI_Components/dxTabs/')

[tags]tabs, item appearance, customize, templates, template, custom template
