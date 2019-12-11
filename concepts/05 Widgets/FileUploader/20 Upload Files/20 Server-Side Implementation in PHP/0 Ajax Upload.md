    <?php
        // Checks whether the array of uploaded files exists
        if(!isset($_FILES['file'])) {
            http_response_code(400);
            exit;
        }

        // Specifies the maximum size allowed for the uploaded files (700 kb)
        $max_file_size = 700*1024;

        // Checks that the file was successfully uploaded to the temporary directory
        if(!is_uploaded_file($_FILES['file']['tmp_name'])) {
            http_response_code(400);
            exit;
        }

        // Checks that the file size does not exceed the allowed size
        if($_FILES['file']['size'] > $max_file_size) {
            http_response_code(400);
            exit;
        }

        // Checks that the file is an image
        if(strpos($_FILES['file']['type'], "image") === false) {
            http_response_code(400);
            exit;
        }

        // Specifies the path to the file
        $path_to_file = "images/".$_FILES['file']['name'];

        // Here, make sure that the file will be saved to the required directory.
        // Also, ensure that the client has not uploaded files with malicious content.
        // If all checks are passed, save the file.
            move_uploaded_file($_FILES['file']['tmp_name'], $path_to_file);
    ?>

[note]The PHP function [http\_response\_code](https://php.net/manual/en/function.https-response-code.php) can be used in PHP 5 since version 5.4.0. In earlier versions, use the [header](https://php.net/manual/en/function.header.php) function instead.