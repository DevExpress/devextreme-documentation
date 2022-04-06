---
id: ui.hideToasts()
module: ui/toast/hide_toasts
export: default
---
---
##### shortDescription
Hides all the Toast components in the application.

---
---
#####jQuery

    <!--JavaScript-->
    $(function() {
        DevExpress.ui.hideToasts();
    })

#####Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import hideToasts from 'devextreme/ui/toast/hide_toasts';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        function() {
            hideToasts();
        }
    }

#####Vue

    <!-- tab: App.vue -->
    <template>
    </template>
    <script>
    import hideToasts from 'devextreme/ui/toast/hide_toasts';

    export default {
        methods: {
            function() {
                hideToasts();
            }
        }
    }
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';
    import hideToasts from 'devextreme/ui/toast/hide_toasts';

    function App() {
        const hideAllToasts = () => { 
            hideToasts();
        }
    }
    export default App;

---