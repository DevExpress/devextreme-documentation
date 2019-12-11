var dataArray = [
    {
        id: 1,
        text: "Animals",
        items: [
            {
                id: 2,
                text: "Cat",
                expanded: true,
                items: [
                    { id: 5, text: "Abyssinian" },
                    { id: 6, text: "Aegean cat" },
                    { id: 7, text: "Australian Mist" }
                ]
            },
            {
                id: 3,
                expanded: true,
                text: "Dog",
                items: [
                    { id: 8, text: "Affenpinscher" },
                    { id: 9, text: "Afghan Hound" },
                    { id: 10, text: "Airedale Terrier" },
                    { id: 11, text: "Akita Inu" }
                ]
            },
            {
                id: 4,
                text: "Cow"
            }
        ]
    },
    {
        id: 12,
        parentId: 0,
        text: "Birds",
        items: [
            { id: 13, text: "Akekee" },
            { id: 14, text: "Arizona Woodpecker" },
            { id: 15, text: "Black-chinned Sparrow" }
        ]
    }
];
var flag = true;
var keyHandler = function () {
    if (flag) {
        $("#myTreeView").dxTreeView("instance").selectAll();
        flag = false;
    } else {
        $("#myTreeView").dxTreeView("instance").unselectAll();
        flag = true;
    }
};
$(function () {
    $("#myTreeView").dxTreeView({
        dataSource: dataArray,
        width: "auto",
        showCheckBoxesMode: 'selectAll',
        focusStateEnabled: true
    });
    $("#myTreeView").dxTreeView("instance").registerKeyHandler('enter', keyHandler);
});
