$(() => {
  $('#file-uploader').dxFileUploader({
    multiple: true,
    uploadMode: 'useButtons',
    allowCanceling: true,
    accept: 'image/*',
    labelText: 'Drop Images Here to Upload...',
    maxFileSize: 32000000,
    dropZone: '.file-uploader-block',
  });
});
