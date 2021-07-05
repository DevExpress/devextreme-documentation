The DropDownButton uses the [Popup](/Documentation/Guide/UI_Components/Popup/Getting_Started_with_Popup/) component as a drop-down menu. To customize the menu, specify [Popup properties](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/) in the [dropDownOptions](/Documentation/ApiReference/UI_Components/dxDropDownButton/Configuration/#dropDownOptions) object. For example, the following code sets the height of the DropDownButton's menu to 150 pixels:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#myDropDownButton").dxDropDownButton({
            // ...
            dropDownOptions: {
                height: 150
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-button ...
        [dropDownOptions]="dropDownOptions">
    </dx-drop-down-button>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        dropDownOptions = {
            height: 150
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDropDownButton ...
            :drop-down-options="dropDownOptions"
        />
    </template>

    <script>
    // ...
    export default {
        // ...
        data() {
            return {
                // ...
                dropDownOptions: {
                    height: 150
                }
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const dropDownOptions = {
        height: 150
    };

    class App extends React.Component {
        render() {
            return (
                <DropDownButton ...
                    dropDownOptions={dropDownOptions}
                />
            );
        }
    }

    export default App;

---
