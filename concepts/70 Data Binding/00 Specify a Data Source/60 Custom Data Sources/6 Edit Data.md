To implement data editing in the **CustomStore**, add the [insert](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/insert.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#insert'), [remove](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/remove.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#remove'), and [update](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/update.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#update') functions:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var customDataSource = new DevExpress.data.CustomStore({
            key: "ID",
            load: function(loadOptions) {
                // ...
            },
            insert: function(values) {
                var deferred = $.Deferred();
                $.ajax({
                    url: "https://mydomain.com/MyDataService/",
                    method: "POST",
                    data: JSON.stringify(values)
                })
                .done(deferred.resolve)
                .fail(function(e){
                    deferred.reject("Insertion failed");
                });
                return deferred.promise();
            },
            remove: function(key) {
                var deferred = $.Deferred();
                $.ajax({
                    url: "https://mydomain.com/MyDataService/" + encodeURIComponent(key),
                    method: "DELETE"
                })
                .done(deferred.resolve)
                .fail(function(e){
                    deferred.reject("Deletion failed");
                };
                return deferred.promise();
            },
            update: function(key, values) {
                var deferred = $.Deferred();
                $.ajax({
                    url: "https://mydomain.com/MyDataService/" + encodeURIComponent(key),
                    method: "PUT",
                    data: JSON.stringify(values)
                })
                .done(deferred.resolve)
                .fail(function(e){
                    deferred.reject("Update failed");
                };
                return deferred.promise();
            }
        });

        // ...
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { HttpClient, HttpParams } from '@angular/common/http';

    import CustomStore from 'devextreme/data/custom_store';
    import { lastValueFrom } from 'rxjs';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        customDataSource: CustomStore;
        constructor(private http: HttpClient) {
            this.customDataSource = new CustomStore({
                key: 'ID',
                load: (loadOptions) => {
                    // ...
                },
                insert: (values) = > {
                    return lastValueFrom(this.http.post('https://mydomain.com/MyDataService', JSON.stringify(values)))
                        .catch(() => { throw 'Insertion failed' });
                },
                remove: (key) => {
                    return lastValueFrom(this.http.delete('https://mydomain.com/MyDataService/' + encodeURIComponent(key)))
                        .catch(() => { throw 'Deletion failed' });
                },
                update: (key, values) => {
                    return lastValueFrom(this.http.put('https://mydomain.com/MyDataService/' + encodeURIComponent(key), JSON.stringify(values)))
                        .catch(() => { throw 'Update failed' });
                }
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <!-- ... -->
    </template>

    <script>
    // ...
    import CustomStore from 'devextreme/data/custom_store';
    import 'whatwg-fetch';

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
    
    const customDataSource = new CustomStore({
        key: 'ID',
        load: (loadOptions) => {
            // ...
        },
        insert: (values) => {
            return fetch('https://mydomain.com/MyDataService', {
                method: 'POST',
                body: JSON.stringify(values),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(handleErrors)
            .catch(() => { throw 'Network error' });
        },
        remove: (key) => {
            return fetch(`https://mydomain.com/MyDataService/${encodeURIComponent(key)}`, {
                method: 'DELETE'
            })
            .then(handleErrors)
            .catch(() => { throw 'Network error' });
        },
        update: (key, values) => {
            return fetch(`https://mydomain.com/MyDataService/${encodeURIComponent(key)}`, {
                method: 'PUT',
                body: JSON.stringify(values),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(handleErrors)
            .catch(() => { throw 'Network error' });
        }
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

##### React

    <!-- tab: App.js -->
    // ...
    import CustomStore from 'devextreme/data/custom_store';
    import 'whatwg-fetch';

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
    
    const customDataSource = new CustomStore({
        key: 'ID',
        load: (loadOptions) => {
            // ...
        },
        insert: (values) => {
            return fetch('https://mydomain.com/MyDataService', {
                method: 'POST',
                body: JSON.stringify(values),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(handleErrors)
            .catch(() => { throw 'Network error' });
        },
        remove: (key) => {
            return fetch(`https://mydomain.com/MyDataService/${encodeURIComponent(key)}`, {
                method: 'DELETE'
            })
            .then(handleErrors)
            .catch(() => { throw 'Network error' });
        },
        update: (key, values) => {
            return fetch(`https://mydomain.com/MyDataService/${encodeURIComponent(key)}`, {
                method: 'PUT',
                body: JSON.stringify(values),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(handleErrors)
            .catch(() => { throw 'Network error' });
        }
    });

    class App extends React.Component {
        render() {
            return (
                {/* ... */}
            );
        }
    }
    export default App;

---
