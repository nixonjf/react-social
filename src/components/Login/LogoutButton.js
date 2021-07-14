import React from 'react'



        function logout(err) {
            localStorage.clear();
            window.location.href = '/';
        }
class LogoutButton extends React.Component {

    render() {
        return (
                <button onClick={logout} >
                    Logout
                </button>
                );
    }
}

export default LogoutButton;