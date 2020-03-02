By default, an end user can switch between views by swiping. Assign **false** to the [swipeEnabled](/api-reference/10%20UI%20Widgets/dxMultiView/1%20Configuration/swipeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#swipeEnabled') option to disable this feature.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $('#multiViewContainer').dxMultiView({
            dataSource: [
                { text: 'Personal Data' },
                { text: 'Contacts' }
            ],
            swipeEnabled: false
        });
    });

    <!--HTML-->
    <div id="multiViewContainer"></div>

##### Angular

    <!--HTML-->
    <dx-multi-view
        [dataSource]="multiViewItems"
        [swipeEnabled]="false">
    </dx-multi-view>

    <!--TypeScript-->
    import { DxMultiViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        multiViewItems = [
            { text: 'Personal Data' },
            { text: 'Contacts' }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxMultiViewModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxMultiView
            :data-source="multiViewItems"
            :swipe-enabled="false"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxMultiView from 'devextreme-vue/multi-view';

    export default {
        components: {
            DxMultiView
        },
        data() {
            return {
                multiViewItems: [
                    { text: 'Personal Data' },
                    { text: 'Contacts' }
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

    import { MultiView } from 'devextreme-react/multi-view';

    const multiViewItems = [
        { text: 'Personal Data' },
        { text: 'Contacts' }
    ];

    class App extends React.Component {
        render() {
            return (
                <MultiView
                    dataSource={multiViewItems}
                    swipeEnabled={false}
                />
            );
        }
    }

    export default App;

---

You can switch the views from code by changing the [selectedIndex](/api-reference/10%20UI%20Widgets/dxMultiView/1%20Configuration/selectedIndex.md '/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#selectedIndex') or [selectedItem](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/selectedItem.md '/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#selectedItem') option.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $('#multiViewContainer').dxMultiView({
            dataSource: [
                { text: 'Personal Data' },
                { text: 'Contacts' }
            ],
            selectedIndex: 1
        });
    });

    <!--HTML-->
    <div id="multiViewContainer"></div>

##### Angular

    <!--HTML-->
    <dx-multi-view
        [dataSource]="multiViewItems"
        [(selectedIndex)]="selectedIndex">
    </dx-multi-view>

    <!--TypeScript-->
    import { DxMultiViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        selectedIndex: number;

        constructor() {
            this.selectedIndex = 1;
        }

        multiViewItems = [
            { text: 'Personal Data' },
            { text: 'Contacts' }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxMultiViewModule
        ],
        // ...
    })

##### Vue

    <!--tab: App.vue-->
    <template>
        <DxMultiView
            :data-source="multiViewItems"
            :selected-index.sync="selectedIndex" 
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxMultiView from 'devextreme-vue/multi-view';

    export default {
        components: {
            DxMultiView
        },
        data() {
            return {
                selectedIndex: 1,
                multiViewItems: [
                    { text: 'Personal Data' },
                    { text: 'Contacts' }
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

    import { MultiView } from 'devextreme-react/multi-view';

    const multiViewItems = [
        { text: 'Personal Data' },
        { text: 'Contacts' }
    ];

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
                <MultiView
                    dataSource={multiViewItems}
                    selectedIndex={this.state.selectedIndex}
                    onOptionChanged={this.handleOptionChange}
                />
            );
        }
    }

    export default App;

---

By default, the **MultiView** widget animates switching between views. You can disable animation by setting the [animationEnabled](/api-reference/10%20UI%20Widgets/dxMultiView/1%20Configuration/animationEnabled.md '/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#animationEnabled') option to **false**.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $('#multiViewContainer').dxMultiView({
            dataSource: [
                { text: 'Personal Data' },
                { text: 'Contacts' }
            ],
            animationEnabled: false
        });
    });

    <!--HTML-->
    <div id="multiViewContainer"></div>

##### Angular

    <!--HTML-->
    <dx-multi-view
        [dataSource]="multiViewItems"
        [animationEnabled]="false">
    </dx-multi-view>

    <!--TypeScript-->
    import { DxMultiViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        multiViewItems = [
            { text: 'Personal Data' },
            { text: 'Contacts' }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxMultiViewModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxMultiView
            :data-source="multiViewItems"
            :animation-enabled="false"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxMultiView from 'devextreme-vue/multi-view';

    export default {
        components: {
            DxMultiView
        },
        data() {
            return {
                multiViewItems: [
                    { text: 'Personal Data' },
                    { text: 'Contacts' }
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

    import { MultiView } from 'devextreme-react/multi-view';

    const multiViewItems = [
        { text: 'Personal Data' },
        { text: 'Contacts' }
    ];

    class App extends React.Component {
        render() {
            return (
                <MultiView
                    dataSource={multiViewItems}
                    animationEnabled={false}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [MultiView - Customize Item Appearance](/concepts/05%20Widgets/MultiView/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/MultiView/Customize_Item_Appearance')
- [MultiView - Loop the Views](/concepts/05%20Widgets/MultiView/15%20Loop%20the%20Views.md '/Documentation/Guide/Widgets/MultiView/Loop_the_Views')
- [MultiView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/MultiView/Overview)
- [MultiView API Reference](/api-reference/10%20UI%20Widgets/dxMultiView '/Documentation/ApiReference/UI_Widgets/dxMultiView/')

[tags]multi view, multiView, views, switch, swipe, animate