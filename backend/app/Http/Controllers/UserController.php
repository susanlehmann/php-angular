<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index()
    {
        // List all the products
        $data['list_user'] = User::get();
        return response()->json($data);
    }

    public function store(Request $request)
    {
        // Create new product
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $check = $user->save();
        if($check == true)
        {
            $msg = ['success' => 'Create a new account successfully'];
        }
        else
        {
            $msg = ['error' => 'There was an error creating the account'];
        }

        return response()->json($msg);
    }

    public function show(Request $request)
    {
        $id = $request->id;
        $data['find_user'] = User::find($id);
        return response()->json($data);
    }

    public function update(Request $request)
    {
        $id = $request->id;
        if ($id != null) {
            $input = [
                'name' => $request->name,
                'email' => $request->email,
            ];
            User::where('id', $id)->update($input);  
        }
    }

    public function destroy(Request $request)
    {
        $id = $request->id;
        if ($id != null) {
            $user = User::find($id);
            $check = $user->delete();
            if($check == true)
            {
                $msg = ['success' => 'Delete account successfully'];
            }
            else
            {
                $msg = ['error' => 'There was an error deleting the account'];
            }

            return response()->json($msg);
            }
    }
}