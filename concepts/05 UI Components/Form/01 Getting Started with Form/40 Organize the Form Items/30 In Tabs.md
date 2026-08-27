The Form uses the [TabPanel](/api-reference/10%20UI%20Components/dxTabPanel '/Documentation/ApiReference/UI_Components/dxTabPanel/') component to display [tabs](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/TabbedItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/'). You can specify the tab panel's settings in the [tabPanelOptions](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/TabbedItem/tabPanelOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/#tabPanelOptions') object. A tab can contain any item type.

The following example shows a tabbed item nested in the `Personal Information` group. The resulting Form looks like this:

![DevExtreme Form: Tabbed Items](/images/UiWidgets/form-getting-started-tabs.png)

The code also shows how to configure the tab panel's [height](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#height') property in the **tabPanelOptions** object.


---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#form").dxForm({
            formData: {
                name: 'John Heart',
                position: 'CEO',
                hireDate: new Date(2012, 4, 13),
                officeNumber: 901,
                phone: '+1(213) 555-9392',
                skype: 'jheart_DX_skype',
                email: 'jheart@dx-email.com',
                notes: 'John has been in the Audio/Video industry since 1990.'
            },
            items: [{
                itemType: "group",
                colCount: 2,
                items: [{
                    itemType: "group",
                    caption: "Employee",
                    items: ["name", "position", "hireDate", "officeNumber"]
                }, {
                    itemType: "group",
                    caption: "Personal Information",
                    items: [{
                        itemType: "tabbed",
                        tabPanelOptions: {
                            height: 260
                        },
                        tabs: [{
                            title: "Contacts",
                            items: ["skype", "phone",  "email"]
                        }, {
                            title: "Note",
                            items: ["notes"]
                        }]
                    }]
                }]
            }]
        });
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().Form()
        .FormData(new {
            Name = "John Heart",
            Position = "CEO",
            HireDate = new DateOnly(2012, 4, 13),
            OfficeNumber = 901,
            Phone = "+1(213) 555-9392",
            Skype = "jheart_DX_skype",
            Email = "jheart@dx-email.com",
            Notes = "John has been in the Audio/Video industry since 1990."
        })
        .ColCount(2)
        .Items(FormItems => {
            FormItems.AddGroup().ColCount(2).Items(MainGroupItems => {
                MainGroupItems.AddGroup().Caption("Employee").Items(EmployeeItems);
                MainGroupItems.AddGroup().Caption("Personal Information").Items(PersonalInfoItems);
            });
        })
    )

    @functions {
        void EmployeeItems(FormItemsFactory<object> Items) {
            Items.AddSimple().DataField("Name").IsRequired(true);
            Items.AddSimple().DataField("Position");
            Items.AddSimple().DataField("HireDate");
            Items.AddSimple().DataField("OfficeNumber");
        }

        void PersonalInfoItems(FormItemsFactory<object> Items) {
            Items.AddTabbed().TabPanelOptions(Options => 
                Options.Height(280)
            ).Tabs(Tabs => {
                Tabs.Add().Title("Contacts").Items(ContactsItems => {
                    ContactsItems.AddSimple().DataField("Skype");
                    ContactsItems.AddSimple().DataField("Phone");
                    ContactsItems.AddSimple().DataField("Email");
                });
                Tabs.Add().Title("Note").Items(NoteItems => 
                    NoteItems.AddSimple().DataField("Notes")
                );
            });
        }
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-form
        [formData]="employee"
        [colCount]="2">
        <dxi-form-item 
            itemType="group" 
            caption="Employee">
            <dxi-form-item dataField="name"></dxi-form-item>
            <dxi-form-item dataField="position"></dxi-form-item>
            <dxi-form-item dataField="hireDate"></dxi-form-item>
            <dxi-form-item dataField="officeNumber"></dxi-form-item>
        </dxi-form-item>
        <dxi-form-item itemType="group" caption="Personal Information">
            <dxi-form-item itemType="tabbed">
                <dxo-form-tab-panel-options [height]="260">
                </dxo-form-tab-panel-options>
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

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        employee = {
            name: 'John Heart',
            position: 'CEO',
            hireDate: new Date(2012, 4, 13),
            officeNumber: 901,
            phone: '+1(213) 555-9392',
            skype: 'jheart_DX_skype',
            email: 'jheart@dx-email.com',
            notes: 'John has been in the Audio/Video industry since 1990.'
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm 
            :form-data="employee"
            :col-count="2">
            <DxGroupItem caption="Employee">
                <DxSimpleItem data-field="name"/>
                <DxSimpleItem data-field="position"/>
                <DxSimpleItem data-field="hireDate"/>
                <DxSimpleItem data-field="officeNumber"/>
            </DxGroupItem>
            <DxGroupItem caption="Personal Information">
                <DxTabbedItem>
                    <DxTabPanelOptions :height="260"/>
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
    import { DxForm, DxSimpleItem, DxGroupItem, DxTabbedItem, DxTab, DxTabPanelOptions } from 'devextreme-vue/form';
    
    const employee = {
        name: 'John Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        phone: '+1(213) 555-9392',
        skype: 'jheart_DX_skype',
        email: 'jheart@dx-email.com',
        notes: 'John has been in the Audio/Video industry since 1990.'
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Form, SimpleItem, GroupItem, TabbedItem, Tab, TabPanelOptions } from 'devextreme-react/form';

    const employee = {
        name: 'John Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        phone: '+1(213) 555-9392',
        skype: 'jheart_DX_skype',
        email: 'jheart@dx-email.com',
        notes: 'John has been in the Audio/Video industry since 1990.'
    };

    export default function App() {
        return (
            <Form
                formData={employee}
                colCount={2}>
                <GroupItem caption="Employee">
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="position" />
                    <SimpleItem dataField="hireDate" />
                    <SimpleItem dataField="officeNumber" />
                </GroupItem>
                <GroupItem caption="Personal Information">
                    <TabbedItem>
                        <TabPanelOptions height={260} />
                        <Tab title="Contacts">
                            <SimpleItem dataField="phone" />
                            <SimpleItem dataField="skype" />
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
