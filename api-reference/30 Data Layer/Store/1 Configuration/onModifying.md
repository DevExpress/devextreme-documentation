---
EventForAction: ..\4 Events\modifying.md
type: function()
---
---
##### shortDescription
A function that is executed before a data item is added, updated, or removed from the store.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onModifying: function () {
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
                onModifying: function () {
                    // Your code goes here
                }
            })
        }
    }
    
---