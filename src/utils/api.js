import axios from "axios";

const BASE_URL = "https://www.themoviedb.org/";

const TMDB_TOKEN = import.meta.env.VITE_APP_URL;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

// export const fetch