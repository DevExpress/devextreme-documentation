Do not use properties that exist as nested components inside the component markup.

    <!-- tab: App.js -->// Incorrect:
    function App() {
        // ...
        return (
            <DataGrid ...
                selection={{ mode: "single" }} 
            >
        );
    }

    export default App;
    
    // Correct:
    function App() {
        // ...
        return (
            <DataGrid>
                <!-- ... -->
                <Selection mode="single" />
            </DataGrid>
        );
    }

    export default App;    

#include common-githubbutton with {
    url: "https://codesandbox.io/s/simple-array-devextreme-data-grid-forked-z2bigu?file=/App.js:"
}

#####See Also#####
- [Component Configuration Syntax](https://js.devexpress.com/Documentation/Guide/React_Components/Component_Configuration_Syntax/)