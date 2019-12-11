---
##### shortDescription
Gets a data item's key value.

##### param(obj): Object
A data item.

##### return: any
The data item's key value.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // ...
        key: "id"
    });

    var key = store.keyOf({ id: 1, name: "John Doe" }); // returns 1

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // ...
                key: "id"
            });
            let key = this.store.keyOf({ id: 1, name: "John Doe" }); // returns 1
        };
    }
    
---