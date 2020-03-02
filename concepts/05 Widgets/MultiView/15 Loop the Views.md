The **MultiView** widget can display views in a loop. The loop mode enables an end user to swipe through the last view to the first and vice versa. To enable this mode, assign **true** to the [loop](/api-reference/10%20UI%20Widgets/dxMultiView/1%20Configuration/loop.md '/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#loop') option.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $('#multiViewContainer').dxMultiView({
            dataSource: [
                { text: 'Personal Data' },
                { text: 'Contacts' }
            ],
            loop: true
        });
    });

    <!--HTML-->
    <div id="multiViewContainer"></div>

##### Angular

    <!--HTML-->
    <dx-multi-view
        [dataSource]="multiViewItems"
        [loop]="true">
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
            :loop="true"
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
                    loop={true}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [MultiView - Customize Item Appearance](/concepts/05%20Widgets/MultiView/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/MultiView/Customize_Item_Appearance')
- [MultiView - Switch Between Views](/concepts/05%20Widgets/MultiView/10%20Switch%20Between%20Views.md '/Documentation/Guide/Widgets/MultiView/Switch_Between_Views')
- [MultiView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/MultiView/Overview)
- [MultiView API Reference](/api-reference/10%20UI%20Widgets/dxMultiView '/Documentation/ApiReference/UI_Widgets/dxMultiView/')

[tags]multi view, multiView, views, loop