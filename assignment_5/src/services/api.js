// Mock API service - Can be replaced with real Shazam Core API

const mockSongs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    genre: "Pop",
    duration: 200,
    coverArt: "https://picsum.photos/seed/song1/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    releaseDate: "2020",
    lyrics: "I've been tryna call\nI've been on my own for long enough\nMaybe you can show me how to love, maybe",
  },
  {
    id: 2,
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    genre: "Pop",
    duration: 233,
    coverArt: "https://picsum.photos/seed/song2/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    releaseDate: "2017",
    lyrics: "The club isn't the best place to find a lover\nSo the bar is where I go",
  },
  {
    id: 3,
    title: "God's Plan",
    artist: "Drake",
    album: "Scorpion",
    genre: "Hip-Hop",
    duration: 198,
    coverArt: "https://picsum.photos/seed/song3/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    releaseDate: "2018",
    lyrics: "Yeah, they wishin' and wishin' and wishin' and wishin'\nThey wishin' on me",
  },
  {
    id: 4,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    genre: "Rock",
    duration: 354,
    coverArt: "https://picsum.photos/seed/song4/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    releaseDate: "1975",
    lyrics: "Is this the real life? Is this just fantasy?\nCaught in a landslide, no escape from reality",
  },
  {
    id: 5,
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    genre: "Pop",
    duration: 203,
    coverArt: "https://picsum.photos/seed/song5/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    releaseDate: "2020",
    lyrics: "If you wanna run away with me, I know a galaxy\nAnd I can take you for a ride",
  },
  {
    id: 6,
    title: "Starboy",
    artist: "The Weeknd ft. Daft Punk",
    album: "Starboy",
    genre: "Electronic",
    duration: 230,
    coverArt: "https://picsum.photos/seed/song6/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    releaseDate: "2016",
    lyrics: "I'm tryna put you in the worst mood, ah\nP1 cleaner than your church shoes, ah",
  },
  {
    id: 7,
    title: "HUMBLE.",
    artist: "Kendrick Lamar",
    album: "DAMN.",
    genre: "Hip-Hop",
    duration: 177,
    coverArt: "https://picsum.photos/seed/song7/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    releaseDate: "2017",
    lyrics: "Nobody pray for me\nIt's been that day for me",
  },
  {
    id: 8,
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    album: "Nevermind",
    genre: "Rock",
    duration: 301,
    coverArt: "https://picsum.photos/seed/song8/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    releaseDate: "1991",
    lyrics: "Load up on guns, bring your friends\nIt's fun to lose and to pretend",
  },
  {
    id: 9,
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    album: "x (Multiply)",
    genre: "Pop",
    duration: 281,
    coverArt: "https://picsum.photos/seed/song9/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    releaseDate: "2014",
    lyrics: "When your legs don't work like they used to before\nAnd I can't sweep you off of your feet",
  },
  {
    id: 10,
    title: "Smooth",
    artist: "Santana ft. Rob Thomas",
    album: "Supernatural",
    genre: "Rock",
    duration: 297,
    coverArt: "https://picsum.photos/seed/song10/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    releaseDate: "1999",
    lyrics: "Man, it's a hot one\nLike seven inches from the midday sun",
  },
  {
    id: 11,
    title: "Believer",
    artist: "Imagine Dragons",
    album: "Evolve",
    genre: "Rock",
    duration: 204,
    coverArt: "https://picsum.photos/seed/song11/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    releaseDate: "2017",
    lyrics: "First things first\nI'ma say all the words inside my head",
  },
  {
    id: 12,
    title: "One Dance",
    artist: "Drake ft. Wizkid",
    album: "Views",
    genre: "Hip-Hop",
    duration: 173,
    coverArt: "https://picsum.photos/seed/song12/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    releaseDate: "2016",
    lyrics: "Baby, I like your style\nGrips on your waist, front way, back way",
  },
  {
    id: 13,
    title: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    genre: "Pop",
    duration: 215,
    coverArt: "https://picsum.photos/seed/song13/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
    releaseDate: "2020",
    lyrics: "I saw you dancing in a crowded room\nYou look so happy when I'm not with you",
  },
  {
    id: 14,
    title: "Peaches",
    artist: "Justin Bieber",
    album: "Justice",
    genre: "R&B",
    duration: 198,
    coverArt: "https://picsum.photos/seed/song14/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
    releaseDate: "2021",
    lyrics: "I got my peaches out in Georgia\nI get my weed from California",
  },
  {
    id: 15,
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    album: "Uptown Special",
    genre: "Pop",
    duration: 269,
    coverArt: "https://picsum.photos/seed/song15/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
    releaseDate: "2014",
    lyrics: "This hit, that ice cold\nMichelle Pfeiffer, that white gold",
  },
];

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchSongs = async () => {
  await delay(800);
  return mockSongs;
};

export const fetchSongsByGenre = async (genre) => {
  await delay(800);
  if (genre === 'All') {
    return mockSongs;
  }
  return mockSongs.filter((song) => song.genre === genre);
};

export const fetchSongById = async (id) => {
  await delay(500);
  const song = mockSongs.find((song) => song.id === parseInt(id));
  if (!song) {
    throw new Error('Song not found');
  }
  return song;
};

export const fetchRelatedSongs = async (genre, currentSongId) => {
  await delay(500);
  return mockSongs
    .filter((song) => song.genre === genre && song.id !== currentSongId)
    .slice(0, 5);
};
