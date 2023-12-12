import { useRef, useState } from 'react';
import Button from '@/Components/Button';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import Modal from '@/Components/Modal';
import { Transition } from '@headlessui/react';
import BackendLayout from '@/Layouts/BackendLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import TableBody from './Partials/TableBody';


export default function Index({auth,  users }){
    const user = users;
    /* Add New User */
    const [userAdd, setUserAdd] = useState(false);
    const {data: newData, setData: newSetData, put: newPut, errors: newErrors, processing: newProcessing, reset: newReset, recentlySuccessful: newRecentlySuccessful} = useForm({
        name:'',
        email:'',
        phone:'',
        age:'',
        user_type:'',
        gender:'',
        avatar:'',
    });

    const addNewUserModal = () => {
        setUserAdd(true);
    }
    const closeNewUserModal = () => {
        setUserAdd(false);
    }
    


    return (
        <BackendLayout 
            user={auth.user}
            header={<h2 className="nk-block-title page-title">User List</h2>}
            subheader={<div className="nk-block-des text-soft"><p>You have total {user.length} users.</p></div>}
            rightheader={
                <div className="toggle-wrap nk-block-tools-toggle">
                    <a href="#" className="btn btn-icon btn-trigger toggle-expand me-n1" data-target="pageMenu"><em className="icon ni ni-more-v"></em></a>
                    <div className="toggle-expand-content" data-content="pageMenu">
                        <ul className="nk-block-tools g-3">
                            <li className="nk-block-tools-opt">
                                <Button className='btn-primary' onClick={addNewUserModal}>
                                    <div><em className="icon ni ni-plus"></em></div>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        >
            <Head title="Profile" />
            <div className="col-lg-12 col-xxl-12">
                <div className="card card-bordered card-stretch">
                    <TableBody
                        usersList = {user}
                    />
                </div>
            </div>
            <Modal show={ userAdd } onClose={closeNewUserModal} maxWidth="4xl">
                <div className="nk-modal p-5 user-add-form">
                    <div class="nk-modal-text m-1">
                        <p class="lead">Add New User</p>
                    </div>
                    <form className="mt-6 space-y-6">
                        <div>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                value={newData.name}
                                onChange={(e) => newSetData('name', e.target.value)}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                required
                            />

                            <InputError message={newErrors.name} className="mt-2" />
                        </div>
                        

                        <div className="flex items-center gap-4">
                            <PrimaryButton disabled={newProcessing}>Save</PrimaryButton>

                            <Transition
                                show={newRecentlySuccessful}
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