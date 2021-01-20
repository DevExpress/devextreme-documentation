    <?php
        $temp_files_location = "images/temp";
        $target_location = "images/";
        
        try {
            // Checks whether the array of uploaded files exists
            // Here, "file" is a string specified in the FileUploader's "name" option
            if(!isset($_FILES['file'])) {
                throw new Exception('File is not specified');
            }
            
            if(!is_null($_POST['chunkMetadata'])) {
                // Gets chunk details
                $metaDataObject = json_decode($_POST['chunkMetadata']);

                // ...
                // Perform security checks here
                // ...

                // Creates a directory for temporary files if it does not exist
                if (!file_exists($temp_files_location)) {
                    mkdir($temp_files_location);
                }

                $temp_file_path = $temp_files_location . "/" .  $metaDataObject->FileGuid . ".temp";

                // Appends the chunk to the file
                $content = file_get_contents($_FILES['file']['tmp_name']);
                file_put_contents($temp_file_path, $content, FILE_APPEND);
                
                // Checks that the file size does not exceed the allowed size
                if(filesize($temp_file_path) > 1024*400000) {
                    throw new Exception('File is too large');
                }
                
                // Saves the file if all chunks are received
                if($metaDataObject->Index == ($metaDataObject->TotalCount - 1)) {
                    $target_file_path = $target_location . "/" .  $metaDataObject->FileName;
                    copy($temp_file_path, $target_file_path);
                }
            }
        } catch(Exception $e) {
            http_response_code(500);
            // Sends the error message to the client in JSON format
            echo json_encode($e->getMessage());
            exit;
        }
    ?>

#####See Also#####
- <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data#Common_security_concerns" target="_blank">Common Security Concerns</a>
