import React from 'react';
import { Share2, ThumbsUp, Users, Calendar, PenTool, Hash, Activity } from 'lucide-react';
import '../styles/ProfileView.css';

const ProfileView = ({ profile }) => {
    if (!profile || !profile.basicinfo) return null;

    const { basicinfo, clanbasicinfo, socialinfo, petinfo, creditscoreinfo } = profile;

    const formatDate = (timestamp) => {
        if (!timestamp) return 'Unknown';
        return new Date(parseInt(timestamp) * 1000).toLocaleDateString();
    };

    return (
        <div className="profile-view animate-fade-in">
            {/* Main Header Card */}
            <div className="profile-header glass-panel">
                <div className="profile-left">
                    <div className="avatar-container">
                        <div className="avatar-circle">
                            <span className="lvl-badge">LVL {basicinfo.level}</span>
                            <img
                                src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${basicinfo.nickname}`}
                                alt="Avatar"
                                className="avatar-img"
                            />
                        </div>
                    </div>
                </div>

                <div className="profile-content">
                    <div className="profile-top-row">
                        <h1 className="profile-name">
                            {basicinfo.nickname}
                            <span className="uid-tag"><Hash size={14} style={{ marginRight: 4 }} />{basicinfo.accountid}</span>
                        </h1>
                        <div className="profile-actions">
                            {/* Could add share functionality here */}
                        </div>
                    </div>

                    <div className="profile-stats-row">
                        <div className="p-stat">
                            <ThumbsUp size={16} className="text-primary" />
                            <span>{basicinfo.liked} Likes</span>
                        </div>
                        <div className="p-stat">
                            <Users size={16} className="text-secondary" />
                            <span>{basicinfo.exp ? parseInt(basicinfo.exp).toLocaleString() : 0} EXP</span>
                        </div>
                        <div className="p-stat">
                            <Activity size={16} className="text-muted" />
                            <span>Credit: {creditscoreinfo?.creditscore || 100}</span>
                        </div>
                    </div>

                    <div className="profile-tags">
                        {clanbasicinfo && (
                            <div className="tag clan-tag">
                                <span className="tag-label">Guild</span>
                                <span className="tag-val">{clanbasicinfo.clanname}</span>
                            </div>
                        )}
                        <div className="tag">
                            <span className="tag-label">Joined</span>
                            <span className="tag-val">{formatDate(basicinfo.createat)}</span>
                        </div>
                        <div className="tag">
                            <span className="tag-label">Last Login</span>
                            <span className="tag-val">{formatDate(basicinfo.lastloginat)}</span>
                        </div>
                    </div>

                    {/* Bio / Signature */}
                    <div className="bio-section">
                        <PenTool size={14} className="text-muted" />
                        <span className="bio-text">"{socialinfo?.signature || 'No Signature'}"</span>
                    </div>
                </div>
            </div>

            {/* Pet & Extra Info Horizontal Scroll or Grid */}
            {petinfo && (
                <div className="extra-info-row">
                    <div className="glass-panel info-mini-card">
                        <div className="mini-label">ACTIVE PET</div>
                        <div className="mini-val text-primary">{petinfo.name || 'Unknown Pet'} (Lvl {petinfo.level})</div>
                    </div>
                    <div className="glass-panel info-mini-card">
                        <div className="mini-label">REGION</div>
                        <div className="mini-val">{basicinfo.region}</div>
                    </div>
                    <div className="glass-panel info-mini-card">
                        <div className="mini-label">RANK PTS</div>
                        <div className="mini-val">{basicinfo.rankingpoints}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileView;
