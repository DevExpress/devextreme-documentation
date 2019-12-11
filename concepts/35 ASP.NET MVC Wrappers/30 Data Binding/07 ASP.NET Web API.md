DevExtreme ASP.NET MVC Wrappers are fully integrated with Web API. Leveraging the [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data) library, DevExtreme ASP.NET MVC Wrappers enable you to write short but powerful controllers on the base of Web API that, for example, support [remote operations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/') in the [DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Widgets/dxDataGrid/') widget.

Actions in a Web API controller for DevExtreme ASP.NET MVC Wrappers implement [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations: all or just the needed ones. For example, the following code demonstrates a controller whose actions implement all CRUD operations on the "Orders" collection from the [Northwind](https://northwinddatabase.codeplex.com) database.

    <!--C#-->
    using System;
    using System.Linq;
    using System.Net.Http;
    using System.Web.Http;
    using DevExtreme.AspNet.Data;
    using DevExtreme.AspNet.Mvc;
    using System.Net.Http.Formatting;
    using Newtonsoft.Json;

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

    <!--VB-->
    Imports System.Net
    Imports System.Net.Http
    Imports System.Web.Http
    Imports DevExtreme.AspNet.Data
    Imports DevExtreme.AspNet.Mvc
    Imports System.Net.Http.Formatting
    Imports Newtonsoft.Json

    Namespace Controllers
        Public Class OrdersController
            Inherits ApiController

            Dim _nwind As New NORTHWNDEntities()

            Const validationErrorMessage As String = "The record cannot be saved due to a validation error"

            ' Fetching items from the "Orders" collection
            <HttpGet>
            Public Function [Get](ByVal loadOptions As DataSourceLoadOptions) As HttpResponseMessage
                Return Request.CreateResponse(DataSourceLoader.Load(_nwind.Orders, loadOptions))
            End Function

            ' Inserting a new record into the "Orders" collection
            Public Function [Post](ByVal form As FormDataCollection) As HttpResponseMessage
                ' Extracting a JSON came from the client side
                Dim values = form.Get("values")

                ' Converting the JSON into an "Order" object that belongs to the model
                Dim newOrder As New Order()
                JsonConvert.PopulateObject(values, newOrder)

                ' Validating the object
                Validate(newOrder)
                If ModelState.IsValid = False Then
                    Return Request.CreateErrorResponse(HttpStatusCode.BadRequest, validationErrorMessage)
                End If

                ' Adding the object to the database
                _nwind.Orders.Add(newOrder)
                _nwind.SaveChanges()

                Return Request.CreateResponse(HttpStatusCode.Created)
            End Function

            ' Updating a record in the "Orders" collection
            Public Function [Put](ByVal form As FormDataCollection) As HttpResponseMessage
                ' Extracting a JSON came from the client side
                Dim key = Convert.ToInt32(form.Get("key"))
                Dim values = form.Get("values")

                ' Finding the object to be updated by its key
                Dim order = _nwind.Orders.Find(key)
                JsonConvert.PopulateObject(values, order)

                ' Validating the updated object
                Validate(order)
                If ModelState.IsValid = False Then
                    Return Request.CreateErrorResponse(HttpStatusCode.BadRequest, validationErrorMessage)
                End If

                ' Saving changes in the database
                _nwind.SaveChanges()

                Return Request.CreateResponse(HttpStatusCode.OK)
            End Function

            ' Removing a record from the "Orders" collection
            Public Sub [Delete](ByVal form As FormDataCollection)
                ' Getting the key of the record to be removed
                Dim key = Convert.ToInt32(form.Get("key"))

                ' Finding the object to be removed by its key
                Dim order = _nwind.Orders.Find(key)

                ' Removing the found object
                _nwind.Orders.Remove(order)

                ' Saving changes in the database
                _nwind.SaveChanges()
            End Sub
        End Class
    End Namespace

[note]"Get", "Post", "Put" and "Delete" are conventional names for actions that perform CRUD operations. However, you can use other names if you need to, for example, when the controller has multiple "Get" actions. In this case, specify the particular action to be used using one of the methods described further.

To access the `GridDataController` from a server-side wrapper, use the following construction.

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .DataSource(ds => ds
            .WebApi()
            .Controller("GridData")
            .Key("OrderID")
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid() _
        .DataSource(Function(ds)
            Return ds.WebApi() _
                     .Controller("GridData") _
                     .Key("OrderID")
        End Function)
    )

The `WebApi()` method acts as an entry point for other methods that configure data access. To specify, for example, actions with nonconventional names for CRUD operations, use the `LoadAction()`, `InsertAction()`, `UpdateAction()` and `DeleteAction()` methods exposed by `WebApi()`.

    <!--Razor C#-->
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

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid() _
        .DataSource(Function(ds)
            Return ds.WebApi() _
                     .Controller("GridData") _
                     .Key("OrderID") _
                     .LoadAction("GetAllOrders") _
                     .InsertAction("InsertOrder") _
                     .UpdateAction("UpdateOrder") _
                     .DeleteAction("RemoveOrder")
        End Function)
    )

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/WebAPIService/Mvc/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>