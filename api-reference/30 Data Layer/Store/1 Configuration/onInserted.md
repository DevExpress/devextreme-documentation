---
EventForAction: ..\4 Events\inserted.md
type: function(values, key)
---
---
##### shortDescription
A function that is executed after a data item is added to the store.

##### param(values): Object
The added data item.

##### param(key): Object|String|Number
The item's key.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onInserted: function (values, key) {
            // Your code goes here
        }
    });

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                onInserted: function (values, key) {
                    // Your code goes here
                }
            })
        }
    }
    
---