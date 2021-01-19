The **TabPanel** is a UI component consisting of the [Tabs](/concepts/05%20Widgets/Tabs/00%20Overview.md '/Documentation/Guide/Widgets/Tabs/Overview/') and [MultiView](/concepts/05%20Widgets/MultiView/00%20Overview.md '/Documentation/Guide/Widgets/MultiView/Overview/') UI components. It automatically synchronizes the selected tab with the currently displayed view and vice versa.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TabPanel/Overview/"
}

The following code adds a simple **TabPanel** to your page.

---

##### jQuery    

    <!--JavaScript-->
    $(function() {
        $('#tabPanelContainer').dxTabPanel({
            items: [{
                title: 'Info',
                text: 'This is Info Tab'
            }, {
                title: 'Contacts',
                text: 'This is Contacts Tab'
            }, {
                title: 'Address',
                text: 'This is Address Tab'
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
            text: 'This is Info Tab'
        }, {
            title: 'Contacts',
            text: 'This is Contacts Tab'
        }, {
            title: 'Address',
            text: 'This is Address Tab'
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
                    text: 'This is Info Tab'
                }, {
                    title: 'Contacts',
                    text: 'This is Contacts Tab'
                }, {
                    title: 'Address',
                    text: 'This is Address Tab'
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
        text: 'This is Info Tab'
    }, {
        title: 'Contacts',
        text: 'This is Contacts Tab'
    }, {
        title: 'Address',
        text: 'This is Address Tab'
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

Note that field names in these data source items are [conventional](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/'). This provides a default appearance for tabs and views; that is, **title** goes to the tab, and **text** goes to the view. But more often, data source objects have fields with different names. For correct rendering in these cases, specify a [custom template](/concepts/05%20Widgets/TabPanel/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/TabPanel/Customize_Item_Appearance'). 

#####See Also#####
#include common-link-configurewidget
- [TabPanel - Customize Item Appearance](/concepts/05%20Widgets/TabPanel/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/TabPanel/Customize_Item_Appearance')
- [TabPanel - Control the Behavior](/concepts/05%20Widgets/TabPanel/15%20Control%20the%20Behavior.md '/Documentation/Guide/Widgets/TabPanel/Control_the_Behavior')
- [TabPanel API Reference](/api-reference/10%20UI%20Widgets/dxTabPanel '/Documentation/ApiReference/UI_Components/dxTabPanel/')

[tags]dxtabpanel, tab panel, tabPanel, collection container, collection UI component, navigation, overview
