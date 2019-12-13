The button can execute a custom action instead of opening the drop-down menu. To enable this behavior, split the button into two sections. Set the [splitButton](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/splitButton.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#splitButton') option to **true** and assign a function to the [onButtonClick](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/onButtonClick.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#onButtonClick') option:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#myDropDownButton").dxDropDownButton({
            // ...
            splitButton: true,
            onButtonClick: function() {
                console.log("Main button was clicked");
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-button ...
        [splitButton]="true"
        (onButtonClick)="logButtonClick()">
    </dx-drop-down-button>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        logButtonClick() {
            console.log("Main button was clicked");
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-drop-down-button ...
            :split-button="true"
            @button-click="logButtonClick"
        />
    </template>

    <script>
    // ...
    export default {
        // ...
        methods: {
            // ...
            logButtonClick() {
                console.log("Main button was clicked");
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    class App extends React.Component {
        // ...
        logButtonClick() {
            console.log("Main button was clicked");
        }

        render() {
            return (
                <DropDownButton ...
                    splitButton={true}
                    onButtonClick={this.logButtonClick}
                />
            );
        }
    }
    export default App;

---

If you run the code, you should see a button divided in two sections. A click on the main section logs "Main button was clicked" into the browser's console. A click on the secondary section opens the drop-down menu.
