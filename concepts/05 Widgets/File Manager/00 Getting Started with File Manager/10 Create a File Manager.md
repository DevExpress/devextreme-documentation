The following code creates the **FileManager** widget and adds it to your page.

---

##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#file-manager").dxFileManager({
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
    <!-- tab: index.html -->
    <div id="file-manager"></div>
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
