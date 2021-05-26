#include common-customize-dropdown-menu For example, the following code sets the maximum height of TagBox's drop-down menu to 300 pixels:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#tagBox").dxTagBox({
            // ...
            dropDownOptions: {
                maxHeight: 300
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tag-box ...
        [dropDownOptions]="dropDownOptions">
    </dx-tag-box>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        dropDownOptions = {
            maxHeight: 300
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTagBox ...
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
                    maxHeight: 300
                }
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const dropDownOptions = {
        maxHeight: 300
    };

    function App() {
        return (
            <TagBox ...
                dropDownOptions={dropDownOptions}
            />
        );
    }

    export default App;

---

