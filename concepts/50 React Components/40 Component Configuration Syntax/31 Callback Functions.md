    <!-- tab: App.js -->
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

Callback functions are executed _outside_ the React component's context. If the context is important, explicitly bind the callback function to it in the constructor.

    <!-- tab: App.js -->
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