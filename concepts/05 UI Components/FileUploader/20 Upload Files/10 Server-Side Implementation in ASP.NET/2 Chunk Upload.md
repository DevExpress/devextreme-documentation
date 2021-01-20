#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/ChunkUploading/"
}
    
    <!--C#-->
    // The structure that represents chunk details
    public class ChunkMetadata
    {
        public int Index { get; set; }
        public int TotalCount { get; set; }
        public int FileSize { get; set; }
        public string FileName { get; set; }
        public string FileType { get; set; }
        public string FileGuid { get; set; }
    }
    [HttpPost]
    // "file" is the value of the FileUploader's "name" option
    public ActionResult ChunkUpload(HttpPostedFileBase file, string chunkMetadata)
    {
        // Specifies the location for temporary files
        string tempFileLocation = Server.MapPath("~/Files/Temp/");
        // Specifies the target location for uploaded files
        var targetLocation = Server.MapPath("~/Files/");

        try {
            if (!string.IsNullOrEmpty(chunkMetadata))
            {
                // Gets chunk details
                ChunkMetadata metaDataObject = JsonConvert.DeserializeObject<ChunkMetadata>(chunkMetadata);

                // ...
                // Perform security checks here
                // ...

                // Creates a directory for temporary files if it does not exist
                if (!Directory.Exists(tempFileLocation))
                    Directory.CreateDirectory(tempFileLocation);

                var tempFilePath = Path.Combine(tempFileLocation, metaDataObject.FileGuid + ".tmp");

                // Appends the chunk to the file
                AppendContentToFile(tempFilePath, file);

                // Saves the file if all chunks are received
                if (metaDataObject.Index == (metaDataObject.TotalCount - 1))
                    System.IO.File.Copy(tempFilePath, Path.Combine(targetLocation, metaDataObject.FileName));
            }
        }
        catch {
            return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        }
        return new EmptyResult();
    }

    void CheckMaxSize(FileStream stream)
    {
        if (stream.Length > 1024*400000)
            throw new Exception("File is too large");
    }

    void AppendContentToFile(string path, HttpPostedFileBase content)
    {
        using (FileStream stream = new FileStream(path, FileMode.Append, FileAccess.Write))
        {
            content.InputStream.CopyTo(stream);
            CheckMaxSize(stream);
        }
    }

    <!--VB-->
    ' The structure that represents chunk details
    Public Class ChunkMetadata
        Public Property Index As Integer
        Public Property TotalCount As Integer
        Public Property FileSize As Integer
        Public Property FileName As String
        Public Property FileType As String
        Public Property FileGuid As String
    End Class
    <HttpPost>
    Function ChunkUpload(file As HttpPostedFileBase, chunkMetadata As String) As ActionResult
        ' Specifies the location for temporary files
        Dim tempFileLocation As String = Server.MapPath("~/Files/Temp")

        ' Specifies the target location for uploaded files
        Dim targetLocation = Server.MapPath("~/Files/")

        Try
            If (Not String.IsNullOrEmpty(chunkMetadata)) Then
                ' Gets chunk details
                Dim metaDataObject As ChunkMetadata = JsonConvert.DeserializeObject(Of ChunkMetadata)(chunkMetadata)

                ' ...
                ' Perform security checks here
                ' ...

                ' Creates a directory for temporary files if it does not exist
                If (Not Directory.Exists(tempFileLocation)) Then
                    Directory.CreateDirectory(tempFileLocation)
                End If

                Dim tempFilePath = Path.Combine(tempFileLocation, metaDataObject.FileGuid + ".tmp")

                ' Appends the chunk to the file
                AppendContentToFile(tempFilePath, file)

                ' Saves the file if all chunks are received
                If (metaDataObject.Index = (metaDataObject.TotalCount - 1)) Then
                    System.IO.File.Copy(tempFilePath, Path.Combine(targetLocation, metaDataObject.FileName))
                End If
            End If
        Catch ex As Exception
            Throw New HttpException("Bad request")
        End Try
        Return New EmptyResult()
    End Function

    Function AppendContentToFile(path As String, content As HttpPostedFileBase)
        Using stream As New FileStream(path, FileMode.Append, FileAccess.Write)
            content.InputStream.CopyTo(stream)
            CheckMaxSize(stream)
        End Using
    End Function

    Function CheckMaxSize(stream As FileStream)
        If (stream.Length > 1024*400000) Then
            Throw New Exception("File is too large")
        End If
    End Function

#####See Also#####
- <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data#Common_security_concerns" target="_blank">Common Security Concerns</a>
