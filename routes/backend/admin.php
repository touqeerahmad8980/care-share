<?php

Route::get('/dashboard', 'DashboardController@index')->name('dashboard');


/* ===== Access Management Start =========== */

Route::resource('users', 'UserController');
Route::get('/allUser', 'UserController@allUser')->name('allUser.users');
Route::get('/export', 'UserController@export')->name('export');

Route::resource('permissions', 'PermissionController');
Route::get('/allPermission', 'PermissionController@allPermission')->name('allPermission.permissions');

Route::resource('roles', 'RoleController');
Route::get('/allRole', 'RoleController@allRole')->name('allRole.roles');


/* ===== Access Management End =========== */

/* ===== Backup Start =========== */

Route::get('backups', 'BackupController@index');
Route::get('allBackups', 'BackupController@getall')->name('allBackups.backups');
Route::post('backups/db_backup', 'BackupController@db_backup');
Route::post('backups/full_backup', 'BackupController@full_backup');
Route::get('backups/download/{file_name}', 'BackupController@download');
Route::delete('backups/delete/{file_name}', 'BackupController@delete');

/* ===== Backup End =========== */


/* ===== Frontend Start =========== */

// Notice Board & Lateset News Controller
Route::resource('news', 'NewsController');
Route::get('/allNews', 'NewsController@allNews')->name('allNews.news');

Route::get('/download-requests', 'DownloadRequestController@allRequests')->name('allRequest.requests');

// category controller
Route::get('/category/{news_id}', 'NewsCategory@index');
Route::get('/category/edit/{news_id}', 'NewsCategory@edit');
Route::post('/category/edit/{cat_id}', 'NewsCategory@update');
Route::post('/category/{news_id}', 'NewsCategory@store');
Route::delete('/category/{cat_id}', 'NewsCategory@destroy');
Route::post('images/upload', 'NewsCategory@upload')->name('ckeditor.upload');

/* ===== Frontend End =========== */
Route::get('/all-requests', 'DownloadRequestController@index');

/* ===== Settings Start =========== */

// Settings Controller
Route::resource('settings', 'SettingsController');
Route::get('/allSetting', 'SettingsController@allSetting')->name('allSetting.settings');

/* ===== Settings End =========== */
