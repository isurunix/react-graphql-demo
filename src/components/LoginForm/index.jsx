import React from "react";
class LoginForm extends React.Component{
    render() {
        return <div className="row">
            <div className="col-sm-3">
                <form>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Username"></input>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Username"></input>
                    </div>
                    <div class="form-group">
                        <input className="btn btn-primary" type="submit" placeholder="Login"></input>
                    </div>
                </form>
            </div>
        </div>
    }
}
export default LoginForm;