void function movieRatingComponent(angular) {
    'use strict';
    const module = angular.module('psMovies');

    function controller() {
        const model = this;

        model.$onInit = () => {
            model.entries = Array.from({ length: model.value });
        }

        model.$onChanges = changes => {
            model.entries = Array.from({ length: model.value });
        }
    }

    module.component('movieRating', {
        templateUrl: '/ps-movies/movie-rating.component.html',
        bindings: {
            value: '<'
        },
        transclude: true,
        controllerAs: 'model',
        controller: controller
    });
} (angular);