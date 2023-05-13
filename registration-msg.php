<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <title>Registration</title>

     <!-- google font  -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins&family=Unbounded&display=swap"
      rel="stylesheet"
    />
    <!-- Bootstrap Stylesheet -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <!-- bootstrap icons  -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
    />
    <!-- animate css -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <style>
    body {
      text-align: center;
      padding: 40px 0;
      background: #ebf0f5;
    }
    h1 {
      color: #88b04b;
      font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
      font-weight: 900;
      font-size: 40px;
      margin-bottom: 10px;
    }
    p {
      color: #404f5e;
      font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
      font-size: 20px;
      margin: 0;
    }
    i {
      color: #9abc66;
      font-size: 100px;
      line-height: 207px;
      margin-left: 2px;
    }
    .card {
      background: white;
      padding: 60px;
      border-radius: 4px;
      box-shadow: 0 2px 3px #c8d0d8;
      display: inline-block;
      margin: 0 auto;
    }
    .continue-btn {
      font-family: "Unbounded", cursive;
    }
  </style>
</head>
<body>
    <?php

// Establishting connection with database
$conn = mysqli_connect("localhost", "root", "", "dpi");

if(!$conn) {
    die("Error: Could not be connected. ".mysqli_connect_error());
}


// Receiving input data
$fname = $_POST["user_fname"];
$lname = $_POST["user_lname"];
$email = $_POST["user_email"];


// Input data to the db-table
$sql = "INSERT INTO mistrium_reg_customers (first_name, last_name, email)
        VALUES ('$fname', '$lname', '$email')"; 

// Check if data is added successfully
if(mysqli_query($conn, $sql)) {
    echo "
   <div class='card animate__animated animate__fadeInUp'>
      <div
        style='
          border-radius: 200px;
          height: 200px;
          width: 200px;
          background: #f8faf5;
          margin: 0 auto 1rem auto;
        '
      >
        <i class='bi bi-check2-all'></i>
      </div>
      <h1>Success</h1>
      <p>
        Hey, <span class='text-warning fw-bold'>$fname $lname!</span> <br/>
        Thanks For Being A Valuable Member ❤️
      </p>

      <div class='mt-5'>
        <a href='index.html#products'
          ><button class='btn btn-outline-success fw-bold continue-btn'>
            Continue Shopping
          </button></a
        >
      </div>
    </div>
    
    ";
}

// Closing connection
mysqli_close($conn);

?>
</body>
</html>