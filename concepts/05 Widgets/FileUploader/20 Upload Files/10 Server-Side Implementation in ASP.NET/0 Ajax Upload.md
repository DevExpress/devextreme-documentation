    <!--C#-->
    [HttpPost]
    // "file" is the value of the FileUploader's "name" option
    public ActionResult AsyncUpload(HttpPostedFileBase file)
    {
        // Specifies the target location for the uploaded files
        string targetLocation = Server.MapPath("~/Files/");

        // Specifies the maximum size allowed for the uploaded files (700 kb)
        int maxFileSize = 1024 * 700;

        // Checks whether or not the request contains a file and if this file is empty or not
        if (file == null || file.ContentLength <= 0) {
            throw new HttpException("File is not specified");
        }

        // Checks that the file size does not exceed the allowed size
        if (file.ContentLength > maxFileSize) {
            throw new HttpException("File is too big");
        }

        // Checks that the file is an image
        if (!file.ContentType.Contains("image")) {
            throw new HttpException("Invalid file type");
        }

        try {
            string path = System.IO.Path.Combine(targetLocation, file.FileName);
            // Here, make sure that the file will be saved to the required directory.
            // Also, ensure that the client has not uploaded files with malicious content.
            // If all checks are passed, save the file.
                file.SaveAs(path);
        }
        catch (Exception e) {
            throw new HttpException("Invalid file name");
        }
        return new EmptyResult();
    }

    <!--VB-->
    <HttpPost>
    Function AsyncUpload(file As HttpPostedFileBase) As ActionResult
        ' Specifies the target location for the uploaded files'
        Dim targetLocation As String = Server.MapPath("~/Files/")

        ' Specifies the maximum size allowed for the uploaded files (700 kb)'
        Dim maxFileSize As Integer = 1024 * 700

        ' Checks whether or not the request contains a file and if this file is empty or not'
        If (IsNothing(file) Or file.ContentLength <= 0) Then
            Throw New HttpException("File is not specified")
        End If

        ' Checks that the file size does not exceed the allowed size'
        If (file.ContentLength > maxFileSize) Then
            Throw New HttpException("File is too big")
        End If

        ' Checks that the file is an image'
        If (Not file.ContentType.Contains("image")) Then
            Throw New HttpException("Invalid file type")
        End If

        Try
            Dim path As String = System.IO.Path.Combine(targetLocation, file.FileName)
            ' Here, make sure that the file will be saved to the required directory.'
            ' Also, ensure that the client has not uploaded files with malicious content.'
            ' If all checks are passed, save the file.'
                file.SaveAs(path)
        Catch ex As Exception
            Throw New HttpException("Invalid file name")
        End Try

        Return New EmptyResult()

    End Function

You can pass the exception messages to the client using a custom action filter:

    <!--C#-->
    [NonAction]
    protected override void OnActionExecuted(ActionExecutedContext filter) {
        var exception = filter.Exception;
        if (exception != null) {
            filter.HttpContext.Response.StatusCode = 500;
            filter.Result = new JsonResult {
                Data = exception.Message
            };
            filter.ExceptionHandled = true;
        }
    }

    <!--VB-->
    <NonAction()>
    Protected Overrides Sub OnActionExecuted(ByVal filter As ActionExecutedContext)
        Dim exception As Exception = filter.Exception
        If exception IsNot Nothing Then
            filter.HttpContext.Response.StatusCode = 500
            filter.Result = New JsonResult With {.Data = exception.Message}
            filter.ExceptionHandled = True
        End If
    End Sub

#####See Also#####
- <a href="https://msdn.microsoft.com/en-us/library/dd381609" target="_blank">Creating Custom Action Filters</a>
- <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data#Common_security_concerns" target="_blank">Common Security Concerns</a>
