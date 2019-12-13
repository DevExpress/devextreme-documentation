To limit the text length, assign an integer number to the **maxLength** option. By default, the text length is unlimited.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            maxLength: 200
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-area
        [maxLength]="200">
    </dx-text-area>

    <!--TypeScript-->
    import { DxTextAreaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
         imports: [
             // ...
             DxTextAreaModule
         ],
         // ...
     })

---

#####See Also#####
- [TextArea Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TextArea/Overview)
- [TextArea API Reference](/api-reference/10%20UI%20Widgets/dxTextArea '/Documentation/ApiReference/UI_Widgets/dxTextArea/')

[tags]textArea, text area, editor, string length, text length, maxLength