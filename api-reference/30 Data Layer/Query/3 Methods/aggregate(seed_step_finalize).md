---
id: Query.aggregate(seed, step, finalize)
---
---
##### shortDescription
Calculates a custom summary for all data items.

##### return: Promise<any>
A Promise that is resolved after the operation is completed. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(seed): Object
The initial value.

##### param(step): function()
A function called for each item.

##### param(finalize): function()
A function that is called after the calculation is finished.

---
---
##### jQuery

    <!--JavaScript-->
    var step = function (total, itemData) {
        // "total" is an accumulator value that should be changed on each iteration
        // "itemData" is the item to which the function is being applied
        return total + itemData;
    };

    var finalize = function (total) {
        // "total" is the resulting accumulator value
        return total / 1000;
    };

    DevExpress.data.query([10, 20, 30, 40, 50])
        .aggregate(0, step, finalize)
        .done(function (result) {
            console.log(result); // outputs 0.15
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

            let finalize = total => {
                // "total" is the resulting accumulator value
                return total / 1000;
            };

            Query([10, 20, 30, 40, 50])
                .aggregate(0, step, finalize)
                .then(result => {
                    console.log(result); // outputs 0.15
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

    const finalize = total => {
        // "total" is the resulting accumulator value
        return total / 1000;
    }

    export default {
        mounted() {
            Query([10, 20, 30, 40, 50])
                .aggregate(0, step, finalize)
                .then(result => {
                    console.log(result); // outputs 0.15
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

    const finalize = total => {
        // "total" is the resulting accumulator value
        return total / 1000;
    }

    class App extends React.Component {
        constructor(props) {
            super(props);

            Query([10, 20, 30, 40, 50])
                .aggregate(0, step, finalize)
                .then(result => {
                    console.log(result); // outputs 0.15
                });
        }
    }
    export default App;

---