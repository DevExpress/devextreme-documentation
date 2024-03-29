
---
##### jQuery

To change a single item property at runtime, call the [itemOption(id, option, value)](/api-reference/10%20UI%20Components/dxForm/3%20Methods/itemOption(id_option_value).md '/Documentation/ApiReference/UI_Components/dxForm/Methods/#itemOptionid_option_value') method.  This approach is more typical of jQuery. If the needed item is [in a group](/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Groups/') or [in a tab](/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Tabs/'), the *field* parameter should be given the group caption or tab title followed by the item's name. An example is shown below.

    <!--JavaScript-->
    $(function() {
        var form = $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            items: ["firstName", "lastName", {
                itemType: "group",
                caption: "Contacts",
                items: ["phone", "email"]
            }]
        }).dxForm("instance");

        $("#checkBoxContainer").dxCheckBox({
            text: 'Show the Phone Number',
            value: true,
            onValueChanged: function (e) {
                form.itemOption("Contacts.phone", "visible", e.value);
            }
        });
    });

To change several properties at a time, pass an object to the [itemOption(id, options)](/api-reference/10%20UI%20Components/dxForm/3%20Methods/itemOption(id_options).md '/Documentation/ApiReference/UI_Components/dxForm/Methods/#itemOptionid_options') method.
When you call it with the *id* parameter only, this method returns the current configuration of the specified form item.

    <!--JavaScript-->
    $(function() {
        // ...
        $("#buttonContainer").dxButton({
            text: 'Change the Phone Properties',
            onClick: function () {
                form.itemOption("Contacts.phone", {
                    isRequired: true, 
                    helpText: "+1(111)111-1111" 
                });
            }
        });
    });

##### Angular

To change an item property at runtime, bind the property that should be changed to a component property:

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item dataField="firstName"></dxi-item>
        <dxi-item dataField="lastName"></dxi-item>
        <dxi-item itemType="group" caption="Contacts">
            <dxi-item dataField="phone" [visible]="showPhone.value"></dxi-item>
            <dxi-item dataField="email"></dxi-item>
        </dxi-item>
    </dx-form>
    <dx-check-box #showPhone
        text="Show the Phone Number"
        [value]="true">
    </dx-check-box>

    <!--TypeScript-->
    import { DxFormModule, DxCheckBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            phone: "+1(213) 555-9392",
            email: "jheart@dx-email.com"
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule,
            DxCheckBoxModule
        ],
        // ...
    })

##### Vue

To change an item property at runtime, bind the property that should be changed to a component property:

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxForm :form-data="employee">
                <DxSimpleItem data-field="firstName" />
                <DxSimpleItem data-field="lastName" />
                <DxGroupItem caption="Contacts">
                    <DxSimpleItem data-field="phone" :visible="isPhoneVisible" />
                    <DxSimpleItem data-field="email" />
                </DxGroupItem>
            </DxForm>
            <DxCheckBox
                text="Show the Phone Number"
                v-model:value="isPhoneVisible" />
        </div>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem, DxGroupItem } from 'devextreme-vue/form';
    import { DxCheckBox } from 'devextreme-vue/check-box';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    export default {
        components: {
            DxForm, DxSimpleItem, DxGroupItem, DxCheckBox
        },
        data() {
            return {
                employee,
                isPhoneVisible: true
            };
        },
    };
    </script>

##### React

To change an item property at runtime, bind the property that should be changed to a state property:

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { Form, SimpleItem, GroupItem } from 'devextreme-react/form';
    import { CheckBox } from 'devextreme-react/check-box';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    class App extends React.Component {
        constructor() {
            super();
            this.state = {
                isPhoneVisible: true
            };
            this.onCheckBoxValueChanged = this.onCheckBoxValueChanged.bind(this);
        };

        render() {
            return (
                <div>
                    <Form formData={employee}>
                        <SimpleItem dataField="firstName" />
                        <SimpleItem dataField="lastName" />
                        <GroupItem caption="Contacts">
                            <SimpleItem dataField="phone" visible={this.state.isPhoneVisible} />
                            <SimpleItem dataField="email" />
                        </GroupItem>
                    </Form>
                    <CheckBox
                        text="Show the Phone Number"
                        value={this.state.isPhoneVisible}
                        onValueChanged={this.onCheckBoxValueChanged} />
                </div>
            );
        }

        onCheckBoxValueChanged(e) {
            this.setState({
                isPhoneVisible: e.value
            });            
        }
    }

    export default App;

---


#include form-item-options

#####See Also#####
#include common-link-callmethods
- [Form - Change Editor Properties at Runtime](/concepts/05%20UI%20Components/Form/20%20Change%20Properties%20at%20Runtime/15%20Editor%20Properties.md '/Documentation/Guide/UI_Components/Form/Change_Properties_at_Runtime/Editor_Properties/')
- [Form - Configure Simple Items](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/')
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields)
- [Form API Reference](/api-reference/10%20UI%20Components/dxForm '/Documentation/ApiReference/UI_Components/dxForm/')

[tags]form, modify item, item property, change property
