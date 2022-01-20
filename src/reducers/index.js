import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Kuzu Kuzu", duration: "4:05" },
    { title: "Bir Kadın Çizeceksin", duration: "5:12" },
    { title: "Duvar", duration: "3:15" },
    { title: "Çakmak Çakmak", duration: "4:28" },
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
