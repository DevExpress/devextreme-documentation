[Simple items](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/') may require a value or may allow a user to skip it. Both types of items can be marked with a symbol or text. Required items are those whose [isRequired](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/isRequired.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#isRequired') option is **true**, others are considered optional.

To specify the mark or text for required and optional items, use the [requiredMark](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/requiredMark.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#requiredMark') and [optionalMark](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/optionalMark.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#optionalMark') options. Note that the "optional" mark will not be displayed until you set the [showOptionalMark](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/showOptionalMark.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#showOptionalMark') option to **true**. You can also hide the "required" mark using the [showRequiredMark](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/showRequiredMark.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#showRequiredMark') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO"
            },
            items: [
                { dataField: "firstName", isRequired: true },
                { dataField: "lastName", isRequired: true },
                "position"
            ],
            requiredMark: "!",
            optionalMark: "opt",
            showOptionalMark: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        requiredMark="!"
        optionalMark="opt"
        [showOptionalMark]="true">
        <dxi-item dataField="firstName" [isRequired]="true"></dxi-item>
        <dxi-item dataField="lastName"  [isRequired]="true"></dxi-item>
        <dxi-item dataField="position"></dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            position: "CEO"
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
            :form-data='employee'
            required-mark="!"
            optional-mark="opt"
            :show-optional-mark="true">
            <DxSimpleItem data-field="firstName" :is-required="true" />
            <DxSimpleItem data-field="lastName"  :is-required="true" />
            <DxSimpleItem data-field="position" />
        </DxForm>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem } from 'devextreme-vue/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        position: 'CEO'
    };

    export default {
        components: {
            DxForm, DxSimpleItem
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

    import { Form, SimpleItem } from 'devextreme-react/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        position: 'CEO'
    };

    class App extends React.Component {
        render() {
            return (
                <Form
                    formData={employee}
                    requiredMark="!"
                    optionalMark="opt"
                    showOptionalMark={true}>
                    <SimpleItem dataField="firstName" isRequired={true} />
                    <SimpleItem dataField="lastName"  isRequired={true} />
                    <SimpleItem dataField="position" />
                </Form>
            );
        }
    }

    export default App;

---

Each label ends with a colon. To hide it, assign **false** to the [showColonAfterLabel](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/showColonAfterLabel.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#showColonAfterLabel') option. Note that you can show/hide a colon for an individual item using the **label**.[showColon](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/label/showColon.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/label/#showColon') option.

---
##### jQuery

    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO"
            },
            showColonAfterLabel: false,
            items: ["firstName", "lastName", {
                dataField: "position",
                label: { showColon: true }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [showColonAfterLabel]="false">
        <dxi-item dataField="firstName"></dxi-item>
        <dxi-item dataField="lastName"></dxi-item>
        <dxi-item dataField="position">
            <dxo-label [showColon]="true"></dxo-label>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            position: "CEO"
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
            :show-colon-after-label="false">
            <DxSimpleItem data-field="firstName" />
            <DxSimpleItem data-field="lastName" />
            <DxSimpleItem data-field="position">
                <DxLabel :show-colon="true" />
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
        position: 'CEO'
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
        position: 'CEO'
    };

    class App extends React.Component {
        render() {
            return (
                <Form
                    formData={employee}
                    showColonAfterLabel={false}>
                    <SimpleItem dataField="firstName" />
                    <SimpleItem dataField="lastName" />
                    <SimpleItem dataField="position">
                        <Label showColon={true} />
                    </SimpleItem>
                </Form>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Form - Configure Item Labels | Location and Alignment](/concepts/05%20UI%20Components/Form/15%20Configure%20Item%20Labels/05%20Location%20and%20Alignment '/Documentation/Guide/UI_Components/Form/Configure_Item_Labels/Location_and_Alignment/')
- [Form - Change Item Options at Runtime](/concepts/05%20UI%20Components/Form/20%20Change%20Options%20at%20Runtime/10%20Item%20Options.md '/Documentation/Guide/UI_Components/Form/Change_Options_at_Runtime/Item_Options/')
- [Form - Change Editor Options at Runtime](/concepts/05%20UI%20Components/Form/20%20Change%20Options%20at%20Runtime/15%20Editor%20Options.md '/Documentation/Guide/UI_Components/Form/Change_Options_at_Runtime/Editor_Options/')
- [Form - Configure Simple Items](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/')
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields)
- [Form API Reference](/api-reference/10%20UI%20Components/dxForm '/Documentation/ApiReference/UI_Components/dxForm/')

[tags]form, required, optional, mark, colon
