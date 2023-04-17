Loading data in raw mode allows you to configure the CustomStore more easily. You can use it only if all data shaping operations are supposed to be performed on the client. In raw mode, the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function should get raw, unprocessed data from the server, and the CustomStore will perform data shaping automatically, without any input from you. To switch to the raw mode, assign *"raw"* to the [loadMode](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/loadMode.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#loadMode') property.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var customDataSource = new DevExpress.data.CustomStore({
            loadMode: "raw", // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
            load: function() {
                // ...
            },    
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { HttpClient } from '@angular/common/http';

    import CustomStore from 'devextreme/data/custom_store';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        customDataSource: CustomStore;
        constructor(private http: HttpClient) {
            this.customDataSource = new CustomStore({
                loadMode: "raw", // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
                load: () => {
                    // ...
                },
                // ...
            });
        }
    }

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <!-- ... -->
    </template>

    <script>
    // ...
    import CustomStore from 'devextreme/data/custom_store';
    
    const customDataSource = new CustomStore({
        loadMode: "raw", // omit in the DataGrid, TreeList, PivotGrid, and Scheduler 
        load: () => {
            // ...
        },
    });

    export default {
        components: {
            // ...
        },
        data() {
            return {
                customDataSource
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <!-- ... -->
    </template>

    <script setup>
    // ...
    import CustomStore from 'devextreme/data/custom_store';
    
    const customDataSource = new CustomStore({
        loadMode: "raw", // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
        load: () => {
            // ...
        },
    });
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import CustomStore from 'devextreme/data/custom_store';

    export default function App() {
        const customDataSource = new CustomStore({
            loadMode: "raw", // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
            load: () => {
                // ...
            },
            // ...
        });

        return (
            {/* ... */}
        );
    }

---

Note that you are not required to implement the [byKey](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/byKey.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey') and [totalCount](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/totalCount.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#totalCount') functions in raw mode, since they will be evaluated based on the results of the **load** function. If, however, you do implement them, your implementation will take precedence over the default one.

Once loaded, data is stored in the cache. If you need to clear the cache at some point, call the [clearRawDataCache()](/api-reference/30%20Data%20Layer/CustomStore/3%20Methods/clearRawDataCache().md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#clearRawDataCache') method.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var customDataSource = new DevExpress.data.CustomStore({  
            // ...
        });
    
        customDataSource.clearRawDataCache();
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { HttpClient } from '@angular/common/http';

    import CustomStore from 'devextreme/data/custom_store';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        customDataSource: CustomStore;
        constructor(private http: HttpClient) {
            this.customDataSource = new CustomStore({
                // ...
            });

            this.customDataSource.clearRawDataCache();
        }
    }

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <!-- ... -->
    </template>

    <script>
    // ...
    import CustomStore from 'devextreme/data/custom_store';
    
    const customDataSource = new CustomStore({
        // ...
    });

    export default {
        components: {
            // ...
        },
        data() {
            return {
                customDataSource
            }
        },
        mounted() {
            customDataSource.clearRawDataCache(); 
        },
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <!-- ... -->
    </template>

    <script setup>
    // ...
    import CustomStore from 'devextreme/data/custom_store';
    
    const customDataSource = new CustomStore({
        // ...
    });

    customDataSource.clearRawDataCache(); 
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import CustomStore from 'devextreme/data/custom_store';

    export default function App() {
        const customDataSource = new CustomStore({
            // ...
        });

        customDataSource.clearRawDataCache(); 

        return (
            {/* ... */}
        );
    }

---

To switch data caching off, assign **false** to the [cacheRawData](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/cacheRawData.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#cacheRawData') property. Note that in this case, the CustomStore will reload all data on every call of the **load**, **byKey** and **totalCount** functions.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var customDataSource = new DevExpress.data.CustomStore({  
            // ...
            cacheRawData: false,
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { HttpClient } from '@angular/common/http';

    import CustomStore from 'devextreme/data/custom_store';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        customDataSource: CustomStore;
        constructor(private http: HttpClient) {
            this.customDataSource = new CustomStore({
                // ...
                cacheRawData: false,
            });
        }
    }

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <!-- ... -->
    </template>

    <script>
    // ...
    import CustomStore from 'devextreme/data/custom_store';
    
    const customDataSource = new CustomStore({
        // ...
        cacheRawData: false,
    });

    export default {
        components: {
            // ...
        },
        data() {
            return {
                customDataSource
            }
        },
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <!-- ... -->
    </template>

    <script setup>
    // ...
    import CustomStore from 'devextreme/data/custom_store';
    
    const customDataSource = new CustomStore({
        // ...
        cacheRawData: false,
    }); 
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import CustomStore from 'devextreme/data/custom_store';

    export default function App() {
        const customDataSource = new CustomStore({
            // ...
            cacheRawData: false,
        });

        return (
            {/* ... */}
        );
    }

---

Since the CustomStore loads all data in raw mode at once, we do not recommend using it with large amounts of data. If you notice a decrease in the CustomStore performance in raw mode, consider delegating some or all data shaping operations to the server and implementing the remaining operations in the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function yourself.
