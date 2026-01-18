import React, { useState } from 'react';
import { Search } from 'lucide-react';
import '../styles/SearchHero.css';

const SearchHero = ({ onSearch }) => {
    const [keyword, setKeyword] = useState('');
    const [mode, setMode] = useState('nickname'); // 'nickname' or 'uid'

    const handleSubmit = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            onSearch(keyword, mode);
        }
    };

    return (
        <div className="search-hero">
            <div className="hero-content">
                <h1 className="hero-title animate-fade-in">
                    {mode === 'nickname' ? "SEARCH " : "CHECK "}
                    <span className="text-gradient">
                        {mode === 'nickname' ? "PLAYER" : "STATS"}
                    </span>
                </h1>
                <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    {mode === 'nickname'
                        ? "Search for Free Fire players."
                        : "Enter Player UID to Get Information."}
                </p>

                <div className="search-mode-toggles animate-fade-in" style={{ animationDelay: '0.15s' }}>
                    <button
                        className={`mode-btn ${mode === 'nickname' ? 'active' : ''}`}
                        onClick={() => setMode('nickname')}
                    >
                        Nickname
                    </button>
                    <button
                        className={`mode-btn ${mode === 'uid' ? 'active' : ''}`}
                        onClick={() => setMode('uid')}
                    >
                        UID
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="search-form animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="search-input-wrapper glass-panel">
                        <Search className="search-icon" size={24} />
                        <input
                            type={mode === 'uid' ? "number" : "text"}
                            placeholder={mode === 'nickname' ? "Enter Nickname..." : "Enter Player UID..."}
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            className="search-input"
                        />
                        <button type="submit" className="btn btn-primary search-btn">
                            {mode === 'nickname' ? "SEARCH" : "CHECK"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchHero;
