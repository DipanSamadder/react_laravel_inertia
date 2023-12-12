import { usePage } from '@inertiajs/react';

export default function BasicInformation(){
    const user = usePage().props.auth.user;

    return (
        <div className="nk-data data-list">
            <div className="data-head">
                <h6 className="overline-title">Basics</h6>
            </div>
            <div className="data-item" data-bs-toggle="modal" data-bs-target="#profile-edit">
                <div className="data-col"><span className="data-label">Full Name</span><span className="data-value">{user.name}</span></div>
            </div>
            <div className="data-item">
                <div className="data-col"><span className="data-label">Email</span><span className="data-value">{user.email}</span></div>
            </div>
            <div className="data-item" data-bs-toggle="modal" data-bs-target="#profile-edit">
                <div className="data-col"><span className="data-label">Phone Number</span><span className="data-value text-soft">{user.created_at}</span></div>
            </div>
        </div>
    );


}