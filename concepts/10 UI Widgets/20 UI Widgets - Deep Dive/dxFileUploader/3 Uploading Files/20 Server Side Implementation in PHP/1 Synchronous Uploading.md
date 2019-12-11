In synchronous mode, several files may be passed in a single request. That is why we use [$_FILES](https://php.net/manual/en/reserved.variables.files.php) as an array of associative arrays. 

The following example demonstrates the processing of uploaded files in synchronous mode.

    <?php
        //Check if the array of uploaded files exists.
        if(!isset($_FILES['myFile'])) {
            exit;
        }

        //Specify the maximum allowed size for uploaded files (700kb).
        $max_image_size = 700*1024;

        foreach($_FILES['myFile']['name'] as $k=>$f) {
            //Check if the file was successfully uploaded to a server's temporary directory.
            if(!is_uploaded_file($_FILES['myFile']['tmp_name'][$k])) {
                continue;
            }

            //Check if the file size matches the allowed size.
            if($_FILES['myFile']['size'][$k] > $max_image_size ) {
                continue;
            }

            //Check to see if the file is an image.
            if(strpos($_FILES['myFile']['type'][$k], "image") === false) {
                continue;
            }

            //Specify the path to the file.
            $path_to_file = "images/".$_FILES['myFile']['name'][$k];

            // Make sure that the file will be saved to the required directory.
            // Also ensure that the client can't upload files with malicious content.
            // If checks are passed, move the file.
                move_uploaded_file($_FILES['myFile']['tmp_name'][$k], $path_to_file);
        }
        //Redirect to another page.
        header("Location: /index.php");
    ?>
