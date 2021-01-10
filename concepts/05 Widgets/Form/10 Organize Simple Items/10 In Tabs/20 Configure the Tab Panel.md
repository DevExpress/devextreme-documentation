For displaying tabs, the **Form** uses the [TabPanel](/concepts/05%20Widgets/TabPanel/00%20Overview.md '/Documentation/Guide/Widgets/TabPanel/Overview/') UI component. Therefore, you can specify any [options of the TabPanel](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/') in the [tabPanelOptions](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem/tabPanelOptions.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/#tabPanelOptions') object.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                // ...
            },
            items: ["firstName", "lastName", {
                itemType: "tabbed",
                tabPanelOptions: {
                    height: 250,
                    onTitleClick: function (e) {
                        // ...
                    }
                },
                tabs: [ ... ]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item dataField="firstName"></dxi-item>
        <dxi-item dataField="lastName"></dxi-item>
        <dxi-item itemType="tabbed"
            [tabPanelOptions]="{
                height: 250,
                onTitleClick: tabPanel_tabTitleClick
            }">
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            // ...
        }
        tabPanel_tabTitleClick (e) {
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm :form-data="employee">
            <DxSimpleItem data-field="firstName" />
            <DxSimpleItem data-field="lastName" />
            <DxTabbedItem>
                <DxTabPanelOptions
                    :height="250"
                    :on-title-click="tabPanelTitleClick" />
                <DxTab title="Info">
                    <DxSimpleItem data-field="hireDate" />
                    <DxSimpleItem data-field="city" />
                </DxTab>
                <DxTab title="Contacts">
                    <DxSimpleItem data-field="phone" />
                    <DxSimpleItem data-field="email" />
                </DxTab>
            </DxTabbedItem>
        </DxForm>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem, DxTabbedItem, DxTab, DxTabPanelOptions } from 'devextreme-vue/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        hireDate: new Date(2012, 4, 13),
        city: 'Los Angeles',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    export default {
        components: {
            DxForm, DxSimpleItem, DxTabbedItem, DxTab, DxTabPanelOptions
        },
        data() {
            return {
                employee
            };
        },
        methods: {
            tabPanelTitleClick(e) {
                // ...
            }
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Form, SimpleItem, TabbedItem, Tab, TabPanelOptions } from 'devextreme-react/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        hireDate: new Date(2012, 4, 13),
        city: 'Los Angeles',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    class App extends React.Component {
        constructor() {
            super();
            this.tabPanelTitleClick = this.tabPanelTitleClick.bind(this);
        }

        render() {
            return (
                <Form formData={employee}>
                    <SimpleItem dataField="firstName" />
                    <SimpleItem dataField="lastName" />
                    <TabbedItem>
                        <TabPanelOptions
                            height="250"
                            onTitleClick={this.tabPanelTitleClick} />
                        <Tab title="Info">
                            <SimpleItem dataField="hireDate" />
                            <SimpleItem dataField="city" />
                        </Tab>
                        <Tab title="Contacts">
                            <SimpleItem dataField="phone" />
                            <SimpleItem dataField="email" />
                        </Tab>
                    </TabbedItem>
                </Form>
            );
        }

        tabPanelTitleClick(e) {
            // ...
        }
    }

    export default App;

---

#####See Also#####
- [Form - Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/')
- [Form - Organize Simple Items in Groups](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/')
- [Form - Organize Simple Items in Columns](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/15%20In%20Columns '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Columns/')
- [Form - Add an Empty Space Between Smple Items](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/20%20Add%20an%20Empty%20Space.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/')
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/')
