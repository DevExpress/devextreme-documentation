For a minor customization of tabs, you can define [specific fields](/api-reference/10%20UI%20Widgets/dxTabs/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/items/') in item data objects. For example, the following code generates three tabs: the first has an icon, the second has a [badge](/api-reference/_hidden/dxTabPanelItem/badge.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/items/#badge'), the third is disabled.

---
##### jQuery

    <!--HTML-->
    <div id="tabsContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#tabsContainer").dxTabs({
            items: [
                { text: "User", icon: 'user' },
                { text: "Comment", badge: "New" },
                { text: "Find" }
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
            :items="tabs" />
    </template>
    <script>
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
                    { text: "Find" }
                ]
            };
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import { Tabs } from 'devextreme-react/tabs';

    class App extends React.Component {
        constructor() {
            this.tabs = [
                { text: "User", icon: 'user' },
                { text: "Comment", badge: "New" },
                { text: "Find" }
            ];
        }

        render() {
            return (
                <Tabs
                    items={this.tabs}
                />
            );
        }
    }

    export default App;

---

If you need a more flexible solution, define a [custom templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates'). The following code gives a simple example of how you can use it to customize tabs.

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for tabs. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#itemTemplate') callback function.

---
##### AngularJS

    <!--HTML-->
    <div ng-app="DemoApp" ng-controller="DemoController">
        <div dx-tabs="{
            items: tabItems,
            itemTemplate: 'tab'
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'tab' } ">
                <p style="color:#6600cc;">{{ itemObj.text }}</p>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.tabItems = [
                { text: 'User' },
                { text: 'Comment' },
                { text: 'Find' },
                // . . .
            ];
        });


[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

##### Knockout

    <!--HTML-->
    <div data-bind="dxTabs: {
        items: tabItems,
        itemTemplate: 'tab'
    }">
        <div data-options="dxTemplate: { name: 'tab' } ">
            <p data-bind="text: text" style="color:#6600cc;"></p>
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = {
        tabItems: [
            { text: 'User' },
            { text: 'Comment' },
            { text: 'Find' },
            // . . .
        ]
    };

    ko.applyBindings(viewModel);

##### Angular

    <!--HTML-->
    <dx-tabs
            [items]="tabs"
            itemTemplate='tabItem'>
        <div *dxTemplate="let itemData of 'tabItem';">
            <p style="color:#6600cc;">{{itemData.text}}</p>
        </div>
    </dx-tabs>

    <!--TypeScript-->
    import { DxTabsModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tabs = [
            { text: "User", icon: 'user' },
            { text: "Comment", badge: "New" },
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
            itemTemplate="item" >
            <template #item="{ data }">
                <p style="color: #6600cc;">{{data.text}}</p>
            </template>
        </DxTabs>
    </template>
    <script>
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
                    { text: "Find" }
                ]
            };
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import { Tabs } from 'devextreme-react/tabs';

    const renderTabItem = (itemData) => {
        return (
            <p style={{color: '#6600cc'}}>{itemData.text}</p>
        );
    }

    class App extends React.Component {
        constructor() {
            this.tabs = [
                { text: "User", icon: 'user' },
                { text: "Comment", badge: "New" },
                { text: "Find" }
            ];
        }

        render() {
            return (
                <Tabs
                    items={this.tabs}
                    itemRender={renderTabItem}
                />
            );
        }
    }

    export default App;

##### jQuery

    <!--HTML-->
    <div id="tabsContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#tabsContainer").dxTabs({
            items: [
                { text: "User", icon: 'user' },
                { text: "Comment", badge: "New" },
                { text: "Find" }
            ],
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<p style='color:#6600cc;'>" + itemData.text + "</p>");
            }
        });
    });

---

You can also customize an individual tab in collection widgets. 
If you use jQuery alone, declare a template for this tab as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/items/#template') option. When using any library or framework except jQuery, declare the items using the [dxItem](/api-reference/10%20UI%20Widgets/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxItem/') component as shown in the following code. Do not set the widget's dataSource option.

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
            items: [
                { 
                    template: function() {
                        return $("<span>").text("User")
                    }
                },
                { 
                    template: $("#individualTabTemplate")
                }
            ]
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
    import { Tabs, Item } from 'devextreme-react/tabs';

    class App extends React.Component {
        constructor() {
            // ...
        }

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

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Tabs Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tabs/Overview)
- [Tabs API Reference](/api-reference/10%20UI%20Widgets/dxTabs '/Documentation/ApiReference/UI_Widgets/dxTabs/')

[tags]tabs, item appearance, customize, templates, template, custom template
