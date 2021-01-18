The **Form** UI component displays labels on the left side of their editors and aligns them to the left. Use the [labelLocation](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/labelLocation.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#labelLocation') option to relocate all labels or the **label**.[location](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/label/location.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/label/#location') option to relocate individual labels. To align labels horizontally, set the **label**.[alignment](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/label/alignment.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/label/#alignment') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                phone: "+1(360)684-1334"
            },
            labelLocation: "top", // or "left" | "right"
            items: ["firstName", "lastName", { 
                dataField: "phone",
                label: { 
                    location: "left",
                    alignment: "right" // or "left" | "center"
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        labelLocation="top"> <!-- or "left" | "right" -->
        <dxi-item dataField="firstName"></dxi-item>
        <dxi-item dataField="lastName"></dxi-item>
        <dxi-item dataField="phone">
            <dxo-label
                location="left"
                alignment="right"> <!-- or "left" | "center" -->
            </dxo-label>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            phone: "+1(360)684-1334"
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
            label-location="top"> <!-- or "left" | "right" -->
            <DxSimpleItem data-field="firstName" />
            <DxSimpleItem data-field="lastName" />
            <DxSimpleItem data-field="phone">
                <DxLabel
                    location="left"
                    alignment="right" /> <!-- or "left" | "center" -->
            </DxSimpleItem>
        </DxForm>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem, DxLabel } from 'devextreme-vue/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        phone: '+1(360)684-1334'
    };

    export default {
        components: {
            DxForm, DxSimpleItem, DxLabel
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

    import { Form, SimpleItem, Label } from 'devextreme-react/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        phone: '+1(360)684-1334'
    };

    class App extends React.Component {
        render() {
            return (
                <Form
                    formData={employee}
                    labelLocation="top"> { /* or "left" | "right" */ }
                    <SimpleItem dataField="firstName" />
                    <SimpleItem dataField="lastName" />
                    <SimpleItem dataField="phone">
                        <Label
                            location="left"
                            alignment="right" /> { /* or "left" | "right" */ }
                    </SimpleItem>
                </Form>
            );
        }
    }

    export default App;

---

A label placed on the left or right side of the editor is centered vertically in most cases. The labels of the editors that occupy much screen space like the [Calendar](/concepts/05%20Widgets/Calendar/00%20Overview.md '/Documentation/Guide/Widgets/Calendar/Overview/'), [TextArea](/concepts/05%20Widgets/TextArea/00%20Overview.md '/Documentation/Guide/Widgets/TextArea/Overview/'), and [RadioGroup](/concepts/05%20Widgets/RadioGroup/00%20Overview.md '/Documentation/Guide/Widgets/RadioGroup/Overview/') are aligned at the top, but you can center them using the following code:

    <!--CSS-->
    .dx-label-h-align {
        align-items: center;
    }
