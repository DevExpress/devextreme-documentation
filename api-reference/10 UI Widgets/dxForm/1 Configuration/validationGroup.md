---
id: dxForm.Options.validationGroup
type: String
default: undefined
---
---
##### shortDescription
Gives a name to the internal validation group.

---
In some cases, the **Form** editors should be validated by the [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/') widget. By default, these editors are collected in an unnamed validation group, what makes it impossible for the **Button** to validate them. In this case, give this validation group a name using the **validationGroup** option of the **Form** widget. Also, pass the same name to the [validationGroup](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#validationGroup') option of the **Button** widget.

    $(function () {
        $("#formContainer").dxForm({
            // ...
            validationGroup: "groupName"
        });

        $("#buttonContainer").dxButton({
            // ...
            validationGroup: "groupName",
            onClick: function (e) {
                e.validationGroup.validate();
            }
        });
    })

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Validation/"
}