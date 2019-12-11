---
EventForAction: ..\4 Events\loading.md
type: function(loadOptions)
---
---
##### shortDescription
A function that is executed before data is loaded to the store.

##### param(loadOptions): LoadOptions
Data processing settings.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onLoading: function (loadOptions) {
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
                onLoading: function (loadOptions) {
                    // Your code goes here
                }
            })
        }
    }
    
---