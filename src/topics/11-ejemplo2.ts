interface Song {
   name: string;
   singer: string;
   duration: number;
}

const song1: Song = {
   name: 'It never rains in Southern Califorma',
   singer: 'Albert Hammond',
   duration: 353,
}

const song2: Song = {
   name: 'Texturas',
   singer: 'Soda Stereo',
   duration: 443,
}

const song3: Song = {
   name: 'Lobo Hombre en París',
   singer: 'La Unión',
   duration: 352,
}

const song4: Song = {
   name: 'Mentira',
   singer: 'La Ley',
   duration: 448,
}

const song5: Song = {
   name: 'Desvelado',
   singer: 'Bobby Pulido',
   duration: 341,
}

const song6: Song = {
   name: 'Lucha de Gigantes',
   singer: 'Nacha Pop',
   duration: 408,
}


interface ShorterSongOptions {
   songs: Song[];
}

function shorterSong( options: ShorterSongOptions ): [number, string, string] {

   const { songs } = options;

   /* From an array of objects, extract value of a property as array */
   const durationArray = songs.map( ({ duration }) => duration );
   /*  Find the Smallest Number in an Array */
   const shorterSongRes = Math.min( ...durationArray );

   /* singer variable has an arbitrary name */
   const singer = songs.find(( singer ) =>
      ( shorterSongRes === singer.duration)
   );

   /* this was unnecessary due singer = songs.find already has name property within "songs" */
   // const name = songs.find(( singer ) =>
   //    ( shorterSongRes === singer.duration)
   // );
   

   return [ shorterSongRes, singer?.name || '', singer?.singer || ''];

}


const songsList = [ song1, song2, song3, song4, song5, song6 ];


const [ durationSong, nameSong, singerSong ] = shorterSong({
   songs: songsList,
})


console.log(`La canción que tiene la duración menor es ${ nameSong } de ${ singerSong }, con una duración de ${ durationSong }`);

