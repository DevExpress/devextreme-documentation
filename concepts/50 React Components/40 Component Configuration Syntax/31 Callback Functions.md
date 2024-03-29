    <!-- tab: Function component -->
    import { useCallback } from 'react';
    import VectorMap, { Layer } from 'devextreme-react/vector-map';

    export default function App() {
        const customizeLayers = useCallback((elements) => {
            // ...
        }, []);

        return (
            <VectorMap>
                <Layer
                    customize={customizeLayers}
                />
            </VectorMap>
        );
    }
    
    <!-- tab: Class component -->
    import VectorMap, { Layer } from 'devextreme-react/vector-map';

    class App extends React.Component {
        render() {
            return (
                <VectorMap>
                    <Layer
                        customize={this.customizeLayers}
                    />
                </VectorMap>
            );
        }

        customizeLayers(elements) {
            // ...
        }
    }

[important] In function components, wrap the callback function declaration into the `useCallback` React Hook to prevent possible issues caused by unnecessary re-rendering.

In class components, callback functions are executed _outside_ the React component's context. If the context is important, explicitly bind the callback function to it in the constructor.

    <!-- tab: Class component -->
    class App extends React.Component {
        myCountry: string = 'USA'; // we need to access this context variable in the callback function

        constructor(props) {
            super(props);
            this.customizeLayers = this.customizeLayers.bind(this);
        }

        customizeLayers(elements) {
            let country = this.myCountry;
            // ...
        }
        // ...        
    }