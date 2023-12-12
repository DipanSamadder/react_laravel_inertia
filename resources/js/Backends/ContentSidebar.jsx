import NavLink from '@/Components/NavLink';
export default function ContentSidebar(props){
    return [
        <div {...props}>
            <ul className="nk-menu nk-menu-md">
                <li className="nk-menu-item">
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        <span className="nk-menu-icon"><em className="icon ni ni-dashboard"></em></span><span className="nk-menu-text">Dashboad</span>
                    </NavLink>
                </li>
                <li className="nk-menu-item">
                    <NavLink href={route('users.index')} active={route().current('users.index')}>
                        <span className="nk-menu-icon"><em className="icon ni ni-user-list"></em></span><span className="nk-menu-text">Users</span>
                    </NavLink>
                </li>
                <li className="nk-menu-item">
                    <NavLink href={route('profile.edit')} active={route().current('profile.edit')}>
                        <span className="nk-menu-icon"><em className="icon ni ni-user-list"></em></span><span className="nk-menu-text">Profile</span>
                    </NavLink>
                </li>
            </ul>
            
        </div>
    ];
}