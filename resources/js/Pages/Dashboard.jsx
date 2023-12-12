import BackendLayout from '@/Layouts/BackendLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <BackendLayout
            user={auth.user}
            header={<h2 className="nk-block-title page-title">Dashboard</h2>}
            subheader={<div className="nk-block-des text-soft"><p>Welcome to Analytics Dashboard.</p></div>}
            rightheader={
                <div className="toggle-wrap nk-block-tools-toggle">
                    <a href="#" className="btn btn-icon btn-trigger toggle-expand me-n1" data-target="pageMenu"><em className="icon ni ni-more-v"></em></a>
                    <div className="toggle-expand-content" data-content="pageMenu">
                        <ul className="nk-block-tools g-3">
                            <li>
                            <div className="drodown">
                                <a href="#" className="dropdown-toggle btn btn-white btn-dim btn-outline-light" data-bs-toggle="dropdown"><em className="d-none d-sm-inline icon ni ni-calender-date"></em><span><span className="d-none d-md-inline">Last</span> 30 Days</span><em className="dd-indc icon ni ni-chevron-right"></em></a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <ul className="link-list-opt no-bdr">
                                        <li><a href="#"><span>Last 30 Days</span></a></li>
                                        <li><a href="#"><span>Last 6 Months</span></a></li>
                                        <li><a href="#"><span>Last 1 Years</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            </li>
                            <li className="nk-block-tools-opt"><a href="#" className="btn btn-primary"><em className="icon ni ni-plus"></em><span>Add Project</span></a></li>
                        </ul>
                    </div>
                </div>
            }
        >
            <Head title="Dashboardgfdgffdg" />
                <div className="col-lg-12 col-xxl-12">
                    <div className="card card-bordered h-100">
                        <div className="card-inner">
                            <div className="card-title-group pb-3 g-2">
                                <div className="card-title card-title-sm">
                                    <h6 className="title">Audience Overview</h6>
                                    <p>How have your users, sessions, bounce rate metrics trended.</p>
                                </div>
                                <div className="card-tools shrink-0 d-none d-sm-block">
                                    <ul className="nav nav-switch-s2 nav-tabs bg-white">
                                        <li className="nav-item"><a href="#" className="nav-link">7 D</a></li>
                                        <li className="nav-item"><a href="#" className="nav-link active">1 M</a></li>
                                        <li className="nav-item"><a href="#" className="nav-link">3 M</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="analytic-ov">
                                <div className="analytic-data-group analytic-ov-group g-3">
                                    <div className="analytic-data analytic-ov-data">
                                        <div className="title">Users</div>
                                        <div className="amount">2.57K</div>
                                        <div className="change up"><em className="icon ni ni-arrow-long-up"></em>12.37%</div>
                                    </div>
                                    <div className="analytic-data analytic-ov-data">
                                        <div className="title">Sessions</div>
                                        <div className="amount">3.98K</div>
                                        <div className="change up"><em className="icon ni ni-arrow-long-up"></em>47.74%</div>
                                    </div>
                                    <div className="analytic-data analytic-ov-data">
                                        <div className="title">Users</div>
                                        <div className="amount">28.49%</div>
                                        <div className="change down"><em className="icon ni ni-arrow-long-down"></em>12.37%</div>
                                    </div>
                                    <div className="analytic-data analytic-ov-data">
                                        <div className="title">Users</div>
                                        <div className="amount">7m 28s</div>
                                        <div className="change down"><em className="icon ni ni-arrow-long-down"></em>0.35%</div>
                                    </div>
                                </div>
                                <div className="analytic-ov-ck">
                                    <canvas className="analytics-line-large" id="analyticOvData"></canvas>
                                </div>
                                <div className="chart-label-group ms-5">
                                    <div className="chart-label">01 Jan, 2020</div>
                                    <div className="chart-label d-none d-sm-block">15 Jan, 2020</div>
                                    <div className="chart-label">30 Jan, 2020</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </BackendLayout>
    );
}
