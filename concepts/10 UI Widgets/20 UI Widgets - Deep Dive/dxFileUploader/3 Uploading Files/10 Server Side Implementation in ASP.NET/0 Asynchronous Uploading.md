In asynchronous mode, each file is uploaded using a separate AJAX request.

The following example demonstrates the processing of the uploaded file in asynchronous mode.

**C#**

    public ActionResult AsyncUpload()
    {
        HttpPostedFileBase myFile = Request.Files["myFile"];

        //Specify the target location for saving uploaded files.
        string targetLocation = Server.MapPath("~/Files/");

        //Specify the maximum allowed size for uploaded files (700kb).
        int maxFileSize = 1024 * 700;

        //Check to see if the request holds a file and the file is not empty.
        if (myFile == null || myFile.ContentLength <= 0) {
            Response.StatusCode = 400;
            Response.StatusDescription = "File is not specified";
            return new EmptyResult();
        }

        //Check to see if the file size matches the allowed size.
        if (myFile.ContentLength > maxFileSize) {
            Response.StatusCode = 400;
            Response.StatusDescription = "File is too large";
            return new EmptyResult();
        }

        //Check to see if the file is an image.
        if (!myFile.ContentType.Contains("image")) {
            Response.StatusCode = 400;
            Response.StatusDescription = "Invalid type";
            return new EmptyResult();
        }

        try {
            string path = System.IO.Path.Combine(targetLocation, myFile.FileName);
            // Make sure that the file will be saved to the required directory.
            // Also ensure that the client can't upload files with malicious content.
            // If checks are passed, save the file.
                myFile.SaveAs(path);
        }
        catch (Exception e) {
            Response.StatusCode = 400;
            Response.StatusDescription = "Bad file name";
            return new EmptyResult();
        }
        return new EmptyResult();
    }

**VB**

    Function AsyncUpload() As ActionResult
        Dim myFile As HttpPostedFileBase = Request.Files("myFile")
        'Specify the target location for saving uploaded files.'
        Dim targetLocation As String = Server.MapPath("~/Files/")

        'Specify the maximum allowed size for uploaded files (700kb).'
        Dim maxFileSize As Integer = 1024 * 700

        'Check to see if the request holds a file and the file is not empty.'
        If (IsNothing(myFile) Or myFile.ContentLength <= 0) Then
            Response.StatusCode = 400
            Response.StatusDescription = "File is not specified"
            Return New EmptyResult()
        End If

        'Check to see if the file size matches the allowed size.'
        If (myFile.ContentLength > maxFileSize) Then
            Response.StatusCode = 400
            Response.StatusDescription = "File is not specified"
            Return New EmptyResult()
        End If

        'Check to see if the file is an image.'
        If (Not myFile.ContentType.Contains("image")) Then
            Response.StatusCode = 400
            Response.StatusDescription = "File is not specified"
            Return New EmptyResult()
        End If

        Try
            Dim path As String = System.IO.Path.Combine(targetLocation, myFile.FileName)
            ' It is required to check path to a file and make sure, that the file will be saved in the specified directory.'
            ' Also ensure that the client is not able to upload files with malicious content.'
            ' If checks are passed, save the file to the directory.'
                myFile.SaveAs(path)
        Catch ex As Exception
            Response.StatusCode = 400
            Response.StatusDescription = "Bad file name"
            Return New EmptyResult()
        End Try

        Return New EmptyResult()

    End Function

If upload has failed, send the response with an error HTTP status code using the [Response.StatusCode](https://msdn.microsoft.com/ru-ru/library/system.web.httpresponse.statuscode(v=vs.110)) property. You can also set the HTTP status string using the [Response.StatusDescription](https://msdn.microsoft.com/en-us/library/system.web.httpresponse.statusdescription(v=vs.110)) property (see the example above).
