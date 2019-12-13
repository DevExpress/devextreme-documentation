In the following example, two textboxes are placed in a [validation group](/api-reference/10%20UI%20Widgets/dxValidationGroup '/Documentation/ApiReference/UI_Widgets/dxValidationGroup/') that is validated on a button click. Each textbox has a set of [validation rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/'). The validation result is displayed under the textboxes in a [validation summary](/api-reference/10%20UI%20Widgets/dxValidationSummary '/Documentation/ApiReference/UI_Widgets/dxValidationSummary/').

    <!-- tab: App.vue -->
    <template>
        <dx-validation-group>
            <dx-text-box :value.sync="email">
                <dx-validator>
                    <dx-required-rule message="Email is required" />
                    <dx-email-rule message="Email is invalid" />
                </dx-validator>
            </dx-text-box>

            <dx-text-box :value.sync="password" mode="password">
                <dx-validator>
                    <dx-required-rule message="Password is required" />
                </dx-validator>
            </dx-text-box>

            <dx-validation-summary />

            <dx-button @click="validate" text="Submit" />
        </dx-validation-group>
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

Refer to the [Data Validation](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/') article for more information.