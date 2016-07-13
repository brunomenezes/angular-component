void function movieRatingComponent(angular) {
    'use strict';
    const module = angular.module('psMovies');

    module.component('movieRating', {
        templateUrl:'/ps-movies/movie-rating.component.html',        
        bindings: {
            value : '<'
        },
        transclude: true,
        controllerAs: 'model',
        controller: function() {
            const model = this;

            model.$onInit = () => {
                model.entries = Array.from({length:model.value});
            }

            model.$onChanges = changes => {
                model.entries = Array.from({length:model.value});
            }
        }
    });
}(angular);