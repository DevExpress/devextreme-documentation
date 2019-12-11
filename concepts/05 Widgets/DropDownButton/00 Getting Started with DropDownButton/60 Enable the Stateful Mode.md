If the **DropDownButton** should remember the selected drop-down menu item, switch it to the stateful mode. Set the **useSelectMode** option to **true** and make the following replacements in your code:

- Use [onSelectionChanged](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#onSelectionChanged') instead of **onItemClick**.        

    You should track selection changes instead of handling item clicks.

- Use the [selectedItemKey](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/selectedItemKey.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#selectedItemKey') to specify the initially selected item.

    In stateful mode, the main button area displays the text and icon from the selected item. The **selectedItemKey** allows you to get or set the current selection. Items are identified using keys from the data field that you assigned to the [keyExpr](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#keyExpr') option (see the [Populate the Drop-Down Menu](/concepts/05%20Widgets/DropDownButton/00%20Getting%20Started%20with%20DropDownButton/30%20Populate%20the%20Drop-Down%20Menu.md '/Documentation/Guide/Widgets/DropDownButton/Getting_Started_with_DropDownButton/#Populate_the_Drop-Down_Menu') step).

For more information on the stateful mode, refer to the [useSelectMode](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/useSelectMode.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#useSelectMode') description.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#myDropDownButton").dxDropDownButton({
            // ...
            // text: "Sandra Johnson",
            // icon: "user"
            // onItemClick: function(e) {
            //     console.log(e.itemData.text + " was clicked");
            // },

            useSelectMode: true,
            selectedItemKey: 1,
            onSelectionChanged: function(e) {
                console.log(e.item.text + " was selected; " + e.previousItem.text + " was deselected");
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-button ...
        <!-- text="Sandra Johnson" -->
        <!-- icon="user" -->
        <!-- (onItemClick)="logAction($event)" -->
        [useSelectMode]="true"
        [selectedItemKey]="1"
        (onSelectionChanged)="logSelectionChanged($event)">
    </dx-drop-down-button>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        // logAction(e) {
        //     console.log(e.itemData.text + " was clicked");
        // }
        logSelectionChanged(e) {
            console.log(e.item.text + " was selected; " + e.previousItem.text + " was deselected");
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-drop-down-button
            <!-- text="Sandra Johnson" -->
            <!-- icon="user" -->
            <!-- @item-click="logAction" -->
            :use-select-mode="true"
            :selected-item-key="1"
            @selection-changed="logSelectionChanged"
        />
    </template>

    <script>
    // ...
    export default {
        // ...
        methods: {
            // ...
            // logAction(e) {
            //    console.log(e.itemData.text + " was clicked");
            // }
            logSelectionChanged(e) {
                console.log(e.item.text + " was selected; " + e.previousItem.text + " was deselected");
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    class App extends React.Component {
        // ...
        // logAction(e) {
        //     console.log(e.itemData.text + " was clicked");
        // }

        logSelectionChanged(e) {
            console.log(e.item.text + " was selected; " + e.previousItem.text + " was deselected");
        }

        render() {
            return (
                <DropDownButton
                    // text="Sandra Johnson"
                    // icon="user"
                    // onItemClick={this.logAction}
                    useSelectMode={true}
                    selectedItemKey={1}
                    onSelectionChanged={this.logSelectionChanged}
                />
            );
        }
    }
    export default App;


---

Run the code, open the drop-down menu, and select an item. You should see that the button's text and icon are changed according to the item you selected. In addition, the browser's console should contain messages like the following:

    My profile was selected; Log out was deselected
    Contacts was selected; My profile was deselected

You have configured basic **DropDownButton** features. For more information about this widget, explore the following resources:

- [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownButton/Overview)
- [API Reference](/api-reference/10%20UI%20Widgets/dxDropDownButton '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/')
