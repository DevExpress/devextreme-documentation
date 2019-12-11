---
module: ui/validation_group
export: default
inherits: ..\DOMComponent\DOMComponent.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **ValidationGroup** is a widget that allows you to validate several editors simultaneously.

---
[note]Nested validation groups are not supported.

#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function() {
        var validationGroupName = "sampleGroup";
        $("#textBox1").dxTextBox({ name: 'FirstName' })
            .dxValidator({
                validationRules: [
                    // ...
                ],
                validationGroup: validationGroupName
            });
        $("#textBox2").dxTextBox({ name: 'LastName' })
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
            validationGroup: validationGroupName
            //...
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
        <dx-button></dx-button>
    </dx-validation-group>

    <!--TypeScript-->
    import { DxValidationGroupModule, DxTextBoxModule, DxButtonModule, DxValidatorModule } from 'devextreme-angular'
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
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
        <div dx-button="{ }"></div>
    </div>

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
        <div data-bind="dxButton: { }"></div>
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

 

#####See Also#####
- [Data Validation](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/')
- [ASP.NET MVC Controls - Validate a Group of Editors](/concepts/35%20ASP.NET%20MVC%20Controls/35%20Client-Side%20Data%20Validation/05%20Validate%20a%20Group%20of%20Editors.md '/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Validate_a_Group_of_Editors/')

You can use the [DevExpress.validationEngine.validateGroup(group)](/api-reference/50%20Common/utils/validationEngine/3%20Methods/validateGroup(group).md '/Documentation/ApiReference/Common/Utils/validationEngine/Methods/#validateGroupgroup') method to validate a particular validation group by passing its instance as a parameter.

    <!--JavaScript-->DevExpress.validationEngine.validateGroup($("#sampleGroup").dxValidationGroup("instance"));

In addition, you can access a validation group's configuration using the [DevExpress.validationEngine.getGroupConfig(group)](/api-reference/50%20Common/utils/validationEngine/3%20Methods/getGroupConfig(group).md '/Documentation/ApiReference/Common/Utils/validationEngine/Methods/#getGroupConfiggroup') method. The returned configuration exposes the **validators** included to the group, the **validate()** method to validate the editors that are associated with the validators and the **validated** event that occurs after the group is validated.

<a href="https://www.youtube.com/watch?v=xbn_NbeB5es&index=34&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>