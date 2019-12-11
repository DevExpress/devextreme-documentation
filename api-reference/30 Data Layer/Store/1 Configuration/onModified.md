---
EventForAction: ..\4 Events\modified.md
type: function()
---
---
##### shortDescription
A function that is executed after a data item is added, updated, or removed from the store.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onModified: function () {
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
                onModified: function () {
                    // Your code goes here
                }
            })
        }
    }
    
---