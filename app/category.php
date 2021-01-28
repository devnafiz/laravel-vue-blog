<?php

namespace App;
use App\Post;

use Illuminate\Database\Eloquent\Model;

class category extends Model
{
    public function posts(){
    	return $this->hasMany(Post::class,'cat_id','id');
    }
}
