console.log("Starting server...");

import '../../api/api.js';
import settings from '../../../settings'

ServiceConfiguration.configurations.upsert(
    { service: 'google' },
    {
        $set: {
            loginStyle: "popup",
            clientId: settings.google.clientId, // See table below for correct property name!
            secret: settings.google.secret
        }
    }
);