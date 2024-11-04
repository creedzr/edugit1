
# Laporan Pengujian Query SQL

## Judul
Menguji Query SQL untuk Menampilkan Data Pengguna

## Deskripsi
Pada tanggal [25/10/2024], telah dilakukan pengujian untuk menjalankan query SQL yang bertujuan untuk menampilkan data pengguna dari tabel users, categories, dan products.

## Script Query
```sql
SELECT 
    users.users_id AS user_id,
    users.email,
    users.name AS user_name,
    categories.categories_id AS category_id,
    categories.name AS category_name,
    products.products_id AS product_id,
    products.name AS product_name,
    products.price,
    products.qty,
    products.unit,
    products.status
FROM 
    users
LEFT JOIN 
    categories ON users.users_id = categories.users_id
LEFT JOIN 
    products ON categories.categories_id = products.categories_id;
```

## Hasil Eksekusi Query
Berikut adalah hasil yang ditampilkan dari query:

user_id|email             |user_name      |category_id|category_name    |product_id|product_name  |price |qty  |unit|status|
-------+------------------+---------------+-----------+-----------------+----------+--------------+------+-----+----+------+
      1|andi@example.com  |Andi Susanto   |          1|Electronics      |         1|Smartphone    |599.99| 50.0|pcs |active|
      1|andi@example.com  |Andi Susanto   |          1|Electronics      |         2|Laptop        |899.99| 30.0|pcs |active|
      1|andi@example.com  |Andi Susanto   |          1|Electronics      |         3|Headphones    |199.99|100.0|pcs |active|
      1|andi@example.com  |Andi Susanto   |          3|Clothing         |         6|T-Shirt       | 24.99| 80.0|pcs |active|
      1|andi@example.com  |Andi Susanto   |          3|Clothing         |         7|Jeans         | 39.99| 70.0|pcs |active|
      1|andi@example.com  |Andi Susanto   |          7|Beauty Products  |        14|Moisturizer   | 39.99|200.0|pcs |active|
      1|andi@example.com  |Andi Susanto   |          7|Beauty Products  |        15|Lipstick      | 24.99|100.0|pcs |active|
      1|andi@example.com  |Andi Susanto   |         10|Automotive       |        20|Yoga Mat      | 29.99|100.0|pcs |active|
      1|andi@example.com  |Andi Susanto   |         12|Health & Wellness|          |              |      |     |    |      |
      1|andi@example.com  |Andi Susanto   |         15|Bags             |          |              |      |     |    |      |
      1|andi@example.com  |Andi Susanto   |         18|Travel           |          |              |      |     |    |      |
      2|budi@example.com  |Budi Prasetyo  |          2|Books            |         4|Fiction Book  | 19.99|200.0|pcs |active|
      2|budi@example.com  |Budi Prasetyo  |          2|Books            |         5|Textbook      | 49.99|150.0|pcs |active|
      2|budi@example.com  |Budi Prasetyo  |          5|Sports Equipment |        10|Soccer Ball   | 29.99|100.0|pcs |active|
      2|budi@example.com  |Budi Prasetyo  |          5|Sports Equipment |        11|Tennis Racket | 89.99| 40.0|pcs |active|
      2|budi@example.com  |Budi Prasetyo  |          8|Furniture        |        16|Office Desk   |199.99| 10.0|pcs |active|
      2|budi@example.com  |Budi Prasetyo  |          8|Furniture        |        17|Chair         |149.99| 15.0|pcs |active|
      2|budi@example.com  |Budi Prasetyo  |         11|Pet Supplies     |          |              |      |     |    |      |
      2|budi@example.com  |Budi Prasetyo  |         14|Music            |          |              |      |     |    |      |
      2|budi@example.com  |Budi Prasetyo  |         16|Watches          |          |              |      |     |    |      |
      2|budi@example.com  |Budi Prasetyo  |         19|Food             |          |              |      |     |    |      |
      3|citra@example.com |Citra Wulandari|          4|Home Appliances  |         8|Microwave Oven|149.99| 20.0|pcs |active|
      3|citra@example.com |Citra Wulandari|          4|Home Appliances  |         9|Refrigerator  |499.99| 15.0|pcs |active|
      3|citra@example.com |Citra Wulandari|          6|Toys             |        12|Action Figure | 14.99|150.0|pcs |active|
      3|citra@example.com |Citra Wulandari|          6|Toys             |        13|Puzzle        | 19.99| 50.0|pcs |active|
      3|citra@example.com |Citra Wulandari|          9|Gardening        |        18|Gardening Set | 59.99| 25.0|pcs |active|
      3|citra@example.com |Citra Wulandari|          9|Gardening        |        19|Planter       | 19.99| 50.0|pcs |active|
      3|citra@example.com |Citra Wulandari|         13|Stationery       |          |              |      |     |    |      |
      3|citra@example.com |Citra Wulandari|         17|Shoes            |          |              |      |     |    |      |
      3|citra@example.com |Citra Wulandari|         20|Jewelry          |          |              |      |     |    |      |
                 |          |              |      |     |    |      |

## Kesimpulan
Semua data berhasil ditampilkan dengan benar sesuai dengan query yang dijalankan. Data pengguna, kategori, dan produk dapat diakses secara lengkap, serta mengindikasikan bahwa relasi antar tabel berfungsi dengan baik.
