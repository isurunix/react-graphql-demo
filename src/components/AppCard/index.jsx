import React from 'react'
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const APPS_QUERY = gql`
{
    findAllApps{
        appId
        appName
    }
}
`;

function AppCard() {

    const { data, loading } = useQuery(APPS_QUERY);
    if (loading) {
        return "Loading...";
    }
    return <div>
        <div className="card-header">
            Applications
            </div>
        <div className="card">
            <ul className="list-group list-group-flush">
                {data.findAllApps.map((app) => {
                    return <li className="list-group-item" key={app.appId}>{app.appName}</li>
                })}
            </ul>
        </div>
    </div>
}

export default AppCard;