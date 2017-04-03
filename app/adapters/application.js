import DS from 'ember-data';
import ENV from "twitch-ember-app/config/environment";

export default DS.JSONAPIAdapter.extend({
  host: 'https://api.twitch.tv/kraken',
  namespace: 'search',
  headers: {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': ENV.TWITCH_KEY
  }
});
