You can extend the predefined dictionaries by the key-value pairs to provide localization for custom captions/messages. For instance, you can provide localized grid column captions by using the keys that are specially added to predefined dictionaries.

    <!--JavaScript-->Globalize.loadMessages({
        de: {
            //...
            "gridcolumn_name": "Vorname"
        }
    });

<!--...-->

    <!--JavaScript-->var dataGridOptions = {
        dataSource: orders,
        columns: [
            {
                dataField: "Name",
                caption: Globalize.formatMessage("gridcolumn_name");
            }, 
            //...
        ]
    }