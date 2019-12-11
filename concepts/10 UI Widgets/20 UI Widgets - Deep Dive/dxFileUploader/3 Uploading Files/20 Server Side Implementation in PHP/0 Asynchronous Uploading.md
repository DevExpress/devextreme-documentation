In asynchronous mode, each file is uploaded using a separate AJAX request.

The example below demonstrates the processing of the uploaded file in asynchronous mode.

    <?php
        //Check to see if the array of uploaded files exists.
        if(!isset($_FILES['myFile'])) {
            http_response_code(400);
            exit;
        }

        //Specify the maximum allowed size for uploaded files (700kb).
        $max_image_size = 700*1024;

        //Check to see if the file was successfully uploaded to the server's temporary directory.
        if(!is_uploaded_file($_FILES['myFile']['tmp_name'])) {
            http_response_code(400);
            exit;
        }

        //Check to see if the file size matches the allowed size.
        if($_FILES['myFile']['size'] > $max_image_size) {
            http_response_code(400);
            exit;
        }

        //Check to make sure that the file is an image.
        if(strpos($_FILES['myFile']['type'], "image") === false) {
            http_response_code(400);
            exit;
        }

        //Specify the path to the file.
        $path_to_file = "images/".$_FILES['myFile']['name'];

        // Make sure that the file will be saved to the required directory.
        // Also ensure that the client can't upload files with malicious content.
        // If checks are passed, move the file to the directory.
            move_uploaded_file($_FILES['myFile']['tmp_name'], $path_to_file);
    ?>

If the upload has failed, send the response with an error HTTP status code using the PHP function [http_response_code](https://php.net/manual/en/function.https-response-code.php). It can be applied for PHP5 >= 5.4.0. In earlier versions use the [header](https://php.net/manual/en/function.header.php) function.
