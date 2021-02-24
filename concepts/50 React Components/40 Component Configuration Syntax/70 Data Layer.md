[DevExtreme Data Layer](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/') is a set of components for working with data. The following example shows how to use the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') component with the [List](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/WebApi/React/Light) UI component:

    <!-- tab: Function component -->
    import React, { useEffect } from 'react';
    import DataSource from 'devextreme/data/data_source';
    import List from 'devextreme-react/list';

    const items = [
        { text: '123' },
        { text: '234' },
        { text: '567' }
    ];
    const dataSource = new DataSource({
        store: {
            type: "array",
            data: items
        },
        sort: { getter: "text", desc: true }
    });

    export default function App() {
        useEffect(() => {
            // A DataSource instance created outside a UI component should be disposed of manually.
            return () => { dataSource.dispose(); }
        });
        return (
            <List dataSource={dataSource} />
        ); 
    }
    
    <!-- tab: Class component -->
    import DataSource from 'devextreme/data/data_source';
    import List from 'devextreme-react/list';

    const items = [
        { text: '123' },
        { text: '234' },
        { text: '567' }
    ];

    class Example extends React.Component {
        constructor(props) {
            super(props);

            this.dataSource = new DataSource({
                store: {
                    type: 'array',
                    data: items
                },
                sort: { getter: 'text', desc: true }
            });
        }

        render() {
            return (
                <List dataSource={this.dataSource} />
            );
        }

        componentWillUnmount() {
            // A DataSource instance created outside a UI component should be disposed of manually.
            this.dataSource.dispose();
        }
    }

[note] When a data layer component's properties are modified, the bound UI component is not re-rendered.
