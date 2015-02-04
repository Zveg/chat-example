angular.module('app.directives')
    .directive('sendMessage', function(){
        return function (scope, element) {
            var shiftDown = false;
            element.bind("keydown", function (event) {

                // set shiftDown to true if Shift is pressed(Shift key code is 16)
                if(event.which === 16) {
                    shiftDown = true;
                }

                // if Enter is pressed(Enter key code is 13) and the Shift is already held
                if(event.which === 13 && shiftDown) {
                    event.preventDefault();
                    scope.send();
                    scope.$apply();
                }
            });

            // set shiftDown to false if Shift was released
            element.bind("keyup", function (event) {
                if(event.which === 16) {
                    shiftDown = false;
                }
            });
        };
    });