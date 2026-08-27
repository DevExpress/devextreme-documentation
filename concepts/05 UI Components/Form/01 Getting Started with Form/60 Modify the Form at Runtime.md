---
##### jQuery

You can change any properties of the form, its items, or editors at runtime. Use the [option(optionName, optionValue)](/api-reference/10%20UI%20Components/Component/3%20Methods/option(optionName_optionValue).md '/Documentation/ApiReference/UI_Components/dxForm/Methods/#optionoptionName_optionValue') method to update a Form property, and the [itemOption(id, option, value)](/api-reference/10%20UI%20Components/dxForm/3%20Methods/itemOption(id_option_value).md '/Documentation/ApiReference/UI_Components/dxForm/Methods/#itemOptionid_option_value') method to update an item property's value. The following code modifies the [readOnly](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/readOnly.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#readOnly') property's value:

    <!-- tab: index.js -->
    $(function() {
        const form = $("#form").dxForm({
            formData: {
                // ...
            },
            items: [
                // ...
            ]
        }).dxForm("instance");

        $("#checkBox").dxCheckBox({
            text: "Enable read-only mode",
            value: false,
            onValueChanged: function (e) {
                form.option("readOnly", e.value);
            }
        });
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().Form()
        .ID("form")
    )

    @(Html.DevExtreme().CheckBox()
        .Text("Enable read-only mode")
        .OnValueChanged("handleCheckBoxValueChanged")
    )

    <script>
        function handleCheckBoxValueChanged(e) {
            $('#form').dxForm('instance').option('readOnly', e.value);
        }
    </script>

##### Angular

You can change any properties of the form, its items, or editors at runtime. To update a property value, bind it to a component property. The following code modifies the [readOnly](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/readOnly.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#readOnly') property's value:

    <!-- tab: app.component.html -->
    <dx-form
        [formData]="employee"
        [readOnly]="isFormReadOnly"
    >
        <!-- ... -->
    </dx-form>

    <dx-check-box
        text="Enable read-only mode"
        [(value)]="isFormReadOnly">
    </dx-check-box>

    <!-- tab: app.component.ts -->
    import { DxFormModule, DxCheckBoxModule } from 'devextreme-angular';

    // ...
    export class AppComponent {
        employee = {
            // ...
        };

        isFormReadOnly = false;
    }

##### Vue

You can change any properties of the form, its items, or editors at runtime. To update a property value, bind it to a component property. The following code shows how to modify the [readOnly](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/readOnly.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#readOnly') property's value:

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxForm 
                :form-data="employee"
                :read-only="isFormReadOnly"
            >
                <!-- ... -->
            </DxForm>
            <DxCheckBox
                text="Enable read-only mode"
                v-model:value="isFormReadOnly"
            />
        </div>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxForm } from 'devextreme-vue/form';
    import { DxCheckBox } from 'devextreme-vue/check-box';
    
    const employee = {
        // ...
    };

    const isFormReadOnly = ref<boolean>(false);
    </script>

##### React

You can change any properties of the form, its items, or editors at runtime. To update a property value, bind it to a component property. The following code shows how to modify the [readOnly](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/readOnly.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#readOnly') property's value:

    <!-- tab: App.tsx -->
    import React, {useState, useCallback } from 'react';
    import { Form } from 'devextreme-react/form';
    import { CheckBox, type CheckBoxTypes } from 'devextreme-react/check-box';

    const employee = {
        // ...
    };

    export default function App() {
        const [isFormReadOnly, setIsFormReadOnly] = useState<boolean>(false);

        const onCheckBoxValueChanged = useCallback((e: CheckBoxTypes.ValueChangedEvent) => {
            setIsFormReadOnly(e.value);
        }, []);

        return (
            <div>
                <Form
                    formData={employee}
                    readOnly={isFormReadOnly}>
                    {/* ... */}
                </Form>
                <CheckBox
                    text="Enable read-only mode"
                    value={isFormReadOnly}
                    onValueChanged={onCheckBoxValueChanged} 
                />
            </div>
        );
    }

---
