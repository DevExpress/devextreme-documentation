---
type: eventType
---
---
##### shortDescription
Fires before the application searches for a cached view that matches the key generated for the current URI.

##### param(e): object
Provides function parameters.

##### field(e.key): string
Specifies the key used to search the cached view. Change this field value to use a cached view associated with another URI.

##### field(e.navigationItem): object
An object that holds the target item of the application navigation history.

##### field(e.routeData): object
An objects that holds target URI parameters produced by application's router.

---
If the application finds a view with the specified key, it uses this view. Otherwise, it creates a new view instance. The generated key is held in the key field of the event arguments object passed to the event handler. You can pass another key to the key field of the event arguments object to use a cached view created for another URI. In this case, the [viewShowing](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewShowing.md '{basewidgetpath}/Events/#viewShowing') event fires with actual parameters of the current URI, which enables you to update the loaded view according to values of these parameters.

In the following example, the application uses the same cached view instance for all URIs navigating to the Greeting view ("Greeting/hello", "Greeting/goodbye", etc.), regardless the "message" parameter. It just updates the view according to the message parameter.

    <!--JavaScript-->
    MyApp.app.on("resolveViewCacheKey", function(args) {
        args.key = args.routeData.view;
    });

    MyApp.app.router.register(":view/:message", { view: "Greeting", message: undefined });

    MyApp.Greeting = function(params, viewInfo) {
        var updateViewModel = function(params) {
            viewModel.message(params.message);
        };

        var viewModel = {
            message: ko.observable(),

            //Update the loaded view according to the current URI paramaters
            viewShowing: function(args) {
                updateViewModel(args.params);
            }
        };
        updateViewModel(params);
        return viewModel;
    };

[note]If caching is disabled, the application always creates a new instance of a view.