<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submission Successful</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <style>
        div {
            text-align: center;
        }
        h2 {
            font-size: 2rem;
        }
        p {
            font-size: 1.3rem;
        }
        a {
            display: block;
            margin-top: 30px;
            font-size: 1.1rem;
            color: blue;
            text-decoration: none;
        }
    </style>
</head>

<body>
    <div>
        <?php 
            $userFname = $_POST["user_fname"];
            $userLname = $_POST["user_lname"];
            $userEmail = $_POST["user_email"];

            echo ("<h2>Hey, $userFname $userLname!</h2>
            <p>Your email <b>$userEmail</b> was successfully registered. Thanks for shopping with us ❤️</p>");
        ?>
        <a href="index.html"><i class="bi bi-arrow-left"></i> Retrun to home page</a>
    </div>
</body>
</html>