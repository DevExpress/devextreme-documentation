In the context of the Form UI component, a group is called ["group item"](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/GroupItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/'). A group item can contain [simple items](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/'), other groups, [tabs](/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Tabs/') or [empty items](/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/20%20Add%20an%20Empty%20Space.md '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/Add_an_Empty_Space/'). To create a group item, assign *"group"* to the [itemType](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/GroupItem/itemType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/#itemType') property. Items nested in the group are configured in the [items](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/GroupItem/items.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/#items') array. To add a caption to the group, specify the [caption](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/GroupItem/caption.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/#caption') property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            items: [{
                itemType: "group",
                caption: "Personal Data",
                items: ["firstName", "lastName", "position"]
            }, {
                itemType: "group",
                caption: "Contacts",
                items: ["phone", "email"]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item
            itemType="group"
            caption="Personal Data">
                <dxi-item dataField="firstName"></dxi-item>
                <dxi-item dataField="lastName"></dxi-item>
                <dxi-item dataField="position"></dxi-item>
        </dxi-item>
        <dxi-item
            itemType="group"
            caption="Contacts">
                <dxi-item dataField="phone"></dxi-item>
                <dxi-item dataField="email"></dxi-item>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            position: "CEO",
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
            <DxGroupItem caption="Personal Data">
                <DxSimpleItem data-field="firstName" />
                <DxSimpleItem data-field="lastName" />
                <DxSimpleItem data-field="position" />
            </DxGroupItem>
            <DxGroupItem caption="Contacts">
                <DxSimpleItem data-field="phone" />
                <DxSimpleItem data-field="email" />
            </DxGroupItem>
        </DxForm>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxGroupItem, DxSimpleItem } from 'devextreme-vue/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        position: 'CEO',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    export default {
        components: {
            DxForm, DxGroupItem, DxSimpleItem
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

    import 'devextreme/dist/css/dx.light.css';

    import { Form, GroupItem, SimpleItem } from 'devextreme-react/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        position: 'CEO',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    class App extends React.Component {
        render() {
            return (
                <Form formData={employee}>
                    <GroupItem caption="Personal Data">
                        <SimpleItem dataField="firstName" />
                        <SimpleItem dataField="lastName" />
                        <SimpleItem dataField="position" />
                    </GroupItem>
                    <GroupItem caption="Contacts">
                        <SimpleItem dataField="phone" />
                        <SimpleItem dataField="email" />
                    </GroupItem>
                </Form>
            );
        }
    }

    export default App;

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields/"
}
