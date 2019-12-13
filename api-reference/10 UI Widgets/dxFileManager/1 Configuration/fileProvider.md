---
id: dxFileManager.Options.fileProvider
type: Object
default: null
---
---
##### shortDescription
Specifies the file provider.

---
File providers are components that provide APIs used to access and modify virtual file systems.

The following example illustrates how to configure an [Array](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/Array '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Array/') file provider:

---

##### jQuery

    <!--tab: index.js-->
    $(function () {
        $("#file-manager").dxFileManager({
            fileProvider: fileSystem,
            // ...
        });
    });

    <!--tab: data.js-->
    var fileSystem = [
        {
            name: "Documents",
            isDirectory: true,
            items: [
                {
                    name: "Projects",
                    isDirectory: true,
                    items: [
                        {
                            name: "About.rtf",
                            isDirectory: false,
                            size: 1024
                        },
                        {
                            name: "Passwords.rtf",
                            isDirectory: false,
                            size: 2048
                        }
                    ]
                },
                {
                    name: "About.xml",
                    isDirectory: false,
                    size: 1024
                },
                //...
            ],
        },
        {
            name: "Images",
            isDirectory: true,
            items: [
                {
                    name: "logo.png",
                    isDirectory: false,
                    size: 20480
                },
                {
                    name: "banner.gif",
                    isDirectory: false,
                    size: 10240
                }
            ]
        },
        //...
    ];

---


Refer to [File Providers](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/') for information on supported file providers.
