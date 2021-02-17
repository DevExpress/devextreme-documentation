By default, the Form generates a simple item for each field of the [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#formData') object. In case you need to create items for specific fields only, add the names of these fields to the [items](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#items') array. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO",
                officeNo: 901
            },
            items: ["firstName", "lastName", "position"]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [items]="['firstName', 'lastName', 'position']">
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            position: "CEO",
            officeNo: 901
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
            :items="['firstName', 'lastName', 'position']">
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxForm from 'devextreme-vue/form';

    export default {
        components: {
            DxForm
        },
        data() {
            return {
                employee: {
                    firstName: "John",
                    lastName: "Heart",
                    position: "CEO",
                    officeNo: 901
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Form from 'devextreme-react/form';

    class App extends React.Component {
        employee = {
            firstName: "John",
            lastName: "Heart",
            position: "CEO",
            officeNo: 901
        }

        render() {
            return (
                <Form
                    formData={this.employee}
                    items={['firstName', 'lastName', 'position']}>
                </Form>
            );
        }
    }
    export default App;

---

A simple form item is a label-editor pair. The label is the field name that undergoes a slight conversion, for example, the field name *"firstName"* becomes the *"First Name"* label. For more information on configuring labels, visit the [Configure Item Labels](/concepts/05%20Widgets/Form/15%20Configure%20Item%20Labels/05%20Location%20and%20Alignment '/Documentation/Guide/UI_Components/Form/Configure_Item_Labels/Location_and_Alignment/') section.

The editor that will be used in a particular simple item depends on the type of data that its field contains. However, you can force an item to use an editor of your choice. For this purpose, specify the item's [editorType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorType') property. To configure the editor, use the [editorOptions](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorOptions') object. Note that you also need to specify the [dataField](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#dataField') property to bind the item to a **formData** field.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                hireDate: new Date(2012, 4, 13),
                notes: "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003."
            },
            items: [ "name", {
                dataField: "hireDate",
                editorType: "dxCalendar",
                editorOptions: {
                    value: new Date()
                }
            }, {
                dataField: "notes",
                editorType: "dxTextArea",
                editorOptions: {
                    placeholder: "Add notes..."
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item dataField="name"></dxi-item>
        <dxi-item dataField="hireDate"
            editorType="dxCalendar"
            [editorOptions]="{ value: new Date() }">
        </dxi-item>
        <dxi-item dataField="notes"
            editorType="dxTextArea"
            [editorOptions]="{ placeholder: 'Add notes...' }">
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule, DxCalendarModule, DxTextAreaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            name: "John Heart",
            hireDate: new Date(2012, 4, 13),
            notes: "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003."
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule,
            DxCalendarModule,
            DxTextAreaModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm
            :form-data="employee">
            <DxSimpleItem data-field="name" />
            <DxSimpleItem
                data-field="hireDate"
                editor-type="dxCalendar"
                :editor-options="calendarOptions"
            />
            <DxSimpleItem
                data-field="notes"
                editor-type="dxTextArea"
                :editor-options="textAreaOptions"
            />
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxForm, {
        DxSimpleItem
    } from 'devextreme-vue/form';
    import DxCalendar from 'devextreme-vue/calendar';
    import DxTextArea from 'devextreme-vue/text-area';

    export default {
        components: {
            DxForm,
            DxSimpleItem,
            DxCalendar,
            DxTextArea
        },
        data() {
            return {
                employee: {
                    name: "John Heart",
                    hireDate: new Date(2012, 4, 13),
                    notes: "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003."
                },
                calendarOptions: { value: new Date() },
                textAreaOptions: { placeholder: 'Add notes...' }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Form, {
        SimpleItem
    } from 'devextreme-react/form';

    import Calendar from 'devextreme-vue/calendar';
    import TextArea from 'devextreme-vue/text-area';

    const calendarOptions = { value: new Date() };
    const textAreaOptions = { placeholder: 'Add notes...' };

    class App extends React.Component {
        employee = {
            name: "John Heart",
            hireDate: new Date(2012, 4, 13),
            notes: "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003."
        }

        render() {
            return (
                <Form
                    formData={this.employee}>
                    <SimpleItem dataField="name" />
                    <SimpleItem
                        dataField="hireDate"
                        editorType="dxCalendar"
                        editorOptions={calendarOptions}
                    />
                    <SimpleItem
                        dataField="notes"
                        editorType="dxTextArea"
                        editorOptions={textAreaOptions}
                    />
                </Form>
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/CustomizeItem/"
}
