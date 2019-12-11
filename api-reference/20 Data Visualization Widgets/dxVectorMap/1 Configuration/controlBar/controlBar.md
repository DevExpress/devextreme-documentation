---
id: dxVectorMap.Options.controlBar
type: Object
---
---
##### shortDescription
Configures the control bar.

---
Users can use the pan control and zoom bar in the control bar panel to navigate the map.

![DevExtreme Vector Map - Control Bar](/images/ChartJS/ControlBar.png)

The following code shows how to use the **controlBar** object to move the control bar to the right side of the map:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#vectorMapContainer").dxVectorMap({
            // ...
            controlBar: {
                horizontalAlignment: "right"
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-vector-map ... >
        <dxo-control-bar
            horizontalAlignment="right">
        </dxo-control-bar>
    </dx-vector-map>

    <!-- tab: app.module.ts -->
    // ...
    import { DxVectorMapModule } from 'devextreme-angular';

    @NgModule({
        imports: [
            // ...
            DxVectorMapModule
        ],
        // ...
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <dx-vector-map ... >
            <dx-control-bar
                horizontal-alignment="right"
            />
        </dx-vector-map>
    </template>

    <script>
    import { DxVectorMap, DxControlBar } from 'devextreme-vue/vector-map';

    export default {
        components: {
            DxVectorMap,
            DxControlBar
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import { VectorMap, ControlBar } from 'devextreme-react/vector-map';

    class App extends React.Component {
        render() {
            return (
                <VectorMap>
                    // ...
                    <ControlBar
                        horizontalAlignment="right"
                    />
                </VectorMap>
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().VectorMap()
        @* ... *@
        .ControlBar(cb => cb
            .HorizontalAlignment(HorizontalAlignment.Right)
        )    
    )

---