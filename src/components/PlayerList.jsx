import React from 'react';
import { Link } from 'react-router-dom';
import { User, Shield, Zap } from 'lucide-react';
import '../styles/PlayerList.css';

const PlayerCard = ({ player }) => {
    return (
        <Link to={`/profile/${player.accountid}`} className="player-card glass-panel animate-fade-in">
            <div className="card-header">
                <div className="avatar-placeholder">
                    {/* Use specific avatar logic if needed, or placeholder */}
                    <User size={30} color="#fff" />
                </div>
                <div className="player-info">
                    <h3 className="player-name">{player.nickname}</h3>
                    <span className="player-uid">UID: {player.accountid}</span>
                </div>
            </div>

            <div className="card-detailed-info">
                <div className="info-pill">
                    <Shield size={14} />
                    <span>Lvl {player.level}</span>
                </div>
                <div className="info-pill region-pill">
                    <span>{player.region}</span>
                </div>
                <div className="info-pill rank-pill">
                    <Zap size={14} />
                    <span>Rank {player.rank}</span>
                </div>
            </div>
        </Link>
    );
};

const PlayerList = ({ players }) => {
    if (!players || players.length === 0) return null;

    return (
        <div className="player-list-container container">
            <h2 className="results-title">
                Found <span className="highlight">{players.length}</span> Results
            </h2>
            <div className="player-grid">
                {players.map((player) => (
                    <PlayerCard key={player.accountid} player={player} />
                ))}
            </div>
        </div>
    );
};

export default PlayerList;
