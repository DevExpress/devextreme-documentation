An end user can switch the views by swiping them or selecting tabs. Note that tab navigation is always enabled, while swiping is active only on touch devices by default. To enable it on all types of devices, assign **true** to the [swipeEnabled](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration/swipeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#swipeEnabled') option. Otherwise, assign **false**.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $('#tabPanelContainer').dxTabPanel({
            // ...
            swipeEnabled: false
        });
    });

    <!--HTML-->
    <div id="tabPanelContainer"></div>

##### Angular

    <!--HTML-->
    <dx-tab-panel
        [swipeEnabled]="false">
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
        <DxTabPanel
            :swipe-enabled="false"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTabPanel from 'devextreme-vue/tab-panel';

    export default {
        components: {
            DxTabPanel
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TabPanel } from 'devextreme-react/tab-panel';

    class App extends React.Component {
        render() {
            return (
                <TabPanel
                    swipeEnabled={false}
                />
            );
        }
    }

    export default App;

---

You can switch the views progrmmatically using the [selectedIndex](/api-reference/10%20UI%20Widgets/dxMultiView/1%20Configuration/selectedIndex.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#selectedIndex') or [selectedItem](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/selectedItem.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#selectedItem') option. 

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $('#tabPanelContainer').dxTabPanel({
            // ...
            selectedIndex: 1
        });
    });

    <!--HTML-->
    <div id="tabPanelContainer"></div>

##### Angular

    <!--HTML-->
    <dx-tab-panel
        [(selectedIndex)]="selectedIndex">
    </dx-tab-panel>

    <!--TypeScript-->
    import { DxTabPanelModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        selectedIndex: number;

        constructor() {
            this.selectedIndex = 1;
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

    <!--tab: App.vue-->
    <template>
        <DxTabPanel
            v-model:selected-index="selectedIndex"
        />
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
                selectedIndex: 1
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

    class App extends React.Component {
        constructor(props) {
            super(props);
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
                <TabPanel
                    selectedIndex={this.state.selectedIndex}
                    onOptionChanged={this.handleOptionChange}
                />
            );
        }
    }

    export default App;

---

The **TabPanel** can loop the views, which enables an end user to swipe through the last view to the first and vice versa. Views are looped by default. To disable looping, assign **false** to the [loop](/api-reference/10%20UI%20Widgets/dxMultiView/1%20Configuration/loop.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#loop') option.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $('#tabPanelContainer').dxTabPanel({
            // ...
            loop: false
        });
    });

    <!--HTML-->
    <div id="tabPanelContainer"></div>

##### Angular

    <!--HTML-->
    <dx-tab-panel
        [loop]="false">
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
        <DxTabPanel
            :loop="false"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTabPanel from 'devextreme-vue/tab-panel';

    export default {
        components: {
            DxTabPanel
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TabPanel } from 'devextreme-react/tab-panel';

    class App extends React.Component {
        render() {
            return (
                <TabPanel
                    loop={false}
                />
            );
        }
    }

    export default App;

---

To specify whether or not to animate switching between views, use the [animationEnabled](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration/animationEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#animationEnabled/') option.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $('#tabPanelContainer').dxTabPanel({
            // ...
            animationEnabled: true
        });
    });

    <!--HTML-->
    <div id="tabPanelContainer"></div>

##### Angular

    <!--HTML-->
    <dx-tab-panel
        [animationEnabled]="true">
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
        <DxTabPanel
            :animation-enabled="true"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTabPanel from 'devextreme-vue/tab-panel';

    export default {
        components: {
            DxTabPanel
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TabPanel } from 'devextreme-react/tab-panel';

    class App extends React.Component {
        render() {
            return (
                <TabPanel
                    animationEnabled={true}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [TabPanel - Customize Item Appearance](/concepts/05%20Widgets/TabPanel/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/TabPanel/Customize_Item_Appearance')
- [TabPanel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TabPanel/Overview)
- [TabPanel API Reference](/api-reference/10%20UI%20Widgets/dxTabPanel '/Documentation/ApiReference/UI_Widgets/dxTabPanel/')

[tags]tab panel, tabPanel, switch views, animate switching, swipe
