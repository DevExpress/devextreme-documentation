    <!-- tab: Function component -->
    import { useCallback } from 'react';
    import Button from 'devextreme-react/button';

    export default function App() {
        const handleButtonClick = useCallback((e) => {
            alert("The button was clicked")
        }, []);

        return (
            <Button
                onClick={handleButtonClick}
            />
        );
    }
    
    <!-- tab: Class component -->
    import Button from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);
            // Uncomment the line below to bind the handler to the React component's context, for example, to call this.setState()
            // this.handleButtonClick = this.handleButtonClick.bind(this);
        }

        render() {
            return (
                <Button
                    onClick={this.handleButtonClick}
                />
            );
        }

        handleButtonClick(e) {
            alert("The button was clicked")
        }
    }