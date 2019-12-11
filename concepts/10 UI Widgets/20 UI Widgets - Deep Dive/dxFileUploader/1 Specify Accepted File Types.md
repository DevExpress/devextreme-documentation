The widget also enables you to prevent an end user from uploading undesirable file types. Use the [accept](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/accept.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#accept') option to specify the file types accepted by the file selection dialog.

    <!--JavaScript-->
    var fileUploaderOptions = {
        accept: "image/*"
    }

The value of this option is passed to the **accept** attribute of the underlying **input** element. Thus, the option supports the same values as the attribute. Refer to **input** element documentation for information on available values.