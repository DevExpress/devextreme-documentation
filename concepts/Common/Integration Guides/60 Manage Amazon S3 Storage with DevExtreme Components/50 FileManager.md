
The `FileManager` component expects the data source to have the structure of a traditional file system. We can use the `CustomFileSystemProvider` object to imitate such a file system with S3 data.

    const provider = new DevExpress.fileManagement.CustomFileSystemProvider({
      getItems,
      createDirectory,
      renameItem,
      deleteItem,
      copyItem,
      moveItem,
      uploadFileChunk,
      downloadItems,
      abortFileUpload,
    });

In this scenario, the final copmonent configuration is very straightforward:

    $('#file-manager').dxFileManager({
      fileSystemProvider: provider,

      allowedFileExtensions: [],
      upload: {
        chunkSize: 5242880,
      },
      permissions: {
        download: true,
        create: true,
        copy: true,
        move: true,
        delete: true,
        rename: true,
        upload: true,
      },
    });
