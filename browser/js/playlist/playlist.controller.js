juke.controller('PlaylistFormCtrl', function ($state, $scope, PlaylistFactory) {

    $scope.submit = function () {
      PlaylistFactory.create($scope.playlist)
      .then(function (playlist) {
       $scope.playlistForm.$setPristine();
       $scope.playlist.name = null;
       $state.go('playlist', {playlistId: playlist.id})
     });

    };
    $scope.isNotValid = function () {
      return $scope.playlistForm.$invalid;
    };
    $scope.showWarning = function () {
      return !$scope.playlistForm.$pristine && !$scope.playlist.name;
    };
  });


juke.controller('PlaylistCtrl', function($scope, thePlaylist, songSelection, PlaylistFactory, PlayerFactory) {

  $scope.playlist = thePlaylist;
  $scope.playlist.songSelection = songSelection;

  $scope.addSong = function (playlist, song) {
    PlaylistFactory.addSong(playlist, song)
    .then(function () {
      $scope.addSongForm.$setPristine();
      $scope.selectedSong = null;
    });
  };

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.playlist.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

})
