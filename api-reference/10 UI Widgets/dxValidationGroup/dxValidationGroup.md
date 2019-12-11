---
id: dxValidationGroup
module: ui/validation_group
export: default
inherits: DOMComponent
---
---
##### shortDescription
The **ValidationGroup** is a widget that allows you to validate several editors simultaneously.

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/"
}

You can use the [DevExpress.validationEngine.validateGroup(group)](/api-reference/50%20Common/utils/validationEngine/validateGroup(group).md '/Documentation/ApiReference/Common/Utils/validationEngine/#validateGroupgroup') method to validate a particular validation group by passing its instance as a parameter.

    <!--JavaScript-->DevExpress.validationEngine.validateGroup($("#sampleGroup").dxValidationGroup("instance"));

In addition, you can access a validation group's configuration using the [DevExpress.validationEngine.getGroupConfig(group)](/api-reference/50%20Common/utils/validationEngine/getGroupConfig(group).md '/Documentation/ApiReference/Common/Utils/validationEngine/#getGroupConfiggroup') method. The returned configuration exposes the **validators** included to the group, the **validate()** method to validate the editors that are associated with the validators and the **validated** event that occurs after the group is validated.

[note]Nested validation groups are not supported.

#####See Also#####
- <a href="https://docs.devexpress.com/AspNetCore/400576/devextreme-based-controls/concepts/data-validation" target="_blank">ASP.NET MVC Controls - Data Validation</a>
#include common-link-setupdevextreme
#include common-link-configurewidget