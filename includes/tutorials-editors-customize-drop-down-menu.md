The {WidgetName} uses the [Popup](/Documentation/Guide/UI_Components/Popup/Getting_Started_with_Popup/) component as a drop-down menu. To customize the menu, specify [Popup properties](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/) in the [dropDownOptions](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#dropDownOptions) object. For example, the following code sets the height of {WidgetName}'s drop-down menu to ${{value}} pixels:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            // ...
            dropDownOptions: {
                height: ${{value}}
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        [dropDownOptions]="dropDownOptions">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        dropDownOptions = {
            height: ${{value}}
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :drop-down-options="dropDownOptions"
        />
    </template>

    <script>
    // ...
    export default {
        data() {
            return {
                // ...
                dropDownOptions: {
                    height: ${{value}}
                }
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const dropDownOptions = {
        height: ${{value}}
    };

    function App() {
        return (
            <{WidgetName} ...
                dropDownOptions={dropDownOptions}
            />
        );
    }

    export default App;

---
