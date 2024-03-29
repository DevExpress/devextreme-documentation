In the following example, two textboxes are placed in a [validation group](/api-reference/10%20UI%20Components/dxValidationGroup '/Documentation/ApiReference/UI_Components/dxValidationGroup/') that is validated on a button click. Each textbox has a set of [validation rules](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/'). The validation result is displayed under the textboxes in a [validation summary](/api-reference/10%20UI%20Components/dxValidationSummary '/Documentation/ApiReference/UI_Components/dxValidationSummary/').

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxValidationGroup>
            <DxTextBox v-model:value="email">
                <DxValidator>
                    <DxRequiredRule message="Email is required" />
                    <DxEmailRule message="Email is invalid" />
                </DxValidator>
            </DxTextBox>

            <DxTextBox v-model:value="password" mode="password">
                <DxValidator>
                    <DxRequiredRule message="Password is required" />
                </DxValidator>
            </DxTextBox>

            <DxValidationSummary />

            <DxButton @click="validate" text="Submit" />
        </DxValidationGroup>
    </template>

    <script>
    import DxTextBox from 'devextreme-vue/text-box';
    import DxValidator, {
        DxRequiredRule,
        DxEmailRule
    } from 'devextreme-vue/validator';
    import DxValidationGroup from 'devextreme-vue/validation-group';
    import DxValidationSummary from 'devextreme-vue/validation-summary';
    import DxButton from 'devextreme-vue/button';

    export default {
        components: {
            DxTextBox,
            DxValidator,
            DxRequiredRule,
            DxEmailRule,
            DxValidationGroup,
            DxValidationSummary,
            DxButton
        },
        data() {
            return {
                email: undefined,
                password: undefined
            }
        },
        methods: {
            validate(params) {
                let result = params.validationGroup.validate();
                if (result.isValid) {
                    // the values are valid
                    // submit and reset them
                    // params.validationGroup.reset();
                    console.log(result);
                }
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxValidationGroup>
            <DxTextBox v-model:value="email">
                <DxValidator>
                    <DxRequiredRule message="Email is required" />
                    <DxEmailRule message="Email is invalid" />
                </DxValidator>
            </DxTextBox>

            <DxTextBox v-model:value="password" mode="password">
                <DxValidator>
                    <DxRequiredRule message="Password is required" />
                </DxValidator>
            </DxTextBox>

            <DxValidationSummary />

            <DxButton @click="validate" text="Submit" />
        </DxValidationGroup>
    </template>

    <script setup>
    import DxTextBox from 'devextreme-vue/text-box';
    import DxValidator, {
        DxRequiredRule,
        DxEmailRule
    } from 'devextreme-vue/validator';
    import DxValidationGroup from 'devextreme-vue/validation-group';
    import DxValidationSummary from 'devextreme-vue/validation-summary';
    import DxButton from 'devextreme-vue/button';

    let email = undefined;
    let password = undefined;

    const validate = (params) => {
        let result = params.validationGroup.validate();
        if (result.isValid) {
            // the values are valid
            // submit and reset them
            // params.validationGroup.reset();
            console.log(result);
        }
    }
    </script>

Refer to the [Data Validation](/concepts/05%20UI%20Components/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation '/Documentation/Guide/UI_Components/Common/UI_Widgets/Data_Validation/') article for more information.