DevExtreme ASP.NET MVC Wrappers are fully integrated with Web API. Leveraging the [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data) library, DevExtreme ASP.NET MVC Wrappers enable you to write short but powerful controllers on the base of Web API that, for example, support [remote operations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/') in the [DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Widgets/dxDataGrid/') widget.

Actions in a Web API controller for DevExtreme ASP.NET MVC Wrappers implement [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations: all or just the needed ones. For example, the following code demonstrates a controller whose actions implement all CRUD operations on the "Orders" collection from the [Northwind](https://northwinddatabase.codeplex.com) database.

    namespace ProjectName.Controllers {

        public class GridDataController : ApiController {
            NorthwindContext _nwind = new NorthwindContext();
            const string validationErrorMessage = "The record cannot be saved due to a validation error";

            // Fetching items from the "Orders" collection
            [HttpGet]
            public HttpResponseMessage Get(DataSourceLoadOptions loadOptions) {
                return Request.CreateResponse(DataSourceLoader.Load(_nwind.Orders, loadOptions));
            }
            
            // Inserting a new record into the "Orders" collection
            [HttpPost]
            public HttpResponseMessage Post(FormDataCollection form) {
                // Extracting a JSON came from the client side
                var values = form.Get("values");

                // Converting the JSON into an "Order" object that belongs to the model
                var newOrder = new Order();
                JsonConvert.PopulateObject(values, newOrder);

                // Validating the object
                Validate(newOrder);
                if(!ModelState.IsValid)
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, validationErrorMessage);
                    
                // Adding the object to the database
                _nwind.Orders.Add(newOrder);
                _nwind.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.Created);
            }

            // Updating a record in the "Orders" collection
            [HttpPut]
            public HttpResponseMessage Put(FormDataCollection form) {
                // Extracting a JSON came from the client side
                var key = Convert.ToInt32(form.Get("key"));
                var values = form.Get("values");
                
                // Finding the object to be updated by its key
                var order = _nwind.Orders.Find(key);
                // Populating the found object with the changed values
                JsonConvert.PopulateObject(values, order);

                // Validating the updated object
                Validate(order);
                if(!ModelState.IsValid)
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, validationErrorMessage);

                // Saving changes in the database
                _nwind.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK);
            }

            // Removing a record from the "Orders" collection
            [HttpDelete]
            public void Delete(FormDataCollection form) {
                // Getting the key of the record to be removed
                var key = Convert.ToInt32(form.Get("key"));

                // Finding the object to be removed by its key
                var order = _nwind.Orders.Find(key);
                
                // Removing the found object
                _nwind.Orders.Remove(order);
                
                // Saving changes in the database
                _nwind.SaveChanges();
            }
        }
    }

[note]"Get", "Post", "Put" and "Delete" are conventional names for actions that perform CRUD operations. However, you can use other names if you need to, for example, when the controller has multiple "Get" actions. In this case, specify the particular action to be used using one of the methods described further.

To access the `GridDataController` from a server-side wrapper, use the following construction.

    @(Html.DevExtreme().DataGrid()
        .DataSource(ds => ds
            .WebApi()
            .Controller("GridData")
            .Key("OrderID")
        )
    )

The `WebApi()` method acts as an entry point for other methods that configure data access. To specify, for example, actions with nonconventional names for CRUD operations, use the `LoadAction()`, `InsertAction()`, `UpdateAction()` and `DeleteAction()` methods exposed by `WebApi()`.

    @(Html.DevExtreme().DataGrid()
        .DataSource(ds => ds
            .WebApi()
            .Controller("GridData")
            .Key("OrderID")
            .LoadAction("GetAllOrders")
            .InsertAction("InsertOrder")
            .UpdateAction("UpdateOrder")
            .DeleteAction("RemoveOrder")
        )
    )

For more examples of Web API controllers and accessing them from a server-side wrapper, see our [sample application](/concepts/35%20ASP.NET%20MVC%20Wrappers/10%20Overview/20%20Sample%20Application.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Overview/#Sample_Application').