var app = angular.module("vonseiHome",['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function(sp,urp){
    urp.otherwise('/');
    sp
        .state('home', {
        url: '/',
        templateUrl: '/data/views/template/main.html'
    })
        .state('test', {
        url: '/test',
        templateUrl: '/data/views/template/test.html'
    });
}]);

/*controller*/

app.controller("pollDisplay",['$scope','$http',function(sc,con){
    /*con.get('').then(function(response){
        sc.polls=response.data;
    });*/
    sc.polls=[
        {
            question:'Who is better?',
            options:[
                'Salman','Amir','Hritik'
            ]
        },
        {
            question:'Who is smart?',
            options:[
                'Salman','Amir','Hritik'
            ]
        }
    ];
    sc.show=true;
}]);

app.controller("pollQuestionDisplay",['$scope','$http',function(sc,con){
    /*con.get('').then(function(response){
        sc.polls=response.data.polls;
    });*/
    sc.options=[];
    sc.addOption=function(){
        if(sc.options.length<5){
            sc.options.push(sc.option);
            sc.option="";
        }
        else{
            alert("You can't enter more than FIVE options.");
            sc.option="";
        }
    }
    sc.editOption=function(index,option){
        sc.options[index]=option;

    }
    sc.removeOption=function(index)
    {
        sc.options.splice(index, 1);

    }
    sc.sendPollQuestion=function(){

        var params={
            question:sc.question,
            tags:sc.tags,
            option:sc.options,
            anonymous:sc.anonymous||false;
        };
        con.post('/data/backend/saveQuestion.php',params).then(function(response){
            var data=response.data;
        })
    };

}]);

