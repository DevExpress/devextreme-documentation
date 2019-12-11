All group validation errors can be displayed in the [ValidationSummary](/api-reference/10%20UI%20Widgets/dxValidationSummary '/Documentation/ApiReference/UI_Widgets/dxValidationSummary/') widget. The following code shows how to add this widget to a page. The commented-out codelines associate the **Validation Summary** with a named **Validation Group**.

---

##### jQuery

    <!--JavaScript-->$(function () {
        // var loginGroup = "loginGroup";
        $("#summary").dxValidationSummary({
            // validationGroup: loginGroup
        });
    });

    <!--HTML-->
    ...
    <div id="summary"></div>

##### Angular

    <!--HTML-->
    <!-- dx-validation-group id="loginGroup" -->
        ...
        <dx-validation-summary></dx-validation-summary>
    <!-- /dx-validation-group -->

        <!--TypeScript-->
    import { ..., DxValidationGroupModule, DxValidationSummaryModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxValidationGroupModule,
            DxValidationSummaryModule
        ],
        // ...
    })

##### AngularJS

    <!--HTML-->
    <!-- div id="loginGroup" dx-validation-group="{ }" -->
        ...
        <div dx-validation-summary="{ }"></div>
    <!-- /div -->

##### Knockout

    <!--HTML-->
    <!-- div id="loginGroup" data-bind="dxValidationGroup: { }" -->
        <div data-bind="dxValidationSummary: { }"></div>
    <!-- /div -->

---
