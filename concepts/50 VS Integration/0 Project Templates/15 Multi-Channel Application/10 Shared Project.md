This project is always created, regardless of the "channel(s)" you chose in the DevExtreme Project Wizard. This project is referenced in all other projects because it contains shared code. For instance, if you have more than one project in your solution (e.g., mobile and win8 projects), the views that are intended for all of these projects can be defined once - within the **Shared** project. At the same time, you can modify a file in any project that references the **Shared** project. In this instance, the customized version will be used in the running project.
	
In the **data** folder, you can find the *db.js* file. In this file, a template for creating an [ODataContext](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData') is realized. The ODataContext instance is created to communicate with an OData service. ODataContext creates a set of [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') objects inside to communicate with each entity provided by the OData service. To specify a URL to the required service and list the entities required for the application, a configuration object is passed as a parameter to the ODataContext constructor.

	<!--JavaScript-->Application1.db = new DevExpress.data.ODataContext(serviceConfig.db);
	
In the project template, a configuration object is accessed as the object provided by the **db** field of the **serviceConfig** object. If you need to create an OData context for an additional OData service, add one more field to the **serviceConfig** object.

	<!--JavaScript-->{
		db: {
			url: endpointSelector.urlFor("db"),
			"entities": {},
			errorHandler: handleServiceError
		}
	}

To get the required URL - for local or productional use - the **urlFor("db")** method of the **endpointSelector** object is called. This method returns a local URL if the application runs on a local host, otherwise a productional URL is returned. The possible URLs for the "db" service are specified in the **endpointSelector**'s configuration object.

	<!--JavaScript-->var endpointSelector = new DevExpress.EndpointSelector(Application1.config.endpoints);

	//see the application1.shared.config.js file
	"endpoints": {
        "db": {
            "local": "",
            "production": ""
        }
    },

If you specify a certain OData service and choose the required entities in the **Project Wizard**, the service URL and entities will be specified in the created project and the created ODataContext will be ready to use. Otherwise, an empty template for ODataContext will be created so that you can configure it manually. 

If you are going to use a data service of another type, simply remove the default content from the *db.js* and *application1.shared.config.js* files. Learn how to provide data using the DevExtreme data layer in the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/') documentation section.
