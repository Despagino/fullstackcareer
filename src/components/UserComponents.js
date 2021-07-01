import React from 'react';
import NavBar from './Navbar';
import userservices from '../APIs/UserServices';

class UserComponents extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }

    }
    componentDidMount() {
        userservices.getUsers().then((Response) => {
            this.setState({ users: Response.data })
        });
    }

    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Id</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default UserComponents