The progress status displays a numeric value indicating the made progress. Whether the progress status is visible or not depends on the [showStatus](/api-reference/10%20UI%20Widgets/dxProgressBar/1%20Configuration/showStatus.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#showStatus') option. To format the status string, use the [statusFormat](/api-reference/10%20UI%20Widgets/dxProgressBar/1%20Configuration/statusFormat.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#statusFormat') function. It should return a string value.

---
##### jQuery

    <!--JavaScript-->
    $(function(){
         $("#progressBarContainer").dxProgressBar({
             value: 40,
             min: 0,
             max: 100,
             showStatus: true,
             statusFormat: function(value) {
                 return value + " USD";
             }
         });
    });

##### Angular

    <!--HTML-->
    <dx-progress-bar
        [min]="0"
        [max]="100"
        [value]="40"
        [showStatus]="true"
        [statusFormat]="statusFormat">
    </dx-progress-bar>

    <!--TypeScript-->
    import { DxProgressBarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        statusFormat(value) {
            return value + " USD";
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
            :value="40"
            :show-status="true"
            :status-format="statusFormat"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxProgressBar } from 'devextreme-vue/progress-bar';

    export default {
        components: {
            DxProgressBar
        },
        methods: {
            statusFormat(value) {
                return value + " USD";
            }
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

        statusFormat(value) {
            return value + " USD";
        }

        render() {
            return (
                <ProgressBar
                    min={0}
                    max={100}
                    value={40}
                    showStatus={true}
                    statusFormat={this.statusFormat}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [ProgressBar - Handle the Value Change Event](/concepts/05%20Widgets/ProgressBar/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/ProgressBar/Handle_the_Value_Change_Event')
- [ProgressBar Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ProgressBar/Overview)
- [ProgressBar API Reference](/api-reference/10%20UI%20Widgets/dxProgressBar '/Documentation/ApiReference/UI_Widgets/dxProgressBar/')

[tags]progress bar, progressBar, editor, progress status, showStatus, statusFormat