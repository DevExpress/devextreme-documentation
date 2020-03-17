Ensure that one- or two-way binding is used to bind the **dataSource** option to the array. Then, use <a href="http://www.w3schools.com/js/js_array_methods.asp" target="_blank">standard methods</a> to change the array. This updates the widget automatically.

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
                this.fruits.push({ fruit: 'Pineapples', count: 3 });
            }
        }
    }
    </script>

#####See Also#####
- [One-Way Option Binding](/concepts/55%20Vue%20Components/20%20Component%20Configuration%20Syntax/32%20One-Way%20Option%20Binding.md '/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#One-Way_Option_Binding')
- [Two-Way Option Binding](/concepts/55%20Vue%20Components/20%20Component%20Configuration%20Syntax/33%20Two-Way%20Option%20Binding.md '/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#Two-Way_Option_Binding')
