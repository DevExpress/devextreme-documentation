The **Button** widget provides five predefined appearances controlled by the [type](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#type') option. The **type** can be *"normal"*, *"default"*, *"back"*, *"danger"* or *"success"*. Choose the proper type depending on the commands that the **Button** performs.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            type: "danger", // or "normal" | "back" | "danger" | "success"
            text: "Delete",
            onClick: function (e) {
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-button
        text="Delete"
        (onClick)="foo($event)"
        type="danger"> <!-- or "normal" | "back" | "danger" | "success" -->
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        foo (e) {
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/jQuery/Light/"
}

Apart from plain text, the **Button** can display an icon. DevExtreme provides [built-in icons](/concepts/60%20Themes/30%20Icon%20Library '/Documentation/Guide/Themes/Icon_Library/') that change their appearance depending on the platform. Certainly, you can [use an external icon library](/concepts/60%20Themes/30%20Icon%20Library/3%20Use%20External%20Icon%20Libraries.md '/Documentation/Guide/Themes/Icon_Library/#Use_External_Icon_Libraries') or even [standalone icons](/concepts/60%20Themes/30%20Icon%20Library/5%20Alternative%20to%20the%20Icon%20Library.md '/Documentation/Guide/Themes/Icon_Library/#Alternative_to_the_Icon_Library'). To specify the icon, set the [icon](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/icon.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#icon') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            type: "danger",
            text: "Delete",
            icon: "remove",
            onClick: function (e) {
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-button
        text="Delete"
        (onClick)="foo($event)"
        type="danger"
        icon="remove">
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        foo (e) {
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/Icons/jQuery/Light/"
}

If you need to define the **Button** content completely, implement a template for it using the [template](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/template.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#template') option as shown in the following example.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            text: "Refresh",
            template: function (e) {
                return $("<i />").text(e.buttonData.text)
                                 .css("color", "green");
            },
            onClick: function (e) {
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-button
        text="Refresh"
        (onClick)="foo($event)"
        [template]="'buttonTemplate'">
        <i *dxTemplate="let buttonData of 'buttonTemplate'" style="color:green">
            {{buttonData.text}}
        </i> 
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        foo (e) {
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })

---
    
#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance)
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')
- [Button API Reference](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/')

[tags]button, appearance, customize, templates, type, icon