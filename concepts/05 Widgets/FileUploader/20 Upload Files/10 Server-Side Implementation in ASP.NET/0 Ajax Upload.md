**C#**

    public ActionResult AsyncUpload()
    {
        HttpPostedFileBase file = Request.Files["file"];

        // Specifies the target location for the uploaded files
        string targetLocation = Server.MapPath("~/Files/");

        // Specifies the maximum size allowed for the uploaded files (700 kb)
        int maxFileSize = 1024 * 700;

        // Checks whether or not the request contains a file and if this file is empty or not
        if (file == null || file.ContentLength <= 0) {
            Response.StatusCode = 400;
            Response.StatusDescription = "File is not specified";
            return new EmptyResult();
        }

        // Checks that the file size does not exceed the allowed size
        if (file.ContentLength > maxFileSize) {
            Response.StatusCode = 400;
            Response.StatusDescription = "File is too big";
            return new EmptyResult();
        }

        // Checks that the file is an image
        if (!file.ContentType.Contains("image")) {
            Response.StatusCode = 400;
            Response.StatusDescription = "Invalid file type";
            return new EmptyResult();
        }

        try {
            string path = System.IO.Path.Combine(targetLocation, file.FileName);
            // Here, make sure that the file will be saved to the required directory.
            // Also, ensure that the client has not uploaded files with malicious content.
            // If all checks are passed, save the file.
                file.SaveAs(path);
        }
        catch (Exception e) {
            Response.StatusCode = 400;
            Response.StatusDescription = "Invalid file name";
            return new EmptyResult();
        }
        return new EmptyResult();
    }

**VB**

    Function AsyncUpload() As ActionResult
        Dim file As HttpPostedFileBase = Request.Files("file")
        ' Specifies the target location for the uploaded files'
        Dim targetLocation As String = Server.MapPath("~/Files/")

        ' Specifies the maximum size allowed for the uploaded files (700 kb)'
        Dim maxFileSize As Integer = 1024 * 700

        ' Checks whether or not the request contains a file and if this file is empty or not'
        If (IsNothing(file) Or file.ContentLength <= 0) Then
            Response.StatusCode = 400
            Response.StatusDescription = "File is not specified"
            Return New EmptyResult()
        End If

        ' Checks that the file size does not exceed the allowed size'
        If (file.ContentLength > maxFileSize) Then
            Response.StatusCode = 400
            Response.StatusDescription = "File is too big"
            Return New EmptyResult()
        End If

        ' Checks that the file is an image'
        If (Not file.ContentType.Contains("image")) Then
            Response.StatusCode = 400
            Response.StatusDescription = "Invalid file type"
            Return New EmptyResult()
        End If

        Try
            Dim path As String = System.IO.Path.Combine(targetLocation, file.FileName)
            ' Here, make sure that the file will be saved to the required directory.'
            ' Also, ensure that the client has not uploaded files with malicious content.'
            ' If all checks are passed, save the file.'
                file.SaveAs(path)
        Catch ex As Exception
            Response.StatusCode = 400
            Response.StatusDescription = "Invalid file name"
            Return New EmptyResult()
        End Try

        Return New EmptyResult()

    End Function