<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
class AdminController extends Controller
{
	public function getlistuser(){
	    $data['list_user'] = DB::table('users')->get();
	    return response()->json($data);
	}
}
