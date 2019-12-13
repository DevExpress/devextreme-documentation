---
id: Query.aggregate(step)
---
---
##### shortDescription
Calculates a custom summary for all data items.

##### return: Promise<any>
A Promise that is resolved after the operation is completed. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(step): function()
A function that is called for each item.

---
This is a shortcut for the [aggregate(seed, step, finalize)](/api-reference/30%20Data%20Layer/Query/3%20Methods/aggregate(seed_step_finalize).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#aggregateseed_step_finalize') method. It omits the **seed** and **finalize** parameters: instead of the **seed** value, the accumulator value is initialized with the first item's value; the **finalize** parameter's omission means that the calculation result is the accumulator value after the last **step** function's execution.

---
##### jQuery

    <!--JavaScript-->
    var step = function (total, itemData) {
        // "total" is an accumulator value that should be changed on each iteration
        // "itemData" is the item to which the function is being applied
        return total + itemData;
    };

    DevExpress.data.query([10, 20, 30, 40, 50])
        .aggregate(step)
        .done(function (result) {
            console.log(result); // outputs 150
        });

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let step = (total, itemData) => {
                // "total" is an accumulator value that should be changed on each iteration
                // "itemData" is the item to which the function is being applied
                return total + itemData;
            };

            Query([10, 20, 30, 40, 50])
                .aggregate(step)
                .then(result => {
                    console.log(result); // outputs 150
                });
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import Query from 'devextreme/data/query';

    const step = (total, itemData) => {
        // "total" is an accumulator value that should be changed on each iteration
        // "itemData" is the item to which the function is being applied
        return total + itemData;
    }

    export default {
        mounted() {
            Query([10, 20, 30, 40, 50])
                .aggregate(step)
                .then(result => {
                    console.log(result); // outputs 150
                });
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import Query from 'devextreme/data/query';

    const step = (total, itemData) => {
        // "total" is an accumulator value that should be changed on each iteration
        // "itemData" is the item to which the function is being applied
        return total + itemData;
    }

    class App extends React.Component {
        constructor(props) {
            super(props);

            Query([10, 20, 30, 40, 50])
                .aggregate(step)
                .then(result => {
                    console.log(result); // outputs 150
                });
        }
    }
    export default App;

---