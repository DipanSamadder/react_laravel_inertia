import DivTable from '@/Backends/Components/DivTable';

export default function TableBody({usersList, ...props}){
    const users = usersList;
    return (
        <DivTable 
        // topbar={
        // <div className="card-inner position-relative card-tools-toggle">
        //     <div className="card-title-group">
        //         <div className="card-tools">
        //             <div className="form-inline flex-nowrap gx-3">
        //                 <div className="form-wrap w-150px">
        //                 <select className="form-select js-select2" data-search="off" data-placeholder="Bulk Action">
        //                     <option value="">Bulk Action...</option>
        //                     <option value="email">Send Email</option>
        //                     <option value="group">Change Group</option>
        //                     <option value="suspend">Suspend User</option>
        //                     <option value="delete">Delete User</option>
        //                 </select>
        //                 </div>
        //                 <div className="btn-wrap"><span className="d-none d-md-block"><button className="btn btn-dim btn-outline-light disabled">Apply</button></span><span className="d-md-none"><button className="btn btn-dim btn-outline-light btn-icon disabled"><em className="icon ni ni-arrow-right"></em></button></span></div>
        //             </div>
        //         </div>
        //         <div className="card-tools me-n1">
        //             <ul className="btn-toolbar gx-1">
        //                 <li><a href="#" className="btn btn-icon search-toggle toggle-search" data-target="search"><em className="icon ni ni-search"></em></a></li>
        //                 <li className="btn-toolbar-sep"></li>
        //                 <li>
        //                 <div className="toggle-wrap">
        //                     <a href="#" className="btn btn-icon btn-trigger toggle" data-target="cardTools"><em className="icon ni ni-menu-right"></em></a>
        //                     <div className="toggle-content" data-content="cardTools">
        //                         <ul className="btn-toolbar gx-1">
        //                             <li className="toggle-close"><a href="#" className="btn btn-icon btn-trigger toggle" data-target="cardTools"><em className="icon ni ni-arrow-left"></em></a></li>
        //                             <li>
        //                             <div className="dropdown">
        //                                 <a href="#" className="btn btn-trigger btn-icon dropdown-toggle" data-bs-toggle="dropdown">
        //                                     <div className="dot dot-primary"></div>
        //                                     <em className="icon ni ni-filter-alt"></em>
        //                                 </a>
        //                                 <div className="filter-wg dropdown-menu dropdown-menu-xl dropdown-menu-end">
        //                                     <div className="dropdown-head">
        //                                         <span className="sub-title dropdown-title">Filter Users</span>
        //                                         <div className="dropdown"><a href="#" className="btn btn-sm btn-icon"><em className="icon ni ni-more-h"></em></a></div>
        //                                     </div>
        //                                     <div className="dropdown-body dropdown-body-rg">
        //                                         <div className="row gx-6 gy-3">
        //                                         <div className="col-6">
        //                                             <div className="custom-control custom-control-sm custom-checkbox"><label className="custom-control-label" for="hasBalance"> Have Balance</label></div>
        //                                         </div>
        //                                         <div className="col-6">
        //                                             <div className="custom-control custom-control-sm custom-checkbox"><label className="custom-control-label" for="hasKYC"> KYC Verified</label></div>
        //                                         </div>
        //                                         <div className="col-6">
        //                                             <div className="form-group">
        //                                                 <label className="overline-title overline-title-alt">Role</label>
        //                                                 <select className="form-select js-select2">
        //                                                     <option value="any">Any Role</option>
        //                                                     <option value="investor">Investor</option>
        //                                                     <option value="seller">Seller</option>
        //                                                     <option value="buyer">Buyer</option>
        //                                                 </select>
        //                                             </div>
        //                                         </div>
        //                                         <div className="col-6">
        //                                             <div className="form-group">
        //                                                 <label className="overline-title overline-title-alt">Status</label>
        //                                                 <select className="form-select js-select2">
        //                                                     <option value="any">Any Status</option>
        //                                                     <option value="active">Active</option>
        //                                                     <option value="pending">Pending</option>
        //                                                     <option value="suspend">Suspend</option>
        //                                                     <option value="deleted">Deleted</option>
        //                                                 </select>
        //                                             </div>
        //                                         </div>
        //                                         <div className="col-12">
        //                                             <div className="form-group"><button type="button" className="btn btn-secondary">Filter</button></div>
        //                                         </div>
        //                                         </div>
        //                                     </div>
        //                                     <div className="dropdown-foot between"><a className="clickable" href="#">Reset Filter</a><a href="#">Save Filter</a></div>
        //                                 </div>
        //                             </div>
        //                             </li>
        //                             <li>
        //                             <div className="dropdown">
        //                                 <a href="#" className="btn btn-trigger btn-icon dropdown-toggle" data-bs-toggle="dropdown"><em className="icon ni ni-setting"></em></a>
        //                                 <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
        //                                     <ul className="link-check">
        //                                         <li><span>Show</span></li>
        //                                         <li className="active"><a href="#">10</a></li>
        //                                         <li><a href="#">20</a></li>
        //                                         <li><a href="#">50</a></li>
        //                                     </ul>
        //                                     <ul className="link-check">
        //                                         <li><span>Order</span></li>
        //                                         <li className="active"><a href="#">DESC</a></li>
        //                                         <li><a href="#">ASC</a></li>
        //                                     </ul>
        //                                 </div>
        //                             </div>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        //     <div className="card-search search-wrap" data-search="search">
        //         <div className="card-body">
        //             <div className="search-content"><a href="#" className="search-back btn btn-icon toggle-search" data-target="search"><em className="icon ni ni-arrow-left"></em></a><button className="search-submit btn btn-icon"><em className="icon ni ni-search"></em></button></div>
        //         </div>
        //     </div>
        // </div>
        // }
        // footer = {
        //     <div className="nk-block-between-md g-3">
        //         <div className="g">
        //             <ul className="pagination justify-content-center justify-content-md-start">
        //                 <li className="page-item"><a className="page-link" href="#">Prev</a></li>
        //                 <li className="page-item"><a className="page-link" href="#">1</a></li>
        //                 <li className="page-item"><a className="page-link" href="#">2</a></li>
        //                 <li className="page-item"><span className="page-link"><em className="icon ni ni-more-h"></em></span></li>
        //                 <li className="page-item"><a className="page-link" href="#">6</a></li>
        //                 <li className="page-item"><a className="page-link" href="#">7</a></li>
        //                 <li className="page-item"><a className="page-link" href="#">Next</a></li>
        //             </ul>
        //         </div>
        //         <div className="g">
        //             <div className="pagination-goto d-flex justify-content-center justify-content-md-start gx-3">
        //                 <div>Page</div>
        //                 <div>
        //                 <select className="form-select js-select2" data-search="on" data-dropdown="xs center">
        //                     <option value="page-1">1</option>
        //                     <option value="page-2">2</option>
        //                     <option value="page-4">4</option>
        //                     <option value="page-5">5</option>
        //                     <option value="page-6">6</option>
        //                     <option value="page-7">7</option>
        //                     <option value="page-8">8</option>
        //                     <option value="page-9">9</option>
        //                     <option value="page-10">10</option>
        //                     <option value="page-11">11</option>
        //                     <option value="page-12">12</option>
        //                     <option value="page-13">13</option>
        //                     <option value="page-14">14</option>
        //                     <option value="page-15">15</option>
        //                     <option value="page-16">16</option>
        //                     <option value="page-17">17</option>
        //                     <option value="page-18">18</option>
        //                     <option value="page-19">19</option>
        //                     <option value="page-20">20</option>
        //                 </select>
        //                 </div>
        //                 <div>OF 102</div>
        //             </div>
        //         </div>
        //     </div>
        // }

        body = {
            <div className="nk-tb-list nk-tb-ulist">
                <div className="nk-tb-item nk-tb-head">
                    <div className="nk-tb-col nk-tb-col-check">
                        <div className="custom-control custom-control-sm custom-checkbox notext"><label className="custom-control-label" for="uid"></label></div>
                    </div>
                    <div className="nk-tb-col"><span className="sub-text">User</span></div>
                    <div className="nk-tb-col tb-col-md"><span className="sub-text">Contact</span></div>
                    <div className="nk-tb-col tb-col-lg"><span className="sub-text">Other</span></div>
                    <div className="nk-tb-col tb-col-lg"><span className="sub-text">Last Login</span></div>
                    <div className="nk-tb-col tb-col-md"><span className="sub-text">Status</span></div>
                    <div className="nk-tb-col nk-tb-col-tools text-end">
                        <div className="dropdown">
                            <a href="#" className="btn btn-xs btn-outline-light btn-icon dropdown-toggle" data-bs-toggle="dropdown" data-offset="0,5"><em className="icon ni ni-plus"></em></a>
                            <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                            <ul className="link-tidy sm no-bdr">
                                <li>
                                    <div className="custom-control custom-control-sm custom-checkbox"><label className="custom-control-label" for="bl">Balance</label></div>
                                </li>
                                <li>
                                    <div className="custom-control custom-control-sm custom-checkbox"><label className="custom-control-label" for="ph">Phone</label></div>
                                </li>
                                <li>
                                    <div className="custom-control custom-control-sm custom-checkbox"><label className="custom-control-label" for="vri">Verified</label></div>
                                </li>
                                <li>
                                    <div className="custom-control custom-control-sm custom-checkbox"><label className="custom-control-label" for="st">Status</label></div>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {users.map(({ id, user_type, name, email, phone, banned, avatar_original,gender,age}, index) => (

                <div className="nk-tb-item">
                    <div className="nk-tb-col nk-tb-col-check">
                        <div className="custom-control custom-control-sm custom-checkbox notext"><label className="custom-control-label" for="uid{index}"></label></div>
                    </div>
                    <div className="nk-tb-col">
                        <a href="user-details-regular.html">
                            <div className="user-card">
                            <div className="user-avatar bg-primary"><span>D</span></div>
                            <div className="user-info"><span className="tb-lead"> {name}<span className="dot dot-success d-md-none ms-1"></span></span><span>{user_type}</span></div>
                            </div>
                        </a>
                    </div>
                    <div className="nk-tb-col tb-col-lg">{phone}<br/>{email}</div>
                    <div className="nk-tb-col tb-col-lg">
                        <ul className="list-status">
                            <li>Age: {age}</li>
                            <li>Gender: {gender}</li>
                        </ul>
                    </div>
                    <div className="nk-tb-col tb-col-lg"><span>10 Feb 2020</span></div>
                    <div className="nk-tb-col tb-col-md"><span className="tb-status text-success">Active</span></div>
                    <div className="nk-tb-col nk-tb-col-tools">
                        <ul className="nk-tb-actions gx-1">
                            <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Wallet"><em className="icon ni ni-wallet-fill"></em></a></li>
                            <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Send Email"><em className="icon ni ni-mail-fill"></em></a></li>
                            <li className="nk-tb-action-hidden"><a href="#" className="btn btn-trigger btn-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Suspend"><em className="icon ni ni-user-cross-fill"></em></a></li>
                            <li>
                            <div className="drodown">
                                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em className="icon ni ni-more-h"></em></a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <ul className="link-list-opt no-bdr">
                                        <li><a href="#"><em className="icon ni ni-focus"></em><span>Quick View</span></a></li>
                                        <li><a href="#"><em className="icon ni ni-eye"></em><span>View Details</span></a></li>
                                        <li><a href="#"><em className="icon ni ni-repeat"></em><span>Transaction</span></a></li>
                                        <li><a href="#"><em className="icon ni ni-activity-round"></em><span>Activities</span></a></li>
                                        <li className="divider"></li>
                                        <li><a href="#"><em className="icon ni ni-shield-star"></em><span>Reset Pass</span></a></li>
                                        <li><a href="#"><em className="icon ni ni-shield-off"></em><span>Reset 2FA</span></a></li>
                                        <li><a href="#"><em className="icon ni ni-na"></em><span>Suspend User</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                ))}
            </div>
        }>
        </DivTable>
    );
}