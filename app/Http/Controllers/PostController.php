<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\category;
class PostController extends Controller
{
    public function all_post(){

    	$posts=Post::with('user')->get();
    	//return $posts;
    	$category=category::with('posts')->get();
    	return $category;
    }
}
