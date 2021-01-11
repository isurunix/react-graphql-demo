import gql from "graphql-tag";
import React from 'react';
import { apolloClient } from "../../graphQLClient";

const AVAILABLE_APPS_QUERY = gql`
{
    findAllApps{
        appId
        appName
    }
}
`;

class AvailableAppsList extends React.Component {


    constructor(props) {
        super()
        this.state = {
            loading: true
        };
        this.getAppList = this.getAppList.bind(this);
    }


    componentDidMount() {
        this.getAppList();
    }

    render() {
        const { apps, loading } = this.state
        if (loading) {
            return "Loading...";
        }
        return <div>
            <div className="card-header">
                Available Applications
                </div>
            <div className="card">
                <ul className="list-group list-group-flush">
                    {apps.map((app) => {
                        return <li className="list-group-item" key={app.appId}>{app.appName}</li>
                    })}
                </ul>
            </div>
        </div>
    }

    getAppList() {
        apolloClient.query({ query: AVAILABLE_APPS_QUERY, variables: {} })
            .then(response => {
                this.setState({ apps: response.data.findAllApps });
                this.setState({ loading: response.loading });
            }).catch(err => {
                console.error(err);
            });
    }
}

export default AvailableAppsList;
