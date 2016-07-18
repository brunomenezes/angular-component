void function movieRatingComponent(angular) {
    'use strict';
    const module = angular.module('psMovies');

    function controller() {
        const model = this;

        model.$onInit = () => {
            model.entries = Array.from({ length: model.max }).map( (val, index ) => {                
                return (index <= (model.value - 1)) ? "glyphicon-star" : "glyphicon-star-empty";
            });
        }

        model.$onChanges = changes => {
            model.entries = Array.from({ length: model.max }).map( (val, index ) => {
                return (index <= (model.value - 1)) ? "glyphicon-star" : "glyphicon-star-empty";
            });
        }
    }

    module.component('movieRating', {
        templateUrl: '/ps-movies/movie-rating.component.html',
        bindings: {
            value: '<',
            max : '<'
        } ,
        controllerAs: 'model',
        controller: controller
    });
} (angular);