import BackendLayout from '@/Layouts/BackendLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard1({ auth }) {
    return (
        <BackendLayout
            user={auth.user}
            header={<h3 className="nk-block-title page-title">Dashboard1</h3>}
        >
            <Head title="Dashboard1" />

        
                <div className="col-lg-12 col-xxl-12">
                    <div className="card card-bordered h-100">
                        <div className="card-inner">
                            <div className="card-title-group pb-3 g-2">
                                <div className="card-title card-title-sm">
                                    <h6 className="title">Dashboard1</h6>
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
