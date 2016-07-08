juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {


    $scope.submit = function () {
      PlaylistFactory.create($scope.playlist)
      .then(function(playlist) {
       $scope.playlistForm.$setPristine();
       $scope.playlist.name = null;
     })

    };
    $scope.isNotValid = function () {
      return $scope.playlistForm.$invalid;
    };
    $scope.showWarning = function () {
      return !$scope.playlistForm.$pristine && !$scope.playlist.name;
    };
  });

juke.controller('PlaylistItemsCtrl', function($scope, PlaylistFactory) {
  PlaylistFactory.fetchAll()
  .then(function(playlists) {
    $scope.playlists = playlists;
  })

})
