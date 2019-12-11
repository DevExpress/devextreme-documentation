You can render widget elements using a custom rendering function. For this purpose, assign the required function to the appropriate option that specifies the template for the required element (e.g., **titleTemplate** for title element, **contentTemplate** for content element and so on). Note that the function should not return a value in this case. Otherwise, the returned string or element will be rendered using the current template engine.

    <!--JavaScript-->
    var popoverData = {
        name: "John Doe",
        city: "Glendale",
        phone: "(626) 555-9248"
    };
    var popoverOptions = {
        contentTemplate: function(contentElement){
            contentElement.append("<p>Name: <i>" + popupData.name + "</i></p>");
            contentElement.append("<p>City: <i>" + popupData.city + "</i></p>");
            contentElement.append("<p>Phone: <i>" + popupData.phone + "</i></p>");
        }
    };