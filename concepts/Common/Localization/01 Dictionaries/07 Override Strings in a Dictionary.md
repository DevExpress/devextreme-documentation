To override a string, find its key in any <a href="https://github.com/DevExpress/DevExtreme/tree/20_1/js/localization/messages" target="_blank">dictionary</a> and use it to specify the new string value.

In the following code, we override two strings from the <a href="https://github.com/DevExpress/DevExtreme/blob/20_1/js/localization/messages/en.json" target="_blank">English dictionary</a>:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        DevExpress.localization.loadMessages({
            "en": {
                "dxDataGrid-editingDeleteRow": "Remove",
                "dxDataGrid-editingUndeleteRow": "Recover"
            }
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { loadMessages } from 'devextreme/localization';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        constructor() {
            loadMessages({
                "en": {
                    "dxDataGrid-editingDeleteRow": "Remove",
                    "dxDataGrid-editingUndeleteRow": "Recover"
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
    import { loadMessages } from 'devextreme/localization';

    export default {
        created() {
            loadMessages({
                "en": {
                    "dxDataGrid-editingDeleteRow": "Remove",
                    "dxDataGrid-editingUndeleteRow": "Recover"
                }
            });
        }
    }
    </script>
    
##### React

    <!-- tab: App.js -->
    import React from 'react';

    import { loadMessages } from 'devextreme/localization';

    class App extends React.Component {
        constructor(props) {
            super(props);
            loadMessages({
                "en": {
                    "dxDataGrid-editingDeleteRow": "Remove",
                    "dxDataGrid-editingUndeleteRow": "Recover"
                }
            });
        }

        render() {
            return (
                { /* ... */}
            );
        }
    }
    export default App;

---