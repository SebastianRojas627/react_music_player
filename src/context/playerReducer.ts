const types = {
  login: "auth - login",
  logout: "auth - logout",
  play: "player - play",
  pause: "player - pause",
};

const initialValues = {
  auth: false,
  songs: [
    {
      id: 1,
      name: "Cheap Thrills",
      artistName: "Adam Lambert",
      albumName: "Everything",
      year: 2021,
      src: `https://source.unsplash.com/random/400x400?date=1`,
      songSrc: `https://filesamples.com/samples/audio/mp3/sample1.mp3`,
    },
    {
      id: 2,
      name: "Lean on",
      artistName: "Adam Levine",
      albumName: "Goind Down",
      year: 2001,
      src: `https://source.unsplash.com/random/400x400?date=2`,
      songSrc: `https://filesamples.com/samples/audio/mp3/sample2.mp3`,
    },
    {
      id: 3,
      name: "Counting Stars",
      artistName: "Adam Hart",
      albumName: "Spice It Up",
      year: 2013,
      src: `https://source.unsplash.com/random/400x400?date=3`,
      songSrc: `https://filesamples.com/samples/audio/mp3/sample3.mp3`,
    },
    {
      id: 4,
      name: "Starstruck",
      artistName: "Joe Hart",
      albumName: "Manchester Nights",
      year: 2004,
      src: `https://source.unsplash.com/random/400x400?date=4`,
      songSrc: `https://filesamples.com/samples/audio/mp3/sample4.mp3`,
    },
  ],
};

const playerReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        auth: true,
      };
    case types.logout:
      return {
        ...state,
        auth: false,
      };
    default:
      return state;
  }
};

export { initialValues, types };
export default playerReducer;
