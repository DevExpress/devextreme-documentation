---
##### shortDescription
Inserts an embedded content at the specified position.

##### param(index): Number
A zero-based index at which to insert an embedded content.

##### param(type): String
An embedded format's [name](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName/formats).

##### param(config): any
An embedded format's [value](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName/formats).

---
---
#####jQuery

    <!--JavaScript-->
    // Adds an image at the beginning of the content
    $("#htmlEditorContainer").dxHtmlEditor("instance").insertEmbed(0, "extendedImage", {
        src: "https://js.devexpress.com/Content/images/doc/18_2/PhoneJS/person1.png",
        alt: "Photo",
        width: "100px"
    });

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxHtmlEditorModule, DxHtmlEditorComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;
        insertImageAtTheBeginning() {
            this.htmlEditor.instance.insertEmbed(0, "extendedImage", {
                src: "https://js.devexpress.com/Content/images/doc/18_2/PhoneJS/person1.png",
                alt: "Photo",
                width: "100px"
            });
        }
    }
    @NgModule({
        imports: [
            // ...
           DxHtmlEditorModule
        ],
        // ...
    })

---