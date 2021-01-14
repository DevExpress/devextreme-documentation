---
id: dxFileManager.Options.itemView.details.columns
type: Array<dxFileManagerDetailsColumn, String>
default: ['thumbnail', 'name', 'dateModified', 'size']
inheritsType: dxFileManagerDetailsColumn
---
---
##### shortDescription
Configures the columns.

---

This property accepts an array of objects, where each object configures a single column. If a column does not need to be customized, this array may include the name of the field that provides data for this column.

![DevExtreme File Manager - Columns](/images/FileManager/details-columns.png)

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            itemView: {
                details: {
                    columns: [
                        "thumbnail", "name",
                        {
                            dataField: "category",
                            caption: "Category",
                            width: 95
                        },
                        "dateModified", "size"
                    ]
                }
            },
            // ...
        });
    });

---
