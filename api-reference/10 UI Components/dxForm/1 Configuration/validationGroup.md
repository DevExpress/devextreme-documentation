---
id: dxForm.Options.validationGroup
type: String
default: undefined
---
---
##### shortDescription
Gives a name to the internal validation group.

---
In some cases, the **Form** editors should be validated by the [Button](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/') UI component. By default, these editors are collected in an unnamed validation group, what makes it impossible for the **Button** to validate them. In this case, give this validation group a name using the **validationGroup** property of the **Form** UI component. Also, pass the same name to the [validationGroup](/api-reference/10%20UI%20Components/dxButton/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#validationGroup') property of the **Button** UI component.

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