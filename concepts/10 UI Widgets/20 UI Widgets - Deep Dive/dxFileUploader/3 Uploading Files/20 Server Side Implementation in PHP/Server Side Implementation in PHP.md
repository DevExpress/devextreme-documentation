To access information about uploaded files, use the [$_FILES](https://php.net/manual/en/reserved.variables.files.php) associative array. It contains the following items.

- $_FILES['myFile']['name']  
The original name of the file on the client machine.

- $_FILES['myFile']['type']  
The MIME type of the file. For example: "image/gif".

- $_FILES['myFile']['size']  
The size (in bytes) of the uploaded file.

- $_FILES['myFile']['error']  
The [error code](https://php.net/manual/en/features.file-upload.errors.php) associated with the file upload.

Here "*myFile*" is the value assigned to the [name](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/name.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#name') option of the **FileUploader** widget.

Both synchronous and asynchronous modes include several common steps. First, check if the [$_FILES](https://php.net/manual/en/reserved.variables.files.php) array exists. For this purpose, use the [isset](https://php.net/manual/en/function.isset.php) function.

    <?php
        if(!isset($_FILES['myFile'])) {
            exit;
        }
    ?>

By default, an uploaded file is stored in a server's temporary directory under a temporary filename until the script finishes its work. Check if the file was successfully uploaded to the server.

    <?php
        if (is_uploaded_file($_FILES['myFile']['tmp_name'])) {
            ...
        } else {
            // Handle error
        }
    ?>

For server security, check the type of the uploaded files. For this purpose, you can use the **$_FILES['myFile']['type']**. The following example demonstrates how to upload only images.

    <?php
        if(strpos($_FILES['myFile']['type'], "image") !== false ) {
            ...
        } else {
            // Handle error
        }
    ?>

[note]Use additional checks to ensure that the client is not allowed to upload files with malicious content such as server scripts. Also, check if the file is being saved to the required directory. This is necessary, because the path can be modified using special characters in the file name; for example, two consecutive dots or the tilde.

In addition, you can limit the file size by checking **$_FILES['myFile']['size']** data. 

    <?php
        $max_image_size = 700*1024;
        if ($_FILES['myFile']['size'] < $max_image_size ) {
            ...
        } else {
            // Handle error
        }
     ?>
