import { useRef, useState } from 'react';
import Button from '@/Components/Button';
import DangerButton from '@/Components/DangerButton';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import BackendLayout from '@/Layouts/BackendLayout';
import BasicInformation from './Partials/BasicInformation';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Head, useForm, usePage } from '@inertiajs/react';

export default function Show({ auth, mustVerifyEmail, status }){
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [confirmingUserUpdate, setConfirmingUserUpdate] = useState(false);
    const [confirmingUserInfo, setConfirmingUserInfo] = useState(false);
    const passwordInput = useRef();

    {/* Update User Details*/}
    const user = usePage().props.auth.user;

    const { data:infoData, setData:infoSetData, patch:infoPatch, errors:infoErrors, processing:infoProcessing, recentlySuccessful:infoRecentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        infoPatch(route('profile.update'));
    };
    const confirmingInfo = () => {
        setConfirmingUserInfo(true);
    };
    const closeModalInfo = () => {
        setConfirmingUserInfo(false);

        updateReset();
    };

    {/* Change Password */}

    const passwordInputUpdate = useRef();
    const currentPasswordInputUpdate = useRef();

    const { data:updateData, setData: updateSetData, errors: updateErrors, put: updatePut, reset: updateReset, processing: updateProcessing, recentlySuccessful: updateRecentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        updatePut(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => updateReset(),
            onError: (errors) => {
                if (errors.password) {
                    updateReset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    updateReset('current_password');
                    currentPasswordInputUpdate.current.focus();
                }
            },
        });
    };
    const confirmingUpdate = () => {
        setConfirmingUserUpdate(true);
    };
    const closeModalUpdate = () => {
        setConfirmingUserUpdate(false);

        updateReset();
    };
    {/* User Delection */}
    const {data : destroyData,setData : destroySetData, delete: destroyDelete, processing: destroyProcessing, reset: destroyReset,errors: destroyErrors} = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();
        destroyDelete(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => destroyReset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        destroyReset();
    };
    return (
        <BackendLayout
            user={auth.user}
            header={<h2 className="nk-block-title page-title">Profile Information</h2>}
            subheader={<div className="nk-block-des text-soft"><p>Basic info, like your name and address, that you use on Nio Platform.</p></div>}
            rightheader={
                <div className="toggle-wrap nk-block-tools-toggle">
                    <a href="#" className="btn btn-icon btn-trigger toggle-expand me-n1" data-target="pageMenu"><em className="icon ni ni-more-v"></em></a>
                    <div className="toggle-expand-content" data-content="pageMenu">
                        <ul className="nk-block-tools g-3">
                            <li className="nk-block-tools-opt">
                                <Button className='btn-primary' onClick={confirmingInfo}>
                                    <div><em className="icon ni ni-edit"></em><span>Edit</span></div>
                                </Button>
                            </li>

                            <li className="nk-block-tools-opt">
                                <Button className='btn-info' onClick={confirmingUpdate}>
                                    <div><em className="icon ni ni-lock-alt-fill"></em><span>Change Password</span></div>
                                </Button>
                            </li>

                            <li className="nk-block-tools-opt">
                                <DangerButton onClick={confirmUserDeletion}><div><em className="icon ni ni-trash-fill"></em><span>Delete Account</span></div></DangerButton>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        >
            <Head title="Profile" />
            <div className="col-lg-12 col-xxl-12">
                <div className="card card-bordered">
                    <div className="card-aside-wrap">
                        <div className="card-inner card-inner-lg">
                            <BasicInformation/>
                        </div>
                    </div>
                </div>
            </div>


            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <div class="nk-modal text-center p-5">
                    <em class="nk-modal-icon icon icon-circle icon-circle-xxl ni ni-cross bg-danger"></em>
                    <div class="nk-modal-text m-1">
                        <p class="lead">Are you sure you want to delete your account?</p>
                    </div>
                    <form onSubmit={deleteUser} className="">
                        <div className="mt-6 text-center">
                            <InputLabel htmlFor="password" value="Password" className="sr-only" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={destroyData.password}
                                onChange={(e) => destroySetData('password', e.target.value)}
                                className="mt-1 block w-100"
                                isFocused
                                placeholder="Password"
                            />

                            <InputError message={destroyErrors.password} className="mt-2" />
                        </div>

                        <div className="mt-6 flex justify-center">
                            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                            <DangerButton className="ms-3" disabled={destroyProcessing}>
                                Delete Account
                            </DangerButton>
                        </div>
                    </form>
                </div>
            </Modal>

            <Modal show={confirmingUserUpdate} onClose={closeModalUpdate}>
                <div class="nk-modal p-5">
                    <h4 class="title nk-block-title"><strong>Update Password</strong></h4>
                    <form onSubmit={updatePassword} className="mt-6 space-y-6">
                        <div>
                            <InputLabel htmlFor="current_password" value="Current Password" />

                            <TextInput
                                id="current_password"
                                ref={currentPasswordInputUpdate}
                                value={updateData.current_password}
                                onChange={(e) => updateSetData('current_password', e.target.value)}
                                type="password"
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                            />

                            <InputError message={updateErrors.current_password} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="New Password" />

                            <TextInput
                                id="password"
                                ref={passwordInput}
                                value={updateData.password}
                                onChange={(e) => updateSetData('password', e.target.value)}
                                type="password"
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                            />

                            <InputError message={updateErrors.password} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                            <TextInput
                                id="password_confirmation"
                                value={updateData.password_confirmation}
                                onChange={(e) => updateSetData('password_confirmation', e.target.value)}
                                type="password"
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                            />

                            <InputError message={updateErrors.password_confirmation} className="mt-2" />
                        </div>

                        <div className="flex items-center gap-4">
                            <PrimaryButton disabled={updateProcessing}>Save</PrimaryButton>

                            <Transition
                                show={updateRecentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                            </Transition>
                        </div>
                    </form>
                </div>
            </Modal>

            <Modal show={confirmingUserInfo} onClose={closeModalInfo}>
                <div class="nk-modal p-5">
                    <h4 class="title nk-block-title"><strong>Update Password</strong></h4>
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                className="mt-1 block w-full"
                                value={infoData.name}
                                onChange={(e) => infoSetData('name', e.target.value)}
                                required
                                isFocused
                                autoComplete="name"
                            />

                            <InputError className="mt-2" message={infoErrors.name} />
                        </div>

                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                className="mt-1 block w-full"
                                value={infoData.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                autoComplete="username"
                            />

                            <InputError className="mt-2" message={infoErrors.email} />
                        </div>

                        {mustVerifyEmail && user.email_verified_at === null && (
                            <div>
                                <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                                    Your email address is unverified.
                                    <Link
                                        href={route('verification.send')}
                                        method="post"
                                        as="button"
                                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                    >
                                        Click here to re-send the verification email.
                                    </Link>
                                </p>

                                {status === 'verification-link-sent' && (
                                    <div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                                        A new verification link has been sent to your email address.
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="flex items-center gap-4">
                            <PrimaryButton disabled={infoProcessing}>Save</PrimaryButton>

                            <Transition
                                show={infoRecentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                            </Transition>
                        </div>
                    </form>
                </div>
            </Modal>
        </BackendLayout>
        
    );
}