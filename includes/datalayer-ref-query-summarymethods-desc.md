First, call the [select(getter)](/api-reference/30%20Data%20Layer/Query/3%20Methods/select(getter).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#selectgetter') method to select the object field that provides numeric values if the **Query** is associated with an array of objects, or use the [${{summary}}(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#${{summary}}getter) method instead of **${{summary}}()**.

---
##### jQuery

    <!-- tab: index.js -->
    const dataObjects = [ ... ];

    DevExpress.data.query(dataObjects)
        .select("price")
        .${{summary}}()
        .done(function (result) {
            // "result" contains the calculated value
        });

##### Angular

    <!-- tab: app.component.ts -->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            const dataObjects = [ ... ];

            Query(dataObjects)
                .select("price")
                .${{summary}}()
                .then(result => {
                    // "result" contains the calculated value
                });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { onMounted } from 'vue';
    import Query from 'devextreme/data/query';

    const dataObjects = [ ... ];

    onMounted(() => {
        Query(dataObjects)
            .select('price')
            .${{summary}}()
            .then(result => {
                // "result" contains the calculated value
            });
    });
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useEffect } from 'react';
    import Query from 'devextreme/data/query';

    const dataObjects = [ ... ];

    function App() {
        useEffect(() => {
            Query(dataObjects)
                .select('price')
                .${{summary}}()
                .then(result => {
                    // "result" contains the calculated value
                });
        }, []);

        return (
            // ...
        );
    }

    export default App;

---
