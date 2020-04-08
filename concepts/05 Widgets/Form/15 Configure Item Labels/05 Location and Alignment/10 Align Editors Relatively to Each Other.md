tBy default, the widget aligns all editors of all simple items in straight columns. To disable alignment, assign **false** to:

- [alignItemLabels](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/alignItemLabels.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#alignItemLabels') - for all _root_ simple items;
- [alignItemLabelsInAllGroups](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/alignItemLabelsInAllGroups.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#alignItemLabelsInAllGroups') - for all simple items nested _in all groups_;
- **Group Item**.[alignItemLabels](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem/alignItemLabels.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#alignItemLabels') - for simple items nested _in a specific group_;
- **Tabbed Item**.**tabs[]**.[alignItemLabels](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem/tabs/alignItemLabels.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/#alignItemLabels') - for simple items nested _in a specific tab_.

<!---->

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                hireDate: new Date(2012, 4, 13),
                city: "Los Angeles",
                position: "CEO",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            alignItemLabels: false,
            alignItemLabelsInAllGroups: false,
            items: ["firstName", "lastName", {
                itemType: "group",
                caption: "Contacts",
                items: ["phone", "email"]
            }, {
                itemType: "group",
                caption: "Misc Data",
                items: ["position", "city"]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [alignItemLabels]="false"
        [alignItemLabelsInAllGroups]="false">
        <dxi-item dataField="firstName"></dxi-item>
        <dxi-item dataField="lastName"></dxi-item>
        <dxi-item itemType="group"
            caption="Contacts"
            [items]="['phone', 'email']">
        </dxi-item>
        <dxi-item itemType="group"
            caption="Misc Data"
            [items]="['position', 'city']">
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            hireDate: new Date(2012, 4, 13),
            city: "Los Angeles",
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
            :form-data="employee"
            :align-item-labels="false"
            :align-item-labels-in-all-groups="false">
            <dx-item data-field="firstName"></dx-item>
            <dx-item data-field="lastName"></dx-item>
            <dx-item 
                item-type="group"
                caption="Contacts">
                    <dx-item data-field="phone"></dx-item>
                    <dx-item data-field="firstName"></dx-item>
            </dx-item>
            <dx-item 
                item-type="group"
                caption="Misc Data">
                    <dx-item data-field="position"></dx-item>
                    <dx-item data-field="city"></dx-item>                
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
        hireDate: new Date(2012, 4, 13),
        city: 'Los Angeles',
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
        hireDate: new Date(2012, 4, 13),
        city: 'Los Angeles',
        position: 'CEO',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    class App extends React.Component {
        render() {
            return (
                <Form
                    formData={employee}
                    alignItemLabels={false}
                    alignItemLabelsInAllGroups={false}>
                    <Item dataField="firstName"></Item>
                    <Item dataField="lastName"></Item>
                    <Item 
                        itemType="group"
                        caption="Contacts">
                            <Item dataField="phone"></Item>
                            <Item dataField="firstName"></Item>
                    </Item>
                    <Item 
                        itemType="group"
                        caption="Misc Data">
                            <Item dataField="position"></Item>
                            <Item dataField="city"></Item>                
                    </Item>                      
                </Form>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Form - Configure Item Labels | Additional Marks](/concepts/05%20Widgets/Form/15%20Configure%20Item%20Labels/10%20Additional%20Marks.md '/Documentation/Guide/Widgets/Form/Configure_Item_Labels/Additional_Marks/')
- [Form - Change Item Options at Runtime](/concepts/05%20Widgets/Form/20%20Change%20Options%20at%20Runtime/10%20Item%20Options.md '/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/Item_Options/')
- [Form - Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/')
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields)
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/')