---
EventForAction: ..\4 Events\loadError.md
type: function(error)
---
---
##### shortDescription
A function that is executed when data loading fails.

##### param(error): Object
The error.

##### field(error.message): String
The error message.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        onLoadError: function (error) {
            console.log(error.message);
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
                onLoadError: (error) => {
                    console.log(error.message);
                }
            });
        }
    }

---