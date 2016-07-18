void function iife() {
    'use strict';
    const module = angular.module('psMovies');

    module.component('movieDetails', {
        templateUrl: '/ps-movies/movie-details.component.html' ,
        $routeConfig : [
            { path: '/overview', component: 'movieOverview', name: 'Overview' },
            { path: '/cast', component: 'movieCast', name: 'Cast' },
            { path: '/director', component: 'movieDirector', name: 'Director' }
        ],
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
    });


    module
    .component('movieOverview', {
        template: 'This is a overview'
    })
    .component('movieCast', {
        template: 'This is a cast view'
    })
    .component('movieDirector', {
        template: 'This is the director view'
    })
}();