void function iife() {
    'use strict';
    const module = angular.module('psMovies');

    module.component('movieDetails', {
        templateUrl: '/ps-movies/movie-details.component.html',
        // $canActivate: function () {                        
        //     return false;
        // },
        controllerAs: 'model',
        controller: function ($http) {
            const model = this;

            model.$routerOnActivate = function(next) {                
                $http.get('/movies.json')
                    .then(response => {
                        model.movie = response.data.filter(movie => movie.id === parseInt(next.params.id)).pop();
                    }); 
            };
        }
    })
}();