<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\category;

class CategoryController extends Controller
{
     public function add_category(Request $request)
    {
       $this->validate($request,[
       	'name'=>'required|min:2'

       ]);
    	//return $request->all();
    	$category= new category();

    	$category->name=$request->name;
    	$category->save();
    	return['message'=>'OK'];
    }


    public function all_category(){

      $categories=category::all();
      return response()->json([
          'categories'=>$categories
      ],200);
    }

    public function delete_category($id)
    {
       $category=category::find($id);
       $category->delete();
    }


    public function edit_category($id)
    {
       $category=category::find($id);
       return response()->json([
          'category'=>$category

       ],200);
    }
}
