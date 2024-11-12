const books = [

    {
        "id": 1,
        "judul": "Laskar Pelangi",
        "penulis": "Andrea Hirata",
        "tahun": 2005,
        "cover": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkmC0o7qruNeYlMX4DJ28Hpuidmwd4IbNmy5fpnGnHJnkIYpeJ",
        "link":"https://books.google.co.id/books?id=S0ZNe2iqM54C&printsec=frontcover&hl=id#v=onepage&q&f=false",
    },
    {
        "id": 2,
        "judul": "Bumi Manusia",
        "penulis": "Pramoedya Ananta Toer",
        "tahun": 1980,
        "cover": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmBikboqh6GKlG-i4iw1PobxZUg8ygGmNvUjlbORZD4oKj_p5C",
        "link":"https://books.google.co.id/books?id=Jt_BAAAACAAJ&lpg=PP1&hl=id&pg=PP1#v=onepage&q&f=false",
    },
    {
        "id": 3,
        "judul": "Supernova: Ksatria Puteri dan Bintang Jatuh",
        "penulis": "Dee Lestari",
        "tahun": 2001,
        "cover": "https://s3-ap-southeast-1.amazonaws.com/ebook-previews/31775/100816/1.jpg",
        "link":"https://books.google.co.id/books?id=Wt2OCwAAQBAJ&lpg=PP1&pg=PP1#v=onepage&q&f=false",
    },
    {
        "id": 4,
        "judul": "Negeri 5 Menara",
        "penulis": "Ahmad Fuadi",
        "tahun": 2009,
        "cover": "https://cdn.gramedia.com/uploads/items/9789792248616_negeri-5-menara-_cu-cover-baru_.jpg",
        "link":"https://docs.google.com/file/d/0B7JNiMWP0BJHWWFUR3dHX0RHZzg/edit?resourcekey=0-oeyyaf3SkmSOdo_9NUTWAw",
    },
    {
        "id": 5,
        "judul": "Ronggeng Dukuh Paruk",
        "penulis": "Ahmad Tohari",
        "tahun": 1982,
        "cover": "https://ebooks.gramedia.com/ebook-covers/53333/image_highres/BLK_RDP2020706247.jpg",
        "link":"https://docs.google.com/file/d/0B69VR2FErWqXQ2REM0RSMm1ENXc/edit?pli=1&resourcekey=0-of4DCS94Kis6Th7ljho4Fw",
    },
    {
        "id": 6,
        "judul": "Ayat-Ayat Cinta",
        "penulis": "Habiburrahman El Shirazy",
        "tahun": 2004,
        "cover": "https://upload.wikimedia.org/wikipedia/id/thumb/b/b4/Ayatayatcinta.jpg/330px-Ayatayatcinta.jpg",
        "link":"https://books.google.co.id/books/about/Ayat_ayat_cinta.html?id=amxnId1kWvIC&redir_esc=y",
    },
    {
        "id": 7,
        "judul": "Sang Pemimpi",
        "penulis": "Andrea Hirata",
        "tahun": 2006,
        "cover": "https://upload.wikimedia.org/wikipedia/id/8/89/Sang_Pemimpi_sampul.jpg",
        "link":"https://smpn32.semarangkota.go.id/e-perpus/index.php?p=fstream&fid=10&bid=776",
    },
    {
        "id": 8,
        "judul": "biologi",
        "penulis": "campbell reece",
        "tahun": 1987,
        "cover": "https://cdn.gramedia.com/uploads/items/BIOLOGI_1_EDISI_8_CAMPBELL.jpg",
        "isi": "Isi dari Rectoverso...",
        "link":"https://books.google.co.id/books?id=dwjGlYV4t8gC&printsec=frontcover#v=onepage&q&f=false",
    },
    {
        "id": 9,
        "judul": "Perahu Kertas",
        "penulis": "Dee Lestari",
        "tahun": 2009,
        "cover": "https://s3-ap-southeast-1.amazonaws.com/ebook-previews/31752/100792/1.jpg",
        "link":"https://repository.bbg.ac.id/bitstream/513/1/Perahu_Kertas.pdf",
    },
    {
        "id": 10,
        "judul": "Tetralogi Pulau Buru: Rumah Kaca",
        "penulis": "Pramoedya Ananta Toer",
        "tahun": 1988,
        "cover": "https://perpol.sman1kdg.sch.id/assets/buku/19b9a9da49632295c8113371740ffcee.png",
        "link":"https://smkwiyatamandala-bakti.sch.id/wp-content/uploads/2022/01/3.-Pramoedya-Ananta-Toer-Tetralogi-Buru-3-Jejak-Langkah.pdf",
    },
    {
        "id": 11,
        "judul": "muhammad al-fatih: sang penakluk konstatinopel",
        "penulis": "Felix Y.Siauw",
        "tahun": 1994,
        "cover": "https://www.bukuilmu.com/image-product/img1638-1429028008.jpg",
        "link":"https://eprints.walisongo.ac.id/id/eprint/6133/4/BAB%20III.pdf",  
    },
    {
        "id": 12,
        "judul": "aku",
        "penulis": "Chairul Anwar",
        "tahun": 1995,
        "cover": "https://mojokstore.com/wp-content/uploads/2020/10/Aku-Berdasarkan-Perjalanan-Hidup-dan-Karya-Penyair-Chairil-Anwar.jpg",
        "link":"https://pendidikanindonesia-fib.ub.ac.id/?p=1157&lang=id",
    },
    {
        "id": 13,
        "judul": "Pulang",
        "penulis": "Leila S. Chudori",
        "tahun": 2012,
        "cover": "https://cdn.gramedia.com/uploads/picture_meta/2023/12/20/xoid3bznddxudnurccgqxi.jpg",
        "link":"",
    },
    {
        "id": 14,
        "judul": "Guru Aini",
        "penulis": "Andrea Hirata",
        "tahun": 2020,
        "cover": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/4/224da055-6d05-4863-a767-092f2c604614.jpg",
        "link":"https://fliphtml5.com/zxaqx/gwzq/basic#google_vignette",
    },
    {
        "id": 15,
        "judul": "Garis Waktu",
        "penulis": "Fiersa Besari",
        "tahun": 2016,
        "cover": "https://cdn.gramedia.com/uploads/items/Garis_waktu.jpg",
        "isi": "Isi dari Garis Waktu...",
        "link":"http://103.44.149.34/elib/assets/buku/Fiersa-bisari_-_garis-waktu.pdf",
    },
    {
        "id": 16,
        "judul": "Saya",
        "penulis": "A.Makmur Makka",
        "tahun": 2010,
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_5beIyuNgqKbJIyrcp5lgHA544hWteCk_A&s",
        "link":"https://perpustakaan.kemendagri.go.id/opac/index.php?p=show_detail&id=7027",
    },
    {
        "id": 17,
        "judul": "Milea: suara dari dilan",
        "penulis": "Pidi baiq",
        "tahun": 2016,
        "cover": "https://opac.pknstan.ac.id/lib/minigalnano/createthumb.php?filename=images/docs/cover_milea-suara-dari-dilan-20231009102151.jpg&width=200",
        "link":"https://books.google.co.id/books?id=CXkRDQAAQBAJ&printsec=copyright&redir_esc=y#v=onepage&q&f=false",
    },
    {
        "id": 18,
        "judul": "Ancika: dia yang bersamaku",
        "penulis": "Pidi baiq",
        "tahun": 1995,
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629329511i/58804210.jpg",
        "link":"https://books.google.co.id/books/about/Ancika.html?id=ri5EEAAAQBAJ&redir_esc=y",
    },
    {
        "id": 19,
        "judul": "Dilan2:Dia adalah Dilanku 1991 ",
        "penulis": "Pidi baiq",
        "tahun": 2017,
        "cover": "https://elibrary.bsi.ac.id/assets/images/buku/230352.jpg",
        "link":"https://www.scribd.com/document/392076986/Pidi-Baiq-Dilan-1991-pdf",
    },
    {
        "id": 20,
        "judul": "Dilan: Dia adalah Dilanku 1990",
        "penulis": "Pidi baiq",
        "tahun": 2014,
        "cover": "https://cdn.gramedia.com/uploads/items/9786027870864_dilan-1990.jpg",
        "link":"https://kalamkopi.wordpress.com/wp-content/uploads/2017/04/pidi-baiq-dilan-1.pdf",
    },
];


function displayBooks() {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';

  books.forEach((book) => {
      const bookDiv = document.createElement('div');
      bookDiv.innerHTML = `
          <img src="${book.cover}" alt="${book.judul}">
          <h2>${book.judul}</h2>
          <p>Penulis: ${book.penulis}</p>
          <p>Tahun: ${book.tahun}</p>
          <button onclick="showBookDetail(${book.id})">Baca</button>
      `;
      bookList.appendChild(bookDiv);
  });
}

function showBookDetail(id) {
  const book = books.find(b => b.id === id);
  if (book) {
      // Arahkan pengguna ke link buku
      window.location.href = book.link; // Mengarahkan ke URL buku
  }
}

// Memanggil fungsi untuk menampilkan buku saat halaman dimuat
displayBooks();
