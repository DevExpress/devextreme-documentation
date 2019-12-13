To populate the drop-down menu, assign an array to the [items](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/items/') option. Objects in the array should provide text, icons, and other menu item data. The data fields that match those listed in the [items](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/items/') section are automatically recognized ([`text`](/api-reference/_hidden/CollectionWidgetItem/text.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/items/#text') and [`icon`](/api-reference/_hidden/dxListItem/icon.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/items/#icon') in the code below). If you store item text in a field with a different name, use the [displayExpr](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#displayExpr') option to map the field.

In addition, specify the data field that provides keys used to distinguish between menu items. You can use the [keyExpr](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#keyExpr') option to do it.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var actions = [
            { id: 1, text: "My profile", icon: "user" },
            { id: 2, text: "Messages", icon: "email" },
            { id: 3, text: "Contacts", icon: "group" },
            { id: 4, text: "Log out", icon: "runner" }
        ];

        $("#myDropDownButton").dxDropDownButton({
            // ...
            items: actions,
            keyExpr: "id"
            // displayExpr: "text"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-button ...
        [items]="actions"
        keyExpr="id">
        <!-- displayExpr="text" -->
    </dx-drop-down-button>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        actions: Array<{id: Number, text: String, icon: String}> = [
            { id: 1, text: "My profile", icon: "user" },
            { id: 2, text: "Messages", icon: "email" },
            { id: 3, text: "Contacts", icon: "group" },
            { id: 4, text: "Log out", icon: "runner" }
        ];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-drop-down-button ...
            :items="actions"
            key-expr="id"
            <!-- display-expr="text" -->
        />
    </template>

    <script>
    // ...
    const actions = [
        { id: 1, text: "My profile", icon: "user" },
        { id: 2, text: "Messages", icon: "email" },
        { id: 3, text: "Contacts", icon: "group" },
        { id: 4, text: "Log out", icon: "runner" }
    ];

    export default {
        // ...
        data() {
            return {
                actions
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const actions = [
        { id: 1, text: "My profile", icon: "user" },
        { id: 2, text: "Messages", icon: "email" },
        { id: 3, text: "Contacts", icon: "group" },
        { id: 4, text: "Log out", icon: "runner" }
    ];

    class App extends React.Component {
        render() {
            return (
                <DropDownButton ...
                    items={actions}
                    keyExpr="id"
                    // displayExpr="text"
                />
            );
        }
    }

---

If you run the code and click the button, you should see a list of three actions, but nothing happens when you click any of them. We fix this in the next step.
