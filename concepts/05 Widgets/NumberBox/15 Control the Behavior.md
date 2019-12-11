If you need to add spin buttons to the **NumberBox**, set the [showSpinButtons](/api-reference/10%20UI%20Widgets/dxNumberBox/1%20Configuration/showSpinButtons.md '/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#showSpinButtons') to **true**.

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            value: 20,
            showSpinButtons: true
        });
    });

To specify the step by which the value is changed, use the [step](/api-reference/10%20UI%20Widgets/dxNumberBox/1%20Configuration/step.md '/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#step') option.

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            value: 20,
            showSpinButtons: true,
            step: 10
        });
    });

#####See Also#####
#include common-link-handleevents
- [NumberBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-number_box-overview)
- [NumberBox API Reference](/api-reference/10%20UI%20Widgets/dxNumberBox '/Documentation/ApiReference/UI_Widgets/dxNumberBox/')

[tags]number box, numberBox, editor, spin buttons, showSpinButtons, step