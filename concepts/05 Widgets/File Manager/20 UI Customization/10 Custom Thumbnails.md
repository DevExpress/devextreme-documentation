The **FileManager** widget allows you to provide custom thumbnails for a file system's items. 

![DevExtreme FileManager - Custom Thumbnails](/images/FileManager/custom-thumbnails.png)

Handle the [customizeThumbnail](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/#customizeThumbnail) function to specify which icons the widget should display for files and folders. This function returns an icon specified for a file system item according to its type (file and folder), extension and so on.

You can specify an icon in the following formats:

- The icon's URL.
- The icon's name if the icon is from the DevExtreme icon library.
- The icon's CSS class if the icon is from an external icon library (see External Icon Libraries).
- The icon in the Base64 format.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            // ...
            customizeThumbnail: function (fileManagerItem) {
                if (fileManagerItem.isDirectory)
                    return "images/thumbnails/folder.svg";
                var fileExtension = fileManagerItem.getExtension();
                switch (fileExtension) {
                    case ".txt":
                        return "images/thumbnails/doc-txt.svg";
                    case ".rtf":
                        return "images/thumbnails/doc-rtf.svg";
                    case ".xml":
                        return "images/thumbnails/doc-xml.svg";
                }
            }
        });
    });

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/CustomThumbnails/"
}