<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Registration</title>
</head>
<body>

    <div class="form">
        <h1>صفحه ورود</h1>
        <form name="registration" action="Register.php" method="POST">
            <input type="text" name="username" placeholder="نام کاربری" required />
            <input type="password" name="password" placeholder="رمز عبور" required />
            <input type="submit" name="submit" value=""Register />
        </form>
    </div>

    <?php
        // session_start();
        require('db.php');
        if ($_SERVER['REQUEST METHOD'] == "POST") {
            $username = $_POST['username'];
            $password = $_POST['password'];

            $con = mysqli_connect("localhost", "root", "", "travel_agency");
            if ($con->connect_error) {
                die("connection failed: " . $con->connect_error);
            }
            
            $check_user_query = "
                select *
                from users
                where username = $username
            ";
            $resault = $con->query($check_user_query);

            if ($resault->num_rows > 0) {
                echo("این کاربر وجود دارد.");
                header("location: login.php");
            } else {
                $add_user_query = "
                    insert into users (username, password) values ('$username', '$password')
                ";
                $con->query($add_user_query);
                header("location: index.html");
            }

        }
    ?>
</body>
</html>