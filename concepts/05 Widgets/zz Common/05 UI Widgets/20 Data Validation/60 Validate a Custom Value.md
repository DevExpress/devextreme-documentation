You can use the DevExtreme validation engine to validate a custom value, for example, a non-DevExtreme editor value or a concatenation of several editor values, by configuring the **Validator**'s [adapter](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/adapter 'Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#adapter') option. The following example creates two text boxes and a button. A button click checks that at least one of these text boxes is filled. Their values are provided by the **getValue** function.

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
            let result = e.validationGroup.validate();
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

##### AngularJS

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('demoController', function ($scope) {
            $scope.callbacks = [];
            $scope.phone = "";
            $scope.email = "";
            $scope.borderStyle = "none";
            $scope.rules = [{
                type: "required",
                message: "Specify your phone or email"
            }];
            $scope.adapterConfig = {
                getValue: function () {
                    return $scope.phone + $scope.email;
                },
                applyValidationResults: function (e) {
                    $scope.borderStyle = e.isValid ? "none" : "1px solid red";
                },
                validationRequestsCallbacks: $scope.callbacks
            };
            $scope.revalidate = function () {
                $scope.callbacks.forEach(func => {
                    func();
                })
            };
            $scope.submit = function (e) {
                e.validationGroup.validate();
            }
        });

    <!--HTML-->
    <div ng-controller="demoController">
        <div id="contacts" ngStyle="borderStyle">
            <div dx-text-box="{
                placeholder: 'Phone',
                onValueChanged: revalidate,
                bindingOptions: {
                    value: 'phone'
                }
            }"></div>
            <div dx-text-box="{
                placeholder: 'Email',
                onValueChanged: revalidate,
                bindingOptions: {
                    value: 'email'
                }
            }"></div>
            <div dx-validator="{
                validationRules: rules,
                adapter: adapterConfig
            }"></div>
            <div dx-validation-summary="{ }"></div>
            <div dx-button= "{
                text: 'Contact me',
                onClick: submit
            }"></div>
        </div>
    </div>

##### Knockout#####

    <!--JavaScript-->
    callbacks = [];
    var viewModel = {
        phone: ko.observable(""),
        email: ko.observable(""),
        borderStyle: ko.observable("none"),
        rules: [{
            type: "required",
            message: "Specify your phone or email"
        }],
        adapterConfig: {
            getValue: function () {
                return viewModel.phone() + viewModel.email();
            },
            applyValidationResults: function (e) {
                viewModel.borderStyle(e.isValid ? "none" : "1px solid red");
            },
            validationRequestsCallbacks: callbacks
        },
        revalidate: function () {
            callbacks.forEach(func => {
                func();
            })
        },
        submit: function (e) {
            e.validationGroup.validate();
        }
    }
    ko.applyBindings(viewModel);

    <!--HTML--><div id="contacts" data-bind="style: { border: borderStyle }">
        <div data-bind="dxTextBox: {
            placeholder: 'Phone',
            onValueChanged: revalidate,
            value: phone
        }"></div>
        <div data-bind="dxTextBox: {
            placeholder: 'Email',
            onValueChanged: revalidate,
            value: email
        }"></div>
        <div data-bind="dxValidator: {
            validationRules: rules,
            adapter: adapterConfig
        }"></div>
        <div data-bind="dxValidationSummary: { }"></div>
        <div data-bind="dxButton:{
            text: 'Contact me',
            onClick: submit
        }"></div>
    </div>

---
