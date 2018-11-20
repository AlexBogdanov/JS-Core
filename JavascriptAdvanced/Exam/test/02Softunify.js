const expect = require('chai').expect;

const SoftUniFy = require('./../src/02Softunify/class');

describe('softunify unit tests', function () {
    let softunify;
    beforeEach(function () {
        softunify = new SoftUniFy();
    });

    describe('constructor', function () {
        it('should return empty obj, when allSongs are called', function () {
            const result = softunify.allSongs;
            expect(result).to.eql({});
        });
    });

    describe('downloadSong', function () {
        it('should add new artist, if the artist is not in the array yet', function () {
            softunify.downloadSong('Bon Jovi', 'It`s my life', 'some lyrics');
            const result = softunify.allSongs;
            expect(result).to.eql({
                "Bon Jovi": {
                    rate: 0,
                    songs: [
                        "It`s my life - some lyrics"
                    ],
                    votes: 0
                }
            });
        });

        it('should not add new artist, if the artist is not in the array, but should add songs to it', function () {
            softunify.downloadSong('Bon Jovi', 'It`s my life', 'some lyrics');
            softunify.downloadSong('Bon Jovi', 'Anada song', 'some lyrics');
            const result = softunify.allSongs;
            expect(result).to.eql({
                "Bon Jovi": {
                    rate: 0,
                    songs: [
                        "It`s my life - some lyrics",
                        "Anada song - some lyrics"
                    ],
                    votes: 0
                }
            });
        });
    });

    describe('playSong', function () {
        it('should return all songs with the input name, if they are in the array', function () {
            softunify.downloadSong('Bon Jovi', 'It`s my life', 'some lyrics');
            softunify.downloadSong('Anada Artist', 'It`s my life', 'some lyrics');
            softunify.downloadSong('Bon Jovi', 'Anada song', 'some lyrics');
            const result = softunify.playSong('It`s my life');
            expect(result).to.eql('Bon Jovi:\nIt`s my life - some lyrics\nAnada Artist:\nIt`s my life - some lyrics\n');
        });

        it('should return string, if the song is not in the array', function () {
            softunify.downloadSong('Bon Jovi', 'It`s my life', 'some lyrics');
            softunify.downloadSong('Anada Artist', 'It`s my life', 'some lyrics');
            softunify.downloadSong('Bon Jovi', 'Anada song', 'some lyrics');
            const result = softunify.playSong('Some song');
            expect(result).to.eql('You have not downloaded a Some song song yet. Use SoftUniFy\'s function downloadSong() to change that!');
        });
    });

    // Moje da trqbva da dobavq oshte edin test
    describe('get songsList', function () {
        it('should return string with all songs, if there are songs in the array', function () {
            softunify.downloadSong('Bon Jovi', 'It`s my life', 'some lyrics');
            softunify.downloadSong('Anada Artist', 'It`s my life', 'some lyrics');
            softunify.downloadSong('Bon Jovi', 'Anada song', 'some lyrics');
            const result = softunify.songsList;
            expect(result).to.eql('It`s my life - some lyrics\nAnada song - some lyrics\nIt`s my life - some lyrics');
        });

        it('should return string, if there are no songs in the array', function () {
            const result = softunify.songsList;
            expect(result).to.eql('Your song list is empty');
        });
    });

    describe('rateArtist', function () {
        it('should return the rate of the artist, if the artist exists and the rate is a number', function () {
            softunify.downloadSong('Bon Jovi', 'It`s my life', 'some lyrics');
            const result = softunify.rateArtist('Bon Jovi', 5);
            expect(result).to.eql(5.00);
        });

        it('should return rate 0 of the artist, if the artist exists and the rate is a not a number', function () {
            softunify.downloadSong('Bon Jovi', 'It`s my life', 'some lyrics');
            const result = softunify.rateArtist('Bon Jovi', 'invalid rate');
            expect(result).to.eql(0);
        });

        it('should return string, if the artist does not exist in the array', function () {
            const result = softunify.rateArtist('Bon Jovi', 5.00);
            expect(result).to.eql('The Bon Jovi is not on your artist list.');
        });
    });
});