void function psMovieModule(angular) {
    'use strict';

    const module = angular.module('psMovies', ['ngComponentRouter', 'ngAnimate']);

    module.value('$routerRootComponent', "movieApp");

    module.component('appAbout', {
        template: '<h1>This is the about page</h1>'
    });

} (angular);