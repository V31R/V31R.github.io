import React from "react";
import '../css/profile.css';
import HeaderCentral from "./headerCentral";
import UnLoginButton from "./unloginButton";
import TableHistory from "./tableHistory";

function Profile() {

    return (
        <React.Fragment>
            <HeaderCentral />
            <main className="container">
            <section className="profile-list">
                <div>
                    <div className="profile-title mb-3">
                        <b>Это ваш профиль</b>
                    </div>
                </div>
                <UnLoginButton />
            </section>
                <div>
                    <div className="profile-title mb-3">
                        <b>История действий</b>
                    </div>
                    <TableHistory />
                </div>
            </main>
        </React.Fragment>
    );
}

export default Profile;