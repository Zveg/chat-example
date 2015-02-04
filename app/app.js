'use strict';

angular.module('app.controllers', []);
angular.module('app.directives', []);

angular.module('app', [
    'app.controllers',
    'app.directives',
    'ui.router'
])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app', {
                url: "/",
                templateUrl: "views/chat.html",
                controller: 'ChatCtrl'

            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');
    });

