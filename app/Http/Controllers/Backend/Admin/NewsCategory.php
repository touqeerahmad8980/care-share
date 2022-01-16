<?php

namespace App\Http\Controllers\Backend\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Category;

class NewsCategory extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //
    }

       /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
   public function index()
   {
      return view('backend.admin.category.create');
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
            'title' => 'required',
            'description' => 'required',
            'content' => 'required',
            'news_id' => 'required',
        ]);

        $category = new Category();

        $category->title = $request->input('title');
        $category->content = $request->input('description');
        $category->status = $request->input('content');
        $category->new_id = $request->input('news_id');

        $category->save();

        // store tags
        return response()->json(['data' => $category, 'message' => 'Created successfully'], 201);
    }
}
