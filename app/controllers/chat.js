angular.module('app.controllers')

    .controller('ChatCtrl', function ($scope) {

        $scope.messages = ['Hello', 'Hi!'];

        $scope.send = function () {
            if ($scope.form.$valid) {
                var msg = $scope.reply;
                $scope.reply = null;
                $scope.messages.push(msg);
            }
        }
    });
