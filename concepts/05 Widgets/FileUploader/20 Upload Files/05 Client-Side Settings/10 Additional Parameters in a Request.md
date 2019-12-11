If the [uploadMode](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode') is *"instantly"* or *"useButtons"*, you can add parameters to the URL by modifying the [uploadUrl](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadUrl.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadUrl') option. For example, the following code adds an employee ID and an office number:

---
#####jQuery

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

#####Angular

    <!--HTML-->
    <dx-file-uploader
        name="file"
        (onValueChanged)="addIdParameter($event)"
        [uploadUrl]="uploadUrl"
        uploadMode="instantly">    <!-- or "useButtons" -->
    </dx-file-uploader>
    <dx-number-box
        [(value)]="employee.office"
        (onValueChanged)="addOfficeParameter($event)">
    </dx-number-box>

    <!--TypeScript-->
    import { DxFileUploaderModule, DxNumberBoxModule } from "devextreme-angular";
    // ...
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
    @NgModule({
        imports: [
            // ...
            DxFileUploaderModule,
            DxNumberBoxModule
        ],
        // ...
    })

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @model DevExtremeMvcApp.Models.Employee
 
    @(Html.DevExtreme().FileUploader()
        .ID("fileUploader")
        .Name("file")
        .UploadMode(FileUploadMode.Instantly) // or FileUploadMode.UseButtons
        .UploadUrl(Url.Action("UploadFile", "FileUploader", new { id = @Model.EmployeeID }))
    )

    @(Html.DevExtreme().NumberBox()
        .Value(@Model.Office)
        .OnValueChanged("numberBox_valueChanged")
    )

    <script type="text/javascript">
        function numberBox_valueChanged(e) {
            if (e.value !== e.previousValue) {
                var fileUploader = $("#fileUploader").dxFileUploader("instance");
                var url = fileUploader.option("uploadUrl");
                url = updateQueryStringParameter(url, "office", e.value);
                fileUploader.option("uploadUrl", url);
            }
        }
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
    </script>

---

When the **uploadMode** is *"useForm"*, define the parameters within hidden inputs. They are sent to the server in an HTML form along with the files. Some DevExtreme widgets have underlying hidden inputs too. Use the widget's **name** option to specify the input's `name` attribute. 

---
#####jQuery

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

#####Angular

    <!--HTML-->
    <form action="https://mydomain.com/MyUploadService" method="post" enctype="multipart/form-data">
        <input type="hidden" name="id" [value]="employeeId">
        <dx-file-uploader
            name="file"
            uploadMode="useForm"
            (onValueChanged)="addParameters()">
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

    <!--TypeScript-->
    import { DxFileUploaderModule, DxButtonModule, DxNumberBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = { id: 1, name: "John Heart", position: "CEO", office: 614 };
        employeeId: any;
        employeeOffice = this.employee.office;
        addParameters () {
            this.employeeId = this.employee.id;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFileUploaderModule,
            DxButtonModule,
            DxNumberBoxModule
        ],
        // ...
    })

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @model DevExtremeMvcApp.Models.Employee
    
    @using (Html.BeginForm("UploadFile", "FileUploader", FormMethod.Post, new { enctype = "multipart/form-data" }))
    {
        @(Html.DevExtreme().FileUploader()
            .Name("file") 
            .UploadMode(FileUploadMode.UseForm)
        )

        @Html.HiddenFor(model => Model.EmployeeID);

        @(Html.DevExtreme().NumberBox()
            .Name("office")
            .Value(model => Model.Office)
        )
        
        @(Html.DevExtreme().Button()
            .Text("Update Profile")
            .UseSubmitBehavior(true)
        )
    }

---

