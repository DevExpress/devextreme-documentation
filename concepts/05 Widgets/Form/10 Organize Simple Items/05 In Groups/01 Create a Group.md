In the context of the **Form** widget, a group is called ["group item"](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/'). A group item can contain [simple items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/'), other groups, [tabs](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/') or [empty items](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/20%20Add%20an%20Empty%20Space.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/'). To create a group item, assign *"group"* to the [itemType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem/itemType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#itemType') option. Items nested in the group are configured in the [items](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem/items.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#items') array. To add a caption to the group, specify the [caption](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem/caption.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#caption') option.

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
        <dx-form
            :form-data="employee">
            <dx-item
                item-type="group"
                caption="Personal Data">
                <DxSimpleItem data-field="firstName" />
                    <dx-item data-field="lastName"></dx-item>
                    <dx-item data-field="position"></dx-item>
            </dx-item>
            <dx-item
                item-type="group"
                caption="Contacts">
                    <dx-item data-field="phone"></dx-item>
                    <dx-item data-field="email"></dx-item>
            </dx-item>
        </dx-form>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxItem } from 'devextreme-vue/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        position: 'CEO',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    export default {
        components: {
            DxForm, DxItem
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

    import { Form, Item } from 'devextreme-react/form';

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
                <Form
                    formData={employee}>
                    <Item
                        itemType="group"
                        caption="Personal Data">
                            <Item dataField="firstName"></Item>
                            <Item dataField="lastName"></Item>
                            <Item dataField="position"></Item>
                    </Item>
                    <Item
                        itemType="group"
                        caption="Contacts">
                            <Item dataField="phone"></Item>
                            <Item dataField="email"></Item>
                    </Item>
                </Form>
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields/"
}
