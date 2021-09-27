---
##### jQuery

Change the array using <a href="http://www.w3schools.com/js/js_array_methods.asp" target="_blank">standard methods</a> and reassign it to the **dataSource** property using the [option(optionName, optionValue)](/api-reference/10%20UI%20Components/Component/3%20Methods/option(optionName_optionValue).md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#optionoptionName_optionValue') method.

    <!--JavaScript-->
    var fruits = [
        { fruit: 'Apples', count: 10 },
        { fruit: 'Oranges', count: 12 },
        { fruit: 'Lemons', count: 15 }
    ];

    fruits.push({ fruit: 'Pineapples', count: 3 });
    $("#chartContainer").dxChart("option", "dataSource", fruits);

#####See Also#####
- [Get and Set Properties - jQuery](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/05%20Get%20and%20Set%20Properties/00%20Get%20and%20Set%20Properties.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_and_Set_Properties')

##### Angular

Ensure that one- or two-way binding is used to bind the **dataSource** property to the array. Then, use <a href="http://www.w3schools.com/js/js_array_methods.asp" target="_blank">standard methods</a> to change the array. This updates the UI component automatically.


    <!-- tab: app.component.html -->
    <dx-chart ...
        [dataSource]="fruits">
    </dx-chart>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    #include angular-component-decorator
    export class AppComponent {
        fruits = [
            { fruit: 'Apples', count: 10 },
            { fruit: 'Oranges', count: 12 },
            { fruit: 'Lemons', count: 15 }
        ];

        addPineapple() {
            this.fruits.push({ fruit: 'Pineapples', count: 3 });
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxChartModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxChartModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

#####See Also#####
- [One-Way Option Binding](/concepts/40%20Angular%20Components/20%20Component%20Configuration%20Syntax/32%20One-Way%20Property%20Binding.md '/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#One-Way_Property_Binding')
- [Two-Way Option Binding](/concepts/40%20Angular%20Components/20%20Component%20Configuration%20Syntax/33%20Two-Way%20Property%20Binding.md '/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Two-Way_Property_Binding')


##### Vue

Ensure that one- or two-way binding is used to bind the **dataSource** property to the array. In Vue 2 applications, use <a href="http://www.w3schools.com/js/js_array_methods.asp" target="_blank">standard methods</a> to change the array. This updates the UI component automatically. In Vue 3 applications, create a new array and assign it to the data-bound property to replace the previous array:

    <!-- tab: App.vue -->
    <template>
        <DxChart ...
            :data-source="fruits">
        </DxChart>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart
        },
        data() {
            return {
                fruits: [
                    { fruit: 'Apples', count: 10 },
                    { fruit: 'Oranges', count: 12 },
                    { fruit: 'Lemons', count: 15 }
                ]
            }
        },
        methods: {
            addPineapple() {
                // Vue 2
                this.fruits.push({ fruit: 'Pineapples', count: 3 });

                // Vue 3
                this.fruits = [...this.fruits, { fruit: 'Pineapples', count: 3 }];
            }
        }
    }
    </script>

#####See Also#####
- [One-Way Option Binding](/concepts/55%20Vue%20Components/20%20Component%20Configuration%20Syntax/32%20One-Way%20Property%20Binding.md '/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#One-Way_Property_Binding')
- [Two-Way Option Binding](/concepts/55%20Vue%20Components/20%20Component%20Configuration%20Syntax/33%20Two-Way%20Property%20Binding.md '/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#Two-Way_Property_Binding')

##### React

Store the array in the state and pass it to the **dataSource** property. When you need to modify the array, create a new array and use `this.setState` to save it in the state. Do not use standard array modification methods, such as `push()` or `pop()`. They modify the original array, and thus violate the <a href="https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly" target="_blank">rules of React state updates</a>.

    <!-- tab: App.js -->
    import React from 'react';
    import Chart from 'devextreme-react/chart';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                fruits: [
                    { fruit: 'Apples', count: 10 },
                    { fruit: 'Oranges', count: 12 },
                    { fruit: 'Lemons', count: 15 }
                ]
            }
        }

        addPineapple() {
            this.setState(prevState => {
                const pineapple = { fruit: 'Pineapples', count: 3 };
                return {
                    fruits: [...prevState.fruits, pineapple]
                }
            });
        }

        render() {
            return (
                <Chart ...
                    dataSource={this.state.fruits}>
                </Chart>
            );
        }
    }
    export default App;

---