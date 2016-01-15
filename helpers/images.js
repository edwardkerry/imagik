module.exports = {
  popular: function(){
    var images = [
      {
        uniqueId:     1,
        title:        'Sample image 1',
        description:  'This is a sample',
        filename:     'sample1.jpg',
        views:        0,
        likes:        0,
        timestamp:    Date.now()
      }, {
        uniqueId:     2,
        title:        'Sample image 2',
        description:  'This is a sample',
        filename:     'sample2.jpg',
        views:        0,
        likes:        0,
        timestamp:    Date.now()
      }, {
        uniqueId:     3,
        title:        'Sample image 3',
        description:  'This is a sample',
        filename:     'sample3.jpg',
        views:        0,
        likes:        0,
        timestamp:    Date.now()
      }, {
        uniqueId:     4,
        title:        'Sample image 4',
        description:  'This is a sample',
        filename:     'sample4.jpg',
        views:        0,
        likes:        0,
        timestamp:    Date.now()
      }
    ];
    return images;
  }
};
