The **id** parameter accepts the following values:

- The **name** value of a root-level item
- The path of an item nested in a group or tab

Paths must separate nesting levels with periods and cannot include spaces or start with a period. Use the following property values to define nesting levels:

- **GroupItem**.[name](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/GroupItem/name.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/#name')
- **GroupItem**.[caption](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/GroupItem/caption.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/#caption')
- **TabbedItem**.**tabs[]**.[title](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/TabbedItem/tabs/title.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/tabs/#title')

Review the following Form configuration. Code snippets in this section that demonstrate **itemOption()** reference these items:

---
##### jQuery

    <!-- tab: index.js -->
    $('#form').dxForm({
        items: [{
            itemType: 'group',
            caption: 'Employee',
            name: 'employeeInfo',
            items: ['name', 'position', 'hireDate', 'officeNumber']
        }, {
            itemType: 'group',
            caption: 'Additional Information',
            name: 'additionalInfo',
            items: [{
                itemType: 'tabbed',
                tabs: [{
                    title: 'Contacts',
                    items: ['skype', 'phone', 'email']
                }, {
                    title: 'Note',
                    items: ['notes']
                }]
            }]
        }]
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().Form()
        .Items(FormItems => {
            FormItems.AddGroup()
                .Caption("Employee")
                .Name("employeeInfo")
                .Items(GroupOneItems => {
                    GroupOneItems.AddSimple().DataField("name");
                    GroupOneItems.AddSimple().DataField("position");
                    GroupOneItems.AddSimple().DataField("hireDate");
                    GroupOneItems.AddSimple().DataField("officeNumber");
                });
            FormItems.AddGroup()
                .Caption("Additional Information")
                .Name("additionalInfo")
                .Items(GroupTwoItems => GroupTwoItems
                    .AddTabbed().Tabs(Tabs => {
                        Tabs.Add().Title("Contacts").Items(ContactsItems => {
                            ContactsItems.AddSimple().DataField("skype");
                            ContactsItems.AddSimple().DataField("phone");
                            ContactsItems.AddSimple().DataField("email");
                        });
                        Tabs.Add().Title("Note").Items(NoteItems => 
                            NoteItems.AddSimple().DataField("notes")
                        );
                    })
                );
        })
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-form>
        <dxi-form-item
            itemType="group"
            caption="Employee"
            name="employeeInfo"
        >
            <dxi-form-item dataField="name"></dxi-form-item>
            <dxi-form-item dataField="position"></dxi-form-item>
            <dxi-form-item dataField="hireDate"></dxi-form-item>
            <dxi-form-item dataField="officeNumber"></dxi-form-item>
        </dxi-form-item>
        <dxi-form-item
            itemType="group"
            caption="Additional Information"
            name="additionalInfo"
        >
            <dxi-form-item itemType="tabbed">
                <dxi-form-tab title="Contacts">
                    <dxi-form-item dataField="skype"></dxi-form-item>
                    <dxi-form-item dataField="phone"></dxi-form-item>
                    <dxi-form-item dataField="email"></dxi-form-item>
                </dxi-form-tab>
                <dxi-form-tab title="Note">
                    <dxi-form-item dataField="notes"></dxi-form-item>
                </dxi-form-tab>
            </dxi-form-item>
        </dxi-form-item>
    </dx-form>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm>
            <DxGroupItem
                caption="Employee"
                name="employeeInfo"
            >
                <DxSimpleItem data-field="name"/>
                <DxSimpleItem data-field="position"/>
                <DxSimpleItem data-field="hireDate"/>
                <DxSimpleItem data-field="officeNumber"/>
            </DxGroupItem>
            <DxGroupItem
                caption="Additional Information"
                name="additionalInfo"
            >
                <DxTabbedItem>
                    <DxTab title="Contacts">
                        <DxSimpleItem data-field="skype"/>
                        <DxSimpleItem data-field="phone"/>
                        <DxSimpleItem data-field="email"/>
                    </DxTab>
                    <DxTab title="Note">
                        <DxSimpleItem data-field="notes"/>
                    </DxTab>
                </DxTabbedItem>
            </DxGroupItem>
        </DxForm>
    </template>

    <script setup lang="ts">
    import {
        DxForm, DxSimpleItem, DxGroupItem, DxTabbedItem, DxTab
    } from 'devextreme-vue/form';
    </script>

##### React

    <!-- tab: App.tsx -->
    import {
        Form, SimpleItem, GroupItem, TabbedItem, Tab
    } from 'devextreme-react/form';

    export default function App() {
        return (
            <Form>
                <GroupItem
                    caption="Employee"
                    name="employeeInfo"
                >
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="position" />
                    <SimpleItem dataField="hireDate" />
                    <SimpleItem dataField="officeNumber" />
                </GroupItem>
                <GroupItem
                    caption="Additional Information"
                    name="additionalInfo"
                >
                    <TabbedItem>
                        <Tab title="Contacts">
                            <SimpleItem dataField="skype" />
                            <SimpleItem dataField="phone" />
                            <SimpleItem dataField="email" />
                        </Tab>
                        <Tab title="Note">
                            <SimpleItem dataField="notes" />
                        </Tab>
                    </TabbedItem>
                </GroupItem>
            </Form>
        );
    }

---

The following code snippet defines a path for the "phone" item. This snippet passes the "Additional Information" group **name** to **itemOption()** because the group **caption** contains a space:

    formInstance.itemOption('additionalInfo.Contacts.phone'${{additionalOptions}});

The "Employee" group is not nested in another item. Pass the group's **caption** or **name** to **itemOption()** instead of a path:

    formInstance.itemOption('Employee'${{additionalOptions}});

[note] You cannot call **itemOption()** for items nested in a root-level **GroupItem** or **TabbedItem** that has no identifier.
