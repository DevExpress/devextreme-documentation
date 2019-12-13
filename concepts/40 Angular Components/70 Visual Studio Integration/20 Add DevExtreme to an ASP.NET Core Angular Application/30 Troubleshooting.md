### Error E1046: The [FieldName] key field is not found in data objects

In ASP.NET Core, property names are converted to lowerCamelCase during serialization to JSON. If [column data fields](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField') use the UpperCamelCase, then error E1046 occurs.

Apply one of the following solutions to troubleshoot this issue:

- **Disable the conversion in the JSON serializer**     

    Open the `Startup.cs` file and modify the `ConfigureServices` method as follows:

        using Newtonsoft.Json.Serialization;
        // ...
        public void ConfigureServices(IServiceCollection services) {
            // ...
            services.AddMvc() // or `.AddRazorPages`, `.AddControllers`, `.AddControllersWithViews`
                .AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());
        }

    Since ASP.NET Core 3, you can use [System.Text.Json](https://www.nuget.org/packages/System.Text.Json) instead of Newtonsoft.Json:

        public void ConfigureServices(IServiceCollection services) {
            // ...
            services.AddMvc() // or `.AddRazorPages`, `.AddControllers`, `.AddControllersWithViews`
                .AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null);
        }

    [important] This solution affects the entire application, and is not recommended if the controllers are used by non-DevExtreme components.

- **Serialize objects in the API controller**

    Modify the API controller (`OrdersController`) that the DevExtreme widget is bound to as shown below:

        using Newtonsoft.Json;
        using Newtonsoft.Json.Serialization;
        // ...
        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            var loadResult = DataSourceLoader.Load(SampleData.Orders, loadOptions);
            var json = JsonConvert.SerializeObject(loadResult, new JsonSerializerSettings {
                ContractResolver = new DefaultContractResolver()
            });
            return Content(json, "application/json");
        }
