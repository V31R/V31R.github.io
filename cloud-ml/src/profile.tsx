import React from "react";
import './css/profile.css';
import HeaderCentral from "./HeaderCentral";
import UnLoginButton from "./unloginButton";

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
                    <table className="table table-striped mb-3 col-md-8 col-lg-12">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Действие</th>
                            <th scope="col">Исходные данные</th>
                            <th scope="col">Результат</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Построение регресии</td>
                            <td>input.csv</td>
                            <td>output.png</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Подготовка данных</td>
                            <td>input.csv</td>
                            <td>output.csv</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Распределение данных</td>
                            <td>input.csv</td>
                            <td>output.png</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Profile;