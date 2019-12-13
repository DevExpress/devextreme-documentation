#include tutorials-intro-installationnote

The **FileManager** widget allows users to manage files and folders.

![DevExtreme File Manager - Getting Started](/images/FileManager/getting-started-overview.png)

#include common-ctp-note with {
    component: "FileManager"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/jQuery/Light/"
}

The following code adds the **FileManager** widget to your page.

---

##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#file-manager").dxFileManager({
            name: "fileManager",
            fileProvider: fileSystem,
            currentPath: "Documents",
            height: 450,
            permissions: {
                create: true,
                copy: true,
                move: true,
                remove: true,
                rename: true
            }
        });
    });	
    <!-- tab: data.js -->
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
                {
                    name: "Managers.rtf",
                    isDirectory: false,
                    size: 2048
                },
                {
                    name: "ToDo.txt",
                    isDirectory: false,
                    size: 3072
                }
            ],
        },
        // ...
    ];      

---
