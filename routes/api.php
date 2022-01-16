<?php


Route::get('/allBlogs', 'Api\NewsApiController@allBlogs');
Route::get('/blog/{id}', 'Api\NewsApiController@show');

Route::get('/blogWidget', 'Api\NewsApiController@blogWidget');
Route::post('images/upload', 'Backend\Admin\NewsCategory@upload')->name('ckeditor.upload');
