---
id: CompareRule
type: Object
module: common
export: CompareRule
generateTypeLink: 
---
---
##### shortDescription
A validation rule that requires validated values to match a specified expression.

---
To specify a comparison expression, define the [comparisonTarget](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/CompareRule/comparisonTarget.md '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/CompareRule/#comparisonTarget') function. Validator compares values to this function's return value. To configure which comparison operator Validator compares values to, specify the [comparisonType](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/CompareRule/comparisonType.md '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/CompareRule/#comparisonType') property.

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $('#password').dxTextBox({ ... });
        $('#confirm-password').dxTextBox({ ... })
            .dxValidator({
                type: 'compare',
                comparisonTarget() {
                    const passwordTextBox = $('#password').dxTextBox('instance');
                    if (passwordTextBox) {
                        return passwordTextBox.option('value');
                    }
                    return null;
                },
                message: 'Passwords do not match.',
            });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-text-box
        [(value)]="password"
    ></dx-text-box>
    <dx-text-box> 
        <dx-validator>
            <dxi-validation-rule 
                type="compare"
                [comparisonTarget]="passwordComparison"
                message="Passwords do not match."
            ></dxi-validation-rule>
        </dx-validator>
    </dx-text-box>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        password = '';
        passwordComparison = () => this.password;
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxValidatorModule, DxTextBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            DxTextBoxModule,
            BrowserModule,
            DxValidatorModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxTextBox } from 'devextreme-vue/text-box';
    import { DxValidator, DxCompareRule } from 'devextreme-vue/validator';

    const password = ref('');

    function passwordComparison() {
        return password.value;
    }

    </script>

    <template>
        <DxTextBox
            v-model:value="password"
        />
        <DxTextBox>
            <DxValidator>
                <DxCompareRule
                    :comparison-target="passwordComparison"
                    message="Passwords do not match."
                />
            </DxValidator>
        </DxTextBox>
    </template>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback, useMemo, useRef, useState } from 'react';
    import { TextBox, type TextBoxTypes } from 'devextreme-react/text-box';
    import { Validator, CompareRule } from 'devextreme-react/validator';

    const [password, setPassword] = useState('');
    const passwordComparison = useCallback(() => password, [password]);

    const onPasswordChanged = useCallback((e: TextBoxTypes.ValueChangeEvent) => {
        setPassword(e.value);
    }, [setPassword])

    function App() {
        return (
            <React.Fragment>
                <TextBox
                    value={password}
                    onValueChanged={onPasswordChanged}
                />
                <TextBox>
                    <Validator>
                        <CompareRule
                            message="Passwords do not match."
                            comparisonTarget={passwordComparison}
                        />
                    </Validator>
                </TextBox>
            </React.Fragment>
        );
    }

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/"
}

#####See Also#####
- [Data Validation](/concepts/05%20UI%20Components/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation '/Documentation/Guide/UI_Components/Common/UI_Widgets/Data_Validation/')
