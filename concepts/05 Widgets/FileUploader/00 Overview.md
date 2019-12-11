The **FileUploader** widget enables an end user to upload files to the server. An end user can select files in the file explorer or drag and drop files on the page's **FileUploader** area.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-file_uploader-file_selection"
}
<a href="http://www.youtube.com/watch?v=h8jGcKE33ME&index=51&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

The following code adds the **FileUploader** to your page. Use the [accept](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/accept.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#accept') option to restrict the file types that can be uploaded to the server. This option is like the underlying `<input>` element's *"accept"* attribute and accepts the same values described [here](https://www.w3schools.com/TAGs/att_input_accept.asp).

---
#####jQuery

    <!--HTML--><div id="fileUploaderContainer"></div>

    <!--JavaScript-->$(function() {
        $("#fileUploaderContainer").dxFileUploader({
            // ...
            accept: "image/*"
        });
    });

#####Angular

    <!--HTML-->
    <dx-file-uploader ...
        accept="image/*">
    </dx-file-uploader>

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

---

A user is allowed to upload only one file at a time by default. Set the [multiple](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/multiple.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#multiple') option to **true** to allow uploading several files at once.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#fileUploaderContainer").dxFileUploader({
            multiple: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-file-uploader ...
        [multiple]="true">
    </dx-file-uploader>

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

---

If you need to access the selected files at runtime, get the value of the [value](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#value') option using the following command. It returns an array, whose members are each an instance implementing the [File interface](https://developer.mozilla.org/en-US/docs/Web/API/File).

    <!--JavaScript-->var files = $("#fileUploaderContainer").dxFileUploader("option", "value");

With Angular, AngularJS, or Knockout, use a different technique. Bind the **value** property of the **FileUploader** widget to a component property (in Angular), a scope property (in AngularJS), or an observable variable (in Knockout). After that, you can access the file array within any method. 

---

#####Angular

    <!--TypeScript-->
    import { DxFileUploaderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        value: any[] = [];
        getSelectedFiles () {
            return this.value;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFileUploaderModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-file-uploader ...
        [(value)]="value">
    </dx-file-uploader>

#####AngularJS

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.value = [];
            $scope.getSelectedFiles = function () {
                return $scope.value;
            }
        });

    <!--HTML-->
    <div dx-file-uploader="{ 
        ...
        bindingOptions: {
            value: 'value'
        }
    }"></div>

#####Knockout

    <!--JavaScript-->
    var viewModel = {
        value: ko.observableArray(),
        getSelectedFiles: function () {
            return viewModel.value();
        }
    };

    ko.applyBindings(viewModel);

    <!--HTML-->
    <div data-bind="dxFileUploader: { 
        ...
        value: value
    }"></div>

---

The **FileUploader** can operate in two different modes, each demanding a different client- and server-side configuration. See the [Client-Side Settings](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/05%20Client-Side%20Settings '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Client-Side_Settings/') article for more details.

#####See Also#####
- **Widget Basics**: [jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/') | [Angular](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/') | [AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/') | [Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- **Upload Files - Server Side**: [ASP.NET](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/10%20Server-Side%20Implementation%20in%20ASP.NET '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_ASP.NET/') | [PHP](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/20%20Server-Side%20Implementation%20in%20PHP '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_PHP/')
- [File Validation](/concepts/05%20Widgets/FileUploader/40%20File%20Validation.md '/Documentation/Guide/Widgets/FileUploader/File_Validation/')
- [FileUploader API Reference](/api-reference/10%20UI%20Widgets/dxFileUploader '/Documentation/ApiReference/UI_Widgets/dxFileUploader/')

[tags]file uploader, fileUploader, overview, accepted file types, multiple files, access files in code
