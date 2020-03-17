Store the array in the state and pass it to the **dataSource** option. When you need to modify the array, create a new array and use `this.setState` to save it in the state. Do not use standard array modification methods, like `push()` or `pop()`. They modify the original array, which is not according to the <a href="https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly" target="_blank">rules of updating a React state</a>.

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
