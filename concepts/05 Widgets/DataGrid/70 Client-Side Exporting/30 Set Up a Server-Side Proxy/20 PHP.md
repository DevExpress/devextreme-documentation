    <?php
        if(!empty($_POST["data"]) && !empty($_POST["contentType"]) && !empty($_POST["fileName"])) {
        header("Access-Control-Allow-Origin: *");
        header("Content-type: {$_POST['contentType']};\n");
        header("Content-Transfer-Encoding: binary");
        header("Content-length: ".strlen($_POST['data']).";\n");
        header("Content-disposition: attachment; filename=\"{$_POST['fileName']}\"");
        die(base64_decode($_POST["data"]));
        } 
    ?>