Follow the steps below to get a file's GUID in 'chunk' [upload mode](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode'):

1. Get the FileGuid value from the chunkMetadata parameter on the server.
2. Pass it to the response header.
3. Get the response header in the [uploaded](/api-reference/10%20UI%20Widgets/dxFileUploader/4%20Events/uploaded.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Events/#uploaded') or [progress](/api-reference/10%20UI%20Widgets/dxFileUploader/4%20Events/progress.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Events/#progress') event handlers. 

---

##### ASP.NET Core Backend

    <!-- CS -->
    [HttpPost]
    public ActionResult UploadChunk(IFormFile file, string chunkMetadata) {
        try {
            if(!string.IsNullOrEmpty(chunkMetadata)) {
                var metaDataObject = JsonConvert.DeserializeObject<ChunkMetadata>(chunkMetadata);
                Response.Headers.Add("File-Guid", metaDataObject.FileGuid);
            }
        } catch {
            return BadRequest();
        }
        return Ok();
    }

##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#file-uploader").dxFileUploader({
            name: "file",
            accept: "image/*",
            uploadUrl: "https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/ChunkUpload",
            chunkSize: 200000,
            onUploaded:onUploaded
        });
    });
    function onUploaded(e) {
        console.log(e.request.getResponseHeader('File-Guid'));
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader
        name="file"
        accept="image/*"
        uploadUrl="https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/ChunkUpload"
        [chunkSize]="200000"
        (onUploaded)="onUploaded($event)">
    </dx-file-uploader>    
    
    <!-- tab: app.component.ts -->
    import { Component, NgModule } from '@angular/core';
    import { BrowserModule } from "@angular/platform-browser";
    import { DxFileUploaderModule } from "devextreme-angular";
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        onUploaded(e){
            console.log(e.request.getResponseHeader("File-Guid"));
        }
    }

    @NgModule({
        imports: [BrowserModule, DxFileUploaderModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule {}

##### Vue

    <!-- tab: App.vue -->
    <template>
      <DxFileUploader
        :chunk-size="200000"
        name="file"
        accept="image/*"
        upload-url="https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/ChunkUpload"
        @uploaded="onUploaded($event)"
      />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxFileUploader } from "devextreme-vue/file-uploader";

    export default {
        components: {
            DxFileUploader
        },
        data() { ... },
        methods: {
            onUploaded(e) {
                console.log(e.request.getResponseHeader("File-Guid"));
            }            
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import FileUploader from "devextreme-react/file-uploader";

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.onUploaded = this.onUploaded.bind(this);
        }

    render() {
        return (
            <FileUploader 
                name="file" 
                accept="image/*" 
                uploadUrl="https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/ChunkUpload"
                chunkSize={200000} 
                onUploaded={this.onUploaded} 
            />
        );
    }
    onUploaded(e) {
    console.log(e.request.getResponseHeader("File-Guid"));
    }

    export default App;

##### ASP.NET MVC/CORE Controls

    @(Html.DevExtreme().FileUploader()
        .ID("file-uploader")
        .Name("file")
        .Accept("image/*")
        .Multiple(false)
        .ChunkSize(200000)
        .AllowedFileExtensions(new[] { ".jpg", ".jpeg", ".gif", ".png" })
        .MaxFileSize(4000000)
        .OnUploaded("onUploaded")
        .UploadUrl(Url.Action("UploadChunk", "FileUploader"))
    )
    <script>
    function onUploaded(e) {
            console.log(e.request.getResponseHeader('File-Guid'));
        }
    </script>

---
