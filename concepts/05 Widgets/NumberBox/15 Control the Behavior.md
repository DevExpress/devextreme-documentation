If you need to add spin buttons to the **NumberBox**, set the [showSpinButtons](/api-reference/10%20UI%20Widgets/dxNumberBox/1%20Configuration/showSpinButtons.md '/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#showSpinButtons') to **true**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            value: 20,
            showSpinButtons: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-number-box
        [value]="20"
        [showSpinButtons]="true">
    </dx-number-box>

    <!--TypeScript-->
    import { DxNumberBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxNumberBoxModule
        ],
        // ...
    })

---

To specify the step by which the value is changed, use the [step](/api-reference/10%20UI%20Widgets/dxNumberBox/1%20Configuration/step.md '/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#step') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            value: 20,
            showSpinButtons: true,
            step: 10
        });
    });

##### Angular

    <!--HTML-->
    <dx-number-box
        [value]="20"
        [showSpinButtons]="true"
        [step]="10">
    </dx-number-box>

    <!--TypeScript-->
    import { DxNumberBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxNumberBoxModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-handleevents
- [NumberBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/NumberBox/Overview)
- [NumberBox API Reference](/api-reference/10%20UI%20Widgets/dxNumberBox '/Documentation/ApiReference/UI_Widgets/dxNumberBox/')

[tags]number box, numberBox, editor, spin buttons, showSpinButtons, step