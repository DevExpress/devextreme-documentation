---
id: CustomStore.Options.loadMode
acceptValues: 'processed' | 'raw'
type: String
default: 'processed'
---
---
##### shortDescription
Specifies how data returned by the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function is treated.

---
Specify this option depending on the behavior you implemented for the **load** function. If this function sends data shaping options to the server and fetches processed data, then **loadMode** should be *"processed"*. If the **load** function simply fetches raw, unprocessed data from the server, set **loadMode** to *"raw"*. In this case, the raw data will be processed on the client automatically.

#####See Also#####
- [Load Data in Raw Mode](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources/1%20Load%20Data%20in%20Raw%20Mode.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode')
- [cacheRawData](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/cacheRawData.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#cacheRawData')