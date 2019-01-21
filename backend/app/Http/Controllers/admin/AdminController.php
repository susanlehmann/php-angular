<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use App\User;
class AdminController extends Controller
{
	public function getlistuser(){
	    $data['list_user'] = DB::table('users')->get();
	    return response()->json($data);
	}

    public function signup(Request $request)
    {
    	dd($request->all());die;
        $user = User::create($request->all());
        if($user == true){
        	$msg = ['sussuse' => 'ok'];
        }else{
        	$msg = ['error' => 'ok'];
        }
        return $msg;

    }

	public function delete(Request $request){
		dd($request->id);
	}
}
