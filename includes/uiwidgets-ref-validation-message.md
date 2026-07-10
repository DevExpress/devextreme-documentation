You can configure an error message as follows:

- Hard-code a message:

    ---
    ##### jQuery

        <!-- tab: index.js -->
        $("#textBox").dxTextBox({
            // ...
        }).dxValidator({
            type: "${{ruleType}}",
            message: "My custom message"
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-text-box>
            <dx-validator>
                <dxi-validator-validation-rule
                    type="${{ruleType}}"
                    message="My custom message">
                </dxi-validator-validation-rule>
            </dx-validator>
        </dx-text-box>

        <!-- tab: app.module.ts -->
        import { DxValidatorModule, DxTextBoxModule } from 'devextreme-angular';
        // ...

        @NgModule({
            imports: [
                DxTextBoxModule,
                DxValidatorModule,
            ],
        })

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxTextBox>
                <DxValidator>
                    <Dx${{ruleTypeUpperCase}}Rule
                        message="My custom message"
                    />
                </DxValidator>
            </DxTextBox>
        </template>

        <script setup lang="ts">
        import { DxTextBox } from 'devextreme-vue/text-box';
        import { DxValidator, Dx${{ruleTypeUpperCase}}Rule } from 'devextreme-vue/validator';

        </script>

    ##### React

        <!-- tab: App.tsx -->
        import { TextBox } from 'devextreme-react/text-box';
        import { Validator, ${{ruleTypeUpperCase}}Rule } from 'devextreme-react/validator';

        function App() {
            return (
                <TextBox>
                    <Validator>
                        <${{ruleTypeUpperCase}}Rule
                            message="My custom message"
                        />
                    </Validator>
                </TextBox>
            );
        }

    ---

- Hide the message:

    ---
    ##### jQuery

        <!-- tab: index.js -->
        $("#textBox").dxTextBox({
            // ...
        }).dxValidator({
            type: "${{ruleType}}",
            message: ""
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-text-box>
            <dx-validator>
                <dxi-validator-validation-rule
                    type="${{ruleType}}"
                    message="">
                </dxi-validator-validation-rule>
            </dx-validator>
        </dx-text-box>

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxTextBox>
                <DxValidator>
                    <Dx${{ruleTypeUpperCase}}Rule
                        message=""
                    />
                </DxValidator>
            </DxTextBox>
        </template>

    ##### React

        <!-- tab: App.tsx -->
        import { TextBox } from 'devextreme-react/text-box';
        import { Validator, ${{ruleTypeUpperCase}}Rule } from 'devextreme-react/validator';

        function App() {
            return (
                <TextBox>
                    <Validator>
                        <${{ruleTypeUpperCase}}Rule
                            message=""
                        />
                    </Validator>
                </TextBox>
            );
        }

    ---

- Display the editor's name in the default message (for instance, *"${{errorMessage}}"*):

    ---
    ##### jQuery

        <!-- tab: index.js -->
        $("#textBox").dxTextBox({
            // ...
        }).dxValidator({
            name: "${{editorName}}",
            validationRules: [{
                type: "${{ruleType}}",
            }],
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-text-box>
            <dx-validator name="${{editorName}}">
                <dxi-validator-validation-rule
                    type="${{ruleType}}"
                ></dxi-validator-validation-rule>
            </dx-validator>
        </dx-text-box>

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxTextBox>
                <DxValidator name="${{editorName}}">
                    <Dx${{ruleTypeUpperCase}}Rule />
                </DxValidator>
            </DxTextBox>
        </template>

    ##### React

        <!-- tab: App.tsx -->
        import { TextBox } from 'devextreme-react/text-box';
        import { Validator, ${{ruleTypeUpperCase}}Rule } from 'devextreme-react/validator';

        function App() {
            return (
                <TextBox>
                    <Validator name="${{editorName}}">
                        <${{ruleTypeUpperCase}}Rule />
                    </Validator>
                </TextBox>
            );
        }

    ---
