Create a [file system provider](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/) that allows you to access and modify file systems.

[note]
In this section, the Object file system is used to quickly to bind the **FileManager** widget to data. Refer to the [Bind to File Systems](/concepts/05%20Widgets/File%20Manager/10%20Bind%20to%20File%20Systems '/Documentation/Guide/Widgets/File_Manager/Bind_to_File_Systems/') section for more information on supported file systems.

To bind the **FileManager** widget to a hierarchical data structure, create an [Object](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Object/) file system provider and assign the array of hierarchical JSON objects to the provider's [data](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Object/Configuration/#data) option. The Object file system provider automatically binds data objects to the widget if the data objects have the default 'name', 'size', 'dateModified', etc., fields in their structure. For example:

    var fileSystem = [
    {
        name: "MyFile.jpg",
        size: 1024,
        dateModified: "2019/05/08",
        thumbnail: "/thumbnails/images/jpeg.ico",
        isDirectory: true,
        items: [
            // ...
            // Nested data objects with the same structure
            // ...
        ]
        // ...
    }];

In the example below, the **FileManager** widget displays hierarchical data stored in an in-memory array that contains fields with conventional names:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-manager").dxFileManager({            
            fileSystemProvider: fileSystem,
            // ...
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
        //...
    ];

---

#####See Also#####
[Bind to an Object File System](/concepts/05%20Widgets/File%20Manager/10%20Bind%20to%20File%20Systems/10%20Object%20File%20System.md '/Documentation/Guide/Widgets/File_Manager/Bind_to_File_Systems/#Object_File_System')
