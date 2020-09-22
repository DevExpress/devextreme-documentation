Populate the [selectedItemKeys](/api-reference/10%20UI%20Widgets/dxButtonGroup/1%20Configuration/selectedItemKeys.md '/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/#selectedItemKeys') array with the keys of the buttons that should be preselected. In this tutorial, we add the *"italic"* button to this array.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#myButtonGroup").dxButtonGroup({
            // ...
            selectedItemKeys: [ "italic" ],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-button-group ...
        [(selectedItemKeys)]="selectedFontStyleNames">
    </dx-button-group>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        selectedFontStyleNames: string[] = [ "italic" ];
    }

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxButtonGroup ...
            v-model:selected-item-keys="selectedFontStyleNames"
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
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    class App extends React.Component {
        selectedFontStyleNames = [ 'italic' ];

        render() {
            return (
                <ButtonGroup ...
                    defaultSelectedItemKeys={this.selectedFontStyleNames}
                />
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().ButtonGroup()
        @* ... *@
        .SelectedItemKeys(new string[] { "italic" })
    )

---

If you run the code now, you should see the *"italic"* button initially selected.