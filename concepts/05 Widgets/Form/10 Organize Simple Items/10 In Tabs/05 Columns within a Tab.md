The content of a tab can be organized in columns. The [colCount](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem/tabs/colCount.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/#colCount') option instructs the tab about how many columns it must have. Note that the entire **Form** layout can also be organized in columns if the [colCount](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/colCount.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#colCount') option is declared on the root level. In this case, use the [colSpan](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem/colSpan.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/#colSpan') option to define how many general columns the tab must span. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
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
        <dx-form
            :form-data="employee"
            :col-count="2">
            <dx-item data-field="name"></dx-item>
            <dx-item item-type="tabbed" :col-span="2">
                <dx-tab
                    title="Info"
                    :col-span="2"
                    :col-count="3">
                        <dx-item data-field="position"></dx-item>
                        <dx-item data-field="hireDate"></dx-item>
                        <dx-item data-field="city"></dx-item>
                </dx-tab>
                <dx-tab
                    title="Contacts"
                    :col-count="2">
                        <dx-item data-field="phone"></dx-item>
                        <dx-item data-field="email"></dx-item>
                </dx-tab>
            </dx-item>
        </dx-form>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxItem, DxTab } from 'devextreme-vue/form';

    const employee = {
        name: 'John Heart',
        hireDate: new Date(2012, 4, 13),
        city: 'Los Angeles',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    export default {
        components: {
            DxForm, DxItem, DxTab
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

    import { Form, Item, Tab } from 'devextreme-react/form';

    const employee = {
        name: 'John Heart',
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
                    <Item dataField="name"></Item>
                    <Item itemType="tabbed" colSpan={2}>
                        <Tab
                            title="Info"
                            colSpan={2}
                            colCount={3}>
                                <Item dataField="position"></Item>
                                <Item dataField="hireDate"></Item>
                                <Item dataField="city"></Item>
                        </Tab>
                        <Tab
                            title="Contacts"
                            colCount={2}>
                                <Item dataField="phone"></Item>
                                <Item dataField="email"></Item>
                        </Tab>
                    </Item>
                </Form>
            );
        }
    }

    export default App;

---