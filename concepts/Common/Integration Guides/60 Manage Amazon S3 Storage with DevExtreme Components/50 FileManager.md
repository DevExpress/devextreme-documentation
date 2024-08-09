
The DevExtreme FileManager component expects the data source to have a traditional file system structure. We can use the `CustomFileSystemProvider` object to simulate such a file system with S3 data.

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

In this particular scenario, final component configuration is straightforward:

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