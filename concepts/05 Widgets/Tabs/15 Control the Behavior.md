An end user can select **Tabs** items in two different modes: *'single'* (by default) or *'multiple'*. You can use the [selectionMode](/api-reference/10%20UI%20Widgets/dxTabs/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#selectionMode') option to change the mode. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#tabsContainer").dxTabs({
            items: [
                { text: "User" },
                { text: "Comment" },
                // ...
            ],
            selectionMode: "multiple"
        });
    });

##### Angular

    <!--HTML-->
    <dx-tabs
        [items]="tabs"
        selectionMode="multiple">
    </dx-tabs>

    <!--TypeScript-->
    import { DxTabsModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tabs = [
            { text: "User" },
            { text: "Comment" },
            // ...
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
            selection-mode="multiple" /> 
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
                    // ...
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
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <Tabs
                    items={tabs}
                    selectionMode="multiple"
                />
            );
        }
    }

    export default App;

---

If you need a tab to be preselected or to select it programmatically, pass its index in the data source array to the [selectedIndex](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/selectedIndex.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#selectedIndex') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#tabsContainer").dxTabs({
            items: [
                { text: "User" },
                { text: "Comment" },
                // ...
            ],
            selectedIndex: 1
        });
    });

##### Angular

    <!--HTML-->
    <dx-tabs
        [items]="tabs"
        [(selectedIndex)]="selectedIndex">
    </dx-tabs>

    <!--TypeScript-->
    import { DxTabsModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectedIndex: number;

        tabs = [
            { text: "User" },
            { text: "Comment" },
            // ...
        ];

        constructor() {
            this.selectedIndex = 1;
        }
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
            v-model:selected-index="selectedIndex" /> 
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
                selectedIndex: 1,
                tabs: [
                    { text: "User" },
                    { text: "Comment" },
                    // ...
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
        // ...
    ];

    class App extends React.Component {
        constructor() {
            this.state = {
                selectedIndex: 1
            }
        }

        handleOptionChange = (e) => {
            if(e.fullName === 'selectedIndex') {
                this.setState({
                    selectedIndex: e.value
                });
            }
        }

        render() {
            return (
                <Tabs
                    items={tabs}
                    selectedIndex={this.state.selectedIndex}
                    onOptionChanged={this.handleOptionChange}
                />
            );
        }
    }

    export default App;

---

As an alternative, you can use the [selectedItem](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/selectedItem.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#selectedItem') (for *"single"* **selectionMode**) or [selectedItems](/api-reference/10%20UI%20Widgets/dxTabs/1%20Configuration/selectedItems.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#selectedItems') (for *"multiple"* **selectionMode**) options.

---
##### jQuery

    <!--JavaScript-->
    var tabs = [
        { text: "User" },
        { text: "Comment" },
        // ...
    ];

    $(function() {
        $("#tabsContainer").dxTabs({
            items: tabs,
            selectionMode: 'multiple',
            selectedItems: [ tabs[0], tabs[1] ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-tabs
        [items]="tabs"
        selectionMode="multiple"
        [(selectedItems)]="selectedItems">
    </dx-tabs>

    <!--TypeScript-->
    import { DxTabsModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tabs = [
            { text: "User" },
            { text: "Comment" },
            // ...
        ];

        constructor() {
            this.selectedItems = [this.tabs[0], this.tabs[1]];
        }
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
            selection-mode="multiple"
            v-model:selected-items="selectedItems" /> 
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTabs from "devextreme-vue/tabs";

    const tabs = [
        { text: "User" },
        { text: "Comment" },
        // ...
    ];

    export default {
        components: {
            DxTabs
        },
        data() {
            return {
                tabs: tabs,
                selectedItems: [tabs[0], tabs[1]]
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
        // ...
    ];

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selectedItems: [tabs[0], tabs[1]];
            }
        }

        handleOptionChange = (e) => {
            if(e.fullName === 'selectedItems') {
                this.setState({
                    selectedItems: e.value
                });
            }
        }

        render() {
            return (
                <Tabs
                    items={tabs}
                    selectionMode="multiple"
                    selectedItems={this.state.selectedItems}
                    onOptionChanged={this.handleOptionChange}
                />
            );
        }
    }

    export default App;

---

When the total length of all tabs exceeds the **Tabs** container, the widget shows navigation buttons that help an end user scroll the tab strip. This behavior is default only for desktops. To enable it on all types of devices, assign **true** to the [showNavButtons](/api-reference/10%20UI%20Widgets/dxTabs/1%20Configuration/showNavButtons.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#showNavButtons') option. Otherwise, assign **false**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#tabsContainer").dxTabs({
            items: [
                { text: "User" },
                { text: "Comment" },
                // ...
            ],
            showNavButtons: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-tabs
        [items]="tabs"
        [showNavButtons]="true">
    </dx-tabs>

    <!--TypeScript-->
    import { DxTabsModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tabs = [
            { text: "User" },
            { text: "Comment" },
            // ...
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
            :show-nav-buttons="true" /> 
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
                    // ...
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
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <Tabs
                    items={tabs}
                    showNavButtons={true}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [Tabs - Customize Item Appearance](/concepts/05%20Widgets/Tabs/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Tabs/Customize_Item_Appearance')
- [Tabs Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tabs/Overview)
- [Tabs API Reference](/api-reference/10%20UI%20Widgets/dxTabs '/Documentation/ApiReference/UI_Widgets/dxTabs/')

[tags]tabs, select item, selection mode, nav buttons, navigation buttons, index
