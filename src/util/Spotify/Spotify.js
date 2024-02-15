let accessToken = "";
const clientID = "ee586e7684594f909b05cbe8bf48d7e9";
const redirectUrl = "http://localhost:3000";

const Spotify = {
    getAccessToken() {
        // First check for the access token
        if (accessToken) return accessToken;
        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        // Second check for the access token
        if (tokenInURL && expiryTime) {
            // Setting access token and expiry time variables
            accessToken = tokenInURL[1];
            const expiresIn = Number(expiryTime[1]);

            // Setting the access token to expire at the value for expiration time
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
            // Clearing the url after the access token expires
            window.history.pushState("Access token", null, "/");
            return accessToken
        }

        //Third check for the access token if the first and second check are false
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
        window.location = redirect;
    },
};

export {Spotify};