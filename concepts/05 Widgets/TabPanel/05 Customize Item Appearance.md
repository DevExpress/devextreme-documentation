An item in the **TabPanel** widget includes a tab and a view. For a minor customization of **TabPanel** items, you can define [specific fields](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/items/') in item data objects. For example, the following code generates three items: the first has a [badge](/api-reference/_hidden/dxTabPanelItem/badge.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/items/#badge'), the second is disabled, the third has an icon.

---

##### jQuery    

    <!--JavaScript-->
    $(function() {
        $('#tabPanelContainer').dxTabPanel({
            items: [{
                title: 'Info',
                text: 'This is Info Tab',
                badge: 'New'
            }, {
                title: 'Contacts',
                text: 'This is Contacts Tab',
                disabled: true
            }, {
                title: 'Address',
                text: 'This is Address Tab',
                icon: 'home'
            }]
        });
    });

    <!--HTML-->
    <div id="tabPanelContainer"></div>

##### Angular

    <!--HTML-->
    <dx-tab-panel
        [items]="tabPanelItems">
    </dx-tab-panel>

    <!--TypeScript-->
    import { DxTabPanelModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        tabPanelItems = [{
            title: 'Info',
            text: 'This is Info Tab',
            badge: 'New'
        }, {
            title: 'Contacts',
            text: 'This is Contacts Tab',
            disabled: true
        }, {
            title: 'Address',
            text: 'This is Address Tab',
            icon: 'home'
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxTabPanelModule
        ],
        // ...
    })

##### Vue

    <!--tab: App.vue-->
    <template>
        <DxTabPanel
            :items="tabPanelItems" />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTabPanel from 'devextreme-vue/tab-panel';

    export default {
        components: {
            DxTabPanel
        },
        data() {
            return {
                tabPanelItems: [{
                    title: 'Info',
                    text: 'This is Info Tab',
                    badge: 'New'
                }, {
                    title: 'Contacts',
                    text: 'This is Contacts Tab',
                    disabled: true
                }, {
                    title: 'Address',
                    text: 'This is Address Tab',
                    icon: 'home'
                }]
            };
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TabPanel from 'devextreme-react/tab-panel';

    const tabPanelItems = [{
        title: 'Info',
        text: 'This is Info Tab',
        badge: 'New'
    }, {
        title: 'Contacts',
        text: 'This is Contacts Tab',
        disabled: true
    }, {
        title: 'Address',
        text: 'This is Address Tab',
        icon: 'home'
    }];

    class App extends React.Component {
        render() {
            return (
                <TabPanel
                    items={tabPanelItems}
                />
            );
        }
    }

    export default App;

---

If you need a more flexible solution, define [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#itemTemplate') and [itemTitleTemplate](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration/itemTitleTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#itemTitleTemplate') for views and tabs, respectively. In Angular and Vue, you can declare them in the markup. In React, you can use rendering functions (shown in the code below) or components.

---

##### Angular

    <!--HTML-->
    <dx-tab-panel
        [items]="tabPanelItems"
        itemTitleTemplate="title"
        itemTemplate="item">
        <div *dxTemplate="let content of 'title'">
            <p>{{content.title}}</p>
        </div>
        <div *dxTemplate="let content of 'item'">
            <div style="margin: 25px;">
                <h1>{{content.title}}</h1>
                <div style="text-align: left;">
                    <p *ngFor="let key of getItemKeys(content.data)">
                        {{key}}: <b>{{content.data[key]}}</b>
                    </p>
                </div>
            </div>
        </div>
    </dx-tab-panel>

    <!--TypeScript-->
    import { DxTabPanelModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        tabPanelItems = [{
            title: 'Info',
            data: { firstName: 'John', lastName: 'Smith', birthYear: 1986 }
        }, {
            title: 'Contacts',
            data: { phone: '(555)555-5555', email: 'John.Smith@example.com' }
        }];
        getItemKeys (item) {
            return Object.keys(item);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTabPanelModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTabPanel
            :items="tabPanelItems"
            item-title-template="title"
            item-template="item">
            <template #title="{ data }">
                <div>
                    <p>{{ data.title }}</p>
                </div>
            </template>
            <template #item="{ data }">
                <div :style="{ margin: '25px' }">
                    <h1>{{data.title}}</h1>
                    <div :style="{ textAlign: 'left' }">
                        <p v-for="key in getItemKeys(data.data)">
                            {{key}}: <b>{{data.data[key]}}</b>
                        </p>
                    </div>
                </div>
            </template>
        </DxTabPanel>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTabPanel from 'devextreme-vue/tab-panel';

    export default {
        components: {
            DxTabPanel
        },
        data() {
            return {
                tabPanelItems: [{
                    title: 'Info',
                    data: { firstName: 'John', lastName: 'Smith', birthYear: 1986 }
                }, {
                    title: 'Contacts',
                    data: { phone: '(555)555-5555', email: 'John.Smith@example.com' }
                }]
            };
        },
        methods: {
            getItemKeys: function(item) {
                return Object.keys(item);
            }
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TabPanel } from 'devextreme-react/tab-panel';

    const tabPanelItems = [{
        title: 'Info',
        data: { firstName: 'John', lastName: 'Smith', birthYear: 1986 }
    }, {
        title: 'Contacts',
        data: { phone: '(555)555-5555', email: 'John.Smith@example.com' }
    }];

    class App extends React.Component {
        render() {
            return (
                <TabPanel
                    items={tabPanelItems}
                    itemTitleRender={this.renderTitle}
                    itemRender={this.renderItem}
                />
            );
        }

        renderTitle(data) {
            return (
                <div>
                    <p>{data.title};</p>
                </div>
            );
        }

        renderItem(content) {
            return (
                <div style={{ margin: 25 }}>
                    <h1>{content.title}</h1>
                    <div style={{ textAlign: 'left' }}>
                        { 
                            Object.keys(content.data).map(key => {
                                return (
                                    <p key={key}>
                                        {key}: <b>{content.data[key]}</b>
                                    </p> 
                                )}
                            )
                        }
                    </div>
                </div>
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TabPanel/Overview/"
}

If you use jQuery, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for **TabPanel** items. To apply this markup, use the **itemTemplate** and **itemTitleTemplate** callback functions as shown in the following code:

---

##### jQuery

    <!--JavaScript-->
    var dataItems = [{
        title: "Info",
        data: { firstName: "John", lastName: "Smith", birthYear: 1986 }
    }, {
        title: "Contacts",
        data: { phone: "(555)555-5555", email: "John.Smith@example.com" }
    }];

    $(function() {
        $("#tabPanelContainer").dxTabPanel({
            items: dataItems,
            itemTitleTemplate: function(itemData, itemIndex, itemElement) {
                itemElement.append("<p>" + itemData.title + "</p>");
            },
            itemTemplate: function(itemData, itemIndex, itemElement) {
                var container = $("<div style='margin:25px;'>");
                container.append("<h1>" + itemData.title + "</h1>");

                var info = $("<div style='text-align:left;'>");
                for (var field in itemData.data) {
                    info.append("<p>" + field + ": <b>" + itemData.data[field] + "</b></p>");
                }
                container.append(info);
                itemElement.append(container);
            }
        });
    });

    <!--HTML-->
    <div id="tabPanelContainer"></div>

---

You can also customize individual items. In Angular, Vue, and React, declare them using the [dxItem](/api-reference/10%20UI%20Widgets/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxItem/') component. When using jQuery, you can declare the items as scripts and reference them in the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/items/#template') option or assign a customization function straight to this option.

---

##### Angular

    <!--HTML-->
    <dx-tab-panel>
        <dxi-item title="Info">
            <p>This is Info Tab</p>
        </dxi-item>
        <dxi-item title="Contacts">
            <p>This is Contacts Tab</p>
        </dxi-item>
    </dx-tab-panel>

    <!--TypeScript-->
    import { DxTabPanelModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTabPanelModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTabPanel>
            <DxItem title="Info">
                <template #default>
                    <p>This is Info Tab</p>
                </template>
            </DxItem>
            <DxItem title="Contacts">
                <template #default>
                    <p>This is Contacts Tab</p>
                </template>
            </DxItem>
        </DxTabPanel>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTabPanel, { DxItem } from 'devextreme-vue/tab-panel';

    export default {
        components: {
            DxTabPanel,
            DxItem
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TabPanel, Item } from 'devextreme-react/tab-panel';

    class App extends React.Component {
        render() {
            return (
                <TabPanel>
                    <Item title="Info">
                        <p>This is Info Tab</p>
                    </Item>
                    <Item title="Contacts">
                        <p>This is Contacts Tab</p>
                    </Item>
                </TabPanel>
            );
        }
    }

    export default App;
   
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#tabPanelContainer").dxTabPanel({
            items: [{
                title: "Info",
                template: function() {
                    return $("<p>").text("This is Info Tab");
                }
            }, {
                title: "Contacts",
                template: $("#individualTemplate")
            }]
        });
    });

    <!--HTML-->
    <div id="tabPanelContainer"></div>
    <script id="individualTemplate" type="text/html">
        <p>This is Contacts Tab</p>
    </script>

---
    
In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [TabPanel - Control the Behavior](/concepts/05%20Widgets/TabPanel/15%20Control%20the%20Behavior.md '/Documentation/Guide/Widgets/TabPanel/Control_the_Behavior')
- [TabPanel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TabPanel/Overview)
- [TabPanel API Reference](/api-reference/10%20UI%20Widgets/dxTabPanel '/Documentation/ApiReference/UI_Widgets/dxTabPanel/')

[tags]tab panel, tabPanel, item appearance, customize, templates, template, custom template
