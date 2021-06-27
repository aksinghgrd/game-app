import React, { useEffect } from 'react';
import FiltersComponent from '../Filters/FiltersComponent';
import GameList from '../GameList/GameList';
import { useDispatch } from 'react-redux';
import { fetchGames } from '../../actions/gameActions';

const GameHomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGames());
    }, []);

    return (
        <div>
            <FiltersComponent />
            <GameList />
        </div>
    )
}

export default GameHomePage;

