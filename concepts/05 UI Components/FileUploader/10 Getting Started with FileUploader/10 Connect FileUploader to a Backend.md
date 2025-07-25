To connect FileUploader to a backend when **uploadMode** is *"instantly"* or *"useButtons"*, specify one of the following properties:

- [uploadUrl](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadUrl.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadUrl')    
Specifies a target URL for HTTP requests. The [uploadMethod](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadMethod.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMethod') property allows you to choose between POST (default) and PUT requests.
- [uploadFile](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadFile.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadFile')    
Defines a custom uploading function. You can implement **uploadFile** if you want to process files on the client before uploading.

You must configure your server to accept uploaded files. Refer to the following topics for server-side implementation examples:

- [Server-Side Implementation in ASP.NET](/concepts/05%20UI%20Components/FileUploader/20%20Upload%20Files/10%20Server-Side%20Implementation%20in%20ASP.NET '/Documentation/Guide/UI_Components/FileUploader/Upload_Files/Server-Side_Implementation_in_ASP.NET/')
- [Server-Side Implementation in PHP](/concepts/05%20UI%20Components/FileUploader/20%20Upload%20Files/20%20Server-Side%20Implementation%20in%20PHP '/Documentation/Guide/UI_Components/FileUploader/Upload_Files/Server-Side_Implementation_in_PHP/')

To connect FileUploader to a backend when **uploadMode** is *"useForm"*, configure HTML form submission functionality. For more information about how to submit HTML form data, refer to the following article on MDN: [Sending form data](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

[note] This tutorial demonstrates only client-side code. To run this example, implement server-side processing and update the client-side code.