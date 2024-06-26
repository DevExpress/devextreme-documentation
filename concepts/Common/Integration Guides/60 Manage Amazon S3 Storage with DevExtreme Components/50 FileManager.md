
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

---

##### jQuery

    <!-- tab: index.js -->
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

##### Angular 

    <!-- tab: app.component.html -->
    <dx-file-manager
        id="file-manager"
        [fileSystemProvider]="fileSystemProvider"
        [allowedFileExtensions]="allowedFileExtensions"
    >
        <dxo-upload [chunkSize]="5242880"></dxo-upload>
        <dxo-permissions
        [create]="true"
        [copy]="true"
        [move]="true"
        [delete]="true"
        [rename]="true"
        [upload]="true"
        [download]="true"
        >
        </dxo-permissions>
    </dx-file-manager>

##### Vue 
  
    <!-- tab: App.vue -->
    <DxFileManager
      :file-system-provider="fileSystemProvider"
      :allowed-file-extensions="allowedFileExtensions"
    >
      <DxUpload :chunk-size="5242880"/>
      <DxPermissions/>
      <DxPermissions
        :create="true"
        :copy="true"
        :move="true"
        :delete="true"
        :rename="true"
        :upload="true"
        :download="true"
      />
    </DxFileManager>

##### React 

    <!-- tab: App.js -->
    <FileManager
        id="file-manager"
        fileSystemProvider={fileSystemProvider}
        allowedFileExtensions={allowedFileExtensions}
      >
        <Upload chunkSize={5242880}></Upload>
        <Permissions download={true}></Permissions>
        <Permissions
          create={true}
          copy={true}
          move={true}
          delete={true}
          rename={true}
          upload={true}
          download={true}>
        </Permissions>
      </FileManager>

---