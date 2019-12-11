---
EventForAction: ..\4 Events\push.md
type: function(changes)
---
---
##### shortDescription
The function executed before changes are pushed to the store.

##### param(changes): Array<any>
Changes passed in the [push(changes)](/api-reference/30%20Data%20Layer/Store/3%20Methods/push(changes).md '{basewidgetpath}/Methods/#pushchanges') method.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onPush: function(changes) {
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
                onPush: (changes) => {
                    // Your code goes here
                }
            })
        }
    }
    
---