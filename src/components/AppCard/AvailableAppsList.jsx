import React from 'react'
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const AVAILABLE_APPS_QUERY = gql`
{
    findAllApps{
        appId
        appName
    }
}
`;

function AvailableAppsList() {

    const { data, loading } = useQuery(AVAILABLE_APPS_QUERY);
    if (loading) {
        return "Loading...";
    }
    return <div>
        <div className="card-header">
            Available Applications
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

export default AvailableAppsList;
