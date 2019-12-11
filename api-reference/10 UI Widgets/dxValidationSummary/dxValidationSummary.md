---
module: ui/validation_summary
export: default
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
A widget for displaying the result of checking [validation rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') for editors.

---
This widget has a collection of items that present the validation errors that currently exist in a validation group or the ViewModel to which the widget is related.

![dxValidationSummary Widget](/images/Common/dxValidationSummary.png)

#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function() {
        var validationGroupName = "sampleGroup";
        $("#textBox1").dxTextBox({ name: "FirstName" })
            .dxValidator({
                validationRules: [
                    // ...
                ],
                validationGroup: validationGroupName
            });
        $("#textBox2").dxTextBox({ name: "LastName" })
            .dxValidator({
                validationRules: [
                    // ...
                ],
                validationGroup: validationGroupName
            });
        $("#summary").dxValidationSummary({
            validationGroup: validationGroupName
        });
        $("#button").dxButton({
            validationGroup: validationGroupName,
            text: "Validate",
            onClick: function validate (params) {
                params.validationGroup.validate();
            }
        });
    });

    <!--HTML--><div id="textBox1"></div>
    <div id="textBox2"></div>
    <div id="summary"></div>
    <div id="button"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-validation-group>
        <dx-text-box name="FirstName">
            <dx-validator>
                <dxi-validation-rule type="required" message="First name is required"></dxi-validation-rule>
                ...
            </dx-validator>
        </dx-text-box>
        <dx-text-box name="LastName">
            <dx-validator>
                <dxi-validation-rule type="required" message="Last name is required"></dxi-validation-rule>
                ...
            </dx-validator>
        </dx-text-box>
        <dx-validation-summary></dx-validation-summary>
        <dx-button
            text="Validate"
            (onClick)="validate()">
        </dx-button>
    </dx-validation-group>

    <!--TypeScript-->
    import { DxValidationSummaryModule, DxValidationGroupModule, DxTextBoxModule, DxButtonModule, DxValidatorModule } from "devextreme-angular"
    // ...
    export class AppComponent {
        validate(params) {
            params.validationGroup.validate();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxValidationSummaryModule,
            DxValidationGroupModule,
            DxTextBoxModule, 
            DxButtonModule, 
            DxValidatorModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div dx-validation-group="{ }" ng-controller="DemoController">
        <div dx-text-box="{ name: 'FirstName' }"
            dx-validator="{
                validationRules: [
                    // ...
                ]
            }">  
        </div>
        <div dx-text-box="{ name: 'LastName' }"
            dx-validator="{
                validationRules: [
                    // ...
                ]
            }">
        </div>
        <div dx-validation-summary="{  }"></div>
        <div dx-button="{
            text: 'Validate',
            onClick: validate
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.validate = function validate (params) {
                params.validationGroup.validate();
            };
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML--><div data-bind="dxValidationGroup: { }" >
        <div data-bind="dxTextBox: { name: 'FirstName' },
            dxValidator: {
                validationRules: [
                    // ...
                ]
            }">  
        </div>
        <div data-bind="dxTextBox: { name: 'LastName' },
            dxValidator: {
                validationRules: [
                    // ...
                ]
            }">
        </div>  
        <div data-bind="dxValidationSummary: { }"></div>
        <div data-bind="dxButton: {
            text: 'Validate',
            onClick: function validate (params) {
                params.validationGroup.validate();
            }
        }"></div>
    </div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->using (Html.DevExtreme().ValidationGroup()) {
        @(Html.DevExtreme().TextBox()
            .Name("FirstName")
        )
        @(Html.DevExtreme().TextBox()
            .Name("LastName")
        )
        @(Html.DevExtreme().ValidationSummary())
        @(Html.DevExtreme().Button()
            .Text("Validate")
            .OnClick(@<text>
                function validate (params) {
                    params.validationGroup.validate();
                }
            </text>)
        )
    }

    <!--Razor VB-->@Using (Html.DevExtreme().ValidationGroup())
        @(Html.DevExtreme().TextBox() _
            .Name("FirstName")
        )
        @(Html.DevExtreme().TextBox() _
            .Name("LastName")
        )
        @(Html.DevExtreme().ValidationSummary())
        @(Html.DevExtreme().Button() _
            .Text("Validate") _
            .OnClick("validate")
        )
    End Using
    <script>
        function validate(params) {
            params.validationGroup.validate();
        }
    </script>

---

 

The summary items are displayed using the default item template that is based on the **message** field of the broken validation rule. However, you can use a custom item template. 

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')

[note]The currently existing validation errors are not only the errors that are discovered during the current validation, but also the validation errors that are discovered during the earlier validations if the not-valid values are not changed since then.

To learn more on how to create the **ValidationSummary** widget and associate it with the required validation group or ViewModel, refer to the [Display Validation Errors](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation/20%20Validate%20Several%20Editor%20Values/3%20Display%20Validation%20Errors.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/#Validate_Several_Editor_Values/Display_Validation_Errors') and [Knockout Only - Validate a View Model](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation/80%20Knockout%20Only%20-%20Validate%20a%20View%20Model.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/#Knockout_Only_-_Validate_a_View_Model') topics.

<a href="https://www.youtube.com/watch?v=xbn_NbeB5es&index=34&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Display Validation Errors](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation/20%20Validate%20Several%20Editor%20Values/3%20Display%20Validation%20Errors.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/#Validate_Several_Editor_Values/Display_Validation_Errors')
- [Knockout Only - Validate a View Model](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation/80%20Knockout%20Only%20-%20Validate%20a%20View%20Model.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/#Knockout_Only_-_Validate_a_View_Model')
- [ASP.NET MVC Controls - Client-Side Data Validation](/concepts/35%20ASP.NET%20MVC%20Controls/35%20Client-Side%20Data%20Validation/01%20Overview.md '/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Overview/')