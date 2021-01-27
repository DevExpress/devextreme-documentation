    <?php
        // Checks whether the array of uploaded files exists
        // Here, "file" is a string specified in the FileUploader's name option
        if(!isset($_FILES['file'])) {
            exit;
        }

        // Specifies the maximum size allowed for the uploaded files (700 kb)
        $max_file_size = 700*1024;

        foreach($_FILES['file']['name'] as $k=>$f) {
            // Checks that the file was successfully uploaded to the temporary directory
            if(!is_uploaded_file($_FILES['file']['tmp_name'][$k])) {
                continue;
            }

            // Checks that the file size does not exceed the allowed size
            if($_FILES['file']['size'][$k] > $max_file_size ) {
                continue;
            }

            // Checks that the file is an image
            if(strpos($_FILES['file']['type'][$k], "image") === false) {
                continue;
            }

            // Specifies the path to the file
            $path_to_file = "images/".$_FILES['file']['name'][$k];

            // Here, make sure that the file will be saved to the required directory.
            // Also, ensure that the client has not uploaded files with malicious content.
            // If all checks are passed, save the file.
                move_uploaded_file($_FILES['file']['tmp_name'][$k], $path_to_file);
        }

        // Redirects to another page
        header("Location: /index.php");
    ?>

#####See Also#####
- <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data#Common_security_concerns" target="_blank">Common Security Concerns</a>
