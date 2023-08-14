To align an icon to the right, assign `true` to the [rtlEnabled](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#rtlEnabled) property:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#button").dxButton({
            // ...
            icon: "comment",
            rtlEnabled: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-button ...
        icon="comment"
        [rtlEnabled]="true">
    </dx-button>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxButton ...
            icon="comment"
            :rtl-enabled="true"
        />
    </template>

##### React

    <!-- tab: App.js -->
    // ...

    function App() {
        return (
            <Button ...
                icon="comment"
                rtlEnabled={true}
            />
        );
    }

    export default App;

---

To align an icon to any other position, use CSS rules. For example:

    <!-- tab: CSS -->
    .dx-button .dx-icon {  
        padding-left: 15px;  
    } 