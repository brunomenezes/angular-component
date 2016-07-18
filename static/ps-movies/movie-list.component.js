void function movieListComponent(angular) {
    'use strict';
    const module = angular.module('psMovies');


    function fetchMovies($http) {        
        return $http.get('/movies.json')
                    .then(response => response.data);
    }

    function controller($http) {        
        const model = this;
        model.movies = [];

        model.$onInit = function() {
            fetchMovies($http).then(movies => {
                model.movies = movies;
            })
        }

        model.goTo = function(id) {
            console.log(model.$router);
            model.$router.navigate(['Details', { id: id }]);
        }

        model.upRating = function(movie) {
            if(movie.rating < 5) {
                movie.rating += 1;
            }
        }

        model.downRating = function(movie) {
            if(movie.rating > 1) {
                movie.rating -= 1;
            }
        }
    }

    controller.$inject = ['$http'];

    module.component('movieList', {
        templateUrl: '/ps-movies/movie-list.component.html',
        controllerAs: 'model',
        controller: controller,
        bindings: {
            "$router" : '<'
        }
    });

} (angular);