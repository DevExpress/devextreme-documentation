---
id: ui.hideToasts()
module: ui/toast/hide_toasts
export: default
---
---
##### shortDescription
Hides all the Toast components in the application.

---
The code below uses a [Button](/Documentation/ApiReference/UI_Components/dxButton/) to hide all the Toast components on click.

---
#####jQuery

    <!-- tab: index.html -->
    <div id="hide"></div>

    <!-- tab: index.js -->
    $("#hide").dxButton({
        text: "Hide all Toasts",
        onClick() {
            DevExpress.ui.hideToasts();
        }
    });

#####Angular

    <!-- tab: app.component.html -->
    <dx-button
        text="Hide all Toasts"
        (onClick)="onClick()"
    >
    </dx-button>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import hideToasts from 'devextreme/ui/toast/hide_toasts';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        onClick() {
            hideToasts();
        }
    }

#####Vue

    <!-- tab: App.vue -->
    <template>
        <DxButton
            text="Hide all Toasts"
            @click="onClick()"
        />
    </template>

    <script>
        import { DxButton } from 'devextreme-vue/button';
        import hideToasts from 'devextreme/ui/toast/hide_toasts';

        export default {
            methods: {
                onClick() {
                    hideToasts();
                }
            }
        }
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';
    import { Button } from 'devextreme-react/button';
    import hideToasts from 'devextreme/ui/toast/hide_toasts';

    function App() {
        const onClick = () => { 
            hideToasts();
        }
        return (
            <Button 
                text="Hide all Toasts"
                onClick={onClick}
            />
        );
    }
    export default App;

---