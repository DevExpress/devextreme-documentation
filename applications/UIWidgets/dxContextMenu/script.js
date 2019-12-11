contextMenuVisible = ko.observable(false);
menuItems = [
    {
        icon: 'add',
        text: "Increase"
    },
    {
        icon: 'email',
        text: "Share",
        items: [
              {
                  icon: 'user',
                  text: "Send to a friend"
              },
              {
                  icon: 'group',
                  text: "Send to a group"
              }
        ]
    },
    {
        icon: 'download',
        text: "Download"
    },
    {
        icon: 'comment',
        text: "Comment"
    },
    {
        icon: 'favorites',
        text: "Add to favourites",
        beginGroup: true
    }
];
itemClicked = function(data) {
    if (!data.itemData.items) {
        DevExpress.ui.notify("The \"" + data.itemData.text + "\" item is clicked", "info", 1500);
    }
}