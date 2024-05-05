import axios from "axios";
import React from "react";

const BASE_ENDPOINT_URL = 'https://api.themoviedb.org/3/'
export const DETAILS_ENDPOINT = "movie/"
export const LATEST_MOVIES_ENDPOINT = "trending/movie/day?language=en-US&page="
export const SEARCH_MOVIES_ENDPOINT = "search/movie?language=en-US&query="

export const axios_instance = axios.create({
    baseURL: BASE_ENDPOINT_URL,
    timeout: 10000,
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmUzNDllMDdiNGJmZWVkNDY3NDQ3ZGMzYTIyM2EyNyIsInN1YiI6IjY2MzVkYjk1YzkwNTRmMDEyZDhmY2I2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L838PulSl2j8cReLWh9pg0lKhs2jXfo8vABygCXHhdc'
    }
});

export const IMAGE_URL = "https://image.tmdb.org/t/p/original"

export const HomeTabContext = React.createContext({})