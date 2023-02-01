To conditionally validate an editor, use a conditional rendering on a validation rule. In the example below, the TextBox can be validated only if the SelectBox value is `Germany`.

---
##### Angular

Refer to the following article to learn more about conditional rendering: <a href="https://angular.io/guide/built-in-directives#adding-or-removing-an-element-with-ngif" target="_blank">Adding or removing an element with NgIf
</a>.

    <!-- tab: app.component.html -->
    <dx-text-box>
        <dx-validator>
            <dxi-validation-rule
                *ngIf="country === 'Germany'"
                type="required"
                message="Name is required"
            >
            </dxi-validation-rule>
        </dx-validator>
    </dx-text-box>
    <dx-select-box
        [dataSource]="countries"
        [(value)]="country"
    >
    </dx-select-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        countries = ['Germany', 'USA', 'China'];
        country = "";
    }

##### Vue

Refer to the following article to learn more about conditional rendering: <a href="https://v3.vuejs.org/guide/conditional.html" target="_blank">Conditional Rendering</a>.

    <!-- tab: App.vue -->
    <template>
        <DxTextBox>
            <DxValidator>
                <DxRequiredRule 
                    v-if="country === 'Germany'"
                    message="Name is required"
                />
            </DxValidator>
        </DxTextBox>
        <DxSelectBox
            :data-source="countries"
            v-model:value="country"
        >
        </DxSelectBox>
    </template>

    <script>
    import DxTextBox from 'devextreme-vue/text-box';
    import DxSelectBox from 'devextreme-vue/select-box';
    import { DxValidator, DxRequiredRule } from 'devextreme-vue/validator';

    export default {
        components: {
            DxTextBox,
            DxSelectBox,
            DxValidator,
            DxRequiredRule
        },
        data() {
            return {
                countries: ['Germany', 'USA', 'China'],
                country: ''
            }
        }
    }
    </script>

##### React

Refer to the following article to learn more about conditional rendering: <a href="https://reactjs.org/docs/conditional-rendering.html" target="_blank">Conditional Rendering</a>.

    <!-- tab: App.js -->
    import React, { useState, useCallback } from "react";
    import TextBox from "devextreme-react/text-box";
    import SelectBox from "devextreme-react/select-box";
    import { Validator, RequiredRule } from "devextreme-react/validator";

    const countries = ['Germany', 'USA', 'China'];

    function App() {
        const [country, setCountry] = useState("");
        const onCountryChanged = useCallback((e) => {
            setCountry(e.value);
        }, []);

        return (
            <React.Fragment>
                <TextBox>
                    <Validator>
                        {country === "Germany" && <RequiredRule message="Name is required" />}
                    </Validator>
                </TextBox>
                <SelectBox
                    dataSource={countries}
                    value={country}
                    onValueChanged={onCountryChanged}
                />
            </React.Fragment>
        );
    }
    export default App;

---

[tags] angular, vue, react