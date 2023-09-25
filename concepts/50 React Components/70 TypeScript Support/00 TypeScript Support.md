DevExtreme React components are supplied with TypeScript declarations. Strict typing allows you to catch bugs at earlier stages and use features like code completion and automated refactoring.

The following code shows an example of using TypeScript with DevExtreme components:

    <!-- tab: App.tsx -->
    import React, { useState } from 'react';
    import List from 'devextreme-react/list';
    import 'devextreme/dist/css/dx.light.css';

    interface IListItemProps {
        text: string;
    }

    const items: IListItemProps[] = [
        { text: "Item 1" },
        { text: "Item 2" },
        { text: "Item 3" }
    ];

    const Item: React.FC<IListItemProps> = (props) => {
        const [counter, setCounter] = useState<number>(0);

        const addCounter = () => {
            setCounter(counter + 1);
        };

        return (
            <div onClick={addCounter}>
            {props.text} was clicked {counter} times
            </div>
        );
    };

    const App: React.FC = () => {
        return (
            <List items={items} itemRender={(props: any) => <Item {...props.data} />} />
        );
    };

    export default App;

[tags] react