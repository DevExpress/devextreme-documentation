The DevExtreme Validation comes with an integrated UI part. First, each editor is highlighted to indicate that it has an invalid value when a validation rule is not satisfied during validation.

![Validated Editors](/images/Common/ValidatedEditors.png)

Second, a summary on all the validation rules that are not satisfied in a validation group is displayed by the [ValidationSummary](/api-reference/10%20UI%20Widgets/dxValidationSummary '/Documentation/ApiReference/UI_Widgets/dxValidationSummary/') widget. This widget has an item collection that is populated each time a validation error occurs in the validation group with which the widget is associated. The summary items are displayed using the default item template that is based on the messages specified for the failed validation rules. You can use a [custom item template](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance'), as in any collection widget in DevExtreme.

![Validation Summary](/images/Common/ValidationSummary.png)

<article data-show="Content/Applications/16_1/UIWidgets/Validation/DisplayValidationErrors/markup.html,
        Content/Applications/16_1/UIWidgets/Validation/DisplayValidationErrors/script.js">

To associate the **ValidationSummary** widget with a validation group, use the widget's [validationGroup](/api-reference/10%20UI%20Widgets/dxValidationSummary/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Widgets/dxValidationSummary/Configuration/#validationGroup') configuration option.

    <!--HTML--><div>Login:</div>
    <div id="login"></div>
    <div>Password:</div>
    <div id="password"></div>
    <div id="summary"></div>
    <div id="loginButton"></div>

    <!--JavaScript-->var validationGroup = "sampleGroup";
    //...
    $("#summary").dxValidationSummary({
        validationGroup: validationGroup
    });
    
[note]You do not have to associate the **ValidationSummary** widget with a validation group if you are going to use this widget to display errors occurring in the **default validation group**.

</article>