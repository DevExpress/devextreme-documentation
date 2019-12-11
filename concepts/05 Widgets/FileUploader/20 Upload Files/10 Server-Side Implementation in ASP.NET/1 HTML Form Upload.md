    <!--C#-->

    public ActionResult SyncUpload() {

        // Specifies the target location for the uploaded files
        string targetLocation = Server.MapPath("~/Files/");

        // Specifies the maximum size allowed for the uploaded files (700 kb)
        int maxFileSize = 1024 * 700;

        // Checks whether the request contains any files
        if(Request.Files.Count == 0)
            return View("Index");

        HttpFileCollectionBase files = Request.Files;
        for (int index = 0; index < files.Count; index++ ) {
            HttpPostedFileBase file = files[index];

            // Checks that the file is not empty
            if (file.ContentLength <= 0)
                continue;
            string fileName = file.FileName;

            // Checks that the file size does not exceed the allowed size
            if (file.ContentLength > maxFileSize)
                continue;

            // Checks that the file is an image
            if (!file.ContentType.Contains("image"))
                continue;

            try {
                string path = System.IO.Path.Combine(targetLocation, file.FileName);
                // Here, make sure that the file will be saved to the required directory.
                // Also, ensure that the client has not uploaded files with malicious content.
                // If all checks are passed, save the file.
                    file.SaveAs(path);
            }
            catch (Exception e) {
                continue;
            }
        }
        return View("Index");
    }

    <!--VB-->

    Function SyncUpload() As ActionResult
        ' Specifies the target location for the uploaded files'
        Dim targetLocation As String = Server.MapPath("~/Files/")

        ' Specifies the maximum size allowed for the uploaded files (700 kb)'
        Dim maxFileSize As Integer = 1024 * 700

        Dim files As HttpFileCollectionBase = Request.Files

        ' Checks whether the request contains any files'
        If files.Count = 0 Then
            Return View("Index")
        End If

        For i = 0 To files.Count - 1
            Dim file As HttpPostedFileBase = files(i)

            ' Checks that the file is not empty'
            If (file.ContentLength <= 0) Then
                Continue For
            End If

            Dim fileName As String = file.FileName

            ' Checks that the file size does not exceed the allowed size'
            If (file.ContentLength > maxFileSize) Then
                Continue For
            End If

            ' Checks that the file is an image'
            If (Not file.ContentType.Contains("image")) Then
                Continue For
            End If

            Try
                Dim path As String = System.IO.Path.Combine(targetLocation, file.FileName)
                ' Here, make sure that the file will be saved to the required directory.'
                ' Also, ensure that the client has not uploaded files with malicious content.'
                ' If all checks are passed, save the file.'
                    file.SaveAs(path)
            Catch ex As Exception
                Continue For
            End Try
        Next i

        Return View("Index")
    End Function

#####See Also#####
- <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data#Common_security_concerns" target="_blank">Common Security Concerns</a>
