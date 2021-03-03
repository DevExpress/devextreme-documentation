#include common-customize-dropdown-menu For example, the following code sets the height of SelectBox's drop-down menu to 150 pixels:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#selectBox").dxSelectBox({
            // ...
            dropDownOptions: {
                height: 150
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-select-box ...
        [dropDownOptions]="dropDownOptions">
    </dx-select-box>

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
        <DxSelectBox ...
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
                <SelectBox ...
                    dropDownOptions={dropDownOptions}
                />
            );
        }
    }

    export default App;

---