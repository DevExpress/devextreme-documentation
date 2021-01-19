The **Form** UI component allows you to organize items in tabs. In the context of the **Form**, tabs are called ["tabbed items"](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/'). A tabbed item can contain [simple items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/'), other tabs, [groups](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Groups/') or [empty items](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/20%20Add%20an%20Empty%20Space.md '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/Add_an_Empty_Space/'). To create a tabbed item, assign *"tabbed"* to the [itemType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem/itemType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/#itemType') property. To specify the collection of tabs, use the [tabs](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem/tabs '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/tabs/') array. To define items displayed within an individual tab, use its [items](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem/tabs/items.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/tabs/#items') array. 

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
            items: ["name", {
                itemType: "tabbed",
                tabs: [{
                    title: "Info",
                    items: ["position", "hireDate", "city"]
                }, {
                    title: "Contacts",
                    items: ["phone", "email"]
                }]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item dataField="name"></dxi-item>
        <dxi-item itemType="tabbed">
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
        <DxForm :form-data="employee">
            <DxSimpleItem data-field="name" />
            <DxTabbedItem>
                <DxTab title="Info">
                    <DxSimpleItem data-field="position" />
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
                <Form formData={employee}>
                    <SimpleItem dataField="name" />
                    <TabbedItem>
                        <Tab title="Info">
                            <SimpleItem dataField="position" />
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
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields/"
}
