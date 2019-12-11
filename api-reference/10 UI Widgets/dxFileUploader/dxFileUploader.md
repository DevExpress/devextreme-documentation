---
module: ui/file_uploader
export: default
inherits: ..\Editor\Editor.md
---
---
##### widgettree

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **FileUploader** widget enables an end user to upload files to the server. An end user can select files in the file explorer or drag and drop files to the **FileUploader** area on the page.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#fileUploader").dxFileUploader({
            accept:"image/*"
        });
    });

    <!--HTML-->
    <div id="fileUploader"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-file-uploader accept="image/*"></dx-file-uploader>

    <!--TypeScript-->
    import { DxFileUploaderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFileUploaderModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div dx-file-uploader="{
        accept: 'image/*'
    }"></div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML--><div data-bind="dxFileUploader: {
        accept: 'image/*'
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().FileUploader()
        .ID("fileUploader")
        .Accept("image/*")
    )

    <!--Razor VB-->@(Html.DevExtreme().FileUploader() _
        .ID("fileUploader") _
        .Accept("image/*")
    )

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistsfileuploaderfileuploaderfileuploader"
}
<a href="http://www.youtube.com/watch?v=h8jGcKE33ME&index=51&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [FileUploader - Overview](/concepts/05%20Widgets/FileUploader/00%20Overview.md '/Documentation/Guide/Widgets/FileUploader/Overview/')