This property accepts one of the following:

- **A two-item array**    

    Specifies the range's start and end. The array can contain a pair of numeric, string, or date-time values, depending on the ${{element}}'s ${{elementType}}. You can also set one of the array values to **null** to specify an open-ended range.

    ---

    ##### jQuery

        <!-- tab: index.js -->
        $(#${{componentNameLowercase}}).dx${{componentName}}({
            ${{jquerySelector}}: {
                ${{objectName}}: [50, 70]
            }
        })
        // Open-ended range
        $(#${{componentNameLowercase}}).dx${{componentName}}({
            ${{jquerySelector}}: {
                ${{objectName}}: [null, 70]
            }
        })

    ##### Angular

        <!-- tab: app.component.html -->
        <${{angularComponentName}}>
            <${{angularSelector}} [${{objectName}}]="[50, 70]" ></${{angularSelector}}>
        </${{angularComponentName}}>
        <!-- Open-ended range -->
        <${{angularComponentName}}>
            <${{angularSelector}} [${{objectName}}]="[null, 70]" ></${{angularSelector}}>
        </${{angularComponentName}}>

    ##### Vue

        <!-- tab: App.vue -->
        <Dx${{componentName}}>
            <Dx${{parentSelector}} :${{objectName}}="[50, 70]" />
        </Dx${{componentName}}>
        <!-- Open-ended range -->
        <Dx${{componentName}}>
            <Dx${{parentSelector}} :${{objectName}}="[null, 70]" />
        </Dx${{componentName}}>

    ##### React

        <!-- tab: App.tsx -->
        <${{componentName}}>
            <${{parentSelector}} ${{objectName}}={[50, 70]} />
        </${{componentName}}>
        <!-- Open-ended range -->
        <${{componentName}}>
            <${{parentSelector}} ${{objectName}}={[null, 70]} />
        </${{componentName}}>

    ---

- **An object with the [startValue](${{basepath}}/#startValue) and [endValue](${{basepath}}/#endValue) fields**    

    An alternative to the two-item array.

    ---

    ##### jQuery

        <!-- tab: index.js -->
        $(#${{componentNameLowercase}}).dx${{componentName}}({
            ${{jquerySelector}}: {
                ${{objectName}}: { startValue: 50, endValue: 70 }
            }
        })
        // Open-ended range
        $(#${{componentNameLowercase}}).dx${{componentName}}({
            ${{jquerySelector}}: {
                ${{objectName}}: { startValue: null, endValue: 70 }
            }
        })

    ##### Angular

        <!-- tab: app.component.html -->
        <${{angularComponentName}}>
            <${{angularSelector}} [${{objectName}}]="{ startValue: 50, endValue: 70 }" ></${{angularSelector}}>
        </${{angularComponentName}}>
        <!-- Open-ended range -->
        <${{angularComponentName}}>
            <${{angularSelector}} [${{objectName}}]="{ startValue: null, endValue: 70 }" ></${{angularSelector}}>
        </${{angularComponentName}}>

    ##### Vue

    The following code snippet demonstrates **${{objectName}}** defined as a `<Dx${{parentSelector}}>` attribute:

        <!-- tab: App.vue -->
        <Dx${{componentName}}>
            <Dx${{parentSelector}} :${{objectName}}="{ startValue: null, endValue: 70 }" />
        </Dx${{componentName}}>
        <!-- Open-ended range -->
        <Dx${{componentName}}>
            <Dx${{parentSelector}} :${{objectName}}="{ startValue: null, endValue: 70 }" />
        </Dx${{componentName}}>

    The following code snippet demonstrates **${{objectName}}** defined as a `<Dx${{objectSelector}}>` selector:

        <Dx${{componentName}}>
            <Dx${{parentSelector}}>
                <Dx${{objectSelector}} startValue="50" endValue="70" />
            </Dx${{parentSelector}}>
        </Dx${{componentName}}>
        <!-- Open-ended range -->
        <Dx${{componentName}}>
            <Dx${{parentSelector}}>
                <Dx${{objectSelector}} :startValue="null" endValue="70" />
            </Dx${{parentSelector}}>
        </Dx${{componentName}}>

    ##### React

    The following code snippet demonstrates **${{objectName}}** defined as a `<${{parentSelector}}>` attribute:

        <!-- tab: App.tsx -->
        <${{componentName}}>
            <${{parentSelector}} ${{objectName}}={{ startValue: null, endValue: 70 }} />
        </${{componentName}}>
        <!-- Open-ended range -->
        <${{componentName}}>
            <${{parentSelector}} ${{objectName}}={{ startValue: null, endValue: 70 }} />
        </${{componentName}}>

    The following code snippet demonstrates **${{objectName}}** defined as a `<${{objectSelector}}>` selector:

        <${{componentName}}>
            <${{parentSelector}}>
                <${{objectSelector}} startValue="50" endValue="70" />
            </${{parentSelector}}>
        </${{componentName}}>
        <!-- Open-ended range -->
        <${{componentName}}>
            <${{parentSelector}}>
                <${{objectSelector}} startValue={null} endValue="70" />
            </${{parentSelector}}>
        </${{componentName}}>

    ---

- **An object with the [length](${{basepath}}/length/) and startValue or endValue**      

    Specifies the range using length and start or end values.

    ---

    ##### jQuery

        <!-- tab: index.js -->
        $(#${{componentNameLowercase}}).dx${{componentName}}({
            ${{jquerySelector}}: {
                ${{objectName}}: { startValue: 50, length: 20 }
            }
        })
        // or
        $(#${{componentNameLowercase}}).dx${{componentName}}({
            ${{jquerySelector}}: {
                ${{objectName}}: { endValue: 70, length: 20 }
            }
        })

    ##### Angular

        <!-- tab: app.component.html -->
        <${{angularComponentName}}>
            <${{angularSelector}} [${{objectName}}]="{ startValue: 50, length: 20 }" ></${{angularSelector}}>
        </${{angularComponentName}}>
        <!-- or -->
        <${{angularComponentName}}>
            <${{angularSelector}} [${{objectName}}]="{ endValue: 70, length: 20 }" ></${{angularSelector}}>
        </${{angularComponentName}}>

    ##### Vue

    The following code snippet demonstrates **${{objectName}}** defined as an attribute of `<Dx${{parentSelector}}>`:

        <!-- tab: App.vue -->
        <Dx${{componentName}}>
            <Dx${{parentSelector}} :${{objectName}}="{ startValue: 50, length: 20 }" />
        </Dx${{componentName}}>
        <!-- or -->
        <Dx${{componentName}}>
            <Dx${{parentSelector}} :${{objectName}}="{ endValue: 70, length: 20 }" />
        </Dx${{componentName}}>

    The following code snippet demonstrates **${{objectName}}** defined as a selector (`<Dx${{objectSelector}}>`):

        <Dx${{componentName}}>
            <Dx${{parentSelector}}>
                <Dx${{objectSelector}} startValue="50" length="20" />
            </Dx${{parentSelector}}>
        </Dx${{componentName}}>
        <!-- or -->
        <Dx${{componentName}}>
            <Dx${{parentSelector}}>
                <Dx${{objectSelector}} endValue="70" length="20" />
            </Dx${{parentSelector}}>
        </Dx${{componentName}}>

    ##### React

    The following code snippet demonstrates **${{objectName}}** defined as an attribute of `<${{parentSelector}}>`:

        <!-- tab: App.tsx -->
        <${{componentName}}>
            <${{parentSelector}} ${{objectName}}={{ startValue: 50, length: 20 }} />
        <${{componentName}}>
        <!-- or -->
        <${{componentName}}>
            <${{parentSelector}} ${{objectName}}={{ endValue: 70, length: 20 }} />
        <${{componentName}}>

    The following code snippet demonstrates **${{objectName}}** defined as a selector (`<${{objectSelector}}>`):

        <${{componentName}}>
            <${{parentSelector}}>
                <${{objectSelector}} startValue="50" length="20" />
            </${{parentSelector}}>
        <${{componentName}}>
        <!-- or -->
        <${{componentName}}>
            <${{parentSelector}}>
                <${{objectSelector}} endValue="70" length="20" />
            </${{parentSelector}}>
        <${{componentName}}>

    ---

    If you specify only **length**, the component defines the **endValue** property as the largest scale value.

---

##### Angular

[note] The component does not support **${{objectName}}** properties defined as `dxo-` selectors.

---