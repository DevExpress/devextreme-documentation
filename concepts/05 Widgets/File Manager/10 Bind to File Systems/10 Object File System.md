The **FileManager** widget provides the Array file provider to manage files and folders in an in-memory array of JSON objects.

![FileManager - Hierarchical Data Structure](Content/images/doc/20_1/FileManager/Hierarchical-file-system.png)

Create an Array file provider and assign the array of hierarchical JSON objects to the provider's [data](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Array/Configuration/#data) option to bind the **FileManager** widget to a hierarchical data structure.

The Array file provider automatically binds data objects to the widget if the data objects have the default 'name', 'size', 'dateModified', etc. fields in its structure. For example:

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
    },
    // ...
    ];

In the example below, the **FileManager** widget displays hierarchical data stored in an in-memory array that contains field with conventional names:

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

If the data source's field names differ from the standard field names mentioned above, use the **[fieldName]Expr** properties when you specify the file system item's name, size, and so on.

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-manager").dxFileManager({            
            fileProvider: fileSystem,
            isDirectoryExpr: "isFolder",
            sizeExpr: "itemSize",
            // ...
        });
    });

    <!-- tab: data.js -->
    var fileSystem = [
        {
            name: "Documents",
            isFolder: true,
            items: [
                {
                    name: "Projects",
                    isFolder: true,
                    items: [
                        {
                            name: "About.rtf",
                            isFolder: false,
                            itemSize: 1024
                        },
                        {
                            name: "Passwords.rtf",
                            isFolder: false,
                            itemSize: 2048
                        }
                    ]
                },
                {
                    name: "About.xml",
                    isFolder: false,
                    itemSize: 1024
                },
                {
                    name: "Managers.rtf",
                    isFolder: false,
                    itemSize: 2048
                },
                {
                    name: "ToDo.txt",
                    isFolder: false,
                    itemSize: 3072
                }
            ],
        },
        //...
    ];

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToHierarchicalStructure/"
}