function printCurrentSong(data) {
    let currSong = {
        songName: data[0],
        artistName: data[1],
        songDuration: data[2]
    };

    console.log(`Now Playing: ${currSong.artistName} - ${currSong.songName} [${currSong.songDuration}]`);
}