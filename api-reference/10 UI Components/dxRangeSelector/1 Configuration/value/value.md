---
id: dxRangeSelector.Options.value
type: Array<Number, String, Date> | Object
inherits: VisualRange
firedEvents: valueChanged
notUsedInTheme: 
---
---
##### shortDescription
The selected range (initial or current). Equals the entire [scale](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/') when not set.

---

This property accepts one of the following:

- **A two-item array**    

    Specifies the range's start and end. The array can contain a pair of numeric, string, or date-time values, depending on the scale's [valueType](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/valueType.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/#valueType'). You can also set one of the array values to **null** to specify an open-ended range.

    ---

    ##### jQuery

        <!-- tab: index.js -->
        $(#rangeSelector).dxRangeSelector({
            value: [50, 70]
        })
        // Open-ended range
        $(#rangeSelector).dxRangeSelector({
            value: [null, 70]
        })

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-range-selector [value]="[50, 70]" ></dx-range-selector>
        <!-- Open-ended range -->
        <dx-range-selector [value]="[null, 70]" ></dx-range-selector>

    ##### Vue

        <!-- tab: App.vue -->
        <DxRangeSelector>
            <DxRangeSelector :value="[50, 70]" />
        </DxRangeSelector>
        <!-- Open-ended range -->
        <DxRangeSelector>
            <DxRangeSelector :value="[null, 70]" />
        </DxRangeSelector>

    ##### React

        <!-- tab: App.tsx -->
        <RangeSelector>
            <RangeSelector value={[50, 70]} />
        </RangeSelector>
        <!-- Open-ended range -->
        <RangeSelector>
            <RangeSelector value={[null, 70]} />
        </RangeSelector>

    ---

- **An object with the [startValue](/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/value/#startValue) and [endValue](/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/value/#endValue) fields**    

    An alternative to the two-item array.

    ---

    ##### jQuery

        <!-- tab: index.js -->
        $(#rangeSelector).dxRangeSelector({
            value: { startValue: 50, endValue: 70 }
        })
        // Open-ended range
        $(#rangeSelector).dxRangeSelector({
            value: { startValue: null, endValue: 70 }
        })

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-range-selector [value]="{ startValue: 50, endValue: 70 }" ></dx-range-selector>
        <!-- Open-ended range -->
        <dx-range-selector [value]="{ startValue: null, endValue: 70 }" ></dx-range-selector>

    ##### Vue

    The following code snippet demonstrates **value** defined as a `<DxRangeSelector>` attribute:

        <!-- tab: App.vue -->
        <DxRangeSelector :value="{ startValue: null, endValue: 70 }" />
        <!-- Open-ended range -->
        <DxRangeSelector :value="{ startValue: null, endValue: 70 }" />

    The following code snippet demonstrates **value** defined as a `<DxValue>` selector:

        <DxRangeSelector>
            <DxValue startValue="50" endValue="70" />
        </DxRangeSelector>
        <!-- Open-ended range -->
        <DxRangeSelector>
            <DxValue :startValue="null" endValue="70" />
        </DxRangeSelector>

    ##### React

    The following code snippet demonstrates **value** defined as a `<RangeSelector>` attribute:

        <!-- tab: App.tsx -->
        <RangeSelector value={{ startValue: null, endValue: 70 }} />
        <!-- Open-ended range -->
        <RangeSelector value={{ startValue: null, endValue: 70 }} />

    The following code snippet demonstrates **value** defined as a `<Value>` selector:

        <RangeSelector>
            <Value startValue="50" endValue="70" />
        </RangeSelector>
        <!-- Open-ended range -->
        <RangeSelector>
            <Value startValue={null} endValue="70" />
        </RangeSelector>

    ---

- **An object with the [length](/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/value/length/) and startValue or endValue**      

    Specifies the range using length and start or end values.

    ---

    ##### jQuery

        <!-- tab: index.js -->
        $(#rangeSelector).dxRangeSelector({
            value: { startValue: 50, length: 20 }
        })
        // or
        $(#rangeSelector).dxRangeSelector({
            value: { endValue: 70, length: 20 }
        })

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-range-selector [value]="{ startValue: 50, length: 20 }" ></dx-range-selector>
        <!-- or -->
        <dx-range-selector [value]="{ endValue: 70, length: 20 }" ></dx-range-selector>

    ##### Vue

    The following code snippet demonstrates **value** defined as an attribute of `<DxRangeSelector>`:

        <!-- tab: App.vue -->
        <DxRangeSelector :value="{ startValue: 50, length: 20 }" />
        <!-- or -->
        <DxRangeSelector :value="{ endValue: 70, length: 20 }" />

    The following code snippet demonstrates **value** defined as a selector (`<DxValue>`):

        <DxRangeSelector>
            <DxValue startValue="50" length="20" />
        </DxRangeSelector>
        <!-- or -->
        <DxRangeSelector>
            <DxValue endValue="70" length="20" />
        </DxRangeSelector>

    ##### React

    The following code snippet demonstrates **value** defined as an attribute of `<RangeSelector>`:

        <!-- tab: App.tsx -->
        <RangeSelector value={{ startValue: 50, length: 20 }} />
        <!-- or -->
        <RangeSelector value={{ endValue: 70, length: 20 }} />

    The following code snippet demonstrates **value** defined as a selector (`<Value>`):

        <RangeSelector>
            <Value startValue="50" length="20" />
        </RangeSelector>
        <!-- or -->
        <RangeSelector>
            <Value endValue="70" length="20" />
        </RangeSelector>

    ---

    If you specify only **length**, the component defines the **endValue** property as the largest scale value. 

---

##### Angular

[note] The component does not support **value** properties defined as `dxo-` selectors.

---

#####See Also#####
- [selectedRangeUpdateMode](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/selectedRangeUpdateMode.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#selectedRangeUpdateMode')
- [onValueChanged](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#onValueChanged')
- **behavior**.[callValueChanged](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/behavior/callValueChanged.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/behavior/#callValueChanged')
- [getValue()](/api-reference/10%20UI%20Components/dxRangeSelector/3%20Methods/getValue().md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Methods/#getValue') | [setValue(value)](/api-reference/10%20UI%20Components/dxRangeSelector/3%20Methods/setValue(value).md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Methods/#setValuevalue')