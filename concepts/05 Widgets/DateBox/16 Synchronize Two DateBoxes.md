**DateBox** widgets are often coupled for selecting a date interval. In this case, you need to synchronize the **DateBoxes** to prevent a user from selecting an interval whose start date is later than the end date. For this, limit one **DateBox**'s range depending on the other's value as shown in the example below.

---
##### jQuery

    <!--JavaScript-->$(function() {
        var startDate = $("#startDate").dxDateBox({
            value: new Date(),
            onValueChanged: function (e) {
                endDate.option("min", e.value);
            }
        }).dxDateBox("instance");
        var endDate = $("#endDate").dxDateBox({
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

    <!--JavaScript-->var viewModel = {
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
    import 'devextreme/dist/css/dx.common.css';
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
    import 'devextreme/dist/css/dx.common.css';
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

Do not forget to call the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate" target="_blank">getDate()</a> method on the **DateBox** values when calculating the interval duration.

#####See Also#####
#include common-link-configurewidget
- [DateBox - Specify Value Range](/concepts/05%20Widgets/DateBox/15%20Specify%20Value%20Range.md '/Documentation/Guide/Widgets/DateBox/Specify_Value_Range')
- [DateBox - Handle the Value Change Event](/concepts/05%20Widgets/DateBox/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/DateBox/Handle_the_Value_Change_Event')
- [DateBox API Reference](/api-reference/10%20UI%20Widgets/dxDateBox '/Documentation/ApiReference/UI_Widgets/dxDateBox/')

[tags]date box, dateBox, editor, scheduling, overview, validate date interval
