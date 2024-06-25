
Two classes will handle communication between the component and your bucket. The `AmazonFileSystem` class will pass data from the component to `AmazonGateway`. The `AmazonGateway` class will include all the methods that query the Amazon API. This separation of duties makes the code simpler and easier to maintain.

    class AmazonFileSystem {
      gateway = null;

      constructor(baseUrl, onRequestExecuted) {
        this.gateway = new AmazonGateway(baseUrl, onRequestExecuted);
      }

      getItems(path) {
        return this.gateway.getItems(path);
      }

      createDirectory(key, name) {
        return this.gateway.createDirectory(key, name);
      }
    ...

The `FileManager` component can allow users to download multiple files at once. We can bundle these files into an archive on the server:

    <!--tab: AmazonS3Provider.cs -->
    public async Task<FileContentResult> DownloadItemsAsync(string[] keys) {
        if (keys == null || keys.Length == 0)
            return null;

        if (keys.Length > 1) {
            return await DownloadFilesAsArchive(keys);
        } 

        return await DownloadSingleFile(keys[0]);
    }

    public async Task<FileContentResult> DownloadFilesAsArchive(string[] keys) {
        using (var memoryStream = new MemoryStream()) {
            using (var zipArchive = new ZipArchive(memoryStream, ZipArchiveMode.Create, true)) {
                foreach (var file in keys) {
                    ...

Make sure to adjust your client-side code accordingly:

    <!--tab: amazon.filesystem.js -->
    async downloadItems(items) {
        const keys = items.map((x) => x.key);
        const fileName = keys.length > 1 ? 'archive.zip' : this.getFileNameFromKey(keys[0]);
        ...

If you ever need to abort the upload mid-way, you can use the abortFileUpload method of the AWS API. This capability is critical for graceful handling of upload interruptions. Create a function that sends an upload termination request to the Amazon server:

    async abortFileUpload(fileData, uploadInfo, destinationDirectory) {
      const key = `${destinationDirectory?.key ?? ''}${fileData.name}`;
      const uploadId = this.getUploadId(fileData.name);
      const params = { uploadId, key };
      const requestOptions = {
        method: 'POST',
        headers: this.defaultHeaders,
      };
      return this.makeRequest('abortUpload', params, requestOptions);
    }

Pass this function to the `onUploadAborted` event of the `FileUploader` component, or use it to construct a custom filesystem provider for the `FileManager`.