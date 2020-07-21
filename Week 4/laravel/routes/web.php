<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/welcome', function () {
    return 'Hello World';
});

Route::get('/test', function () {
    $name = request('name');

    return view('test', [
        'name' => $name
    ]);
});

/* Route::get('/post/{post}', function ($post) {
    $posts = [
        'my-first-post' => 'Hello this is my first blog!',
        'my-second-post' => 'Now this is my second post'
    ];

    if (! array_key_exists($post, $posts)) {
        abort(404, 'Sorry that post was no found.');
    }

    return view('post', [
        'post' => $posts[$post]
    ]);
}); */

Route::get('/post/{post}', 'PostsController@show');