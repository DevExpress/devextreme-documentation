---
id: dxGantt.Options.onScaleCellPrepared
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a scale cell is prepared.

##### param(e): Object
Information about the event.

##### field(e.component): dxGantt
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.scaleElement): DxElement
The scale cell.

##### field(e.scaleIndex): Number
Specifies the scale's index.

##### field(e.scaleType): Enums.GanttRenderScaleType
The scale type.

##### field(e.separatorElement): DxElement
The separator after the scale cell.

##### field(e.endDate): Date
The end date of the scale cell.

##### field(e.startDate): Date
The start date of the scale cell.

---

The example below illustrates how to customize the scale.

![DevExtreme Gantt - Customize Scale](/images/Gantt/customize-scale.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onScaleCellPrepared: function(e) {
                var scaleElement = e.scaleElement[0];
                if(e.scaleIndex === 0) {
                    scaleElement.style.backgroundColor = "silver";
                    scaleElement.innerText = "bottom";
                } else {
                    scaleElement.style.backgroundColor = "LightSteelBlue";
                    scaleElement.innerText = "top";
                }
                var border = e.separatorElement[0];
			    border.style.borderColor = "steelBlue";
            }
        });
    }); 

##### Angular

    <!--TypeScript-->
    import { DxGanttModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onScaleCellPrepared: function(e) {
            var scaleElement = e.scaleElement[0];
            if(e.scaleIndex === 0) {
                scaleElement.style.backgroundColor = "silver";
                scaleElement.innerText = "bottom";
            } else {
                scaleElement.style.backgroundColor = "LightSteelBlue";
                scaleElement.innerText = "top";
            }
            var border = e.separatorElement[0];
            border.style.borderColor = "steelBlue";            
        }
    }
    @NgModule({
        imports: [
            // ...
            DxGanttModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-gantt ...
        (onScaleCellPrepared)="onScaleCellPrepared($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @scale-cell-prepared="onScaleCellPrepared"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxGantt from 'devextreme-vue/gantt';
  
    export default {
        components: {
            DxGantt
        },
        methods: {
            onScaleCellPrepared: function(e) {
                var scaleElement = e.scaleElement[0];
                if(e.scaleIndex === 0) {
                    scaleElement.style.backgroundColor = "silver";
                    scaleElement.innerText = "bottom";
                } else {
                    scaleElement.style.backgroundColor = "LightSteelBlue";
                    scaleElement.innerText = "top";
                }
                var border = e.separatorElement[0];
                border.style.borderColor = "steelBlue";
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Gantt from 'devextreme-react/gantt';

    class App extends React.Component {
        // ...
        render() {
            return (
                <Gantt
                     //...
                     onScaleCellPrepared={this.onScaleCellPrepared}
                />
            );
        }
        onScaleCellPrepared: function(e) {
            var scaleElement = e.scaleElement[0];
            if(e.scaleIndex === 0) {
                scaleElement.style.backgroundColor = "silver";
                scaleElement.innerText = "bottom";
            } else {
                scaleElement.style.backgroundColor = "LightSteelBlue";
                scaleElement.innerText = "top";
            }
            var border = e.separatorElement[0];
            border.style.borderColor = "steelBlue";
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ID("gantt")
        .onScaleCellPrepared("gantt_scaleCellPrepared_handler")
        // ...
    )
    <script>
        function gantt_scaleCellPrepared_handler(e) {
            var scaleElement = e.scaleElement[0];
            if(e.scaleIndex === 0) {
                scaleElement.style.backgroundColor = "silver";
                scaleElement.innerText = "bottom";
            } else {
                scaleElement.style.backgroundColor = "LightSteelBlue";
                scaleElement.innerText = "top";
            }
            var border = e.separatorElement[0];
            border.style.borderColor = "steelBlue";
        }
    </script>

---

The code below colors the scale cells depending on the season:

![DevExtreme Gantt - Customize Scale by Seasons](/images/Gantt/customize-scale-seasons.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onScaleCellPrepared: function(e) {
                var scaleElement = e.scaleElement;
                var color = "";
                var month = e.end.getMonth();
                if (month > 1 && month < 5) {
                    color = "lightGreen";
                } else if (month > 4 && month < 8) {
                    color = "green";
                } else if (month > 7 && month < 11) {
                    color = "yellow";
                } else
                    color = "white";
                scaleElement.style.backgroundColor = color;
            }
        });
    }); 

##### Angular

    <!--TypeScript-->
    import { DxGanttModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onScaleCellPrepared: function(e) {
            var scaleElement = e.scaleElement;
            var color = "";
            var month = e.end.getMonth();
            if (month > 1 && month < 5) {
                color = "lightGreen";
            } else if (month > 4 && month < 8) {
                color = "green";
            } else if (month > 7 && month < 11) {
                color = "yellow";
            } else
                color = "white";
            scaleElement.style.backgroundColor = color;           
        }
    }
    @NgModule({
        imports: [
            // ...
            DxGanttModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-gantt ...
        (onScaleCellPrepared)="onScaleCellPrepared($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @scale-cell-prepared="onScaleCellPrepared"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxGantt from 'devextreme-vue/gantt';
  
    export default {
        components: {
            DxGantt
        },
        methods: {
            onScaleCellPrepared: function(e) {
                var scaleElement = e.scaleElement;
                var color = "";
                var month = e.end.getMonth();
                if (month > 1 && month < 5) {
                    color = "lightGreen";
                } else if (month > 4 && month < 8) {
                    color = "green";
                } else if (month > 7 && month < 11) {
                    color = "yellow";
                } else
                    color = "white";
                scaleElement.style.backgroundColor = color;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Gantt from 'devextreme-react/gantt';

    class App extends React.Component {
        // ...
        render() {
            return (
                <Gantt
                     //...
                     onScaleCellPrepared={this.onScaleCellPrepared}
                />
            );
        }
        onScaleCellPrepared: function(e) {
            var scaleElement = e.scaleElement;
            var color = "";
            var month = e.end.getMonth();
            if (month > 1 && month < 5) {
                color = "lightGreen";
            } else if (month > 4 && month < 8) {
                color = "green";
            } else if (month > 7 && month < 11) {
                color = "yellow";
            } else
                color = "white";
            scaleElement.style.backgroundColor = color;
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ID("gantt")
        .onScaleCellPrepared("gantt_scaleCellPrepared_handler")
        // ...
    )
    <script>
        function gantt_scaleCellPrepared_handler(e) {
            var scaleElement = e.scaleElement;
            var color = "";
            var month = e.end.getMonth();
            if (month > 1 && month < 5) {
                color = "lightGreen";
            } else if (month > 4 && month < 8) {
                color = "green";
            } else if (month > 7 && month < 11) {
                color = "yellow";
            } else
                color = "white";
            scaleElement.style.backgroundColor = color;
        }
    </script>

---
