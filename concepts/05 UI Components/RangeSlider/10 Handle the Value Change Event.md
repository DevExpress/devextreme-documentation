To process new RangeSlider values, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the UI component, assign it to the [onValueChanged](/api-reference/10%20UI%20Components/dxRangeSlider/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Components/dxRangeSlider/Configuration/#onValueChanged') property when you configure the UI component.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#rangeSliderContainer").dxRangeSlider({
            onValueChanged: function (e) {
                const newStartValue = e.start;
                const newEndValue = e.end;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-range-slider
        [(start)]="startValue"
        [(end)]="endValue"
        (onValueChanged)="handleValueChange($event)">
    </dx-range-slider>

    <!--TypeScript-->
    import { DxRangeSliderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        startValue = 20;
        endValue = 60;

        handleValueChange (e) {
            const newStartValue = e.start;
            const newEndValue = e.end;
            // Event handling commands go here
        };
    }
    @NgModule({
        imports: [
            // ...
            DxRangeSliderModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxRangeSlider 
            v-model:start="startValue"
            v-model:end="endValue"
            @value-changed="handleValueChange"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { DxRangeSlider } from 'devextreme-vue/range-slider';

    export default {
        components: {
            DxRangeSlider
        },
        data() {
            return {
                startValue: 20,
                endValue: 60
            };
        },
        methods: {
            handleValueChange(e) {
                const newStartValue = e.start;
                const newEndValue = e.end;
                // Event handling commands go here
            }
        }
    }
    </script>

##### React

    import React, { useCallback, useState } from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { RangeSlider, type RangeSliderTypes } from 'devextreme-react/range-slider';

    function App() {
        const [startValue, setStartValue] = useState<number | undefined>(20);
        const [endValue, setEndValue] = useState<number | undefined>(60);

        const handleValueChange = useCallback((e: RangeSliderTypes.ValueChangedEvent) => {
            const newStartValue = e.start;
            const newEndValue = e.end;
            // Event handling commands go here

            setStartValue(newStartValue);
            setEndValue(newEndValue);
        }, []);

        return (
            <RangeSlider
                start={startValue}
                end={endValue}
                onValueChanged={handleValueChange}
            />
        );
    }

    export default App;

---

---

##### jQuery

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxRangeSlider/Methods/#oneventName_eventHandler') method.

    <!--JavaScript-->
    const valueChangedHandler1 = function (e) {
        const newStartValue = e.start;
        const newEndValue = e.end;
        // First handler of the "valueChanged" event
    };

    const valueChangedHandler2 = function (e) {
        const newStartValue = e.start;
        const newEndValue = e.end;
        // Second handler of the "valueChanged" event
    };

    $("#rangeSliderContainer").dxRangeSlider("instance")
        .on("valueChanged", valueChangedHandler1)
        .on("valueChanged", valueChangedHandler2);

---

#####See Also#####
#include common-link-handleevents
- [RangeSlider Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSlider/Overview/)
- [RangeSlider API Reference](/api-reference/10%20UI%20Components/dxRangeSlider '/Documentation/ApiReference/UI_Components/dxRangeSlider/')

[tags]range slider, rangeSlider, editor, get value, set value