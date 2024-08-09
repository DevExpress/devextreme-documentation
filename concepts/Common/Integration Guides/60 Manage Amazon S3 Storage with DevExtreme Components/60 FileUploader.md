
The FileUploader [app](https://github.com/DevExpress-Examples/devextreme-file-uploader-direct-upload-to-amazon) allows users to download a file **immediately** following upload. To implement this option, we need to retrieve a pre-signed download URL from Amazon:

    async function onUploaded(e) {
      const url = await amazon.getPresignedDownloadUrl(e.file.name);
      showPresignedUrl(url, e.file.name);
    }