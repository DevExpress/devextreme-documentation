You can use the DevExtreme validation engine to validate a custom value, for example, a non-DevExtreme editor value or a concatenation of several editor values, by configuring the Validator's [adapter](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/adapter 'Documentation/ApiReference/UI_Components/dxValidator/Configuration/#adapter') property. The following example creates two text boxes and a button. A button click checks that at least one of these text boxes is filled. Their values are provided by the **getValue** function.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var callbacks = [];
        var revalidate = function() {
            callbacks.forEach(func => {
                func();
            });
        }
        var phone = $("#phone").dxTextBox({
            placeholder: "Phone",
            onValueChanged: revalidate
        }).dxTextBox("instance");
        var email = $("#email").dxTextBox({
            type: "email",
            placeholder: "Email",
            onValueChanged: revalidate
        }).dxTextBox("instance");
        $("#validator").dxValidator({
            validationRules: [{
                type: "required",
                message: "Specify your phone or email."
            }],
            adapter: {
                getValue: function() {
                    return phone.option("value") || email.option("value");
                },
                applyValidationResults: function(e) {
                    $("#contacts").css({ "border": e.isValid ? "none" : "1px solid red" });
                },
                validationRequestsCallbacks: callbacks
            }
        });
        $("#button").dxButton({
            text: "Contact me",
            onClick: function(e) {
                var result = e.validationGroup.validate();
                if (result.isValid) {
                    // Submit values to the server
                }
            }
        });
        $("#summary").dxValidationSummary({ });
    });

    <!--HTML-->
    <div id="contacts">
        <div id="phone"></div>
        <div id="email"></div>
    </div>
    <div id="validator"></div>
    <div id="summary"></div>
    <div id="button"></div>

##### Angular

    <!-- tab: app.component.html -->
    <div id="contacts" [style.border]="borderStyle">
        <dx-text-box
            [(value)]="phone"
            placeholder="Phone"
            (onValueChanged)="revalidate()">
        </dx-text-box>
        <dx-text-box
            [(value)]="email"
            type="email"
            placeholder="Email"
            (onValueChanged)="revalidate()">
        </dx-text-box>
    </div>
    <dx-validator
        [adapter]="adapterConfig">
        <dxi-validation-rule
            type="required"
            message="Specify your phone or email.">
        </dxi-validation-rule>
    </dx-validator>
    <dx-validation-summary></dx-validation-summary>
    <dx-button
        text="Contact me"
        (onClick)="submit($event)">
    </dx-button>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        callbacks = [];
        phone: string;
        email: string;
        borderStyle: string = "none";
        adapterConfig = {
            getValue: () => {
                return this.phone || this.email;
            },
            applyValidationResults: (e) => {
                this.borderStyle = e.isValid ? "none" : "1px solid red";
            },
            validationRequestsCallbacks: this.callbacks
        };
        revalidate() {
            this.callbacks.forEach(func => {
                func();
            });
        };
        submit(e) {
            const result = e.validationGroup.validate();
            if (result.isValid) {
                // Submit values to the server
            }
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import {
        DxTextBoxModule,
        DxValidatorModule,
        DxValidationSummaryModule,
        DxButtonModule
    } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTextBoxModule,
            DxValidatorModule,
            DxValidationSummaryModule,
            DxButtonModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <div id="contacts" :style="{ border: borderStyle }">
                <DxTextBox
                    v-model:value="phone"
                    placeholder="Phone"
                    @value-changed="revalidate"
                />
                <DxTextBox
                    v-model:value="email"
                    placeholder="Email"
                    @value-changed="revalidate"
                    type="email"
                />
            </div>
            <DxValidator :adapter="adapterConfig">
                <DxRequiredRule message="Specify your phone or email." />
            </DxValidator>
            <DxValidationSummary />
            <DxButton text="Contact me" @click="submit" />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTextBox from "devextreme-vue/text-box";
    import DxValidator, { DxRequiredRule } from "devextreme-vue/validator";
    import DxButton from "devextreme-vue/button";
    import DxValidationSummary from "devextreme-vue/validation-summary";

    export default {
        components: {
            DxTextBox,
            DxValidator,
            DxRequiredRule,
            DxButton,
            DxValidationSummary,
        },
        data() {
            const callbacks = [];
            const adapterConfig = {
                getValue: () => {
                    return this.phone || this.email;
                },
                applyValidationResults: (e) => {
                    this.borderStyle = e.isValid ? "none" : "1px solid red";
                },
                validationRequestsCallbacks: callbacks,
            };
            const revalidate = () => {
                callbacks.forEach((func) => {
                    func();
                });
            };
            return {
                phone: undefined,
                email: undefined,
                borderStyle: "none",
                adapterConfig,
                revalidate
            };
        },
        methods: {
            submit (e) {
                const result = e.validationGroup.validate();
                if (result.isValid) {
                    // Submit values to the server
                }
            }
        },
    };
    </script>

##### React

    <!-- tab: App.js -->
    import { useState } from 'react';

    import 'devextreme/dist/css/dx.light.css';
    import { TextBox } from 'devextreme-react/text-box';
    import { Button } from 'devextreme-react/button';
    import { Validator, RequiredRule } from 'devextreme-react/validator';
    import { ValidationSummary } from 'devextreme-react/validation-summary';

    export default function App() {
        const [phone, setPhone] = useState();
        const [email, setEmail] = useState();
        const [borderStyle, setBorderStyle] = useState("none");
        const callbacks = [];
        const adapterConfig = {
            getValue: () => {
                return phone || email;
            },
            applyValidationResults: (e) => {
                setBorderStyle(e.isValid ? "none" : "1px solid red");
            },
            validationRequestsCallbacks: callbacks,
        };
        const revalidate = () => {
            callbacks.forEach((func) => {
                func();
            });
        };
        const handlePhoneChange = (e) => {
            setPhone(e.value);
            revalidate();
        };
        const handleEmailChange = (e) => {
            setEmail(e.value);
            revalidate();
        };
        const submit = (e) => {
            const result = e.validationGroup.validate();
            if (result.isValid) {
                // Submit values to the server
            }
        }

        return (
            <div>
                <div id="contacts" style={{ border: borderStyle }}>
                    <TextBox
                        value={phone}
                        placeholder="Phone"
                        onValueChanged={handlePhoneChange}
                    />
                    <TextBox
                        value={email}
                        placeholder="Email"
                        onValueChanged={handleEmailChange}
                        type="email"
                    />
                </div>
                <Validator adapter={adapterConfig}>
                    <RequiredRule message="Specify your phone or email." />
                </Validator>
                <ValidationSummary />
                <Button text="Contact me" onClick={submit} />
            </div>
        );
    }

---
