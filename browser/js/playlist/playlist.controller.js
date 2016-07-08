juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {

    $scope.submit = function () {
        PlaylistFactory.create($scope.playlist);
    };
    $scope.isNotValid = function () {
        return $scope.playlistForm.$invalid;
    };
    $scope.showWarning = function () {
        return !$scope.playlistForm.$pristine && !$scope.playlist.name;
    };
});
