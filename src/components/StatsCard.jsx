/* StatsCard.jsx */
import React from 'react';
import { Target, Skull, Trophy, HeartPulse, Shield, X, Map, Crosshair, Star } from 'lucide-react';
import '../styles/StatsCard.css';

const StatsCard = ({ title, stats, mode }) => {
    if (!stats) {
        return (
            <div className="stats-card glass-panel empty-card">
                <h3>{title}</h3>
                <p>No Data</p>
            </div>
        );
    }

    const detailed = stats.detailedstats || {};

    // Normalize data keys (CS uses slightly different keys than BR)
    const headshots = stats.headshots || detailed.headshotcount || detailed.headshots || 0;
    const kills = stats.kills || 0;
    const deaths = stats.deaths || detailed.deaths || 0;
    const wins = stats.wins || 0;
    const games = stats.gamesplayed || 0;

    // Helpers
    const kdRatio = deaths > 0 ? (kills / deaths).toFixed(2) : kills;
    const headshotRate = kills > 0 ? ((headshots / kills) * 100).toFixed(1) + '%' : '0%';
    const winRate = games > 0 ? ((wins / games) * 100).toFixed(1) + '%' : '0%';

    return (
        <div className="stats-card glass-panel">
            <div className="stats-header">
                <h3 className="stats-title">{title} <span className="mode-badge">{mode}</span></h3>
            </div>

            <div className="stats-main-grid">
                <div className="main-stat">
                    <span className="big-val">{games.toLocaleString()}</span>
                    <span className="lbl">Matches</span>
                </div>
                <div className="main-stat highlight">
                    <span className="big-val">{wins.toLocaleString()}</span>
                    <span className="lbl">Wins</span>
                    <span className="sub-lbl">{winRate} WR</span>
                </div>
                <div className="main-stat">
                    <span className="big-val">{kills.toLocaleString()}</span>
                    <span className="lbl">Kills</span>
                </div>
            </div>

            <div className="adv-stats-grid">
                <div className="adv-item">
                    <Skull size={14} className="icon-red" />
                    <span>KD: <strong>{kdRatio}</strong></span>
                </div>
                <div className="adv-item">
                    <Crosshair size={14} className="icon-blue" />
                    <span>HS: <strong>{headshotRate}</strong></span>
                </div>
                <div className="adv-item">
                    <HeartPulse size={14} className="icon-green" />
                    <span>Revives: <strong>{(detailed.revives || detailed.revivals || 0).toLocaleString()}</strong></span>
                </div>
                <div className="adv-item">
                    <Shield size={14} className="icon-yellow" />
                    <span>Dmg: <strong>{detailed.damage ? parseInt(detailed.damage).toLocaleString() : 0}</strong></span>
                </div>

                {/* CS Specific Stats */}
                {detailed.mvpcount !== undefined && (
                    <div className="adv-item">
                        <Star size={14} className="icon-orange" />
                        <span>MVP: <strong>{detailed.mvpcount}</strong></span>
                    </div>
                )}
                {detailed.assists !== undefined && (
                    <div className="adv-item">
                        <Target size={14} className="text-muted" />
                        <span>Assist: <strong>{detailed.assists}</strong></span>
                    </div>
                )}

                {/* Extra Details */}
                {detailed.survivaltime && (
                    <div className="adv-item full-width">
                        <span className="lbl-row">Survival Time:</span>
                        <span className="val-row">{(detailed.survivaltime / 60).toFixed(0)} mins</span>
                    </div>
                )}
                {(detailed.headshotkills || detailed.headshotcount) && (
                    <div className="adv-item full-width">
                        <span className="lbl-row">HS Count:</span>
                        <span className="val-row">{detailed.headshotkills || detailed.headshotcount}</span>
                    </div>
                )}
                {detailed.mostkills && (
                    <div className="adv-item full-width">
                        <span className="lbl-row">Max Kills/Game:</span>
                        <span className="val-row">{detailed.mostkills || detailed.onegamemostkills}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatsCard;
