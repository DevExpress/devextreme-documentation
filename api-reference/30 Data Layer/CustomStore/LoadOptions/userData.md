---
id: LoadOptions.userData
type: any
---
---
##### shortDescription
An object for storing additional settings that should be sent to the server.

---

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var customDataSource = new DevExpress.data.CustomStore({
            key: "ID",
            load: function (loadOptions) {
                if (!loadOptions.userData["someValue"]) {  
                    loadOptions.userData["someValue"] = 5;  
                    alert("Initial value is set");  
                }  
                else {  
                    alert("Cached value: " + loadOptions.userData["someValue"]);  
                }
            }
        });
        // ...
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import CustomStore from 'devextreme/data/custom_store';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        customDataSource: CustomStore;
        constructor() {
            this.customDataSource = new CustomStore({
                key: 'ID',
                load: (loadOptions) => {
                    if (!loadOptions.userData["someValue"]) {  
                        loadOptions.userData["someValue"] = 5;  
                        alert("Initial value is set");  
                    }  
                    else {  
                        alert("Cached value: " + loadOptions.userData["someValue"]);  
                    }
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

    const customDataSource = new CustomStore({
        key: 'ID',
        load: (loadOptions) => {
            load: (loadOptions) => {
                if (!loadOptions.userData["someValue"]) {  
                    loadOptions.userData["someValue"] = 5;  
                    alert("Initial value is set");  
                }  
                else {  
                    alert("Cached value: " + loadOptions.userData["someValue"]);  
                }
            }            
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
    
    const customDataSource = new CustomStore({
        key: 'ID',
        load: (loadOptions) => {
            load: (loadOptions) => {
                if (!loadOptions.userData["someValue"]) {  
                    loadOptions.userData["someValue"] = 5;  
                    alert("Initial value is set");  
                }  
                else {  
                    alert("Cached value: " + loadOptions.userData["someValue"]);  
                }
            } 
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
