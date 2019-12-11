First, call the [select(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#selectgetter) method to select the object field that provides numeric values if the **Query** is associated with an array of objects, or use the [${{summary}}(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#${{summary}}getter) method instead of **${{summary}}()**.

---
##### jQuery

    <!--JavaScript-->
    var dataObjects = [ ... ];

    DevExpress.data.query(dataObjects)
        .select("price")
        .${{summary}}()
        .done(function (result) {
            // "result" contains the calculated value 
        });

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let dataObjects = [ ... ];

            Query(dataObjects)
                .select("price")
                .${{summary}}()
                .then(result => {
                    // "result" contains the calculated value 
                });
        };
    }

---
