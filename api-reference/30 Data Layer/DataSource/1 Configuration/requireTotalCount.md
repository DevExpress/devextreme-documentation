---
id: DataSource.Options.requireTotalCount
type: Boolean
---
---
##### shortDescription
Specifies whether the **DataSource** requests the total count of data items in the storage.

---
If this option is set to **true**, the Promise that the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method returns is resolved with a second argument that contains the **totalCount** field:

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        requireTotalCount: true
    });

    ds.load()
        .done(function (data, extra) {
            // "data" contains the loaded data
            // "extra" contains the "totalCount" field
        });

[note] When [scrolling](/concepts/05%20Widgets/DataGrid/40%20Scrolling '/Documentation/Guide/Widgets/DataGrid/Scrolling/') is infinite in the **DataGrid**, this option's value is always **false**.