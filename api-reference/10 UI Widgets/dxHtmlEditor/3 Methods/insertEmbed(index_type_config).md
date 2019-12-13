---
id: dxHtmlEditor.insertEmbed(index, type, config)
---
---
##### shortDescription
Inserts an embedded content at the specified position.

##### param(index): Number
A zero-based index at which to insert an embedded content.

##### param(type): String
An embedded format's [name](/concepts/05%20Widgets/HtmlEditor/10%20Formats '/Documentation/Guide/Widgets/HtmlEditor/Formats/').

##### param(config): any
An embedded format's [value](/concepts/05%20Widgets/HtmlEditor/10%20Formats '/Documentation/Guide/Widgets/HtmlEditor/Formats/').

---
---
#####jQuery

    <!--JavaScript-->
    // Adds an image at the beginning of the content
    $("#htmlEditorContainer").dxHtmlEditor("instance").insertEmbed(0, "extendedImage", {
        src: "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png",
        alt: "Photo",
        width: "100px"
    });

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxHtmlEditorModule, DxHtmlEditorComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxHtmlEditorComponent, { static: false }) htmlEditor: DxHtmlEditorComponent;
        // Prior to Angular 8
        // @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;
        insertImageAtTheBeginning() {
            this.htmlEditor.instance.insertEmbed(0, "extendedImage", {
                src: "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png",
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