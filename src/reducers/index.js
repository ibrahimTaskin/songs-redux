import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Kuzu Kuzu", duration: "4:05" },
    { title: "Bir Kadın Çizeceksin", duration: "5:12" },
    { title: "Duvar", duration: "3:15" },
    { title: "Çakmak Çakmak", duration: "4:28" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

const countReducer = (count = 0, action) => {
  switch (action) {
    case action.type === "INCEREMENT_COUNT":
      return count + action.payload;
    case action.type === "DECEREMENT_COUNT":
      return count + action.payload;
    default:
      return count;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  count: countReducer,
});
