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


console.log(song1);


interface ShorterSongOptions {
   songs: Song[];
}

function shorterSong( options: ShorterSongOptions ): [number] {

   const { songs } = options;

   const durationArray = songs.map( ({ duration }) => duration );
   const shorterSongRes = Math.min( ...durationArray );

   

   return [ shorterSongRes ];

}

const songsList = [ song1, song2, song3 ];

const [ duration ] = shorterSong({
   songs: songsList,
})


console.log(`La duración menor es: `, duration);

