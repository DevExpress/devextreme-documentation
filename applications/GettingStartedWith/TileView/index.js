$(() => {
  $('#tileview').dxTileView({
    dataSource: tiles,
    itemMargin: 16,
    baseItemWidth: 280,
    baseItemHeight: 160,
    width: 608,
    height: 368,
    activeStateEnabled: false,
    itemTemplate(itemData, itemIndex, itemElement) {
      const iconBox = $('<div>')
        .addClass('icon-box')
        .append($('<i>')
          .addClass(`dx-icon-${itemData.icon}`)
        );

      const textBox = $('<div>')
        .addClass('text-box')
        .append(
          $('<h3>')
            .addClass('tile-title')
            .text(itemData.title),
          $('<p>')
            .addClass('tile-text')
            .text(itemData.text),
        );

      itemElement.append(iconBox);
      itemElement.append(textBox);
    },
  });
});


const tiles = [{
  icon: "datatrending",
  title: "Boost Productivity",
  text: "Tools and data that help you get the most from your team.",
}, {
  icon: "optionsgear",
  title: "Streamline Your Workflows",
  text: "Eliminate bottlenecks and help your team perform their best.",
}, {
  icon: "group",
  title: "Simplify Management",
  text: "Manage your business and grow it with ease.",
}, {
  icon: "chat",
  title: "Enhance Communication",
  text: "Help your team collaborate more effectively than ever.",
}]

var theme = window.localStorage.getItem('dx-documentation-theme');

$(":root").css("color-scheme", theme);

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = `/SharedStatic/DevExtreme/24_2/css/dx.fluent.blue.${theme}.css`;

document.head.appendChild(link);
