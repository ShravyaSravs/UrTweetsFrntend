var app = angular.module('forumApp',[]);
app.controller('forumctrl', [ '$scope', '$http', function($scope, $http) {
	var BASE_URL = 'http://localhost:8036/Collaboration';
	$scope.getAllForum= function() {
		console.log("get all forum")
		$http({
			method : 'GET',
			url : BASE_URL+'/forum'
		}).success(function(data, status, headers, config) {
			$scope.forums=data;
			//alert(data); 
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	};
	$scope.submit = function() {
		$scope.forum = {	
			name : $scope.name,
			topic:$scope.topic,
			userid:$scope.userid,
			doc: $scope.doc,
			description:$scope.description
		}
		$http({
			method : 'POST',
			url : BASE_URL + '/createforum',
			data : $scope.forum
		}).success(function(data, status, headers, config) {
			$scope.name='';
			$scope.topic='';
			$scope.userid='';
			$scope.doc='';
			$scope.description='';
		}).error(function(data,status,headers,config){
			alert("error");
		});
	};
	$scope.deleteforum=function(id){
		$http({
			method:'DELETE',
		url:BASE_URL+'/deleteforum/'+id
		}).success(function(data,status,headers,config){
			$scope.getAllForum();
		})
	};
}]);



/*var app =angular.module('forumApp',[]);
app.controller('forumctrl', [ '$scope', '$http', function($scope, $http) {
	  //$scope.userid=document.getElementById("userid").value; 
	var BASE_URL = 'http://localhost:8036/Collaboration';
	console.log("forum")
	  $scope.submit = function() {	
		$scope.forum = {	
			fid       : $scope.forumid,
			forumName : $scope.forumName,
			forumDesc : $scope.forumDesc,
		}
		$http({
			method : 'POST',
			url : BASE_URL +'/createforum',
			data : $scope.forum
		}).success(function(data, status, headers, config) {
			//alert("Success");
			$scope.forumid ='';
			$scope.forumName = '';
			$scope.forumDesc = '';
			$scope.getAllForums();
		}).error(function(data, status, headers, config) {
			alert("Error");
		});	
	};
	
	
	$scope.getAllForums = function() {
		$http({
			method : 'GET',
			url : 'forum'
		}).success(function(data, status, headers, config) {
			$scope.forums = data;// alert(data); 
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	};
	
	$scope.getSingleForum = function() {
		$http({
			method : 'GET',
			url : 'Forum'
		}).success(function(data, status, headers, config) {
			$scope.forums = data;// alert(data); 
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	};
	
	$scope.deleteForum = function(fid) {
		$http({
			method : 'DELETE',
			url : 'deleteForum/'+fid
		}).success(function(data, status, headers, config) {
			//alert("Success"); 
			$scope.getAllForums();
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	}
	

	$scope.editForum = function(fid) {
		$http({
			method : 'GET',
			url : 'editForum/'+fid
		}).success(function(data, status, headers, config) {
			$scope.forum = data;// alert(data); 
			$scope.forumid = $scope.forum.fid;
			$scope.forumName = $scope.forum.forumName;
			$scope.forumDesc = $scope.forum.forumDesc;
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	};
	
	$scope.accessForum = function(f_userid) {
		if($scope.userid==f_userid)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	$scope.getAllForums();
}]);
*/