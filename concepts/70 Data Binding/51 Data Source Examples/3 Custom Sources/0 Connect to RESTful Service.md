Assume that you have a web service published at a certain URL, for example *http://www.example.com/service/entity1*. This web service implements CRUD operations on data (Create, Read, Update, Delete) and follows the HTTP request conventions listed below.

- **GET http://www.example.com/service/entity1** request returns a list of all entities
- **GET http://www.example.com/service/entity1/123** request returns a single entity identified by the **123** key
- **POST http://www.example.com/service/entity1** adds a new entity built from the values passed in HTTP request body
- **PUT http://www.example.com/service/entity1/123** updates an entity identified by the **123** key with the values passed in HTTP request body
- **DELETE http://www.example.com/service/entity1/123** deletes an entity identified by the **123** key

Such services can have their own URL conventions and additional query-string parameters, they can use different HTTP methods, and different implementation of HTTP request body handlers. That is why the DevExtreme data layer does not provide a ready-to-use component to communicate with these services. However, the CustomStore class enables you to easily utilize any service.

For the service type described above, you can apply the following simple custom DataSource implementation.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var customDataSource = new DevExpress.data.CustomStore({
            load: (loadOptions) => {
                return $.getJSON(SERVICE_URL);
            },

            byKey: (key) => {
                return $.getJSON(SERVICE_URL + "/" + encodeURIComponent(key));
            },

            insert: (values) => {
                return $.ajax({
                    url: SERVICE_URL,
                    method: "POST",
                    data: values
                });
            },

            update: (key, values) => {
                return $.ajax({
                    url: SERVICE_URL + "/" + encodeURIComponent(key),
                    method: "PUT",
                    data: values
                });
            },

            remove: (key) => {
                return $.ajax({
                    url: SERVICE_URL + "/" + encodeURIComponent(key),
                    method: "DELETE",
                });
            },
        });
    });

Note that all user functions return the result of the jQuery AJAX call, which is compatible with the **jQuery.Deferred** promise. In fact, you may use any promise-compatible object to connect to any asynchronous data storage; for example - to an HTML5 File API, and not necessarily to HTTP endpoints.

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import "rxjs/add/operator/toPromise";

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
                load: (loadOptions) => {
                    return httpClient.get(SERVICE_URL)
                        .toPromise();
                },

                byKey: (key) => {
                    return httpClient.get(SERVICE_URL + "/" + encodeURIComponent(key))
                        .toPromise();
                },

                insert: (values) => {
                    return httpClient.post(SERVICE_URL, values)
                        .toPromise();
                },

                update: (key, values) => {
                    return httpClient.put(SERVICE_URL + encodeURIComponent(key), values)
                        .toPromise();
                },

                remove: (key) => {
                    return httpClient.delete(SERVICE_URL + encodeURIComponent(key))
                        .toPromise();
                },
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
    import 'whatwg-fetch';
    
    const customDataSource = new CustomStore({

        load: (loadOptions) => {
            return fetch(SERVICE_URL);
        },

        byKey: (key) => {
            return fetch(SERVICE_URL + "/" + encodeURIComponent(key));
        },

        insert: (values) => {
            return fetch(SERVICE_URL, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        },

        update: (key, values) => {
            return fetch(SERVICE_URL + "/" + encodeURIComponent(key), {
                method: "PUT",
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        },

        remove: (key) => {
            return fetch(SERVICE_URL + "/" + encodeURIComponent(key), {
                method: "DELETE",
            });
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
    import 'whatwg-fetch';
    
    const customDataSource = new CustomStore({
        
        load: (loadOptions) => {
            return fetch(SERVICE_URL);
        },

        byKey: (key) => {
            return fetch(SERVICE_URL + "/" + encodeURIComponent(key));
        },

        insert: (values) => {
            return fetch(SERVICE_URL, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        },

        update: (key, values) => {
            return fetch(SERVICE_URL + "/" + encodeURIComponent(key), {
                method: "PUT",
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        },

        remove: (key) => {
            return fetch(SERVICE_URL + "/" + encodeURIComponent(key), {
                method: "DELETE",
            });
        },
    });
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import CustomStore from 'devextreme/data/custom_store';
    import 'whatwg-fetch';

    const customDataSource = new CustomStore({
        load: (loadOptions) => {
            return fetch(SERVICE_URL);
        },

        byKey: (key) => {
            return fetch(SERVICE_URL + "/" + encodeURIComponent(key));
        },

        insert: (values) => {
            return fetch(SERVICE_URL, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        },

        update: (key, values) => {
            return fetch(SERVICE_URL + "/" + encodeURIComponent(key), {
                method: "PUT",
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        },

        remove: (key) => {
            return fetch(SERVICE_URL + "/" + encodeURIComponent(key), {
                method: "DELETE",
            });
        },
    });

    export default function App() {
        return (
            {/* ... */}
        );
    }

---

The **load** function accepts a number of **loadOptions** (sorting, filtering, paging, etc.). Send them to a remote storage where you can generate the resulting dataset based on these properties.

Note that certain UI components have peculiarities in the **CustomStore** implementation. For example, in case of the [DataGrid](/api-reference/10%20UI%20Components/dxDataGrid '/Documentation/ApiReference/UI_Components/dxDataGrid/'), the **load** function should also return the total count of received records.

#####See Also#####
- [DataGrid - Use CustomStore](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')
- [PivotGrid - Use CustomStore](/concepts/05%20UI%20Components/PivotGrid/035%20Use%20CustomStore '/Documentation/Guide/UI_Components/PivotGrid/Use_CustomStore/')