

interface AudioPlayer {
   audioVolume: number;
   songDuration: number;
   song: string;
   details: Details;
}

interface Details {
   author: string;
   year: number;
}

const audioPlayer: AudioPlayer = {
   audioVolume: 90,
   songDuration: 180,
   song: "Día de enero",
   details: {
      author: 'Shakira',
      year: 2005,
   },
}

const song = 'New Song';

const { 
   song:anotherSong, 
   songDuration:duration,
   details
   // details:{ author }
} = audioPlayer;

const { author } = details;

// console.log('Song: ', audioPlayer.song);
console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);
















// Ctrl .


export {};