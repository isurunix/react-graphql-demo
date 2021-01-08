import './AppCard.css'
import React from 'react'
import AvailableAppsList from './AvailableAppsList';
import SubscribedAppsList from './SubscribedAppsList';


function AppCard() {
    return (<div>
        <div className="row app-list">
            <AvailableAppsList />
        </div>
        <div className="row app-list">
            <SubscribedAppsList />
        </div>
    </div>
    );
}

export default AppCard;