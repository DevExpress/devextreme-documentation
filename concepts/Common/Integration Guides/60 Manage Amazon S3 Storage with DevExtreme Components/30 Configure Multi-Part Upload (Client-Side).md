S3 supports multiple file upload techniques: single-try uploads, multipart uploads, and resumable uploads. For the purposes of this tutorial, we'll implement object access methods to facilitate multipart uploads.

Multipart uploads involve three steps:

1. **Initiation**. During this step, you contact the server to establish a new upload attempt. The server returns a unique ID for your upload.
2. **Chunk upload**. As you upload the file part by part, you need to label each part with an upload ID. The server returns a unique `ETag` for each chunk that it receives.
3. **Completion**. To complete the upload, send all the `ETag` headers you collected during step 2, as well as the upload ID, to the server.

Example:

    async uploadFileChunk(fileData, uploadInfo, destinationDirectory) {
      if (uploadInfo.chunkIndex === 0) {
        await this.gateway.initUpload(fileData, destinationDirectory); // Initiate the upload before the first chunk.
      }

      await this.gateway.uploadPart(fileData, uploadInfo, destinationDirectory);

      if (uploadInfo.chunkCount === uploadInfo.chunkIndex + 1) {
        await this.gateway.completeUpload(fileData, uploadInfo, destinationDirectory); // Complete the upload after the last chunk.
      }
    }

You can use component options to set maximum chunk size.

The `FileManager` component has the `upload.chunkSize` property:

    $('#file-manager').dxFileManager({
        ...
        upload: {
            chunkSize: 5242880,
        },
        ...
    })

The `FileUploader` component has the `chunkSize` property:

    $('#file-uploader').dxFileUploader({
      chunkSize: 5242880,
      ...
    })

If a file does not exceed the maximum chunk size, the upload consists of a single chunk.

Review the repositories to inspect the code that facilitates multi-part uploads in their entirety.

[note] Learn more: [Amazon AWS Documentation — Uploading and copying objects using multipart upload](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html)