---
##### jQuery

    <!--JavaScript-->
    var dataObjects = [ ... ];

    DevExpress.data.query(dataObjects)
        .${{summary}}("price")
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
                .${{summary}}("price")
                .then(result => {
                    // "result" contains the calculated value 
                });
        };
    }

---

If the **Query** is associated with a numeric array, use the [${{summary}}()](/Documentation/ApiReference/Data_Layer/Query/Methods/#${{summary}}) method instead.