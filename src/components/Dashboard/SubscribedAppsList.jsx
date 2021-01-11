import { graphql } from '@apollo/client/react/hoc';
import gql from "graphql-tag";
import React from 'react';

const AVAILABLE_APPS_QUERY = gql`
{
    findAllApps{
        appId
        appName
    }
}
`;

class SubscribedAppsList extends React.Component {

    constructor(props) {
        super(props);
        this.apps = [];
    }

    render() {
        if (this.props.data.loading) {
            return "Loading...";
        }
        return <div>
            <div className="card-header">
                Subscribed Applications
            </div>
            <div className="card">
                <ul className="list-group list-group-flush">
                    {this.props.data.findAllApps.map((app) => {
                        return <li className="list-group-item" key={app.appId}>{app.appName}</li>
                    })}
                </ul>
            </div>
        </div>
    }

}

export default graphql(AVAILABLE_APPS_QUERY)(SubscribedAppsList);