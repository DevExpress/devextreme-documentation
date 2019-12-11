var ICONS = [
"arrowdown", "arrowright", "arrowup", "spinleft", "spinright", "spinnext", "spinprev", "spindown", "spinup", "chevronleft", "chevronright", "chevronnext", "chevronprev", "chevrondown", "chevronup", "back", "repeat", "add", "airplane", "bookmark", "box", "car", "card", "cart", "chart", "check", "clear", "clock", "close", "coffee", "comment", "doc", "download", "edit", "email", "event", "favorites", "find", "filter", "floppy", "folder", "food", "gift", "globe", "group", "help", "home", "image", "info", "key", "like", "map", "menu", "message", "money", "music", "overflow", "percent", "photo", "plus", "preferences", "product", "pulldown", "refresh", "remove", "revert", "runner", "save", "search", "tags", "tel", "tips", "todo", "toolbox", "trash", "user", "upload"
];

var IconSet = $.map(ICONS, function (name) {
    return {
        name: name,
        cssClass: "dx-icon-" + name.toLowerCase()
    };
});

$(function(){
    for (var i = 0; i < IconSet.length; i++) {
        var iconElement = $("<div class='icon-element'>");
        iconElement.append("<div class='" + IconSet[i].cssClass + "' style='font-size: 40px;'>");
        iconElement.append("<p class='icon-name'>" + IconSet[i].name + "</p>");
        $("#icon-sheet").append(iconElement);
    }
});