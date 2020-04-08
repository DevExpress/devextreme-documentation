The **Form** widget allows you to specify custom templates for an individual tab and its content. For this purpose, assign callback functions to the [tabTemplate](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem/tabs/tabTemplate.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/#tabTemplate') and [template](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem/tabs/template.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/#template') options, respectively. With Angular, you can declare templates using the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') component.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                birthDate: new Date(1964, 3, 15),
                position: "CEO",
                city: "Los Angeles",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            items: ["name", {
                itemType: "tabbed",
                tabs: [{
                    title: "Data Protection Policy",
                    tabTemplate: function (itemData, itemIndex, itemElement) {
                        itemElement.append("<p style='color: red'>" + itemData.title);
                    },
                    template: function (itemData, itemIndex, itemElement) {
                        itemElement.append("<p><i>By filling out this form," 
                                            + " you agree to the terms of the" 
                                            + "<a href='#'>Data Protection Policy</a></i></p>");
                    }
                }, {
                    title: "Info",
                    items: ["position", "birthDate", "city"]
                }, {
                    title: "Contacts",
                    items: [ "phone", "email"]
                }]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item dataField="name"></dxi-item>
        <dxi-item itemType="tabbed" [colSpan]="2">
            <dxi-tab
                title="Data Protection Policy"
                tabTemplate="tab"
                [template]="'tabContent'">
            </dxi-tab>
            <dxi-tab title="Info">
                <dxi-item dataField="position"></dxi-item>
                <dxi-item dataField="hireDate"></dxi-item>
                <dxi-item dataField="city"></dxi-item>
            </dxi-tab>
            <dxi-tab title="Contacts">
                <dxi-item dataField="phone"></dxi-item>
                <dxi-item dataField="email"></dxi-item>
            </dxi-tab>
        </dxi-item>
        <div *dxTemplate="let tabData of 'tab'; let i = index">
            <p style="color:red">{{tabData.title}}</p>
        </div>
        <div *dxTemplate="let data of 'tabContent'">
            <p>
                <i>By filling out this form, you agree
                   to the terms of the <a href='#'>Data Protection Policy</a></i>
            </p>
        </div>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            name: "John Heart",
            birthDate: new Date(1964, 3, 15),
            position: "CEO",
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
            :form-data="employee">
                <template #tab="{ data }">
                    <p style="color:red">{{ data.title }}</p>
                </template>
                <template #tabContent="{ data }">
                    <p>
                        <i>By filling out this form, you agree
                        to the terms of the <a href='#'>Data Protection Policy</a></i>
                    </p>
                </template>
                <dx-item data-field="name"></dx-item>
                <dx-item item-type="tabbed" :col-span="2">
                    <dx-tab
                        title="Data Protection Policy"
                        tab-template="tab"
                        template="tabContent" />
                    <dx-tab title="Info">
                        <dx-item data-field="position"></dx-item>
                        <dx-item data-field="hireDate"></dx-item>
                        <dx-item data-field="city"></dx-item>
                    </dx-tab>
                    <dx-tab title="Contacts">
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
        birthDate: new Date(1964, 3, 15),
        position: 'CEO',
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
        birthDate: new Date(1964, 3, 15),
        position: 'CEO',
        city: 'Los Angeles',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    class App extends React.Component {
        render() {
            return (
                <Form
                    formData={employee}>
                        <Item dataField="name"></Item>
                        <Item itemType="tabbed" colSpan={2}>
                            <Tab
                                title="Data Protection Policy"
                                tabRender={tabRender}
                                render={tabContentRender} />
                            <Tab title="Info">
                                <Item dataField="position"></Item>
                                <Item dataField="hireDate"></Item>
                                <Item dataField="city"></Item>
                            </Tab>
                            <Tab title="Contacts">
                                <Item dataField="phone"></Item>
                                <Item dataField="email"></Item>
                            </Tab>
                        </Item>
                </Form>
            );
        }
    }

    function tabRender(data) {
        return (
            <p style={{color:'red'}}>{ data.title }</p>
        );
    }


    function tabContentRender(data) {
        return (
            <p>
                <i>By filling out this form, you agree
                to the terms of the <a href='#'>Data Protection Policy</a></i>
            </p>
        );
    }    

    export default App;

---

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')