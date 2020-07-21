<?php

namespace App\Http\Controllers;

class PostsController {

    public function show($post) {
        
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
    }
}