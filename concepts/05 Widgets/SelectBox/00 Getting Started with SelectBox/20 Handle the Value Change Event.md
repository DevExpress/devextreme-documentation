Implement the [onValueChanged](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#onValueChanged') function to perform an action when a user selects an item. In the code below, this function logs the selected item's `ID` and `Name`.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#selectBox").dxSelectBox({
            // ...
            onValueChanged: function(e) {
                const item = data.filter(i => i.ID === e.value)[0];
                console.log(item.ID + ": " + item.Name);
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-select-box ...
        (onValueChanged)="handleValueChange($event)">
    </dx-select-box>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...

        onValueChanged(e) {
            const item = this.data.filter(i => i.ID === e.value)[0];
            console.log(item.ID + ": " + item.Name);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSelectBox ...
            @value-changed="onValueChanged"            
        />
    </template>

    <script>
    // ...

    export default {
        // ...
        methods: {
            onValueChanged(e) {
                const item = data.filter(i => i.ID === e.value)[0];
                console.log(item.ID + ": " + item.Name);
            }
        },

    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...

    class App extends React.Component {
        onValueChanged(e) {
            const item = data.filter(i => i.ID === e.value)[0];
            console.log(item.ID + ": " + item.Name);
        }

        render() {
            return (
                <SelectBox ...
                    onValueChanged={this.onValueChanged}                   
                />
            );
        }
    }
    export default App;

---

Next, we will group the drop-down items.