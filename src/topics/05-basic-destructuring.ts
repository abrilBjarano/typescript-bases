interface AudioPlayer {
   audioVolume: number;
   songDuration: number;
   song: string;
   details: Details; /* 📍 */
}

interface Details { /* 📍 */
   author: string;
   year: number;
}

const audioPlayer: AudioPlayer = {
   audioVolume: 100,
   songDuration: 180,
   song: 'Día de enero',
   details: {
      author: 'Shakira',
      year: 2005,
   }
}


/* Vanilla way ⬇️ */

console.log('Song vanilla way: ', audioPlayer.song);
console.log('Author vanilla way: ', audioPlayer.details.author);
console.log('Year vanilla way: ', audioPlayer.details.year);


/* Destructuring way ⬇️⬇️⬇️ */ console.log('🟨🟥🟨🟥🟨🟥🟨🟥🟨🟥🟨🟥🟨🟥🟨🟥🟨🟥');

const { song, details } = audioPlayer;
const { author, year } = details;

console.log('Song destructuring way: ', song);
console.log('Author destructuring way: ', author);
console.log('Year destructuring way: ', year);


/* Properties names can be changed also ⬇️⬇️⬇️ */ console.log('🍃🍃🍃🍃🍃🍃🍃🍃🍃🍃🍃🍃🍃🍃🍃🍃🍃🍃');

const { songDuration: duration /* "duration" being the new property name */ } = audioPlayer;

console.log('Song duration: ', duration /* duration equals to songDuration property */);













/* Lets practice! ⬇️⬇️⬇️ */ console.log('🦥🦥🦥🦥🦥🦥🦥🦥🦥🦥🦥🦥🦥🦥🦥🦥🦥🦥');


/* Make an Object and then create the Interaface and destructure it.  */


interface MovieDisplay {
   name: string;
   movies: number;
   mainActor: string;
   year1: number;
   fans: Fans; /* 📍 */
}

interface Fans { /* 📍 */
   name: string;
   details1: FanDetails; /* 📍 */
}

interface FanDetails { /* 📍 */
   age: number;
   team: string;
}

const movieDisplay: MovieDisplay = {
   name: 'Twilight',
   movies: 5,
   mainActor: 'Edward Cullen',
   year1: 2008,

   fans: { 
      name: 'Abril',

      details1: {
         age: 21,
         team: 'Edward',
      }
   }
}


const { name: movieName, fans } = movieDisplay;
const { name: fanName, details1 } = fans;
const { age: fanAge, team} = details1;

console.log('Name of the movie: ', movieName);
console.log('Name of the biggest fan: ', fanName);
console.log(`Age of ${ fanName }: `, fanAge);
console.log(`Team of ${ fanName }: `, team);





































export {};