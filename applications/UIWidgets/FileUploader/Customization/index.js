$(() => {
    const fileUploader = $('#file-uploader').dxFileUploader({
        dropZone: '.file-uploader-block',
        uploadMode: 'useButtons',
        multiple: true,
        allowedFileExtensions: ['.jpg', '.jpeg', '.gif', '.png'],
    }).dxFileUploader("instance");

    const fileOne = new File([new Blob(["testing"])], "Image One.jpg", { type: "text/plain" });
    const fileTwo = new File([new Blob(["testing"])], "Image Two.jpg", { type: "text/plain" });
    const fileThree = new File([new Blob(["testing"])], "Image Three.jpg", { type: "text/plain" });
    const fileFour = new File([new Blob(["testing"])], "Image Four.jpg", { type: "text/plain" });
    const fileFive = new File([new Blob(["testing"])], "Image Five.jpg", { type: "text/plain" });

    fileUploader.option("value", [fileOne, fileTwo, fileThree, fileFour, fileFive]);
});

