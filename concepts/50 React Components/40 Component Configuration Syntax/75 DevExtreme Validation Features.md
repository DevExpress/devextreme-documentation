In the following example, two textboxes are placed in a [validation group](/api-reference/10%20UI%20Components/dxValidationGroup '/Documentation/ApiReference/UI_Components/dxValidationGroup/') that is validated on a button click. Each textbox has a set of [validation rules](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/'). The validation result is displayed under the textboxes in a [validation summary](/api-reference/10%20UI%20Components/dxValidationSummary '/Documentation/ApiReference/UI_Components/dxValidationSummary/').

    <!-- tab: Function component -->
    import React, { useState, useCallback } from 'react';
    import TextBox from 'devextreme-react/text-box';
    import Validator, { RequiredRule, EmailRule } from 'devextreme-react/validator';
    import ValidationGroup from 'devextreme-react/validation-group';
    import Button from 'devextreme-react/button';

    export default function App() {
        const [email, setEmail] = useState(null);
        const [password, setPassword] = useState(null);
        const validate = useCallback((params) => {
            const result = params.validationGroup.validate();
            if (result.isValid) {
                // The values are valid
                // Submit them...
                // ...
                // ... and then reset
                // params.validationGroup.reset();
            }
        }, []);
        const handleEmailChange = useCallback((e) => {
            setEmail(e.value);
        }, []);
        const handlePasswordChange = useCallback((e) => {
            setPassword(e.value);
        }, []);

        return (
            <ValidationGroup>
                <TextBox value={email} onValueChanged={handleEmailChange}>
                    <Validator>
                        <RequiredRule message="Email is required" />
                        <EmailRule message="Email is invalid" />
                    </Validator>
                </TextBox>

                <TextBox value={password} mode="password" onValueChanged={handlePasswordChange}>
                    <Validator>
                        <RequiredRule message="Password is required" />
                    </Validator>
                </TextBox>
                <Button onClick={validate} text="Submit" />
            </ValidationGroup>
        ); 
    }
    
    <!-- tab: Class component -->
    import TextBox from 'devextreme-react/text-box';
    import Validator, { RequiredRule, EmailRule } from 'devextreme-react/validator';
    import ValidationGroup from 'devextreme-react/validation-group';
    import Button from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                email: null,
                password: null
            };
            this.handleEmailChange = (e) => {
                this.setState({
                    email: e.value
                });
            };
            this.handlePasswordChange = (e) => {
                this.setState({
                    password: e.value
                });
            };
            this.validate = this.validate.bind(this);
        }

        render() {
            return (
                <ValidationGroup>
                    <TextBox value={this.state.email} onValueChanged={this.handleEmailChange}>
                        <Validator>
                            <RequiredRule message="Email is required" />
                            <EmailRule message="Email is invalid" />
                        </Validator>
                    </TextBox>

                    <TextBox value={this.state.password} mode="password" onValueChanged={this.handlePasswordChange}>
                        <Validator>
                            <RequiredRule message="Password is required" />
                        </Validator>
                    </TextBox>
                    <Button onClick={this.validate} text="Submit" />
                </ValidationGroup>
            );
        }

        validate(params) {
            const result = params.validationGroup.validate();
            if (result.isValid) {
                // The values are valid
                // Submit them...
                // ...
                // ... and then reset
                // params.validationGroup.reset();
            }
        }
    }

Refer to the [Data Validation](/concepts/05%20UI%20Components/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation '/Documentation/Guide/UI_Components/Common/UI_Widgets/Data_Validation/') article for more information.
