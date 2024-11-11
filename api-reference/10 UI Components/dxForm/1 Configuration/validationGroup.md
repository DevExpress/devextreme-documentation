---
id: dxForm.Options.validationGroup
type: String | undefined
default: undefined
---
---
##### shortDescription
Gives a name to the internal validation group.

---
In some cases, the Form editors should be validated by the [Button](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/') UI component. Editors are collected in an unnamed validation group that makes it impossible for the Button to validate them. In this case, use the **validationGroup** property of the Form UI component to give this validation group a name. Also, pass the same name to the [validationGroup](/api-reference/10%20UI%20Components/dxButton/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#validationGroup') property of the Button UI component.

---
##### jQuery

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

---

[note] Form is not designed to work with **validationGroup** shared with other components. When a Form is disposed of, it disposes of the associated **validationGroup** object and other components fail with an error.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Validation/"
}

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-form-declare-dropdownbox-in-form-item"
}
