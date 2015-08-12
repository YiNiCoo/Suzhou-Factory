(function() {
        'use strict';

        angular
            .module('suzhou')
            .directive('navb', Navbar);

        /** @ngInject */
        function Navbar() {
            var directive = {
                restrict: 'E',
                templateUrl: 'app/components/tree/tree.html',
                link: link,
            };

            return directive;
        }

        function link (scope, element, attr, vm) {
            var tree = scope.tree;
            var html = '<div class="tree">';
            for (var i = 0; i < tree.length; i++) {
                tree[i]
            };
            angular.forEach(scope[attrs.rows], function(row, index) {
                html += '<tr><td>' + row.name + '</td></tr>';
                if ('subrows' in row) {
                    angular.forEach(row.subrows, function(subrow, index) {
                        html += '<tr><td>' + subrow.name + '</td></tr>';
                    });
                }
            });
            html += '</table>';
            element.replaceWith(html)
        }

        function buildHtml(tree) {
            var res = '';
            for (var i = 0; i < tree.length; i++) {
                var html = '<div class="tree"><div class="tree-head">';
                tree[i]
            };
        }
    }

})();
