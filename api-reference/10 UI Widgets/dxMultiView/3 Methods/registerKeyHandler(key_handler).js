var multiViewItems = new DevExpress.data.DataSource({
    store: [
        {
            title: "Personal Data",
            data: {
                firstName: "John",
                lastName: "Smith",
                birthYear: 1986,
            }
        },
        {
            title: "Contacts",
            data: {
                phone: "(555)555-5555",
                email: "John.Smith@example.com",
            }
        },
        {
            title: "Address",
            data: {
                state: "CA",
                city: "San Francisco",
                street: "Stanford Ave",
            }
        }
    ]
});
var keyHandler = function () {
    var multiView = $("#myMultiView").dxMultiView("instance");
    if (multiView.option("selectedIndex") == multiViewItems.items().length - 1)
        multiView.option("selectedIndex", 0);
    else
        multiView.option("selectedIndex", multiView.option("selectedIndex") + 1);
}
$(function () {
    $("#myMultiView").dxMultiView({
        dataSource: multiViewItems,
        itemTemplate: function (itemData, itemIndex, itemElement) {
            wrapper = $("<div style='margin:25px;'>");
            wrapper.append("<h1>" + itemData.title + "</h1>");
            wrapper.append("<p>&nbsp;</p>");
            var innerWrapper = $("<div style='text-align:left;'>");
            for (var field in itemData.data)
                innerWrapper.append("<p>" + field + ": <b>" + itemData.data[field] + "</b></p>");
            wrapper.append(innerWrapper);
            itemElement.append(wrapper);
        },
        focusStateEnabled: true
    });
    $("#myMultiView").dxMultiView("instance").registerKeyHandler('enter', keyHandler);
});
