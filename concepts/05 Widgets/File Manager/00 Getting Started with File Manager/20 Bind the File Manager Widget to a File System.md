Create a [file provider](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/') that allows you to access and modify file systems.

[note]
In this section, the hierarchical file system is used as a quick way to bind the **FileManager** widget to data. Refer to the [Bind to File Systems](/concepts/05%20Widgets/FileManager/10%20Bind%20to%20File%20Systems/'/Documentation/Guide/Widgets/FileManager/Bind_to_File_Systems/') topic for more information on supported file systems.
[/note]

To bind the **FileManager** widget to a hierarchical data structure, create an [Array](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/Array '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Array/') file provider and assign the array of hierarchical JSON objects to the provider's [data](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/Array/1%20Configuration/data.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Array/Configuration/#data') option.

The Array file provider automatically binds data objects to the widget if the data objects have the default 'name', 'size', 'dateModified', etc. fields in its structure. For example:

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
    }

In the example below, the **FileManager** widget displays hierarchical data stored in an in-memory array that contains fields with conventional names:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-manager").dxFileManager({
            name: "fileManager",
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

If the data source's field names differ from the standard field names mentioned above, use the **[fieldName]Expr** properties when you specify the file system item's name, size, and so on.

#####See Also#####
[Bind to a Hierarchical File System](/concepts/05%20Widgets/FileManager/10%20Bind%20to%20File%20Systems/10%20Hierarchical%20File%20System.md'/Documentation/Guide/Widgets/FileManager/Bind_to_File_Systems/Hierarchical_File_System')

