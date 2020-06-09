The **ProgressBar** is a widget that shows current progress.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ProgressBar/Overview/"
}

The following code adds a simple **ProgressBar** to your page. The **value** option specifies the current value. The **min** and **max** options limit the range of accepted values. The progress is measured in percentages and calculated by the following formula: `(value / max) * 100`. If the current progress is unknown yet, set the **value** option to **false**.

---
##### jQuery

    <!--HTML-->
    <div id="progressBarContainer"></div>

    <!--JavaScript-->
    $(function(){
        $("#progressBarContainer").dxProgressBar({
            min: 0,
            max: 100,
            value: 49
        });
    });

##### Angular

    <!--HTML-->
    <dx-progress-bar
        [min]="0"
        [max]="100"
        [value]="49">
    </dx-progress-bar>

    <!--TypeScript-->
    import { DxProgressBarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxProgressBarModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxProgressBar
            :min="0"
            :max="100"
            :value="49"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxProgressBar } from 'devextreme-vue/progress-bar';

    export default {
        components: {
            DxProgressBar
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { ProgressBar } from 'devextreme-react/progress-bar';

    class App extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <ProgressBar
                    min={0}
                    max={100}
                    value={49}
                />
            );
        }
    }

    export default App;

---

When the **ProgressBar** reaches the [maximum](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#max') value, the [complete](/api-reference/10%20UI%20Widgets/dxProgressBar/4%20Events/complete.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Events/#complete') event is raised. You can handle it using the [onComplete](/api-reference/10%20UI%20Widgets/dxProgressBar/1%20Configuration/onComplete.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#onComplete') function.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#progressBarContainer").dxProgressBar({
            min: 0,
            max: 100,
            value: 49,
            onComplete: function() {
                DevExpress.ui.dialog.alert("Completed");
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-progress-bar
        [min]="0"
        [max]="100"
        [value]="49"
        [onComplete]="handleComplete">
    </dx-progress-bar>

    <!--TypeScript-->
    import { DxProgressBarModule } from "devextreme-angular";
    import dialog from "devextreme/ui/dialog";
    // ...
    export class AppComponent {
        handleComplete(e) {
            dialog.alert('Completed');
        }
    }
    @NgModule({
        imports: [
            // ...
            DxProgressBarModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxProgressBar
            :min="0"
            :max="100"
            :value="49"
            @complete="handleComplete"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxProgressBar } from 'devextreme-vue/progress-bar';
    import dialog from "devextreme/ui/dialog";

    export default {
        components: {
            DxProgressBar
        },
        methods: {
            handleComplete() {
                dialog.alert('Completed');
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { ProgressBar } from 'devextreme-react/progress-bar';
    import dialog from "devextreme/ui/dialog";

    class App extends React.Component {
        constructor(props) {
            super(props);
        }

        onComplete() {
            dialog.alert('Completed');
        }

        render() {
            return (
                <ProgressBar
                    min={0}
                    max={100}
                    value={49}
                    onComplete={this.onComplete}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
#include common-link-configurewidget
- [ProgressBar - Progress Status](/concepts/05%20Widgets/ProgressBar/05%20Progress%20Status.md '/Documentation/Guide/Widgets/ProgressBar/Progress_Status')
- [ProgressBar - Handle the Value Change Event](/concepts/05%20Widgets/ProgressBar/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/ProgressBar/Handle_the_Value_Change_Event')
- [ProgressBar API Reference](/api-reference/10%20UI%20Widgets/dxProgressBar '/Documentation/ApiReference/UI_Widgets/dxProgressBar/')

[tags]dxprogressbar, progress bar, progressBar, editor, overview, range, min, max, complete