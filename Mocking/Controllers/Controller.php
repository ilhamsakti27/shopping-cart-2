<?php

namespace Mocking\Controllers;

use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
  public function getAllData(){
    $path = base_path()."/Mocking/Json/allProductsData.json"; 
    $json = json_decode(file_get_contents($path), true); 
    return response()->json($json);
  }
  
}