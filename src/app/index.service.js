/* global filter */
(function() {
  'use strict';

  angular
    .module('suzhou')
    .factory("DataService", function(){
        return {
            main: {
                pages: {
                    list: [],
                    open: function(page) {
                        for (var i = 0; i < this.list.length; i++) {
                            if (this.list[i].state == page.state) {
                                this.list[i].active = page.active;
                                return;
                            }
                        }
                        this.list.push(page);
                    },
                    close: function(page) {
                        for (var i = 0; i < this.list.length; i++) {
                            if (this.list[i].state == page.state) {
                                this.list = _.without(this.list, this.list[i]);
                                return;
                            }
                        }
                    }
                },
            },
        };
    })
    .factory('TabPageService', function(){
        return {

        };
    })
    .factory('Tools', function(){
        return {
            clone: function(obj) {
                return JSON.parse(JSON.stringify(obj));
            },

            transtoTree: function(lists) {
                var tree = [];
                for (var i = 0; i < lists.length; i++) {
                    var parentid = lists[i].parentid;
                    for (var j = 0; j < lists.length; j++) {
                        if (lists[j].id == parentid) {
                            if(!lists[j].children) {
                                lists[j].children = new Array();
                            }
                            lists[j].children.push(lists[i]);
                            break;
                        }
                    }
                    if (parentid == 0) {
                        tree.push(lists[i]);
                    }
                }
                return tree;
            }
        };
    });

})();