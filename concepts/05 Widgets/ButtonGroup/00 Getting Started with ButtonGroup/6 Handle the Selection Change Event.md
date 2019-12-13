Assign a function to the [onSelectionChanged](/api-reference/10%20UI%20Widgets/dxButtonGroup/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/#onSelectionChanged') option. In this tutorial, the function logs the added or removed style's name to the browser's console: 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#myButtonGroup").dxButtonGroup({
            // ...
            onSelectionChanged: function (e) {
                if(e.addedItems[0]) {
                    console.log("The following style is added: " + e.addedItems[0].style);
                }
                if(e.removedItems[0]) {
                    console.log("The following style is removed: " + e.removedItems[0].style)
                }
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-button-group ...
        (onSelectionChanged)="logSelectionChanged($event)">
    </dx-button-group>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        logSelectionChanged(e) {
            if(e.addedItems[0]) {
                console.log("The following style is added: " + e.addedItems[0].style);
            }
            if(e.removedItems[0]) {
                console.log("The following style is removed: " + e.removedItems[0].style)
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-button-group ...
            @selection-changed="logSelectionChanged"
        />
    </template>

    <script>
    // ...
    export default {
        // ...
        methods: {
            logSelectionChanged(e) {
                if(e.addedItems[0]) {
                    console.log("The following style is added: " + e.addedItems[0].style);
                }
                if(e.removedItems[0]) {
                    console.log("The following style is removed: " + e.removedItems[0].style)
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    class App extends React.Component {
        // ...
        render() {
            return (
                <ButtonGroup ...
                    onSelectionChanged={this.logSelectionChanged}
                />
            );
        }

        logSelectionChanged(e) {
            if(e.addedItems[0]) {
                console.log("The following style is added: " + e.addedItems[0].style);
            }
            if(e.removedItems[0]) {
                console.log("The following style is removed: " + e.removedItems[0].style)
            }
        }
    }

##### ASP.NET MVC Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().ButtonGroup()
        @* ... *@
        .OnSelectionChanged("logSelectionChanged")
    )

    <script type="text/javascript">
        function logSelectionChanged (e) {
            if(e.addedItems[0]) {
                console.log("The following style is added: " + e.addedItems[0].style);
            }
            if(e.removedItems[0]) {
                console.log("The following style is removed: " + e.removedItems[0].style)
            }
        }
    </script>

---

Run the code, open the browser's console, and select or clear the button selection in the **ButtonGroup**. You should see messages like the following:

    The following style is added: underline
    The following style is removed: bold