(function(){
    'use strict';

angular
.module("demoapp")
.controller('HomeCtrl', HomeCtrl)

HomeCtrl.$inject = [
    '$rootScope',
    '$scope',
    "$stateParams",
]

function HomeCtrl(
    $rootScope,
    $scope,
    $stateParams
) {
    var vm = this


function selectUser(user){
          vm.user = user;
          applyTemplate(user);
        }
        
        
        
        function applyTemplate(user){
          vm.template = "Hello " + user.Name + " we are excited to have " + user.Company + " aboard our company. We will be in touch soon. Please expect a call from one of our reps shortly" ;
        }
        
        
      
        
         vm.users = [
           {
             Name : 'Jarred Stiger',
             Company: 'Ubuntu',
             City:'Los Angeles',
             Status: [
                       {Type: 'New'},
                       {Type: 'In Progress'},
                       {Type: 'Sold'}
                     ],
             Email: 'jarred.stiger@gmail.com',
             Phone: '504-261-8302'
           },
           {
             Name : 'Steve Jobs',
             Company: 'Apple',
             City:'Los Angeles',
             Status: [
                       {Type: 'New'},
                       {Type: 'In Progress'},
                       {Type: 'Sold'}
                     ],
             Email: 'steve.jobs@apple.com',
             Phone: '805-555-4893'
            
           },
           {
             Name : 'Reid Hoffman',
             Company: 'LinkedIn',
             City:'Silicon Valley',
             Status: [
                       {Type: 'New'},
                       {Type: 'In Progress'},
                       {Type: 'Sold'}
                     ],
             Email: 'reid.hoffman@linkedin.com',
             Phone: '424-677-9808'
            
           },
           {
             Name : 'Elon Musk',
             Company: 'IBM',
             City:'Los Angeles',
             Status: [
                       {Type: 'New'},
                       {Type: 'In Progress'},
                       {Type: 'Sold'}
                     ],
             Email: 'elon.musk@gmail.com',
             Phone: '323-456-7890'
            
           }
          
         ]
       
      
       vm.leadTemplates = [
        
        //   {
        //     title: "Lead Followup",
        //     template: "Hello " + user.Name + " we are excited to have " + user.Company + " aboard our company. We will be in touch soon. Please expect a call from one of our reps shortly"
        //   },
        //   {
            
        //     title: "Lead Followup",
        //     template: "Hello " + user.Name + " we are excited to have " + user.Company + " aboard our company. We will be in touch soon. Please expect a call from one of our reps shortly"
           
        //   },
        //   {
            
        //     title: "Lead Followup3",
        //     template: "Hello " + user.Name + " we are excited to have " + user.Company + " aboard our company. We will be in touch soon. Please expect a call from one of our reps shortly"
        //   },
        //   {
            
        //   },
        //   {
           
        //     title: "Lead Followup4",
        //     template: "Hello " + user.Name + " we are excited to have " + user.Company + " aboard our company. We will be in touch soon. Please expect a call from one of our reps shortly"
           
        //   },
        //   {
            
        //     title: "Lead Followup5",
        //     template: "Hello " + user.Name + " we are excited to have " + user.Company + " aboard our company. We will be in touch soon. Please expect a call from one of our reps shortly"
    ]
    
    
    

    // function init(){

    // }
    
  }
})();