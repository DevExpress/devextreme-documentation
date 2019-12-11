---
default: null
type: function()
---
---
##### shortDescription
Specifies the function returning the screen factor depending on the screen width.

---
The function passed to this option should take on the screen width as a parameter and return a string containing the appropriate screen factor.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            screenByWidth: function(width) {
                if (width < 768) return 'xs';
                if (width < 992) return 'sm';
                if (width < 1200) return 'md';
                return 'lg';
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-form ...
        [screenByWidth]="getSizeQualifier">
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
        getSizeQualifier (width) {
            if (width < 768)  return "xs";
            if (width < 992)  return "sm";
            if (width < 1200) return "md";
            return "lg";
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/ColumnsAdaptability/jQuery/Light/"
}