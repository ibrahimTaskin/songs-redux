//action creator
export const selectSong = (song) => {
  //return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

export const incrementCount = () => {
  return {
    type: "INCEREMENT_COUNT",
    payload: 1,
  };
};

export const decrementCount = () => {
  return {
    type: "DECEREMENT_COUNT",
    payload: 1,
  };
};
