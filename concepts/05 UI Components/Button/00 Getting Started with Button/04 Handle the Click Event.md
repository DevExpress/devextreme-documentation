To respond to user clicks, write an [onClick](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#onClick) handler. The example used in this tutorial displays a toast message:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#button").dxButton({
            // ...
            onClick: function() {
                DevExpress.ui.notify("The button was clicked");
            } 
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-button ...
        (onClick)="showMessage()">
    </dx-button>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import notify from 'devextreme/ui/notify';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        showMessage = () => {
            notify("The button was clicked");
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxButton ...
            @click="showMessage()"
        />
    </template>

    <script>
    import DxButton from 'devextreme-vue/button';
    import notify from 'devextreme/ui/notify';

    export default {
        name: 'App',
        components: {
            DxButton
        },
        methods: {
            showMessage() {
                notify("The button was clicked");
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import notify from 'devextreme/ui/notify';

    function showMessage() {
        notify("The button was clicked");
    }

    function App() {
        return (
            <div className="App">
                <Button ...
                    onClick={showMessage}
                />
            </div>
        );
    }

    export default App;

---
