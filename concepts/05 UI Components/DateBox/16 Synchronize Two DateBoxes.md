DateBox UI components are often coupled for selecting a date interval. In this case, you need to synchronize the **DateBoxes** to prevent a user from selecting an interval whose start date is later than the end date. For this, limit one DateBox's range depending on the other's value as shown in the example below. Alternatively, you can use the [DateRangeBox](/Documentation/Guide/UI_Components/DateRangeBox/Getting_Started_with_DateRangeBox/) component.

---
##### jQuery

    <!--JavaScript-->$(function() {
        const startDate = $("#startDate").dxDateBox({
            value: new Date(),
            onValueChanged: function (e) {
                endDate.option("min", e.value);
            }
        }).dxDateBox("instance");
        const endDate = $("#endDate").dxDateBox({
            value: new Date(),
            onValueChanged: function (e) {
                startDate.option("max", e.value);
            }
        }).dxDateBox("instance");
    });

    <!--HTML--><div id="startDate"></div>
    <div id="endDate"></div>

##### Angular

    <!--HTML--><dx-date-box 
        [(max)]="endValue"
        [(value)]="startValue">
    </dx-date-box>
    <dx-date-box 
        [(min)]="startValue"
        [(value)]="endValue">
    </dx-date-box>

    <!--TypeScript-->
    import { DxDateBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        startValue: Date = new Date();
        endValue: Date = new Date();
    }
    @NgModule({
        imports: [
            // ...
            DxDateBoxModule
        ],
        // ...
    })

##### AngularJS

    <!--HTML--><div dx-date-box="{
        bindingOptions: {
            max: 'endValue'
            value: 'startValue'
        }
    }"></div>
    <div dx-date-box="{
        bindingOptions: {
            min: 'startValue'
            value: 'endValue'
        }
    }"></div>

    <!--JavaScript-->function Controller($scope) {
        $scope.startValue = new Date();
        $scope.endValue = new Date();
    }

##### Knockout

    <!--HTML--><div data-bind="dxDateBox: {
        max: endValue
        value: startValue
    }"></div>
    <div data-bind="dxDateBox: {
        min: startValue
        value: endValue
    }"></div>

    <!--JavaScript-->const viewModel = {
        startDate: ko.observable(new Date()),
        endDate: ko.observable(new Date()),
    };
    ko.applyBindings(viewModel);

##### Vue

    <template>
        <div>
            <DxDateBox
                v-model:value="startValue"
                v-model:max="endValue"
            />
            <DxDateBox
                v-model:value="endValue"
                v-model:min="startValue"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDateBox from 'devextreme-vue/date-box';

    export default {
        components: {
            DxDateBox
        },
        data() {
            return {
                startValue: new Date(),
                endValue: new Date()
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DateBox from 'devextreme-react/date-box';

    class App extends React.Component {
        constructor(props) {
            this.super(props);

            this.state = {
                startValue: new Date(),
                endValue: new Date()
            };

            this.minChangeHandler = this.minChangeHandler.bind(this);
            this.maxChangeHandler = this.maxChangeHandler.bind(this);
        }

        minChangeHandler = function(e) {
            this.setState({ startValue: e.value });
        }

        maxChangeHandler = function(e) { 
            this.setState({ endValue: e.value });
        }

        render() {
            return (
                <div>
                    <DateBox
                        value={this.state.startValue}
                        max={this.state.endValue}
                        onValueChanged={this.minChangeHandler}
                    />
                    <DateBox
                        value={this.state.endValue}
                        min={this.state.startValue}
                        onValueChanged={this.maxChangeHandler}
                    />
                </div>
            );
        }
    }
    export default App;

---

Do not forget to call the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate" target="_blank">getDate()</a> method on the DateBox values when calculating the interval duration.

#####See Also#####
#include common-link-configurewidget
- [DateBox - Set the Accepted Date Range](/concepts/05%20UI%20Components/DateBox/00%20Getting%20Started%20with%20DateBox/13%20Set%20the%20Accepted%20Date%20Range.md '/Documentation/Guide/UI_Components/DateBox/Getting_Started_with_DateBox/#Set_the_Accepted_Date_Range')
- [DateBox - Handle the Value Change Event](/concepts/05%20UI%20Components/DateBox/00%20Getting%20Started%20with%20DateBox/20%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/UI_Components/DateBox/Getting_Started_with_DateBox/#Handle_the_Value_Change_Event')
- [DateBox API Reference](/api-reference/10%20UI%20Components/dxDateBox '/Documentation/ApiReference/UI_Components/dxDateBox/')

[tags]date box, dateBox, editor, scheduling, overview, validate date interval
