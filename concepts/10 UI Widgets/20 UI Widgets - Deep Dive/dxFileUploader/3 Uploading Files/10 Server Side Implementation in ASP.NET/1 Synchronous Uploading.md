In the synchronous mode, several files may be passed in a single request.

The example below demonstrates the processing of the uploaded files in synchronous mode.

**C#**

    public ActionResult SyncUpload() {

        //Specify the target location for saving uploaded files.
        string targetLocation = Server.MapPath("~/Files/");

        //Specify the maximum allowed size for uploaded files (700kb)
        int maxFileSize = 1024 * 700;

        //Check to see if the request holds files.
        if(Request.Files.Count == 0)
            return View("Index");

        HttpFileCollectionBase myFiles = Request.Files;
        for (int index = 0; index < myFiles.Count; index++ ) {
            HttpPostedFileBase myFile = myFiles[index];

            //Check to make sure that the file is not empty.
            if (myFile.ContentLength <= 0)
                continue;
            string fileName = myFile.FileName;

            //Check to see if the file size matches the allowed size.
            if (myFile.ContentLength > maxFileSize)
                continue;

            //Check to see if the file is an image.
            if (!myFile.ContentType.Contains("image"))
                continue;

            try {
                string path = System.IO.Path.Combine(targetLocation, myFile.FileName);
                // It is required to check path to a file and make sure, that the file will be saved to the required directory.
                // Also ensure that the client can't upload files with malicious content.
                // If checks are passed, save the file to the directory.
                    myFile.SaveAs(path);
            }
            catch (Exception e) {
                continue;
            }
        }
        return View("Index");
    }

**VB**

    Function SyncUpload() As ActionResult
        'Specify the target location for saving uploaded files.'
        Dim targetLocation As String = Server.MapPath("~/Files/")

        'Specify the maximum allowed size for uploaded files (700kb).'
        Dim maxFileSize As Integer = 1024 * 700

        Dim myFiles As HttpFileCollectionBase = Request.Files

        'Check to see if the request holds files.'
        If myFiles.Count = 0 Then
            Return View("Index")
        End If

        For i = 0 To myFiles.Count - 1
            Dim myFile As HttpPostedFileBase = myFiles(i)

            'Check to make sure that the file is not empty'
            If (myFile.ContentLength <= 0) Then
                Continue For
            End If

            Dim fileName As String = myFile.FileName

            'Check to see if the file size matches the allowed size.'
            If (myFile.ContentLength > maxFileSize) Then
                Continue For
            End If

            'Check to see if the file is an image.'
            If (Not myFile.ContentType.Contains("image")) Then
                Continue For
            End If

            Try
                Dim path As String = System.IO.Path.Combine(targetLocation, myFile.FileName)
                'Make sure that the file will be saved to the required directory.'
                'Also ensure that the client is not able to upload files with malicious content.'
                'If checks are passed, save the file to the directory.'
                    myFile.SaveAs(path)
            Catch ex As Exception
                Continue For
            End Try
        Next i

        Return View("Index")
    End Function
