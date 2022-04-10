<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DownloadRequest;
use Illuminate\Http\Request;
use DB;

class DownloadRequestApiController extends Controller
{

     /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        return view('backend.admin.requests.all');
    }


        /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required',
            'phone_code' => 'required',
            'phone_no' => 'required',
            'cancer_type' => 'required',
            'cancer_stage' => 'required',
            'treatment_received' => 'required',
        ]);

        $downloadRequest = new DownloadRequest();

        $downloadRequest->name = $request->input('name');
        $downloadRequest->email = $request->input('email');
        $downloadRequest->phone_code = $request->input('phone_code');
        $downloadRequest->phone_no = $request->input('phone_no');
        $downloadRequest->cancer_type = $request->input('cancer_type');
        $downloadRequest->cancer_stage = $request->input('cancer_stage');
        $downloadRequest->treatment_received = $request->input('treatment_received');

        $downloadRequest->save();

        // store tags
        return response()->json(['data' => $downloadRequest, 'message' => 'Created successfully'], 201);
    }

//     public function allRequests(Request $request)
//    {
//       $limit = $request->input('limit');
//       $offset = $request->input('offset');
//       $total = DownloadRequest::count();
//       $pagData = DB::table('download_requests')->offset($offset)->limit($limit)->get();
//     //   dump($pagData)
//       return response()->json(['result' => $pagData, 'total' => $total]);
//    }

}
