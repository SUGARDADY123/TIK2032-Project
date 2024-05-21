<!-- process_contact.php -->
<?php
// Koneksi ke database
$conn = mysqli_connect("localhost", "root", "", "homepage");

// Periksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Cek apakah formulir telah dikirim
if (isset($_POST['submit'])) {
    // Ambil data dari formulir
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Buat query untuk menyimpan data ke dalam tabel
    $sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>
            alert('Pesan berhasil terkirim!');
            window.location='contact.html'
        </script>";
    } else {
        echo "Gagal mengirim pesan. Error: " . $sql . "<br>" . $conn->error;
    }
}

// Tutup koneksi
$conn->close();
?>
