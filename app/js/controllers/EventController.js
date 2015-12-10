'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: 'Anuglar Boot Camp',
            date: '1/1/2015',
            time: '10:30am',
            location: {
                address: '8 Giles Road',
                city: 'Swindon',
                country: 'UK'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directive Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this session you will learn the inns and outs of directives'
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: '30 mins',
                    level: 'Introductory',
                    abstract: 'A closer look at scopes'
                },
                {
                    name: 'Well behaved controllers',
                    creatorName: 'jane Doe',
                    duration: '2 hours',
                    level: 'Intermediate',
                    abstract: 'Controllers are the escence of Angular'

                },

            ]
        }
    }
);
