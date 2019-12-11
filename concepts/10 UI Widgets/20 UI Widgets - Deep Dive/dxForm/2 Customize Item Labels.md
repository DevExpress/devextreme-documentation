<article>
Each form item consists of an editor and a label. You can specify the label position against the editor. The [labelLocation](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/labelLocation.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#labelLocation') option specifies whether the label is displayed to the **left**, **right** or **top** of the editor.

    <!--JavaScript-->
    var formOptions = {
        formData: employeeData,
        labelLocation: "top"
    }

By default, the widget adds a colon after each label. To disable this functionality, assign *false* to the [showColonAfterLabel](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/showColonAfterLabel.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#showColonAfterLabel') option.

    <!--JavaScript-->
    var formOptions = {
        formData: employeeData,
        labelLocation: "top",
        showColonAfterLabel: false
    }

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxForm/CustomizeLabel/markup.html, Content/Applications/16_1/UIWidgets/dxForm/CustomizeLabel/script.js, Content/Applications/16_1/UIWidgets/dxForm/common-styles.css"></div>
</article>