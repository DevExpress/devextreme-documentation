Full code example: 

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-file-uploader-direct-upload-to-azure"
}

The DevExtreme FileUploader component can upload blobs to Azure Storage using a multi-part upload technique.

1. **Preparation**. Generate an SAS (Shared Access Signature) token for the Azure Blob Storage account or container. Azure requires this token to grant data upload authorization.
    Add a server-side method that generates the necessary token:

        object UploadBlob(string blobName) {
            if (blobName.Contains("/"))
                return CreateErrorResult("Invalid blob name.");

            string prefix = Guid.NewGuid().ToString("N");
            string fullBlobName = $"{prefix}_{blobName}";
            var blob = Container.GetBlockBlobClient(fullBlobName);

            if (blob.Exists() && blob.GetProperties().Value.ContentLength > MaxBlobSize) {
                return CreateErrorResult();
            }
            if (blob.CanGenerateSasUri) {
                var sasUri = blob.GenerateSasUri(BlobSasPermissions.Write, DateTimeOffset.UtcNow.AddHours(1));
                return CreateSuccessResult(sasUri.AbsoluteUri);
            } else {
                        return CreateErrorResult("BlobClient cannot generate SasUri");
            }
        }

2. **Chunk upload**. Upload chunks one by one. Azure assigns a unique block ID for each chunk. The ID is stored inside the `ETag` header.
3. **Completion**. To complete the upload, send all `ETag` headers collected during step 2 to the server. This action stitches chunks together.

    The following client-side function uploads chunks to Azure, saves the block ID, and reports block ID data back to Azure alongside the last chunk:

        function uploadChunk(file, uploadInfo) {
            let promise = null;

            if (uploadInfo.chunkIndex === 0) {
                promise = gateway.getUploadAccessUrl(file.name).then((accessUrl) => {
                uploadInfo.customData.accessUrl = accessUrl.url1;
                });
            } else {
                promise = Promise.resolve();
            }

            promise = promise.then(() => gateway.putBlock(
                uploadInfo.customData.accessUrl,
                uploadInfo.chunkIndex,
                uploadInfo.chunkBlob,
            ));

            if (uploadInfo.chunkIndex === uploadInfo.chunkCount - 1) {
                promise = promise.then(() => gateway.putBlockList(
                uploadInfo.customData.accessUrl,
                uploadInfo.chunkCount,
                ));
            }
            return promise;
        }