var moreModulesModule = angular.module("moreModulesModule", []);

moreModulesModule.controller("MoreModulesModule", MoreModulesModule)

function MoreModulesModule () {
  this.helloWorld = "Hello World"
}

// different way
// angular.module('moreModulesModule', [])
// .controller('MoreModulesModule', function () {
//   this.helloWorld = "Hell-O-World"
// })
//
// var moreModulesModule = angular.module('moreModulesModule', []);
//
// moreModulesModule.controller("MoreModulesModule", function() {
//   this.helloWorld = "Hell-O-World";
// })
