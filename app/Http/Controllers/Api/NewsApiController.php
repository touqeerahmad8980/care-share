<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\News;
use Illuminate\Http\Request;
use DB;

class NewsApiController extends Controller
{
   public function allBlogs(Request $request)
   {
      $limit = $request->input('limit');
      $offset = $request->input('offset');
      $total = News::count();
      $pagData = DB::table('news')->offset($offset)->limit($limit)->get();
      return response()->json(['result' => $pagData, 'total' => $total]);
   }

   public function show($id)
   {
      $news = News::find($id);
      return response()->json(['result' => $news]);
   }

   public function blogWidget(Request $request)
   {
    //   $category = $request->input('category');
    //   $limit = $request->input('limit');
    //   $pagData = DB::table('news')->where('category', $category)->limit($limit)->get();
      $pagData = News::where('category','all')->get();
      return response()->json(['result' => $pagData]);
   }

   public function blogCancer(Request $request)
   {
    //   $category = $request->input('category');
    //   $limit = $request->input('limit');
    //   $pagData = DB::table('news')->where('category', $category)->limit($limit)->get();
      $pagData = News::where('category','cancer')->get();
      return response()->json(['result' => $pagData]);
   }

   public function blogDetail(Request $request, $blog_id)
   {
    //   $category = $request->input('category');
    //   $limit = $request->input('limit');
    //   $pagData = DB::table('news')->where('category', $category)->limit($limit)->get();
      $blogDetail = News::where('id', $blog_id)->get();
      $categories = Category::where('news_id', $blog_id)->get();
      $result['detail'] = $blogDetail[0];
      $result['categories'] = $categories;
      return response()->json(['result' => $result ]);
   }
}
