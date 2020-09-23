Set the [selectionMode](/api-reference/10%20UI%20Widgets/dxButtonGroup/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/#selectionMode') option to *"multiple"* to allow users to select multiple buttons. You can also change the **onSelectionChanged** handler from the previous step to log all the selected styles in the console:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#myButtonGroup").dxButtonGroup({
           // ...
           selectionMode: "multiple",
           onSelectionChanged: function (e) {
                const selectedItemKeys = e.component.option("selectedItemKeys");
                let message;
                if(selectedItemKeys.length > 0) {
                    message = "The following styles are selected: " + selectedItemKeys.join(", ");
                } else {
                    message = "There are no selected styles"
                }
                console.log(message);
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-button-group ...
        selectionMode="multiple"
        [(selectedItemKeys)]="selectedFontStyleNames"
        (onSelectionChanged)="logSelectionChanged($event)">
    </dx-button-group>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        selectedFontStyleNames: string[] = [ "italic" ];

        constructor() {
            this.logSelectionChanged = this.logSelectionChanged.bind(this);
        }

        logSelectionChanged() {
            let message;
            if(this.selectedFontStyleNames.length > 0) {
                message = "The following styles are selected: " + this.selectedFontStyleNames.join(", ");
            } else {
                message = "There are no selected styles";
            }
            console.log(message);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxButtonGroup ...
            selection-mode="multiple"
            v-model:selected-item-keys="selectedFontStyleNames"
            @selection-changed="logSelectionChanged"
        />
    </template>

    <script>
    // ...
    export default {
        // ...
        data() {
            return {
                // ...
                selectedFontStyleNames: [ 'italic' ]
            }
        },
        methods: {
            logSelectionChanged() {
                let message;
                if(this.selectedFontStyleNames.length > 0) {
                    message = "The following styles are selected: " + this.selectedFontStyleNames.join(", ");
                } else {
                    message = "There are no selected styles";
                }
                console.log(message);
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    class App extends React.Component {
        render() {
            return (
                <ButtonGroup ...
                    selectionMode="multiple"
                    onSelectionChanged={this.logSelectionChanged}
                />
            );
        }

        logSelectionChanged(e) {
            const selectedItemKeys = e.component.option("selectedItemKeys");
            let message;
            if(selectedItemKeys.length > 0) {
                message = "The following styles are selected: " + selectedItemKeys.join(", ");
            } else {
                message = "There are no selected styles"
            }
            console.log(message);
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().ButtonGroup()
        @* ... *@
        .SelectionMode(ButtonGroupSelectionMode.Multiple)
        .OnSelectionChanged("logSelectionChanged")
    )

    <script type="text/javascript">
        function logSelectionChanged (e) {
            const selectedItemKeys = e.component.option("selectedItemKeys");
            let message;
            if(selectedItemKeys.length > 0) {
                message = "The following styles are selected: " + selectedItemKeys.join(", ");
            } else {
                message = "There are no selected styles"
            }
            console.log(message);
        }
    </script>

---

Now you should be able to select multiple buttons and see messages like the following in the console:

    The following styles are selected: bold, underline, strike

You have configured basic **ButtonGroup** features. To take a more detailed look at this widget, explore the following resources:

- [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ButtonGroup/Overview) 
- [API Reference](/api-reference/10%20UI%20Widgets/dxButtonGroup '/Documentation/ApiReference/UI_Widgets/dxButtonGroup')