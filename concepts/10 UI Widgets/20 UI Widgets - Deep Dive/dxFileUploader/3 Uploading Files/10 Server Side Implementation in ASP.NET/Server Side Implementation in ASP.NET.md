To create a file upload service on ASP.NET MVC, add a controller to the project, and create an action implementing the service logic.

    public class UploadController: Controller
    {
        public ActionResult Upload() {
            //Implement service logic here
        }
    }

Use the [HttpRequest.Files](https://msdn.microsoft.com/en-us/library/system.web.httprequest.files(v=vs.110)) property to get the collection of files being uploaded. Each collection item is an instance of the [HttpPostedFileBase](https://msdn.microsoft.com/en-us/library/system.web.httppostedfilebase(v=vs.110)) class, which provides the following information.

- ContentLength  
The size of an uploaded file, in bytes. 

- ContentType  
The MIME content type of a file sent by a client.

- FileName  
The original name of the file on the client machine.

- InputStream  
A Stream object that points to an uploaded file to prepare to read the file contents.

Both synchronous and asynchronous modes include common steps. First, check to ensure that the file size is greater than zero. Then, save the uploaded file to the specified directory.

    if (myFile.ContentLength > 0) {
        ...
        myFile.SaveAs(pathToFile);
    } else {
        // Handle error
    }

[note]Check if the file is being saved to the required directory. This is necessary, because the path can be modified using special characters in the file name; for example, two consecutive dots or the tilde.

For server security, upload files of a specific type. To do this, use the **ContentType** property. The example below demonstrates how to upload only images. 

    if (myFile.ContentType.Contains("image")) {
        ...
    } else {
        // Handle error
    }

[note]Use additional checks to ensure that the client is not allowed to upload files with malicious content such as server scripts.

In addition, you may want to limit the file size; do this by checking the **ContentLength** property. 

    int maxFileSize = 1024*700;
    if (myFile.ContentLength < maxFileSize) {
        ...
    } else {
        // Handle error
    }
