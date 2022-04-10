<?php

namespace App\Http\Controllers\Backend\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DownloadRequest;
use Yajra\DataTables\DataTables;
use DB;

class DownloadRequestController extends Controller
{
    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        return view('backend.admin.download-requests.all');
    }

    public function allRequests(Request $request)
   {
      if ($request->ajax()) {
         DB::statement(DB::raw('set @rownum=0'));
         $news = DownloadRequest::orderby('created_at', 'desc')->get(['download_requests.*', DB::raw('@rownum  := @rownum  + 1 AS rownum')]);
         return Datatables::of($news)
           ->make(true);
      } else {
         return response()->json(['status' => 'false', 'message' => "Access only ajax request"]);
      }
   }

}
