<?php

namespace App\Http\Controllers;

use App\Models\GymUser;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('home');
    }

    public function login(Request $req)
    {
        $name = $req->get('Name');
        $password = $req->get('Password');
        
    }
}
