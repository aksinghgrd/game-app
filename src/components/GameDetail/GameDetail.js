import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedGame, selectGame } from '../../actions/gameActions';
import CSS from './GameDetail.module.css';

const imgBaseUrl = 'https://api.dev.cloud.barbooksaustralia.com/code-challenge';

const GameDetail = () => {
    const { gameId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selectGame(gameId));
        return () => {
            dispatch(removeSelectedGame())
        }
    }, []);

    const game = useSelector((state) => state.games.selectedGame);

    const renderRequirements = () => {
        const requirements = game.minimumSystemRequirements;
        if(!requirements)
            return  (<label><b>No Requirements</b></label>)
        console.log(requirements);
        return Object.keys(requirements).map(key => {
            return (
                <div className={CSS.requirement_item} key={key}>
                    <label><b>{key}</b></label>
                    <span>{requirements[key]}</span>
                </div>
            )
        });
    }

    const renderImages = () => {
        const screenshots = game.screenshots;
        if(!screenshots)
            return (<label><b>No Images</b></label>)
        return screenshots.map(item => {
            return (
                <div className={CSS.image_card} key={item.id}>
                    <img src={imgBaseUrl + item.image} className={CSS.img} alt={'screenshot-' + item.id} />
                </div>
            )
        })
    }
    return (game === null ? <span>Loading....</span> :
        <>
            <div className={CSS.card} key={game.id}>
                <div className={CSS.container}>
                    <div className={CSS.image}>
                        <img src={imgBaseUrl + game.thumbnail} className={CSS.img} alt={game.title} />
                    </div>
                    <div className={CSS.details}>
                        <div className={CSS.requirement}>
                            <h3><b>Requirements</b></h3>
                            {renderRequirements()}
                        </div>
                        <div className={CSS.desc}>
                            <h3><b>{game.title}</b></h3>
                            <p>{game.description}</p>
                            <Link className={CSS.link} to="/"> <b>&lt;</b> Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={CSS.image_container}>
                {renderImages()}
            </div>
        </>
    )
}

export default GameDetail;