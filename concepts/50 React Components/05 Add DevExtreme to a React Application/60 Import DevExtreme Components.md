Import the DevExtreme components you are going to use from specific modules. In the following code, the [Button](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/React/Light) component is imported:

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Button from 'devextreme-react/button';

    class App extends React.Component {
        render() {
            return (
                <Button
                    text="Click me"
                    onClick={this.sayHelloWorld}
                />
            );
        }

        sayHelloWorld() {
            alert('Hello world!')
        }
    }

    export default App;

Nested DevExtreme components should also be imported (`ArgumentAxis`, `Series`, and `Legend` in the following code):

    <!-- tab: App.js -->
    import React from 'react';

    import Chart, {
        ArgumentAxis,
        Series,
        Legend
    } from 'devextreme-react/chart';

    const data = [{
        arg: 1990,
        val: 5320816667
    }, {
        arg: 2000,
        val: 6127700428
    }, {
        arg: 2010,
        val: 6916183482
    }];

    class App extends React.Component {
        render() {
            return (
                <Chart dataSource={data}>
                    <ArgumentAxis tickInterval={10} />
                    <Series type="bar" />
                    <Legend visible={false} />
                </Chart>
            );
        }
    }

    export default App;
