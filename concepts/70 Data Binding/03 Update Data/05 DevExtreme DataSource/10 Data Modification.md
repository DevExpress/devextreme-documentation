Data modification is implemented by the store and its methods. To call them, you need a store instance that you can get using the **DataSource**'s [store()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/store().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#store') method.

Stores provide three data modification methods: [insert(values)](/api-reference/30%20Data%20Layer/Store/3%20Methods/insert(values).md '/Documentation/ApiReference/Data_Layer/ArrayStore/Methods/#insertvalues'), [update(key, values)](/api-reference/30%20Data%20Layer/Store/3%20Methods/update(key_values).md '/Documentation/ApiReference/Data_Layer/ArrayStore/Methods/#updatekey_values'), and [remove(key)](/api-reference/30%20Data%20Layer/Store/3%20Methods/remove(key).md '/Documentation/ApiReference/Data_Layer/ArrayStore/Methods/#removekey'). Use them to edit local and remote data. Call the **DataSource**'s [reload()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload') method afterwards to update data in the **DataSource**.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var dataSource = new DevExpress.data.DataSource({
            // ...
        });

        var store = dataSource.store();

        store.insert({ id: 1, name: "John Doe" })
            .done(function (dataObj, key) {
                dataSource.reload();
            })
            .fail(function (error) { /* ... */ });

        store.update(1, { name: "John Smith" })
            .done(function (dataObj, key) {
                dataSource.reload();
            })
            .fail(function (error) { /* ... */ });

        store.remove(1)
            .done(function (key) {
                dataSource.reload();
            })
            .fail(function (error) { /* ... */ });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import DataSource from 'devextreme/data/data_source';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        dataSource: DataSource;
        constructor() {
            this.dataSource = new DataSource({
                // ...
            });

            const store = this.dataSource.store();
            store.insert({ id: 1, name: "John Doe" })
                .then(
                    (dataObj) => {
                        this.dataSource.reload();
                    },
                    (error) => { /* ... */ }
                );

            store.update(1, { name: "John Smith" })
                .then(
                    (dataObj) => {
                        this.dataSource.reload();
                    },
                    (error) => { /* ... */ }
                );

            store.remove(1)
                .then(
                    (key) => {
                        this.dataSource.reload();
                    },
                    (error) => { /* ... */ }
                );
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <!-- ... -->
    </template>
    <script>
    import DataSource from 'devextreme/data/data_source';
    const dataSource = new DataSource({
        // ...
    });

    export default {
        // ...
        mounted() {
            const store = dataSource.store();
            store.insert({ id: 1, name: "John Doe" })
                .then(
                    (dataObj) => {
                        dataSource.reload();
                    },
                    (error) => { /* ... */ }
                );

            store.update(1, { name: "John Smith" })
                .then(
                    (dataObj) => {
                        dataSource.reload();
                    },
                    (error) => { /* ... */ }
                );

            store.remove(1)
                .then(
                    (key) => {
                        dataSource.reload();
                    },
                    (error) => { /* ... */ }
                );
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataSource from 'devextreme/data/data_source';

    const dataSource = new DataSource({
        // ...
    });

    class App extends React.Component {
        constructor(props) {
            super(props);

            const store = dataSource.store();
            store.insert({ id: 1, name: "John Doe" })
                .then(
                    (dataObj) => {
                        dataSource.reload();
                    },
                    (error) => { /* ... */ }
                );

            store.update(1, { name: "John Smith" })
                .then(
                    (dataObj) => {
                        dataSource.reload();
                    },
                    (error) => { /* ... */ }
                );

            store.remove(1)
                .then(
                    (key) => {
                        dataSource.reload();
                    },
                    (error) => { /* ... */ }
                );
        }

        // ...
    }
    export default App;

---

#####See Also#####
- [Integration with Push Services](/concepts/70%20Data%20Binding/5%20Data%20Layer/3%20Data%20Modification/30%20Integration%20with%20Push%20Services.md '/Documentation/Guide/Data_Binding/Data_Layer/#Data_Modification/Integration_with_Push_Services')