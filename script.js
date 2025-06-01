function kirimData() { // Fungsi yang dipanggil saat form dikirim (submit)
  const name = document.getElementById("nama").value; // Mengambil nilai dari input nama
  const nim = document.getElementById("nim").value; // Mengambil nilai dari input NIM
  const peminatan = document.querySelector("input[name=peminatan]:checked")?.value || "Belum dipilih"; 
  // Mengambil nilai radio button yang dipilih (jika tidak dipilih, isi "Belum dipilih")
  
  const alamat = document.getElementById("alamat").value; // Mengambil nilai dari textarea alamat
  const angkatan = document.getElementById("angkatan").value; // Mengambil nilai dari select angkatan
  const tanggal = document.getElementById("tanggal").value; // Mengambil nilai dari input tanggal

  const hasil =
    "Nama          : " + name + "\n" +          // Membuat string baris Nama
    "NIM             : " + nim + "\n" +         // Menambahkan baris NIM
    "Peminatan   : " + peminatan + "\n" +      // Menambahkan baris Peminatan
    "Alamat         : " + alamat + "\n" +      // Menambahkan baris Alamat
    "Angkatan     : " + angkatan + "\n" +      // Menambahkan baris Angkatan
    "Tanggal        : " + tanggal;             // Menambahkan baris Tanggal

  document.getElementById("popup-text").textContent = hasil; // Menampilkan hasil ke dalam elemen <pre> di popup
  document.getElementById("popup").style.display = "flex"; // Menampilkan popup dengan CSS display: flex
}

function tutupPopup() { // Fungsi untuk menutup popup
  document.getElementById("popup").style.display = "none"; // Menyembunyikan popup lagi
}
