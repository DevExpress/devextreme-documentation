For working with HTML5 Web Storage (known as <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">window.localStorage</a>), the data layer provides the [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/'). It functions exactly as the ArrayStore described in the [previous section](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/0%20In-memory%20Data.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data'), and also ensures that the data is persisted in the browser's localStorage, immediately or at regular intervals.

To create this kind of a DataSource, use the following code.

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        store: {
            type: "local",
            name: "MyLocalData",
            key: "id"
        }
    });
    
The [name](/api-reference/30%20Data%20Layer/LocalStore/1%20Configuration/name.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#name') configuration option is required to scope the data and distinguish it from other localStorage contents. There are two LocalStore options controlling how often the underlying array is persisted: [flushInterval](/api-reference/30%20Data%20Layer/LocalStore/1%20Configuration/flushInterval.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#flushInterval') and [immediate](/api-reference/30%20Data%20Layer/LocalStore/1%20Configuration/immediate.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#immediate').
