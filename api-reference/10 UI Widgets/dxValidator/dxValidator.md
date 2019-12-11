---
module: ui/validator
export: default
inherits: ..\DOMComponent\DOMComponent.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
A widget that is used to validate the associated DevExtreme editors against the defined validation rules.

---
You can create the **Validator** widget using one of the following approaches.

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function() {
        $("#textBox1").dxTextBox({ })
            .dxValidator({
                validationRules: [
                    // ...
                ]
            });
    });

    <!--HTML--><div id="textBox1"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-text-box>
        <dx-validator>
            <dxi-validation-rule type="required" message="Value is required"></dxi-validation-rule>
        </dx-validator>
    </dx-text-box>

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-text-box="{ }"
            dx-validator="{
                validationRules: [
                // ...
            ]
        }">
    </div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxTextBox: { },
        dxValidator: {
            validationRules: [
                // ...
            ]
        }">  
    </div>

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

#####See Also#####
- [Validate an Editor Value](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation/10%20Validate%20an%20Editor%20Value.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/#Validate_an_Editor_Value')
- [ASP.NET MVC Controls - Client-Side Data Validation](/concepts/35%20ASP.NET%20MVC%20Controls/35%20Client-Side%20Data%20Validation/01%20Overview.md '/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Overview/')

The learn the validation rules that can be defined using the **Validator** widget for an editor, refer to the [Validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') section.

The editors that are associated with the **Validator** widgets are automatically validated against the specified rules each time the event assigned to the editor's **valueChangeEvent** option occurs. In addition, several editors can be validated at once. To learn how to do this, refer to the [Validate Several Editor Values](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation/20%20Validate%20Several%20Editor%20Values '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/#Validate_Several_Editor_Values') topic.

#####See Also#####
- [Validate Several Editor Values](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation/20%20Validate%20Several%20Editor%20Values '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/#Validate_Several_Editor_Values')

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsvalidationvalidationvalidation/"
}
<a href="https://www.youtube.com/watch?v=xbn_NbeB5es&index=34&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>