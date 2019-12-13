To change the size of the **Toast**, specify the [height](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#height') and [width](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/width.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#width') options.

---
#####jQuery

    <!--HTML--><div id="toastContainer"></div>
    <div id="buttonContainer"></div>

    <!--JavaScript-->$(function() {
        $("#toastContainer").dxToast({
            message: "Connection problem",
            type: "error",
            height: 55,
            width: 300
        });

        $("#buttonContainer").dxButton({
            text: "Show the Toast", 
            onClick: function () {
                $("#toastContainer").dxToast("show");
            } 
        });
    });

#####Angular

    <!--HTML-->
    <dx-toast
        [(visible)]="isVisible"
        type="error"
        message="Connection problem"
        [height]="55"
        [width]="300">
    </dx-toast>
    <dx-button
        text="Show the Toast"
        (onClick)="isVisible = true">
    </dx-button>

    <!--TypeScript-->
    import { DxToastModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isVisible: boolean = false;
    }
    @NgModule({
         imports: [
             DxButtonModule,
             DxToastModule,
             // ...
         ],
         // ...
     })

---

If you need to position the **Toast** against a specific element on your page, set the [position](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/position.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#position') option.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#toastContainer").dxToast({
            message: "Connection problem",
            type: "error",
            position: {
                my: "left",
                at: "left",
                of: "#targetElement"
            }
        });

        $("#buttonContainer").dxButton({
            text: "Show the Toast", 
            onClick: function () {
                $("#toastContainer").dxToast("show");
            } 
        });
    });


#####Angular

    <!--HTML-->
    <dx-toast
        [(visible)]="isVisible"
        type="error"
        message="Connection problem">
        <dxo-position
            my="left"
            at="left"
            of="#targetElement">
        </dxo-position>
    </dx-toast>
    <dx-button
        text="Show the Toast"
        (onClick)="isVisible = true">
    </dx-button>

    <!--TypeScript-->
    import { DxToastModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isVisible: boolean = false;
    }
    @NgModule({
         imports: [
             DxButtonModule,
             DxToastModule,
             // ...
         ],
         // ...
     })

---

This configuration of the **position** option reads as follows: "place **my** _left_ side **at** the _left_ side **of** the *"#targetElement"*.

#####See Also#####
- [Toast - Customize the Content](/concepts/05%20Widgets/Toast/10%20Customize%20the%20Content.md '/Documentation/Guide/Widgets/Toast/Customize_the_Content/')
- [Toast Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toast/Overview)
- [Toast API Reference](/api-reference/10%20UI%20Widgets/dxToast '/Documentation/ApiReference/UI_Widgets/dxToast/')

[tags]toast, overlay, template, size, height, width, position