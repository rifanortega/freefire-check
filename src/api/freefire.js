const BASE_URL = "https://flamingo.cobical.xyz/lookup/freefire";

/**
 * Search for a Free Fire player by keyword (nickname).
 * @param {string} keyword - The keyword/nickname to search for.
 * @param {string} server - The server region (default: "id").
 * @returns {Promise<Object>} - The search results.
 */
export const searchPlayer = async (keyword, server = "id") => {
    try {
        const response = await fetch(`${BASE_URL}/search?keyword=${encodeURIComponent(keyword)}&server=${server}`);
        if (!response.ok) throw new Error("Search failed");
        return await response.json();
    } catch (error) {
        console.error("Error searching player:", error);
        throw error;
    }
};

/**
 * Get player statistics.
 * @param {string} uid - The player UID.
 * @param {string} gamemode - 'br' or 'cs' (default: 'br').
 * @param {string} matchmode - 'CAREER', 'NORMAL', 'RANKED' (default: 'RANKED').
 * @param {string} server - The server region (default: "id").
 * @returns {Promise<Object>} - The player stats.
 */
export const getPlayerStats = async (uid, gamemode = "br", matchmode = "RANKED", server = "id") => {
    try {
        const response = await fetch(
            `${BASE_URL}/check-stats?uid=${uid}&server=${server}&gamemode=${gamemode}&matchmode=${matchmode}`
        );
        if (!response.ok) throw new Error("Failed to get stats");
        return await response.json();
    } catch (error) {
        console.error("Error fetching stats:", error);
        throw error;
    }
};

/**
 * Get player personal profile info.
 * @param {string} uid - The player UID.
 * @param {string} server - The server region (default: "id").
 * @returns {Promise<Object>} - The player profile.
 */
export const getPlayerProfile = async (uid, server = "id") => {
    try {
        const response = await fetch(`${BASE_URL}/check-profile?uid=${uid}&server=${server}&need_gallery_info=true`);
        if (!response.ok) throw new Error("Failed to get profile");
        return await response.json();
    } catch (error) {
        console.error("Error fetching profile:", error);
        throw error;
    }
};
