The content of a tab can be organized in columns. The [colCount](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/TabbedItem/tabs/colCount.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/tabs/#colCount') option instructs the tab about how many columns it must have. Note that the entire **Form** layout can also be organized in columns if the [colCount](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/colCount.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#colCount') option is declared on the root level. In this case, use the [colSpan](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/TabbedItem/colSpan.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/#colSpan') option to define how many general columns the tab must span. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                position: "CEO",
                hireDate: new Date(2012, 4, 13),
                city: "Los Angeles",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            // Splits the Form layout in two columns
            colCount: 2,
            items: ["name", {
                itemType: "tabbed",
                colSpan: 2,
                tabs: [{
                    title: "Info",
                    // Makes this tab span both general columns
                    colSpan: 2,
                    // Organizes items inside this tab in three columns
                    colCount: 3,
                    items: ["position", "hireDate", "city"]
                }, {
                    title: "Contacts",
                    colCount: 2,
                    items: ["phone", "email"]
                }]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [colCount]="2"> <!-- Splits the Form layout in two columns -->
        <dxi-item dataField="name"></dxi-item>
        <dxi-item itemType="tabbed" [colSpan]="2">
            <dxi-tab
                title="Info"
                [colSpan]="2" <!-- Makes this tab span both general columns -->
                [colCount]="3"> <!-- Organizes items inside this tab in three columns -->
                    <dxi-item dataField="position"></dxi-item>
                    <dxi-item dataField="hireDate"></dxi-item>
                    <dxi-item dataField="city"></dxi-item>
            </dxi-tab>
            <dxi-tab
                title="Contacts"
                [colCount]="2">
                    <dxi-item dataField="phone"></dxi-item>
                    <dxi-item dataField="email"></dxi-item>
            </dxi-tab>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            name: "John Heart",
            position: "CEO",
            hireDate: new Date(2012, 4, 13),
            city: "Los Angeles",
            phone: "+1(213) 555-9392",
            email: "jheart@dx-email.com"
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
        <DxForm
            :form-data="employee"
            :col-count="2">
            <DxSimpleItem data-field="name" />
            <DxTabbedItem :col-span="2">
                <DxTab
                    title="Info"
                    :col-span="2"
                    :col-count="3">
                    <DxSimpleItem data-field="position" />
                    <DxSimpleItem data-field="hireDate" />
                    <DxSimpleItem data-field="city" />
                </DxTab>
                <DxTab
                    title="Contacts"
                    :col-count="2">
                    <DxSimpleItem data-field="phone" />
                    <DxSimpleItem data-field="email" />
                </DxTab>
            </DxTabbedItem>
        </DxForm>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem, DxTabbedItem, DxTab } from 'devextreme-vue/form';

    const employee = {
        name: 'John Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        city: 'Los Angeles',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    export default {
        components: {
            DxForm, DxSimpleItem, DxTabbedItem, DxTab
        },
        data() {
            return {
                employee
            };
        },
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Form, SimpleItem, TabbedItem, Tab } from 'devextreme-react/form';

    const employee = {
        name: 'John Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        city: 'Los Angeles',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    class App extends React.Component {
        render() {
            return (
                <Form
                    formData={employee}
                    colCount={2}>
                    <SimpleItem dataField="name" />
                    <TabbedItem colSpan={2}>
                        <Tab
                            title="Info"
                            colSpan={2}
                            colCount={3}>
                            <SimpleItem dataField="position" />
                            <SimpleItem dataField="hireDate" />
                            <SimpleItem dataField="city" />
                        </Tab>
                        <Tab
                            title="Contacts"
                            colCount={2}>
                            <SimpleItem dataField="phone" />
                            <SimpleItem dataField="email" />
                        </Tab>
                    </TabbedItem>
                </Form>
            );
        }
    }

    export default App;

---
