$(() => {
  $('#tileview').dxTileView({
    dataSource: bikes,
    itemMargin: 5,
    baseItemWidth: 175,
    baseItemHeight: 175,
    showScrollbar: 'always',
    height: 370,
    itemTemplate(itemData, itemIndex, itemElement) {
      const text = itemData.disabled ? 'Out of stock' : DevExpress.localization.formatNumber(itemData.price, 'currency');

      const element = $('<div>')
        .addClass('image')
        .css({'background-image': `url(${itemData.imageSrc})`, 'background-color': '#ffffff'})
        .append($('<p>')
          .text(text)
          .addClass('price-text'));

      if (itemData.disabled) {
        element.css('opacity', '50%');
      }

      itemElement.append(element);
    },
    onItemClick(e) {
      DevExpress.ui.notify(`Price: ${DevExpress.localization.formatNumber(e.itemData.price, 'currency')}`);
    },
  });
});

const bikes = [{
  id: 1,
  price: 347,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-100351718.jpg',
}, {
  id: 2,
  price: 263,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-100596823.jpg',
}, {
  id: 3,
  price: 199,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-102148546.jpg',
  disabled: true,
}, {
  id: 4,
  price: 183,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-102295135.jpg',
}, {
  id: 5,
  price: 310,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-127498832.jpg',
}, {
  id: 6,
  price: 119,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-139876222.jpg',
}, {
  id: 7,
  price: 393,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-140502955.jpg',
  disabled: true,
}, {
  id: 8,
  price: 209,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-141074368.jpg',
}, {
  id: 9,
  price: 271,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-150288776.jpg',
}, {
  id: 10,
  price: 382,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-151383566.jpg',
}, {
  id: 11,
  price: 351,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-154285904.jpg',
  disabled: true,
}, {
  id: 12,
  price: 278,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-163737746.jpg',
  disabled: true,
}, {
  id: 13,
  price: 328,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-237259474.jpg',
}, {
  id: 14,
  price: 117,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-264576329.jpg',
}, {
  id: 15,
  price: 384,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-269977580.jpg',
}, {
  id: 16,
  price: 226,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-277653266.jpg',
}, {
  id: 17,
  price: 205,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-296009759.jpg',
}, {
  id: 18,
  price: 398,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-324242990.jpg',
  disabled: true,
}, {
  id: 19,
  price: 136,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-331626269.jpg',
}, {
  id: 20,
  price: 244,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-361135133.jpg',
}, {
  id: 21,
  price: 203,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-59094319.jpg',
  disabled: true,
}, {
  id: 22,
  price: 297,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-59094328.jpg',
}, {
  id: 23,
  price: 369,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-59094343.jpg',
}, {
  id: 24,
  price: 239,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-71772073.jpg',
}, {
  id: 25,
  price: 172,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-79912432.jpg',
}, {
  id: 26,
  price: 191,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-80954299.jpg',
  disabled: true,
}, {
  id: 27,
  price: 313,
  imageSrc: '/Content/images/doc/25_1/TileView/bikes-catalog/bike-81988162.jpg',
}];
