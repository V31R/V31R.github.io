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
                        Это ваш профиль
                    </div>
                </div>
                <UnLoginButton />
            </section>
                <div>
                    <div className="profile-title mb-3">
                        История действий
                    </div>
                    <TableHistory />
                </div>
            </main>
        </React.Fragment>
    );
}

export default Profile;