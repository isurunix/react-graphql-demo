import React from 'react';
import AvailableAppsList from './AvailableAppsList';
import './index.css';
import SubscribedAppsList from './SubscribedAppsList';


class Dashboard extends React.Component {
    render() {
        return <div>
            <div className="row app-list">
                <AvailableAppsList />
            </div>
            <div className="row app-list">
                <SubscribedAppsList />
            </div>
        </div>
    }


}

export default Dashboard;