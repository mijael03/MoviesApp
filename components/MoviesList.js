import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem';
import { render } from 'react-dom';
const MoviesList = () => {
    const [data, setData] = useState([]);
    const getMovies = async () => {
        const url = 'https://movies-app1.p.rapidapi.com/api/movies?limit=20';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
                'X-RapidAPI-Key': '0cdaa4d6admsh9e5aa4158afa7ebp1b924fjsn219e048b4f80'
            }
        };
        try {
            const response = await fetch(url, options);
            const json = await response.json();
            setData(json.results);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getMovies();
    }, []);
    const renderMovieItem = ({ item }) => (
        <MovieItem movie={item} />
    )
    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderMovieItem}
                keyExtractor={item => item._id} />
        </View>
    )
}

export default MoviesList