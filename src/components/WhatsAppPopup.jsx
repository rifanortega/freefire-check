import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import '../styles/WhatsAppPopup.css';

const WhatsAppPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup after 3 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="wa-popup animate-pop-in">
            <button className="wa-close-btn" onClick={() => setIsVisible(false)}>
                <X size={16} />
            </button>
            <div className="wa-content">
                <div className="wa-icon-pulse">
                    <MessageCircle size={32} color="#fff" fill="#25D366" />
                </div>
                <div className="wa-text">
                    <h4>Join Community!</h4>
                    <p>Dapatkan update script & fitur terbaru.</p>
                </div>
            </div>
            <a
                href="https://whatsapp.com/channel/0029VbAw4ylHltY9sSJw6q0z"
                target="_blank"
                rel="noopener noreferrer"
                className="wa-join-btn"
            >
                GABUNG SEKARANG
            </a>
        </div>
    );
};

export default WhatsAppPopup;
