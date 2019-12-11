---
EventForAction: ..\4 Events\changed.md
type: function()
---
---
##### shortDescription
A function that is executed after data is successfully loaded.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        onChanged: function () {
            // Your code goes here
        }
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                onChanged: () => {
                    // Your code goes here
                }
            });
        }
    }

---