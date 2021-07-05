The Tabs is a tab strip used to switch between pages or views. This UI component is included in the [TabPanel](/Documentation/ApiReference/UI_Components/dxTabPanel/) UI component, but you can use the Tabs separately as well.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tabs/Overview/"
}

The following code adds the Tabs UI component to your page. One of the tabs has an icon, another has a [badge](/api-reference/_hidden/dxTabsItem/badge.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/items/#badge').

---

##### jQuery

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
        { text: "User", icon: 'user' },
        { text: "Comment", badge: "New" },
        { text: "Find" }
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

Note that field names in these data source items are [conventional](/api-reference/10%20UI%20Components/dxTabs/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/items/'). This provides a default appearance for tabs, which can be customized later.

#####See Also#####
#include common-link-configurewidget
- [Tabs - Customize Item Appearance](/concepts/05%20UI%20Components/Tabs/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/UI_Components/Tabs/Customize_Item_Appearance')
- [Tabs - Control the Behavior](/concepts/05%20UI%20Components/Tabs/15%20Control%20the%20Behavior.md '/Documentation/Guide/UI_Components/Tabs/Control_the_Behavior')
- [Tabs - Keyboard Support](/concepts/05%20UI%20Components/Tabs/20%20Keyboard%20Support.md '/Documentation/Guide/UI_Components/Tabs/Keyboard_Support')
- [Tabs API Reference](/api-reference/10%20UI%20Components/dxTabs '/Documentation/ApiReference/UI_Components/dxTabs/')

[tags]dxtabs, tabs, collection container, collection UI component, navigation, overview