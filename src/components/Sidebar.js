import React from 'react';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='image'></div>
            <div className='sidebar-content'>
                <div className='under-lined'>Dane osobowe</div>
                <div className='sidebar-section'>
                    <div>Daniel Szczygielski</div>
                    <div>szczygielski.daniel38@gmail.com</div>
                </div>

                <div className='under-lined'>Media</div>
                <div className='sidebar-section'>
                    <div>
                        LinkedIn: <a className='link'
                                    href="https://www.linkedin.com/in/daniel-szczygielski-50b8a4154/">Profil</a>
                    </div>
                    <div>
                        GitHub: <a className='link' href="https://github.com/Szczygiel9">szczygiel9</a>
                    </div>
                </div>

                <div className='under-lined'>Język</div>
                <div className='sidebar-section'>
                    Angielski w stopniu umożliwiającym płynną komunikacje z członkami zespołu
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
