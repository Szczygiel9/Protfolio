import React from 'react';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='image'></div>
            <table className='table'>
                <tr>
                    <td>Imię i nazwisko:</td>
                    <td>Daniel Szczygielski</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>szczygielski.daniel38@gmail.com</td>
                </tr>
                <tr>
                    <td>LinkedIn:</td>
                    <td><a href="https://www.linkedin.com/in/daniel-szczygielski-50b8a4154/">Profil</a></td>
                </tr>
                <tr>
                    <td>GitHub:</td>
                    <td><a href="https://github.com/Szczygiel9">szczygiel9</a></td>
                </tr>
            </table>
        </div>
    );
};
export default Sidebar;
