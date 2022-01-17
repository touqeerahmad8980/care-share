<?php


Route::get('/allBlogs', 'Api\NewsApiController@allBlogs');
Route::get('/blog/{id}', 'Api\NewsApiController@show');

Route::get('/blogWidget', 'Api\NewsApiController@blogWidget');
Route::get('/blogCancer', 'Api\NewsApiController@blogCancer');
Route::get('/blog/detail/{blog_id}', 'Api\NewsApiController@blogDetail');
Route::post('images/upload', 'Backend\Admin\NewsCategory@upload')->name('ckeditor.upload');
