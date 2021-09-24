If the [uploadMode](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode') is *"instantly"* or *"useButtons"*, you can add parameters to the URL by modifying the [uploadUrl](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadUrl.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadUrl') property. For example, the following code adds an employee ID and an office number:

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        var employee = { id: 1, name: "John Heart", position: "CEO", office: 614 };
        $("#fileUploaderContainer").dxFileUploader({
            name: "file",
            uploadMode: "instantly", // or "useButtons"
            uploadUrl: "https://mydomain.com/MyUploadService",
            onValueChanged: function (e) {
                var url = e.component.option("uploadUrl");
                url = updateQueryStringParameter(url, "id", employee.id);
                e.component.option("uploadUrl", url);
            }
        });
        $("#numberBoxContainer").dxNumberBox({
            value: employee.office,
            onValueChanged: function (e) {
                if ( e.value !== e.previousValue ) {
                    var fileUploader = $("#fileUploaderContainer").dxFileUploader("instance");
                    var url = fileUploader.option("uploadUrl");
                    url = updateQueryStringParameter(url, "office", e.value);            
                    fileUploader.option("uploadUrl", url);
                }
            }
        });
        function updateQueryStringParameter (uri, key, value) {
            var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
            var separator = uri.indexOf('?') !== -1 ? "&" : "?";
            if (uri.match(re)) {
                return uri.replace(re, '$1' + key + "=" + value + '$2');
            }
            else {
                return uri + separator + key + "=" + value;
            }
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader id="fileUploader"
        name="file"
        (onValueChanged)="addIdParameter($event)"
        [uploadUrl]="uploadUrl"
        uploadMode="instantly">    <!-- or "useButtons" -->
    </dx-file-uploader>
    <dx-number-box
        [(value)]="employee.office"
        (onValueChanged)="addOfficeParameter($event)">
    </dx-number-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';    

    #include angular-component-decorator
    export class AppComponent {
        employee = { id: 1, name: "John Heart", position: "CEO", office: 614 };
        uploadUrl = "https://mydomain.com/MyUploadService";
        addIdParameter (e) {
            this.uploadUrl = this.updateQueryStringParameter(this.uploadUrl, "id", this.employee.id);
            e.component.option("uploadUrl", this.uploadUrl);
        }
        addOfficeParameter (e) {
            if ( e.value !== e.previousValue ) {
                this.uploadUrl = this.updateQueryStringParameter(this.uploadUrl, "office", e.value);          
            }
        }
        updateQueryStringParameter (uri, key, value) {
            var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
            var separator = uri.indexOf('?') !== -1 ? "&" : "?";
            if (uri.match(re)) {
                return uri.replace(re, '$1' + key + "=" + value + '$2');
            }
            else {
                return uri + separator + key + "=" + value;
            }
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxFileUploaderModule, DxNumberBoxModule } from 'devextreme-angular';
    
    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFileUploaderModule,
            DxNumberBoxModule
        ],
        //...
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader
            name="file"
            @value-changed="addIdParameter"
            upload-mode="instantly" <!-- or "useButtons" -->
            upload-url="https://mydomain.com/MyUploadService">
        </DxFileUploader>
        <DxNumberBox
            :value="employee.office"
            @value-changed="addOfficeParameter"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';     

    import { 
        DxFileUploader
    } from 'devextreme-vue/file-uploader';
    import { 
        DxNumberBox
    } from 'devextreme-vue/number-box';

    export default {
        components: {
            DxFileUploader,
            DxNumberBox
        },

        data() {
            return {
                //...
            };
        },

        methods: {
            addIdParameter (e) {
                this.uploadUrl = this.updateQueryStringParameter(this.uploadUrl, "id", this.employee.id);
                e.component.option("uploadUrl", this.uploadUrl);
            }
            addOfficeParameter (e) {
                if ( e.value !== e.previousValue ) {
                    this.uploadUrl = this.updateQueryStringParameter(this.uploadUrl, "office", e.value);          
                }
            }
            updateQueryStringParameter (uri, key, value) {
                var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
                var separator = uri.indexOf('?') !== -1 ? "&" : "?";
                if (uri.match(re)) {
                    return uri.replace(re, '$1' + key + "=" + value + '$2');
                }
                else {
                    return uri + separator + key + "=" + value;
                }
            }
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import FileUploader from 'devextreme-react/file-uploader';
    import NumberBox from 'devextreme-react/number-box';
    
    class App extends React.Component {
        render() {
            return (
                <FileUploader 
                    name="file"
                    onValueChanged={this.addIdParameter}
                    uploadMode="instantly" {/* or "useButtons" */} 
                    uploadUrl="https://mydomain.com/MyUploadService">
                </FileUploader>
                <DxNumberBox
                    value={employee.office}
                    onValueChanged="this.addOfficeParameter">
                </DxNumberBox>
            );
        }

        addIdParameter (e) {
            this.uploadUrl = this.updateQueryStringParameter(this.uploadUrl, "id", this.employee.id);
            e.component.option("uploadUrl", this.uploadUrl);
        }
        addOfficeParameter (e) {
            if ( e.value !== e.previousValue ) {
                this.uploadUrl = this.updateQueryStringParameter(this.uploadUrl, "office", e.value);          
            }
        }
        updateQueryStringParameter (uri, key, value) {
            var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
            var separator = uri.indexOf('?') !== -1 ? "&" : "?";
            if (uri.match(re)) {
                return uri.replace(re, '$1' + key + "=" + value + '$2');
            }
            else {
                return uri + separator + key + "=" + value;
            }
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @model DevExtremeMvcApp.Models.Employee
    
    @(Html.DevExtreme().FileUploader()
        .Name("file")
        .OnValueChanged("addIdParameter")
        .UploadMode(FileUploadMode.UseButtons) // or "instantly" 
        .UploadUrl("https://mydomain.com/MyUploadService")
    )
    @(Html.DevExtreme().NumberBox()
        .Value(employee.office)
        .OnValueChanged("addOfficeParameter")
    )

    <script type="text/javascript">

        addIdParameter (e) {
            this.uploadUrl = this.updateQueryStringParameter(this.uploadUrl, "id", this.employee.id);
            e.component.option("uploadUrl", this.uploadUrl);
        }
        addOfficeParameter (e) {
            if ( e.value !== e.previousValue ) {
                this.uploadUrl = this.updateQueryStringParameter(this.uploadUrl, "office", e.value);          
            }
        }
        updateQueryStringParameter (uri, key, value) {
            var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
            var separator = uri.indexOf('?') !== -1 ? "&" : "?";
            if (uri.match(re)) {
                return uri.replace(re, '$1' + key + "=" + value + '$2');
            }
            else {
                return uri + separator + key + "=" + value;
            }
        }

    </script>

---

When the **uploadMode** is *"useForm"*, define the parameters within hidden inputs. They are sent to the server in an HTML form along with the files. Some DevExtreme UI components have underlying hidden inputs too. Use the UI component's **name** property to specify the input's `name` attribute. 

---

##### jQuery

    <!--HTML-->
    <form id="form" action="https://mydomain.com/MyUploadService" method="post" enctype="multipart/form-data">
        <input type="hidden" id="employeeId" name="id">
        <div id="fileUploaderContainer"></div>
        <div id="numberBoxContainer"></div>
        <div id="button"></div>
    </form>

    <!--JavaScript-->
    $(function () {
        var employee = { id: 1, name: "John Heart", position: "CEO", office: 614 };
        $("#fileUploaderContainer").dxFileUploader({
            name: "file",
            uploadMode: "useForm",
            onValueChanged: function () {
                $("#employeeId").val(employee.id);
            }
        });
        $("#numberBoxContainer").dxNumberBox({
            name: "office",    
            value: employee.office
        });
        $("#button").dxButton({
            text: "Update profile",
            useSubmitBehavior: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <form action="https://mydomain.com/MyUploadService" method="post" enctype="multipart/form-data">
        <input type="hidden" name="id" [value]="employeeId">
        <dx-file-uploader
            name="file"
            uploadMode="useForm"
            (onValueChanged)="addIdParameter()">
        </dx-file-uploader>
        <dx-number-box
            [(value)]="employeeOffice"
            name="office"> 
        </dx-number-box>    
        <dx-button
            text="Update profile"
            [useSubmitBehavior]="true">
        </dx-button>
    </form>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';    

    #include angular-component-decorator
    export class AppComponent {
        employee = { id: 1, name: "John Heart", position: "CEO", office: 614 };
        employeeId: any;
        employeeOffice = this.employee.office;
        addParameters () {
            this.employeeId = this.employee.id;
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxFileUploaderModule, DxButtonModule, DxNumberBoxModule } from 'devextreme-angular';
    
    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFileUploaderModule,
            DxButtonModule,
            DxNumberBoxModule
        ],
        //...
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <form id="form"
            method="post"
            action="https://mydomain.com/MyUploadService"
            enctype="multipart/form-data">
            <input type="hidden" name="id" value="employeeId">
            <DxFileUploader
                name="file"
                @valueChanged="addIdParameter"
                upload-mode="useForm" />
            <DxButton
                text="Update profile"
                :useSubmitBehavior="true" />
        </form>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';     

    import DxFileUploader from 'devextreme-vue/file-uploader';
    import DxNumberBox from 'devextreme-vue/number-box';
    import DxButton from 'devextreme-vue/button';

    const employee = { id: 1, name: "John Heart", position: "CEO", office: 614 };
    const employeeId: any;
    const employeeOffice = this.employee.office;

    export default {
        components: {
            DxFileUploader,
            DxButton,
            DxNumberBox
        },

        data() {
            return {
                employee,
                employeeId,
                employeeOffice
            };
        },

        methods: {
            addParameters (e) {
                this.employeeId = this.employee.id;
            }
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import FileUploader from 'devextreme-react/file-uploader';
    import NumberBox from 'devextreme-react/number-box';
    import Button from 'devextreme-react/button';
    
    const App = () => {
        const addIdParameter = (e) => {
            employeeId = employee.id;
        };

        const employee = { id: 1, name: "John Heart", position: "CEO", office: 614 };
        const employeeId: any;
        const employeeOffice = employee.office;
    
        return (
            <form id="form" 
                method="post" 
                action="https://mydomain.com/MyUploadService"
                enctype="multipart/form-data">
                <FileUploader 
                    name="file"
                    onValueChanged={addIdParameter}
                    uploadMode="useForm">
                </FileUploader>
                <Button
                    text="Update profile"
                    useSubmitBehavior={true}>
                </Button>
                <input type="hidden" name="id" value="employeeId" />
            </form>                
        );
    };
    export default App;


##### ASP.NET MVC Controls

    <!--Razor C#-->
    <form id="form" method="post" enctype="multipart/form-data" action="https://mydomain.com/MyUploadService">
        @(Html.DevExtreme().FileUploader()
            .Name("file")
            .OnValueChanged("addIdParameter")
            .UploadMode(FileUploadMode.UseForm)
        )
        @(Html.DevExtreme().Button()
            .Text("Update profile")
            .UseSubmitBehavior(true)
        )
        <input type="hidden" name="id" value="employeeId">
    </form>

    <script>
        var employee = { id: 1, name: "John Heart", position: "CEO", office: 614 };
        var employeeId: any;
        var employeeOffice = employee.office;
        function addIdParameter(e) {
            employeeId = employee.id;
        }
    </script>

---

