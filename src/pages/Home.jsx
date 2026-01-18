import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchHero from '../components/SearchHero';
import PlayerList from '../components/PlayerList';
import Spinner from '../components/Spinner';
import { searchPlayer } from '../api/freefire';

const Home = () => {
    const navigate = useNavigate();
    const [players, setPlayers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (keyword, mode) => {
        // If mode is UID, go directly to profile
        if (mode === 'uid') {
            navigate(`/profile/${keyword}`);
            return;
        }

        setLoading(true);
        setError(null);
        setPlayers(null);
        try {
            const data = await searchPlayer(keyword);
            if (data && data.infos) {
                setPlayers(data.infos);
            } else {
                setPlayers([]);
            }
        } catch (err) {
            console.error(err);
            setError('Search failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page-home">
            <SearchHero onSearch={handleSearch} />

            <div id="results-section">
                {loading && <Spinner />}
                {error && <div className="container error-msg text-center">{error}</div>}
                {players && <PlayerList players={players} />}
                {players && players.length === 0 && (
                    <div className="container text-center text-muted" style={{ padding: '2rem' }}>
                        No players found. Try a different nickname.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
