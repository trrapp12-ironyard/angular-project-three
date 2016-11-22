angular.module('moreModulesApp', ['ngTagsInput', 'moreModulesModule'])
.controller('TagsCtrl', function () {
  this.tags = [
    { text: 'OurTag1' },
    { text: 'OurTag2' },
    { text: 'OurTag3' },
    { text: 'OurTag3' },
    { text: 'OurTag4' },
    { text: 'OurTag5' }
  ];
})
