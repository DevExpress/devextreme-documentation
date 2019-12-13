Assign a function to the [onItemClick](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/onItemClick.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#onItemClick') option. In this tutorial, the function logs the selected action's name in the browser's console: 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#myDropDownButton").dxDropDownButton({
            // ...
            onItemClick: function(e) {
                console.log(e.itemData.text + " was clicked");
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-button ...
        (onItemClick)="logAction($event)">
    </dx-drop-down-button>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        logAction(e) {
            console.log(e.itemData.text + " was clicked");
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-drop-down-button ...
            @item-click="logAction"
        />
    </template>

    <script>
    // ...
    export default {
        // ...
        methods: {
            logAction(e) {
                console.log(e.itemData.text + " was clicked");
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    class App extends React.Component {
        logAction(e) {
            console.log(e.itemData.text + " was clicked");
        }

        render() {
            return (
                <DropDownButton ...
                    onItemClick={this.logAction}
                />
            );
        }
    }
    export default App;

---

Run the code, open the browser's console, click the button, and select an action from the drop-down menu. You should see messages like the following:

    My profile was clicked
    Messages was clicked
    Contacts was clicked
