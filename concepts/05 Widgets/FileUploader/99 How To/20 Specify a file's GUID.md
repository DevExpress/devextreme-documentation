Use the [valueChanged](/api-reference/10%20UI%20Widgets/dxFileUploader/4%20Events/valueChanged.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Events/#valueChanged') event to generate a unique identifier (GUID) for a file before it is uploaded and pass it as a parameter to the upload URL. 

**See Also:** [DataGrid - How to use FileUploader as a cell editor](https://github.com/DevExpress-Examples/DataGrid-How-to-use-FileUploader-as-a-cell-editor).

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#{file-uploader}Container").dxFileUploader({
            multiple: false,
            accept: "*",
            value: [],
            uploadMode: "instantly",
            uploadUrl: "https://js.devexpress.com/Content/Services/upload.aspx",
            onValueChanged: function (e) {
                var url = e.component.option("uploadUrl");
                url = updateQueryStringParameter(url, "fileGuid", uuidv4());
                e.component.option("uploadUrl", url);
            }
        })
        .dxFileUploader("instance");
    });
    function updateQueryStringParameter(uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf("?") !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, "$1" + key + "=" + value + "$2");
        } else {
            return uri + separator + key + "=" + value;
        }
    }
    function uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }


##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader
        [(uploadUrl)]="uploadUrl"
        [multiple]="false"
        uploadMode="instantly"
        (onValueChanged)="onValueChanged($event)">
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
        value: any[] = [];
        uploadUrl: string = "https://js.devexpress.com/Content/Services/upload.aspx";
        onValueChanged(e) {
            this.uploadUrl = this.updateQueryStringParameter("fileGuid", this.uuidv4());
        }
        updateQueryStringParameter(key, value) {
            var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
            var separator = this.uploadUrl.indexOf("?") !== -1 ? "&" : "?";
            if (this.uploadUrl.match(re)) {
                return this.uploadUrl.replace(re, "$1" + key + "=" + value + "$2");
            } else {
                return this.uploadUrl + separator + key + "=" + value;
            }
        }
        //https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
        uuidv4() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = (Math.random() * 16) | 0,
                v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
            });
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
        :accept="accept"
        :multiple="multiple"
        :upload-mode="uploadMode"
        upload-url="https://js.devexpress.com/Content/Services/upload.aspx"
        @value-changed="onValueChanged($event)"
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
        data() {            
            return {
                multiple: false,
                accept: "*",
                uploadMode: "instantly"
            };
        },
        methods: {
            onValueChanged(e) {
                var url = e.component.option("uploadUrl");
                url = this.updateQueryStringParameter(url, "fileGuid", this.uuidv4());
                e.component.option("uploadUrl", url);
            },
            updateQueryStringParameter(uri, key, value) {
                var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
                var separator = uri.indexOf("?") !== -1 ? "&" : "?";
                if (uri.match(re)) {
                    return uri.replace(re, "$1" + key + "=" + value + "$2");
                } else {
                    return uri + separator + key + "=" + value;
                }
            },
            uuidv4() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
                    c
                ) {
                    var r = (Math.random() * 16) | 0,
                    v = c === "x" ? r : (r & 0x3) | 0x8;
                    return v.toString(16);
                });
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
            this.state = {
                multiple: false,
                uploadMode: "instantly",
                accept: "*",
                uploadUrl: "https://js.devexpress.com/Content/Services/upload.aspx"
            };

            this.onSelectedFilesChanged = this.onSelectedFilesChanged.bind(this);            
        }

    render() {
        return (
            <div>
                <div className="widget-container">
                <FileUploader
                    multiple={this.state.multiple}
                    accept={this.state.accept}
                    uploadMode={this.state.uploadMode}
                    uploadUrl={this.state.uploadUrl}
                    onValueChanged={this.onSelectedFilesChanged}
                />
                </div>
            </div>
        );
    }
    onSelectedFilesChanged(e) {
        this.setState({
            uploadUrl: this.updateQueryStringParameter("fileGuid", this.uuidv4())
        });
    }
    updateQueryStringParameter(key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = this.state.uploadUrl.indexOf("?") !== -1 ? "&" : "?";
        if (this.state.uploadUrl.match(re)) {
            return this.state.uploadUrl.replace(re, "$1" + key + "=" + value + "$2");
        } else {
            return this.state.uploadUrl + separator + key + "=" + value;
        }
    }    
    uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
        });
    }

    export default App;

##### ASP.NET MVC/Core Controls

    @(Html.DevExtreme().FileUploader()
        .ID("file-uploader")
        .Name("myFile")
        .Multiple(false)
        .Accept("*")
        .UploadMode(FileUploadMode.Instantly)
        .UploadUrl(Url.Action("Upload", "FileUploader"))
        .OnValueChanged("fileUploader_valueChanged")
    )
    <script>
    function fileUploader_valueChanged(e) {
        var url = e.component.option("uploadUrl");
        url = updateQueryStringParameter(url, "fileGuid", uuidv4());
        e.component.option("uploadUrl", url);
    }
    function updateQueryStringParameter(uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf("?") !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, "$1" + key + "=" + value + "$2");
        } else {
            return uri + separator + key + "=" + value;
        }
    }
    function uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    </script>

---
