Create a [file provider](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/) that allows you to access and modify file systems.

[note]
In this section, the object file system is used as a quick way to bind the **FileManager** widget to data. Refer to the [Bind to File Systems](/Documentation/Guide/Widgets/FileManager/Bind_to_File_Systems/) section for more information on supported file systems.

To bind the **FileManager** widget to a hierarchical data structure, create an [Array](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Array/) file provider and assign the array of hierarchical JSON objects to the provider's [data](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Array/Configuration/#data) option. The Array file provider automatically binds data objects to the widget if the data objects have the default 'name', 'size', 'dateModified', etc. fields in its structure. For example:

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
            fileProvider: fileSystem,
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
[Bind to an Object File System](/Documentation/Guide/Widgets/FileManager/Bind_to_File_Systems/#Object_File_System)

