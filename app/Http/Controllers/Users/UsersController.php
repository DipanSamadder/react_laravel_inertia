<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index(){
        return Inertia::render('Users/Index', [
            'users' => User::latest()->get()
        ]);
    }
}
