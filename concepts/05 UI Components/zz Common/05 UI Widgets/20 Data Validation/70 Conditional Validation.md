To conditionally validate an editor, use conditional rendering on a validation rule. In the example below, the TextBox will be validated only if the SelectBox value is `Germany`.

---
##### Vue

Refer to the following article for more information about conditional rendering: <a href="https://v3.vuejs.org/guide/conditional.html" target="_blank">Conditional Rendering</a>.

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

Refer to the following article for more information about conditional rendering: <a href="https://react.dev/learn/conditional-rendering" target="_blank">Conditional Rendering</a>.

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

[tags] vue, react