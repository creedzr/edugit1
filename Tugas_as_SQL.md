# Laporan Pengujian Query SQL

## Judul
Menguji Query SQL untuk Menampilkan Data Pengguna

## Deskripsi
Pada tanggal [02/11/2024], telah dilakukan pengujian untuk menjalankan query SQL yang bertujuan untuk menampilkan data pengguna dari tabel `users`.

## Script Query
SELECT 
    name AS 'Nama',
    phone AS 'Nomor Telepon',
    address AS 'Alamat'
FROM 
    users;

## Hasil Eksekusi Query
Berikut adalah hasil yang ditampilkan dari query:
Nama             |Nomor Telepon|Alamat                            
-----------------+-------------+----------------------------------
Andi Setiawan    |081234567890 |JL Merdeka No.1, Sukabumi         
Budi Santoso     |081234567891 |JL Jendral Sudirman No.2, Sukabumi
Cindy Lestari    |081234567892 |JL Raya Sukabumi No.3, Sukabumi   
Dina Anggraini   |081234567893 |JL Diponegoro No.4, Sukabumi      
Eko Prabowo      |081234567894 |JL Pahlawan No.5, Sukabumi        
Fani Nuraini     |081234567895 |JL Cikutra No.6, Sukabumi         
Gilang Aditya    |081234567896 |JL Melati No.7, Sukabumi          
Hani Rachmawati  |081234567897 |JL Kamboja No.8, Sukabumi         
Iwan Setiawan    |081234567898 |JL Anggrek No.9, Sukabumi         
Joko Pramono     |081234567899 |JL Mawar No.10, Sukabumi          
Kiki Ningsih     |081234567800 |JL Bunga No.11, Sukabumi          
Lina Marisa      |081234567801 |JL Puncak No.12, Sukabumi         
Mardianto        |081234567802 |JL Kebon Jeruk No.13, Sukabumi    
Nia Rahmawati    |081234567803 |JL Haji No.14, Sukabumi           
Oki Subiantoro   |081234567804 |JL Bambu Kuning No.15, Sukabumi   
Putri Handayani  |081234567805 |JL Sukajadi No.16, Sukabumi       
Rudi Hartono     |081234567806 |JL Suka Maju No.17, Sukabumi      
Sari Indah       |081234567807 |JL Harapan No.18, Sukabumi        
Taufik Hidayat   |081234567808 |JL Cibadak No.19, Sukabumi        
Uli Adisti       |081234567809 |JL Cikundul No.20, Sukabumi       
Agum Ruswandi    |081234567810 |JL Ciamis No.21, Sukabumi         
Fatih            |081234567811 |JL Tarumanegara No.22, Sukabumi   
Husen Kamil      |081234567812 |JL Siliwangi No.23, Sukabumi      
Agung Gustian    |081234567813 |JL Sumberjaya No.24, Sukabumi     
Vina Saraswati   |081234567814 |JL Taman No.25, Sukabumi          
Wawan Setiawan   |081234567815 |JL Angkasa No.26, Sukabumi        
Yulianto         |081234567816 |JL Citra No.27, Sukabumi          
Zahra Khairunnisa|081234567817 |JL Selamet No.28, Sukabumi        
Alif Akbar       |081234567818 |JL Rahayu No.29, Sukabumi         
Bima Nugraha     |081234567819 |JL Cendana No.30, Sukabumi        

## Kesimpulan
Semua data berhasil ditampilkan dengan benar sesuai dengan query yang dijalankan.