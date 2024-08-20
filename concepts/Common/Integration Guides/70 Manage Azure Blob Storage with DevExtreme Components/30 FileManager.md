Full code examples:

* [Client-side data handling](https://github.com/DevExpress-Examples/devextreme-file-manager-azure-client-side-binding)
* [Server-side data handling](https://github.com/DevExpress-Examples/devextreme-file-manager-azure-server-side-binding)

Azure Blob Storage does not expose a traditional file system to the end user. When you request to view the list of blob entries, Azure returns XML:

    <?xml version="1.0" encoding="utf-8"?>
    <EnumerationResults ServiceEndpoint="https://aspxdemos.blob.core.windows.net/" ContainerName="testfilemanager">
        <Blobs>
            <Blob>
                <Name>1.jpg</Name>
                <Properties>
                    <Creation-Time>Mon, 04 Dec 2023 07:24:58 GMT</Creation-Time>
                    <Last-Modified>Wed, 06 Dec 2023 06:29:09 GMT</Last-Modified>
                    <Etag>0x8DBF624A7904382</Etag>
                    <Content-Length>3126</Content-Length>
                    <Content-Type>application/octet-stream</Content-Type>
                    <Content-Encoding />
                    <Content-Language />
                    <Content-CRC64 />
                    <Content-MD5 />
                    <Cache-Control />
                    <Content-Disposition />
                    <BlobType>BlockBlob</BlobType>
                    <LeaseStatus>unlocked</LeaseStatus>
                    <LeaseState>available</LeaseState>
                    <ServerEncrypted>true</ServerEncrypted>
                </Properties>
                <OrMetadata />
            </Blob>
    ... (other Blob records)
        </Blobs>
        <NextMarker />
    </EnumerationResults>

The FileManager component cannot work with Azure’s XML data. As such, you will need to generate a FileManager-compatible file system representation of the XML.

This requirement can be executed on either the client or the server.

### Client-side Data Handling

First, create an API endpoint that handles FileManager requests and directs them to the Blob Storage:

    [Route("api/file-manager-azure-access", Name = "FileManagerAzureAccessApi")]
    public object Process(string command, string blobName = "", string blobName2 = "")
    {
        try
        {
            return ProcessCommand(command, blobName, blobName2);
        }
        catch
        {
            return CreateErrorResult();
        }
    }
    object ProcessCommand(string command, string blobName, string blobName2)
    {
        switch (command)
        {
            case "BlobList":
                return GetBlobList();
            case "CreateDirectory":
                if (!AllowCreate)
                    return CreateErrorResult();
                return CreateDirectory(blobName);
                ...
        }
    }

The `ProcessCommand` object object defines the internal logic of the endpoint. It calls functions that interact with Blob entities:

    object GetBlobList() {
        if (Container.CanGenerateSasUri) {
            var sasUri = Container.GenerateSasUri(BlobContainerSasPermissions.List, DateTimeOffset.UtcNow.AddHours(1));
            return CreateSuccessResult(sasUri);
        } else {
            return CreateErrorResult("BlobContainerClient cannot generate SasUri");
        }
    }

In this example, the `Container` object is an instance of the `BlobContainerClient` class.

The client-side parser function is as follows:

    getDataObjectsFromEntries(entries, prefix) {
        const result = [];
        const directories = {};
        entries.forEach((entry) => {
        const restName = entry.name.substr(prefix.length);
        const parts = restName.split('/');
        if (parts.length === 1) {
            if (restName !== this.EMPTY_DIR_DUMMY_BLOB_NAME) {
            const obj = {
                name: restName,
                isDirectory: false,
                dateModified: entry.lastModified,
                size: entry.length,
            };
            result.push(obj);
            }
        } else {
            const dirName = parts[0];
            let directory = directories[dirName];
            if (!directory) {
            directory = {
                name: dirName,
                isDirectory: true,
            };
            directories[dirName] = directory;
            result.push(directory);
            }
            if (!directory.hasSubDirectories) {
            directory.hasSubDirectories = parts.length > 2;
            }
        }
        });
        result.sort(this.compareDataObjects);
        return result;
    }

It outputs FileManager-compatible JSON:

    [
        {
            "name": "folder12",
            "isDirectory": true,
            "hasSubDirectories": true
        },
        ... other records
        {
            "name": "testflowers_137KB.jpgd1578202-9d72-4806-9ac2-90551d598e70",
            "isDirectory": false,
            "dateModified": "2022-12-21T14:57:55.000Z",
            "size": 140998
        }
    ]


### Server-side Data Handling

To process Blob data on the server, create a class that implements the interface requirements of the FileManager component...

    public class AzureBlobFileProvider : IFileSystemItemLoader, IFileSystemItemEditor, IFileUploader, IFileContentProvider {
        ...
        public AzureBlobFileProvider(string storageAccountName, string storageAccessKey, string containerName, string tempDirPath) {
            ...
        }
    ...
    }

...and create function implementations for the Azure API:

    public IEnumerable<FileSystemItem> GetItems(FileSystemLoadItemOptions options) {
        var result = new List<FileSystemItem>();
        string dirKey = GetFileItemPath(options.Directory);
        var oneLevelItemsList = GetOneLevelHierarchyBlobs(dirKey);
        foreach(BlobHierarchyItem hierarchyItem in oneLevelItemsList) {
            var fileItem = GetFileSystemItem(hierarchyItem);
            if(fileItem != null) {
                result.Add(fileItem);
            }
        }
        return result.OrderByDescending(item => item.IsDirectory)
            .ThenBy(item => item.Name)
            .ToList();
    }

The `FileSystem` endpoint will expose an instance of the `AzureBlobFileProvider` class to the client-side application:

    [Route("api/file-manager-azure", Name = "FileManagerAzureProviderApi")]
    public object FileSystem(FileSystemCommand command, string arguments) {
        var config = new FileSystemConfiguration {
            Request = Request,
            FileSystemProvider = AzureFileProvider,
            ...
            UploadConfiguration = new UploadConfiguration {
                MaxFileSize = 1048576
            },
            TempDirectory = WebHostEnvironment.ContentRootPath + "/UploadTemp"
        };
        var processor = new FileSystemCommandProcessor(config);
        var result = processor.Execute(command, arguments);
        return result.GetClientCommandResult();
    }

This particular technique simplifies component setup. You can create a `RemoteFileSystemProvider` that uses the newly created file system endpoint:

    const provider = new DevExpress.fileManagement.RemoteFileSystemProvider({
    endpointUrl: `${baseUrl}file-manager-azure`,
    });

Note that the `fileSystemProvider` component option needs to reference the following provider:

---

##### jQuery

    <!-- tab: index.js -->
    $('#file-manager').dxFileManager({
    name: 'fileManager',
    fileSystemProvider: provider,
    permissions: {
        download: true,
        ...
    },
    allowedFileExtensions: [],
    });

##### Angular 

    <!-- tab: app.component.html -->
    <dx-file-manager
    id="file-manager"
    [fileSystemProvider]="fileSystemProvider"
    [allowedFileExtensions]="allowedFileExtensions"
    >
        <dxo-permissions 
            [download]="true"
            ...
        >
        </dxo-permissions>
    </dx-file-manager>

##### Vue 
  
    <!-- tab: App.vue -->
    <DxFileManager
      id="file-manager"
      :file-system-provider="fileSystemProvider"
      :allowed-file-extensions="allowedFileExtensions"
    >
        <DxPermissions>
            :download="true"
            ...
        </DxPermissions>
    </DxFileManager>

##### React 

    <!-- tab: App.js -->
    <FileManager id="file-manager" fileSystemProvider={fileSystemProvider} allowedFileExtensions={allowedFileExtensions}>
        <Permissions
            download={true}
            ...
        >
        </Permissions>
    </FileManager>
    
---




