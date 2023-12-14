You can define custom content in a separate component if you need to utilize the state or hooks.

[note] For Class components, we recommend that you use <a href="https://react.dev/reference/react/PureComponent" target="_blank">`React.PureComponent`</a> instead of `React.Component` (the latter can be re-rendered unnecessarily). Alternatively, you can implement a <a href="https://react.dev/reference/react/Component#shouldcomponentupdate" target="_blank">shouldComponentUpdate()</a> method.

In the following code snippet, a standalone ListItem component is created to render [List](/Documentation/Guide/UI_Components/List/Getting_Started_with_List/) items. This component specifies the [itemComponent](/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemComponent) property value.  If necessary, you can reuse this ListItem component in another List. 
    
    <!-- tab: Function component -->
    import React, { useCallback, useState } from "react";
    import List from "devextreme-react/list";

    import "devextreme/dist/css/dx.light.css";

    const dataSource = ["Apples", "Bananas", "Cranberries"];
    const defaultWeight = 1;

    const ListItem = ({ data }) => {
        const [weight, setWeight] = useState(defaultWeight);
        const onWeightChange = useCallback(
            (e) => setWeight(e.target.value || defaultWeight),
            []
        );

        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <span>{`${data}, ${weight} lb`}</span>
                <input type="number" placeholder="Weight" onChange={onWeightChange} />
            </div>
        );
    };

    function App() {
        return (
            <div style={{ maxWidth: 400 }}>
                <List
                    activeStateEnabled={false}
                    items={dataSource}
                    itemComponent={ListItem}
                />
            </div>
        );
    }

    export default App;

    <!-- tab: Class component -->
    import * as React from 'react';
    import List from 'devextreme-react/list';

    import 'devextreme/dist/css/dx.light.css';

    const dataSource = ['Apples', 'Bananas', 'Cranberries'];
    const defaultWeight = 1;

    class ListItem extends React.PureComponent {
        constructor() {
            super();

            this.onWeightChange = this.onWeightChange.bind(this);
            this.state = { weight: defaultWeight };
        }

        onWeightChange(e) {
            this.setState({ weight: e.target.value || defaultWeight });
        }

        render() {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <span>{`${this.props.data}, ${this.state.weight} lb`}</span>
                    <input
                        type='number'
                        placeholder='Weight'
                        onChange={this.onWeightChange}
                    />
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return (
                <div style={{ maxWidth: 400 }}>
                    <List activeStateEnabled={false} items={dataSource} itemComponent={ListItem} />
                </div>
            );
        }
    }

    export default App;