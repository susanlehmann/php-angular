<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\ResetPasswordMail;

class ResetPasswordController extends Controller
{
    public function sendEmail(Request $request) 
    {
        // return $request->all();  DEBUG
        if(!$this->validateEmail($request->email)) {

            return $this->failedResponse();
            return $this->successResponse();
        }

        $this->send($request->email);

    }

    public function send($email)
    {
        Mail::to($email)->send(new ResetPasswordMail());
    }

    
    public function validateEmail($email) {

        return !!User::where('email', $email)->first(); // The !! means boolean

    }
    
    
    public function failedResponse()
    {
        return response()->json([
            'error' => 'Email does not exist on our database!'
        ], 
        Response::HTTP_NOT_FOUND);  // import -> use Symfony\Component\HttpFoundation\Response;
    }

    public function successResponse()
    { 
        return response()->json([
            'data' => 'Reset Email was sent successfully. Please, check your email!'
        ], 
        Response::HTTP_OK);  // import -> use Symfony\Component\HttpFoundation\Response;
    }


}
