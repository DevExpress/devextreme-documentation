---
##### shortDescription
Registers formats and modules.

##### param(modules): Object
Formats and modules to be registered.        
This object should have the following structure:            
`{ "path1": "object1", ... }`           
where `path1` is *formats/[formatName]* for formats or *modules/[moduleName]* for modules.

---
---
#####jQuery

    <!--JavaScript-->
    $(function() {
        // ...
        var htmlEditor = $("#htmlEditor").dxHtmlEditor("instance");
        htmlEditor.registerModules({ "modules/myModule": moduleObject });
    });

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxHtmlEditorModule, DxHtmlEditorComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;
        ngAfterViewInit () {
            this.htmlEditor.instance.registerModules({ "modules/myModule": moduleObject });
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

#####See Also#####
- [getModule(modulePath)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/getModule(modulePath).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#getModulemodulePath')