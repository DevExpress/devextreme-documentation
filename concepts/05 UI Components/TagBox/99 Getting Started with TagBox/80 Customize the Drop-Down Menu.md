#include common-customize-dropdown-menu For example, the following code sets the height of TagBox's drop-down menu to 350 pixels:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#tagBox").dxTagBox({
            // ...
            dropDownOptions: {
                height: 350
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
            height: 350
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
                    height: 350
                }
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const dropDownOptions = {
        height: 350
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

