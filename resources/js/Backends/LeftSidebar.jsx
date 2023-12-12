import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';


export default function LeftSidebar(props){
    return [
        <div {...props}>
            <div className="nk-apps-brand">
                <Link href="/"className="logo-link">
                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                </Link>
            </div>
            <div className="nk-sidebar-element">
                <div className="nk-sidebar-body">
                    <div className="nk-sidebar-content" data-simplebar>
                        <div className="nk-sidebar-menu">
                            <ul className="nk-menu apps-menu">
                                <li className="nk-menu-item"><a href="cms/index.html" className="nk-menu-link" title="CMS Panel"><span className="nk-menu-icon"><em className="icon ni ni-template"></em></span></a></li>
                                <li className="nk-menu-hr"></li>
                            </ul>
                        </div>
                        <div className="nk-sidebar-footer">
                            <ul className="nk-menu nk-menu-md">
                                <li className="nk-menu-item"><a href="#" className="nk-menu-link" title="Settings"><span className="nk-menu-icon"><em className="icon ni ni-setting"></em></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ];
}