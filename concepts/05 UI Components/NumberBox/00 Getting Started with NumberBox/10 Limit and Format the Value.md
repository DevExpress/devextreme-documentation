If you need to specify the initial value, assign it to the [value](/api-reference/10%20UI%20Components/dxNumberBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#value') property. You can also define a range of the [min](/api-reference/10%20UI%20Components/dxNumberBox/1%20Configuration/min.md '/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#min') and [max](/api-reference/10%20UI%20Components/dxNumberBox/1%20Configuration/max.md '/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#max') values the user can enter into the input field. 

NumberBox allows you to display the input values in a custom format. To define this format, assign it to the [format](/api-reference/10%20UI%20Components/dxNumberBox/1%20Configuration/format.md '/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#format') property.


---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#number-box").dxNumberBox({
            value: 261991,
            min: 0,
            max: 1000000,
            format: "$ #,##0.##"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-color-box
        [value]="261991"
        [min]="0"
        [max]="1000000"
        format="$ #,##0.##"
    >
    </dx-color-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxNumberBox
            :value="261991"
            :min="0"
            :max="1000000"
            format="$ #,##0.##"
        />
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    
    function App() {
        // ...
        return (
            <NumberBox
                value={261991}
                min={0}
                max={1000000}
                format="$ #,##0.##"
            />
        );
    }

    export default App;

---