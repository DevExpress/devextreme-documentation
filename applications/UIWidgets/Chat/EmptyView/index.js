const tiles = [{
    emoji: '🗓️',
    text: 'View Available Vacation Days',
}, {
    emoji: '🎉',
    text: 'List Upcoming Holidays',
}, {
    emoji: '📄',
    text: 'Submit a Vacation Request',
}];

$(() => {
    $("#chat").dxChat({
        width: 780,
        height: 520,
        emptyViewTemplate: (data, element) => {
            const $container = $("<div>").addClass('empty-view-container').css({'width': '100%', 'height': '100%'});
            $container.append(
                $('<div>').addClass("empty-view-titlebox").append(
                    $('<div>').addClass("empty-view-title").text("How can HR Assistant help you today?"),
                    $('<div>').addClass("empty-view-subtitle").text(data.texts.message),
                ),
                $('<div>').attr('id', 'tile-view-container').dxTileView({
                    width: 728,
                    height: 124,
                    baseItemWidth: 226,
                    baseItemHeight: 96,
                    itemMargin: 12,
                    dataSource: tiles,
                    activeStateEnabled: false,
                    onItemClick(event) {
                        DevExpress.ui.notify(`You clicked "${event.itemData.text}".`);
                    },
                    itemTemplate(itemData, itemIndex, itemElement) {
                        const $itemContainer = $('<div>').addClass('tile-container');
                        $itemContainer.append(
                            $('<div>').addClass('tile-emoji').text(itemData.emoji),
                            $('<div>').addClass('tile-text').text(itemData.text),
                        );
                        
                        return $itemContainer;
                    },
                }),
            );
            return $container;
        },
    });
  
  
});

