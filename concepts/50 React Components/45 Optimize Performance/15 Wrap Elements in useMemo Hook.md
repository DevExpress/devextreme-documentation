If an element includes a component variable, wrap this element in the [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo) hook. 


    <!-- tab: App.js -->// Incorrect:
    const MyComponent = (props) => {
        const dataSource = new DataSource({
            store: new ArrayStore({
                data: props.data,
                key: "ID"
            })
        });

        return (
            <List ...
                selectedItemKeys={selection}
                dataSource={dataSource}
            >
            </List>
        );
    }
	
	// Correct:
    const MyComponent = (props) => {
        const dataSource = React.useMemo(() => {
            return new DataSource({
                store: new ArrayStore({
                    data: props.data,
                    key: "ID"
                })
            });
        }, [props.data]);

        return (
            <List ...
                selectedItemKeys={selection}
                dataSource={dataSource}
            >
            </List>
        );
    }

If you use class components, declare a variable in the constructor.

#include common-githubbutton with {
    url: "https://codesandbox.io/s/list-non-working-selection-forked-t76knr?file=/App.js"
}