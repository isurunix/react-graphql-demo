import { graphql } from '@apollo/client/react/hoc';
import gql from "graphql-tag";
import React from 'react';
import { UserContext } from '../LoginForm';

const AVAILABLE_APPS_QUERY = gql`
query findAllSubscriptions(
    $customerId: Int!
    $appStatus: Int!
){
    findAllAppSubscriptions(customerId:$customerId, status:$appStatus){
        app{
          appId
          appName
        }
      }
}
`;

const variables = {
    customerId: 0,
    appStatus: 0
}

class SubscribedAppsList extends React.Component {

    static contextType = UserContext

    componentDidMount() {
        const user = this.context;
        variables.customerId = user.customerCode;
        variables.appStatus = 1;
        this.props.data.refetch(variables);
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
                    {this.props.data.findAllAppSubscriptions.map((subscription) => {
                        return <li className="list-group-item" key={subscription.app.appId}>{subscription.app.appName}</li>
                    })}
                </ul>
            </div>
        </div>
    }

}

export default graphql(AVAILABLE_APPS_QUERY, {
    options: {
        variables: variables
    }
})(SubscribedAppsList);