import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { getPlayerProfile, getPlayerStats } from '../api/freefire';
import ProfileView from '../components/ProfileView';
import StatsCard from '../components/StatsCard';
import Spinner from '../components/Spinner';
import '../styles/App.css';

const Profile = () => {
    const { uid } = useParams();
    const [profile, setProfile] = useState(null);

    // Stats States
    const [brRanked, setBrRanked] = useState(null);
    const [brCareer, setBrCareer] = useState(null);
    const [csRanked, setCsRanked] = useState(null);
    const [csCareer, setCsCareer] = useState(null);
    const [csNormal, setCsNormal] = useState(null);
    const [brNormal, setBrNormal] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [
                    profileData,
                    brRankedData,
                    brCareerData,
                    brNormalData,
                    csRankedData,
                    csCareerData,
                    csNormalData
                ] = await Promise.all([
                    getPlayerProfile(uid),
                    getPlayerStats(uid, 'br', 'RANKED'),
                    getPlayerStats(uid, 'br', 'CAREER'),
                    getPlayerStats(uid, 'br', 'NORMAL'),
                    getPlayerStats(uid, 'cs', 'RANKED'),
                    getPlayerStats(uid, 'cs', 'CAREER'),
                    getPlayerStats(uid, 'cs', 'NORMAL'),
                ]);

                setProfile(profileData);

                // Helper to extract best stats (quad > duo > solo) OR csstats for CS
                const getStats = (res, type = 'br') => {
                    if (!res || !res.data) return null;
                    if (type === 'cs') {
                        return res.data.csstats || res.data.quadstats || res.data.duostats || res.data.solostats;
                    }
                    return res.data.quadstats || res.data.duostats || res.data.solostats;
                };

                setBrRanked(getStats(brRankedData, 'br'));
                setBrCareer(getStats(brCareerData, 'br'));
                setBrNormal(getStats(brNormalData, 'br'));

                setCsRanked(getStats(csRankedData, 'cs'));
                setCsCareer(getStats(csCareerData, 'cs'));
                setCsNormal(getStats(csNormalData, 'cs'));

            } catch (err) {
                console.error(err);
                setError('Failed to load profile data, maybe because this account not from Indonesia.');
            } finally {
                setLoading(false);
            }
        };

        if (uid) {
            fetchData();
        }
    }, [uid]);

    if (loading) return <div className="page-container flex-center"><Spinner /></div>;
    if (error) return <div className="page-container flex-center"><h3>{error}</h3></div>;

    return (
        <div className="page-container container" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
            <Link to="/" className="btn btn-ghost mb-20">
                <ChevronLeft size={20} /> Back to Search
            </Link>

            <ProfileView profile={profile} />

            <h2 className="section-title">Battle Royale Stats</h2>
            <div className="stats-section-grid">
                <StatsCard title="BR Ranked" mode="Ranked" stats={brRanked} />
                <StatsCard title="BR Career" mode="Lifetime" stats={brCareer} />
                <StatsCard title="BR Normal" mode="Casual" stats={brNormal} />
            </div>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Clash Squad Stats</h2>
            <div className="stats-section-grid">
                <StatsCard title="CS Ranked" mode="Ranked" stats={csRanked} />
                <StatsCard title="CS Career" mode="Lifetime" stats={csCareer} />
                <StatsCard title="CS Normal" mode="Casual" stats={csNormal} />
            </div>
        </div>
    );
};

export default Profile;
