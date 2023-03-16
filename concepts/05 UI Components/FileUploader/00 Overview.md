The FileUploader UI component enables an end user to upload files to the server. An end user can select files in the file explorer or drag and drop files on the page's FileUploader area.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/FileSelection/"
}

The following code adds the FileUploader to your page. Use the [accept](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/accept.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#accept') property to restrict the file types that can be uploaded to the server. This property is like the underlying `<input>` element's *"accept"* attribute and accepts the same values described <a href="http://www.w3schools.com/TAGs/att_input_accept.asp" target="_blank">here</a>.

---
##### jQuery

    <!-- tab: index.html -->
    <div id="fileUploaderContainer"></div>

    <!-- tab: index.js -->
    $(function() {
        $("#fileUploaderContainer").dxFileUploader({
            // ...
            accept: "image/*"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader ...
        accept="image/*">
    </dx-file-uploader>

    <!-- tab: app.component.ts -->
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader
            accept="image/*" >   
        </DxFileUploader>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';    
        
        import {
            DxFileUploader
        } from 'devextreme-vue/file-uploader';

        export default {
            components: {
                DxFileUploader
            },
            data() {
                return {
                    // ...
                };
            }            
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    
    import 'devextreme/dist/css/dx.light.css';

    import FileUploader from 'devextreme-react/file-uploader';
    
    function App() {
        return (
            <FileUploader accept="image/*" >
            </FileUploader>
        );
    }
    export default App;

---

A user can upload only one file at a time. Set the [multiple](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/multiple.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#multiple') property to **true** to allow uploading several files at once.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileUploaderContainer").dxFileUploader({
            multiple: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader ...
        [multiple]="true">
    </dx-file-uploader>

    <!-- tab: app.component.ts -->
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader
            :multiple="true" >   
        </DxFileUploader>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';    
        
        import {
            DxFileUploader
        } from 'devextreme-vue/file-uploader';

        export default {
            components: {
                DxFileUploader
            },
            data() {
                return {
                    // ...
                };
            }            
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    
    import 'devextreme/dist/css/dx.light.css';

    import FileUploader from 'devextreme-react/file-uploader';
    
    function App() {
        return (
            <FileUploader multiple={true} >
            </FileUploader>
        );
    }
    export default App;

---

---
##### jQuery

If you need to access the selected files at runtime, get the value of the [value](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#value') property. The following command returns an array, whose members are each an instance implementing the <a href="https://developer.mozilla.org/en-US/docs/Web/API/File" target="_blank">File interface</a>.

    <!-- tab: index.js -->
    const files = $("#fileUploaderContainer").dxFileUploader("option", "value");

##### Angular

Bind the [value](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#value') property of the FileUploader UI component to a component property. After that, you can access the file array within any method.

    <!-- tab: app.component.ts -->
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

    <!-- tab: app.component.html -->
    <dx-file-uploader ...
        [(value)]="value">
    </dx-file-uploader>

##### Vue

Bind the [value](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#value') property of the FileUploader UI component to a component property. After that, you can access the file array within any method.

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader ...
            @value-changed="e => value = e.value"
        />
        </div>
    </template>

    <script>
    import { DxFileUploader } from 'devextreme-vue/file-uploader';

    export default {
    components: {
        DxFileUploader,
    },
    data() {
        return {
            value: []
        };
    },
    methods: {
        getSelectedFiles () {
            return this.value;
        }
    },
    };
    </script>

##### React

Bind the [value](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#value') property of the FileUploader UI component to a component property. After that, you can access the file array within any method.

    <!-- tab: App.js -->
    import React, {useState} from 'react';
    import FileUploader from 'devextreme-react/file-uploader';

    function App() {
        const [value, setValue] = useState([]);
        const changeValue = (e) => {
            setValue(e.value);
        }
        const getSelectedFiles = () => {
            return value;
        }
        return (
            <FileUploader ...
                value={value}
                onValueChanged={changeValue}
            />
        );
    }

    export default App;

---

The FileUploader can operate in two different modes, each demanding a different client- and server-side configuration. See the [Client-Side Settings](/concepts/05%20UI%20Components/FileUploader/20%20Upload%20Files/05%20Client-Side%20Settings '/Documentation/Guide/UI_Components/FileUploader/Upload_Files/Client-Side_Settings/') article for more details.

#####See Also#####
#include common-link-configurewidget
- **Upload Files - Server Side**: [ASP.NET](/concepts/05%20UI%20Components/FileUploader/20%20Upload%20Files/10%20Server-Side%20Implementation%20in%20ASP.NET '/Documentation/Guide/UI_Components/FileUploader/Upload_Files/Server-Side_Implementation_in_ASP.NET/') | [PHP](/concepts/05%20UI%20Components/FileUploader/20%20Upload%20Files/20%20Server-Side%20Implementation%20in%20PHP '/Documentation/Guide/UI_Components/FileUploader/Upload_Files/Server-Side_Implementation_in_PHP/')
- [File Validation](/concepts/05%20UI%20Components/FileUploader/40%20File%20Validation.md '/Documentation/Guide/UI_Components/FileUploader/File_Validation/')
- [FileUploader API Reference](/api-reference/10%20UI%20Components/dxFileUploader '/Documentation/ApiReference/UI_Components/dxFileUploader/')

[tags]dxfileuploader, file uploader, fileUploader, overview, accepted file types, multiple files, access files in code
