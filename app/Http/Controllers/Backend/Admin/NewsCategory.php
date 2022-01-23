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
   public function index($news_id)
   {
      return view('backend.admin.category.create')
      ->with('news_id', $news_id);
   }

       /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
   public function edit($cat_id)
   {
    $category = Category::where("id", $cat_id)->get();

      return view('backend.admin.category.edit')
      ->with('category', $category[0]);
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
            'content' => 'required',
            'news_id' => 'required',
        ]);

        $category = new Category();

        $category->title = $request->input('title');
        $category->description = $request->input('description');
        $category->content = $request->input('content');
        // $category->status = $request->input('content');
        $category->news_id = $request->input('news_id');

        $category->save();

        // store tags
        return response()->json(['data' => $category, 'message' => 'Created successfully'], 201);
    }

       /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request $request
    * @param  \App\Models\News $news
    * @return \Illuminate\Http\Response
    */
   public function update(Request $request, $cat_id)
   {
      if ($request->ajax()) {
        $blog = Category::findOrFail($cat_id);
        $blog->title = $request->input('title');
        $blog->description = $request->input('description');
        $blog->content = $request->input('content');
        $blog->save(); //
        return response()->json(['type' => 'success', 'message' => "Successfully Updated"]);
      }
   }

    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function upload(Request $request)
    {
        // if($request->hasFile('upload')) {
        //     $originName = $request->file('upload')->getClientOriginalName();
        //     $fileName = pathinfo($originName, PATHINFO_FILENAME);
        //     $extension = $request->file('upload')->getClientOriginalExtension();
        //     $fileName = $fileName.'_'.time().'.'.$extension;

        //     $request->file('upload')->move(public_path('images'), $fileName);

        //     $CKEditorFuncNum = $request->input('CKEditorFuncNum');
        //     $url = asset('images/'.$fileName);
        //     $msg = 'Image uploaded successfully';
        //     $response = "<script>window.parent.CKEDITOR.tools.callFunction($CKEditorFuncNum, '$url', '$msg')</script>";

        //     @header('Content-type: text/html; charset=utf-8');
        //     echo $response;
        // }
        if ($request->hasFile('upload')) {
            $originName = $request->file('upload')->getClientOriginalName();
            $fileName = pathinfo($originName, PATHINFO_FILENAME);
            $extension = $request->file('upload')->getClientOriginalExtension();
            $fileName = $fileName . '_' . time() . '.' . $extension;

            $request->file('upload')->move(public_path('media'), $fileName);

            $url = asset('media/' . $fileName);
            return response()->json(['fileName' => $fileName, 'uploaded'=> 1, 'url' => $url]);


        }
   }

    /**
    * Remove the specified resource from storage.
    *
    * @param  \App\Models\News $news
    * @return \Illuminate\Http\Response
    */
    public function destroy(Request $request, $cat_id)
    {
       if ($request->ajax()) {
            Category::where("id", $cat_id)->delete();
            return response()->json(['type' => 'success', 'message' => 'Successfully Deleted']);
       } else {
          return response()->json(['status' => 'false', 'message' => "Access only ajax request"]);
       }
    }
}
