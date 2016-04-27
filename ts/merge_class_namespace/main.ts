class Album {
    label: Album.AlbumLabel;
}

namespace Album {
    export class AlbumLabel {
        labelName = 'LABEL 1';
    }
}

let album = new Album();
album.label = {'labelName': 'LABEL 2'};
console.log(album);
