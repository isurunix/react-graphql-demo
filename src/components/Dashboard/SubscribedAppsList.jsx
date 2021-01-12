import gql from "graphql-tag";
import React from 'react';
import { apolloClient } from "../../graphQLClient";
import { UserContext } from '../LoginForm/User';

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
class SubscribedAppsList extends React.Component {

    static contextType = UserContext

    constructor(props) {
        super();
        this.state = { loading: true };
        this.getSubscribedApps = this.getSubscribedApps.bind(this);
    }

    componentDidMount() {
        const consumer = UserContext.Provider;
        console.log(consumer);
        const user = this.context;
        console.log("didMount");
        console.log(user);
        const variables = { customerId: 1, appStatus: 1 };
        this.getSubscribedApps(variables);
    }

    componentDidUpdate() {
        console.log("didUpdate");
        const user = this.context;
        console.log(user);
    }

    componentWillUnmount() {
        console.log("willUnmount");
        const user = this.context;
        console.log(user);
    }

    render() {
        if (this.state.loading) {
            return "Loading...";
        }
        return <div>
            <div className="card-header">
                Subscribed Applications
            </div>
            <div className="card">
                <ul className="list-group list-group-flush">
                    {this.state.subscriptions.map((subscription) => {
                        return <li className="list-group-item" key={subscription.app.appId}>{subscription.app.appName}</li>
                    })}
                </ul>
            </div>
        </div>
    }

    getSubscribedApps(variables) {
        apolloClient.query({ query: AVAILABLE_APPS_QUERY, variables: variables })
            .then(response => {
                this.setState({ subscriptions: response.data.findAllAppSubscriptions });
                this.setState({ loading: response.loading });
            }).catch(err => {
                console.error(err);
            });
    }

}

export default SubscribedAppsList;