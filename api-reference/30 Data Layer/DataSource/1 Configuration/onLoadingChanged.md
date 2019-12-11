---
EventForAction: ..\4 Events\loadingChanged.md
type: function(isLoading)
---
---
##### shortDescription
A function that is executed when the data loading status changes.

##### param(isLoading): Boolean
Indicates whether data is being loaded.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        onLoadingChanged: function (isLoading) {
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
                onLoadingChanged: (isLoading) => {
                    // Your code goes here
                }
            });
        }
    }

---