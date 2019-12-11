var dataItems = [
    {
        title: "Info",
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
];
var maxIndex = 2;
var keyHandler = function () {
    var curIndex = $("#myTabPanel").dxTabPanel("instance").option("selectedIndex");
    if (curIndex === maxIndex) {
        curIndex = -1;
    }
    $("#myTabPanel").dxTabPanel("instance").option("selectedIndex", curIndex + 1);
};
$(function () {
    $("#myTabPanel").dxTabPanel({
        dataSource: dataItems,
        height: 300,
        titleTemplate: function (itemData, itemIndex, itemElement) {
            itemElement.append("<p>" + itemData.title + "</p>");
        },
        itemTemplate: function (itemData, itemIndex, itemElement) {
            var wrapper = $('<div style="margin: 25px;">');
            wrapper.append("<h1>" + itemData.title + "</h1>");
            wrapper.append("<p>&nbsp;</p>");
            itemElement.append(wrapper);
            var innerWrapper = $('<div style="text-align: left;">');
            wrapper.append(innerWrapper);
            for (var field in itemData.data)
                innerWrapper.append("<p>" + field + ": <b>" + itemData.data[field] + "</b></p>");
        },
        focusStateEnabled: true
    });
    $("#myTabPanel").dxTabPanel("instance").registerKeyHandler('enter', keyHandler);
});