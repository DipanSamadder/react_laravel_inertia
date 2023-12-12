import { useState } from 'react';
import ContentSidebar from '@/Backends/ContentSidebar';
import LeftSidebar from '@/Backends/LeftSidebar';
import Topbar from '@/Backends/Topbar';
import Dropdown from '@/Components/Dropdown';

import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, subheader, rightheader, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="nk-app-root">
            
            <LeftSidebar className="nk-apps-sidebar is-theme"/>
            <div className="nk-main ">
                <div className="nk-wrap ">
                    <Topbar className="nk-header nk-header-fixed is-light"/>
                    
                    <div className="nk-sidebar" data-content="sidebarMenu">
                        <ContentSidebar className="nk-sidebar-inner"/>
                    </div>
                    <div className="nk-content ">
                        <div className="container-fluid">
                            <div className="nk-content-inner">
                                <div className="nk-content-body">
                                    <div className="nk-block-head nk-block-head-sm">
                                        <div className="nk-block-between">
                                            {header && (
                                                <div className="nk-block-head-content">
                                                    {header} 
                                                    {subheader}
                                                </div>
                                                
                                            )}
                                            {rightheader && (
                                                <div className="nk-block-head-content">
                                                    {rightheader}
                                                </div>
                                            )}
                                            
                                        </div>
                                        
                                    </div>
                                    <div className="nk-block">
                                        <div className="row g-gs">
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}
