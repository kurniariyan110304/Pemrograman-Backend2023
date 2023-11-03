<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index(){
        //mendapatkan semua data students
        $students = Student::all();

        $data = [
            "message" => "Get all resources",
            "data" => $students
        ];

        //jika data kosong maka kirim status code 204
        if($students->isEmpty()){
            $data = [
                "message" => "Resource is empty"
            ];

            return response()->json($data, 204);
        }

        //kirim data dan responce code
        return response()->json($data, 200);
    }

    public function show($id){
        $student = Student::find($id);

        //jika data yang dicari tidak ada, kirim kode 404
        if(!$student){
            $data = [
                "message" => "Data not found"
            ];

            return response()->json($data, 404);
        }

        $data = [
            "message" => "Show detail resource",
            "data" => $student
        ];

        //mengembalikan data dan status code 200
        return response()->json($data,200);
    }

    public function store (Request $request) {
        //validasi data request
        $request->validate([
            'nama' =>"required",
            'nim' => "required",
            'email' => "required|email",
            'jurusan' =>"required",
        ]);

        $input = [
            "nama" => $request->nama,
            "nim" => $request->nim,
            "email" => $request->email,
            "jurusan" => $request->jurusan,
        ];

        $students = Student::create($input);

        $data = [
            'message' => 'Student is created succesfully',
            'data' => $students,
        ];

        return response()->json($data, 201);
    }

    public function update($id, Request $request) {
        $student = Student::find($id);


        //jika data yang dicari tidak ada, kirim kode 404
        if(!$student){
            $data = [
                "message" => "Data not found"
            ];

            return response()->json($data, 404);
        }

        $student->update([
            'nama' => $request->nama ?? $student->nama,
            'nim' => $request->nim ?? $student->nim,
            'email' => $request->email ?? $student->email,
            'jurusan' => $request->jurusan ?? $student->jurusan,
        ]);
        $data = [
            'message' => 'Student is updated',
            'data' => $student

        ];
        //mengembalikan data (json) dan kode 200
        return response()->json($data, 200);

        if (!$student) {
            return response()->json(['error' => "Siswa dengan ID $id tidak ditemukan"], 404);
        }
    
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];
        
        $student->update($input);

    $data = [
        'message' => "Mengupdate Data Siswa ID $id",
        'data' => $student,
    ];

    return response()->json($data, 200);
    }

    public function destroy($id) {
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['error' => "Siswa dengan ID $id tidak ditemukan"], 404);
    }

        $student->delete();

    $data = [
        'message' => "Menghapus Data Siswa ID $id",
    ];

        return response()->json($data, 200);
}

}
