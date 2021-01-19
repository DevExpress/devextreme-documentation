---
id: dxFileManager.Options.fileSystemProvider
type: Object
default: null
---
---
##### shortDescription
Specifies the file system provider.

---
File system providers are components that provide APIs used to access and modify virtual file systems.

The following example illustrates how to configure an [Object](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20System%20Providers/Object '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Object/') file system provider:

---

##### jQuery

    <!--tab: index.js-->
    $(function () {
        $("#file-manager").dxFileManager({
            fileSystemProvider: fileSystem,
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


Refer to [File System Providers](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20System%20Providers '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/') for information on supported file system providers.
