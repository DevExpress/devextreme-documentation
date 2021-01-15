Assign an array to the [items](/api-reference/10%20UI%20Components/dxDropDownButton/1%20Configuration/items '/api-reference/10%20UI%20Components/dxDropDownButton/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxDropDownButton/Configuration/items/'') property to populate the drop-down menu. Objects in this array should contain data fields that specify text, icons, and other menu item data. The data fields that match those listed in the [items](/api-reference/10%20UI%20Components/dxDropDownButton/1%20Configuration/items '/api-reference/10%20UI%20Components/dxDropDownButton/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxDropDownButton/Configuration/items/'') section are automatically recognized ([`icon`](/api-reference/10%20UI%20Components/dxDropDownButton/1%20Configuration/items '/api-reference/10%20UI%20Components/dxDropDownButton/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxDropDownButton/Configuration/items/''#icon) in the code below). To specify the field that stores item text, use the [displayExpr](/api-reference/10%20UI%20Components/dxDropDownButton/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Components/dxDropDownButton/Configuration/#displayExpr') property.

In addition, specify the data field that contains keys used to distinguish between menu items. You can use the [keyExpr](/api-reference/10%20UI%20Components/dxDropDownButton/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxDropDownButton/Configuration/#keyExpr') property to do it.

---
##### jQuery

    <!-- tab: index.js -->
    const actions = [
        { id: 1, text: "My profile", icon: "user" },
        { id: 2, text: "Messages", icon: "email" },
        { id: 3, text: "Contacts", icon: "group" },
        { id: 4, text: "Log out", icon: "runner" }
    ];

    $(function() {
        $("#myDropDownButton").dxDropDownButton({
            // ...
            items: actions,
            keyExpr: "id",
            displayExpr: "text"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-button ...
        [items]="actions"
        keyExpr="id"
        displayExpr="text">
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
        <DxDropDownButton ...
            :items="actions"
            key-expr="id"
            display-expr="text"
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
                    displayExpr="text"
                />
            );
        }
    }

---

If you run the code and click the button, you should see a list of three actions, but nothing happens when you click any of them. We fix this in the next step.
