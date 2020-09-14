---
id: dxFormSimpleItem.template
type: template
---
---
##### shortDescription
A template that can be used to replace the default editor with custom content.

##### param(data): Object
The item's data.

##### field(data.component): dxForm
The **Form** instance.

##### field(data.dataField): String
The item's [dataField](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField').

##### field(data.editorOptions): Object
The item editor's [configuration](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions').

##### field(data.editorType): String
The editor's [type](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType').

##### field(data.name): String
The item's [name](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/name.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#name').

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | Element | jQuery
A template name or container.

---

In Angular, Vue, and React, this template can be used instead of [editorType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType') and [editorOptions](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions')  to configure a custom editor. It gives you the advantage of using nested configuration components. When you configure a custom editor in the template, consider the following specificities:

- Use two-way binding to bind the custom editor to a [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData') field.

- If you use validation, define validation rules in the editor, not in the form item.

- Use the same [validationGroup](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#validationGroup') as the **Form** to ensure the custom editor is validated simultaneously with other form editors.

The code below configures the [DateBox](/api-reference/10%20UI%20Widgets/dxDateBox '/Documentation/ApiReference/UI_Widgets/dxDateBox/') widget in the template. The widget is bound to the `BirthDate` field of  **formData** and has a validation group and two validation rules:

---
##### Angular

    <!-- tab: app.component.html -->
    <dx-form
        [formData]="customer"
        validationGroup="customerData">
        <!-- ... -->
        <dxi-item>
            <dxo-label text="Date of birth"></dxo-label>
            <div *dxTemplate>
                <dx-date-box
                    [(value)]="customer.BirthDate">
                    <dx-validator
                        validationGroup="customerData">
                        <dxi-validation-rule 
                            type="required"
                            message="Date of birth is required">
                        </dxi-validation-rule>
                        <dxi-validation-rule 
                            type="range"
                            [max]="maxDate"
                            message="You must be at least 21 years old">
                        </dxi-validation-rule>
                    </dx-validator>
                </dx-date-box>
            </div>
        </dxi-item>
    </dx-form>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        customer = {
            Email: "",
            FullName: "",
            BirthDate: null
        };
        maxDate: Date = new Date().setYear(new Date().getYear() - 21);
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxFormModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFormModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm
            :form-data="customer"
            validation-group="customerData">
            <!-- ... -->
            <DxSimpleItem>
                <DxLabel text="Date of birth" />
                <template #default>
                    <DxDateBox
                        :value.sync="customer.BirthDate">
                        <DxValidator
                            validation-group="customerData">
                            <DxRequiredRule message="Date of birth is required" />
                            <DxRangeRule
                                :max="maxDate"
                                message="You must be at least 21 years old"
                            />
                        </DxValidator>
                    </DxDateBox>
                </template>
            </DxSimpleItem>
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxForm, {
        DxSimpleItem,
        DxLabel
    } from 'devextreme-vue/form';
    import DxDateBox from 'devextreme-vue/date-box';
    import DxValidator, {
        DxRequiredRule,
        DxRangeRule
    } from 'devextreme-vue/validator';

    export default {
        components: {
            DxForm,
            DxSimpleItem,
            DxLabel,
            DxDateBox,
            DxValidator,
            DxRequiredRule,
            DxRangeRule
        },
        data() {
            return {
                customer: {
                    Email: "",
                    FullName: "",
                    BirthDate: null
                },
                maxDate: new Date().setYear(new Date().getYear() - 21);
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState } from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Form, {
        SimpleItem,
        Label
    } from 'devextreme-react/form';
    import DateBox from 'devextreme-react/date-box';
    import Validator, {
        RequiredRule,
        RangeRule
    } from 'devextreme-react/validator';

    export default function App() {
        const [customer, setCustomer] = useState({
            Email: "",
            FullName: "",
            BirthDate: null
        });

        const maxDate = new Date().setYear(new Date().getYear() - 21);

        const updateBirthDate = e => {
            setCustomer(prevState => ({
                ...prevState,
                BirthDate: e.value;
            }));
        };

        return (
            <Form formData={customer} validationGroup="customerData">
                {/* ... */}
                <SimpleItem>
                    <Label text="Date of birth" />
                    <DateBox value={customer.BirthDate} onValueChanged={updateBirthDate}>
                        <Validator validationGroup="customerData">
                            <RequiredRule message="Date of birth is required" />
                            <RangeRule
                                max={maxDate}
                                message="You must be at least 21 years old"
                            />
                        </Validator>
                    </DateBox>
                </SimpleItem>
            </Form>
        );
    }

---


#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/FormsAndMultiPurposeOverview/"
}
#include common-githubbutton with {
    url: "https://github.com/DevExpress-Examples/Form-Custom-items"
}

#####See Also#####
- [Customize a Simple Item](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items/05%20Customize%20a%20Simple%20Item.md '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/#Customize_a_Simple_Item')
