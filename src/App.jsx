import "./App.css";

function App() {
  return (
    <div class="bg-gray-100">
      <div class=" min-h-screen">
        <Hedder/>
        <main class="flex">
          <Asite/>
          <Conatact/>
        </main>
        <Fotter/>
      </div>
      <Tambah/>
      <Edit/>
    </div>
  );
}

function Asite() {
  return <aside class="p-10 bg-gray-600 min-h-screen">
      <h2 class="text-2xl font-bold text-white">Admin</h2>
      <nav class="mt-2">
          <ul class="p-4 text-white">
              <li class="relative text-lg font-semibold text-white py-2
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 
              hover:after:w-full active:after:bg-red-500"><a href=""> Dasboard</a></li>
              <li class="relative text-lg font-semibold text-white py-2
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 
              hover:after:w-full active:after:bg-red-500"><a href="">Mahasiswa</a></li>
              <li class=" relative text-lg font-semibold text-white py-2
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-0 after:h-1 after:bg-white after:transition-all after:duration-250 
              hover:after:w-full active:after:bg-red-500"><a href="">Setting</a></li>
          </ul>
      </nav>
  </aside>
}

function Hedder() {
  return (
    <header class="bg-slate-400 p-2 text-end ">
      <button id="Login" class="bg-gray-500 px-6 py-2 rounded text-white">
        Login
      </button>
    </header>
  );
}

function Conatact() {
  return  <div class="bg-white flex-1 p-5">
      <div class="flex justify-between items-center mb-9 p-1">
      <h2 class="font-bold font-sans text-xl" >Tabel Mahasiswa</h2>
      <button class="px-7 py-2 bg-green-500 rounded" id="tambah-mahasiswa">Tambah Mahasiswa</button>
      </div>
      <table class="table-auto min-w-full bg-gray-200 p-6 rounded-lg shadow">
          <thead class="bg-gray-400">
              <tr>
                  <th class="px-4 py-2">No</th>
                  <th class="px-4 py-2">Nim</th>
                  <th class="px-4 py-2">Nama</th>
                  <th class="px-4 py-2">Aksi</th>
              </tr>
          </thead>
          <tbody class="text-center">
              <tr>
                  <td class="border px-4 py-2">01</td>
                  <td class="border px-4 py-2">A11202109</td>
                  <td class="border px-4 py-2">Wahyu Aji</td>
                  <td class="border px-4 py-8">
                      <button id="editData" class="bg-blue-500 px-4 py-2 text-white font-serif rounded">Edit</button>
                      <button id="hapusData" class="bg-red-500 px-3 py-2 text-white font-serif rounded">Hapus</button>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
}

function Fotter() {
  return  <footer class="p-2 bg-slate-500 text-center text-white"> &copy; 2024 Admin Dashboard</footer>
}

function Tambah(){
  return <div id="modal" class="fixed inset-0  none  items-center justify-center bg-black bg-opacity-50 hidden">
      <div class=" bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <div class="flex justify-between items-center">
              <h2 id="modalTitle" class="text-lg font-bold">Tambah Mahasiswa</h2>
              <span id="closeModal" class="cursor-pointer text-red-500">&times;</span>
          </div>
          <form class="mt-4">
              <div class="mb-4">
                  <label for="nama" class="block text-gray-700">Nama:</label>
                  <input type="text" id="nama" class="w-full px-3 py-2 border rounded" required/>
              </div>
              <div class="mb-4">
                  <label for="nim" class="block text-gray-700">NIM:</label>
                  <input type="text" id="nim" class="w-full px-3 py-2 border rounded" required/>
              </div>
              <div class="flex justify-end ">
                  <button type="button" id="simpanData" class="bg-blue-500  text-white px-4 py-2 rounded mr-2">Simpan</button>
                  <button type="button" id="batal" class="bg-red-500 text-white px-4 py-2 mr-2 rounded">Batal</button>
              </div>
          </form>
      </div>
  </div> 
 
}

function Edit(){
  return <div id="editModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden">
  <div class="p-6 bg-white rounded-lg shadow-sm px-10 py-10 max-w-sm w-full">
      <div class="flex justify-between items-center">
          <h2 class="font-bold text-lg">Edit Data</h2>
          <span id="closeModalEdit" class="cursor-pointer">&times;</span>
      </div>
      <form class="mt-4">
          <div class="mt-4">
              <label for="nama" class="block text-gray-700">Nama :</label>
              <input type="text" id="edit-nama" name="name" class="w-full px-3 py-2 border rounded"/>
          </div>
          <div>
              <label for="nim" class="block text-grey-700">Nim :</label>
              <input type="text" name="nim" id="edit-nim" class="w-full px-3 py-2 border rounded"/>
          </div>
          <div class="mt-4 flex justify-end">
              <button class="bg-blue-500 p-3 mr-2 rounded px-2 py-3  text-white">Simpan</button>
              <button id="batalEdit" class="bg-red-500 p-4 rounded px-4 py-2 mr-2 text-white">Batal</button>
          </div>
      </form>
  </div>
</div>

}
 
export default App;
