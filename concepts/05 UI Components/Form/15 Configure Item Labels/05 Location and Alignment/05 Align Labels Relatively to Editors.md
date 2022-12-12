The Form UI component displays labels on the left side of their editors and aligns them to the left. Use the [labelLocation](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/labelLocation.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#labelLocation') property to relocate all labels or the **label**.[location](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/label/location.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/label/#location') property to relocate individual labels. To align labels horizontally, set the **label**.[alignment](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/label/alignment.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/label/#alignment') property.

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

If a label's position is left or right, the label's vertical alignment depends on the control type:

<table class="dx-table">
    <tr>
        <th>Control Type</th>
        <th>Default Vertical Alignment</th>
    </tr>
    <tr>
        <td>Single-line editors</td>
        <td>Middle</td>
    </tr>
    <tr>
        <td>Multi-line editors and bigger controls</td>
        <td>Top</td>
    </tr>
</table>

The code below changes the default vertical alignment for a label to the middle:

    <!--CSS-->
    .dx-label-h-align {
        align-items: center;
    }
