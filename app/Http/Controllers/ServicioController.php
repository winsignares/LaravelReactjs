<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Servicio;

class ServicioController extends Controller
{
    //
   public function Store(Request $request){
       $input = $request->all();
       $servi = Servicio::create($input);
       return response()->json($servi);
   }

   public function GetServicios()
   {
       # code...
       $datos['result'] = Servicio::all();
       return response()->json($datos);
   }
 
}
