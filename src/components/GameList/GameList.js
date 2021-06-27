import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CSS from './GameList.module.css';

const imgBaseUrl = 'https://api.dev.cloud.barbooksaustralia.com/code-challenge';

const GameList = () => {
    const state = useSelector((state) => state);
    const gameList = state.games.list;
    const searchTerm = state.search.searchTerm;
    let displayGames;
    if (searchTerm !== "")
        displayGames = gameList.filter(game => game.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    else
        displayGames = gameList;

    const renderGames = () => {
        try {
            return displayGames.map((game) => {
                const { id, title, thumbnail, shortDescription } = game;
                return (
                    <div className={CSS.card} key={id}>
                        <h3 className={CSS.center}><b>{title}</b></h3>
                        <div className={CSS.container}>
                            <div className={CSS.image}>
                                <img src={imgBaseUrl + thumbnail} className={CSS.img} alt={title} />
                            </div>
                            <div className={CSS.details}>
                                <p>{shortDescription}</p>
                                <Link to={`/game/${id}`} className={CSS.link}>View More <b>&gt;</b></Link>
                            </div>
                        </div>
                    </div>
                )
            });
        }
        catch (error) {
            return (<span>{displayGames?.statusMessage}</span>)
        }
    }

    return (
        <div className={CSS.cards_container}>
            {renderGames()}
        </div>
    )
}

export default GameList;