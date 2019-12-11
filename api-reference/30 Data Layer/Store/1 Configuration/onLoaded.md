---
EventForAction: ..\4 Events\loaded.md
type: function(result)
---
---
##### shortDescription
A function that is executed after data is loaded to the store.

##### param(result): Array<any>
The loaded data.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onLoaded: function (result) {
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
                onLoaded: function (result) {
                    // Your code goes here
                }
            })
        }
    }
    
---