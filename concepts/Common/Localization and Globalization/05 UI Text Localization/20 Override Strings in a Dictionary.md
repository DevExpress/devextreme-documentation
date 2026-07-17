To override a message, find its key in a dictionary and load a new value for that key.

The following examples override two messages from the English dictionary:

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
        DevExpress.localization.locale("en");
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { loadMessages, locale } from 'devextreme/localization';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        standalone: true
    })
    export class AppComponent {
        constructor() {
            loadMessages({
                "en": {
                    "dxDataGrid-editingDeleteRow": "Remove",
                    "dxDataGrid-editingUndeleteRow": "Recover"
                }
            });
            locale('en');
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <!-- ... -->
    </template>

    <script setup lang="ts">
    import { loadMessages, locale } from 'devextreme/localization';

    loadMessages({
        "en": {
            "dxDataGrid-editingDeleteRow": "Remove",
            "dxDataGrid-editingUndeleteRow": "Recover"
        }
    });
    locale('en');
    </script>
    
##### React

    <!-- tab: App.tsx -->
    import { loadMessages, locale } from 'devextreme/localization';

    loadMessages({
        "en": {
            "dxDataGrid-editingDeleteRow": "Remove",
            "dxDataGrid-editingUndeleteRow": "Recover"
        }
    });
    locale('en');

    export default function App() {
        return null;
    }

---
