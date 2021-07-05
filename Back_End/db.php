<?php
    $con = mysqli_connect("localhost", "root", "", "travel_agency");
    if (mysqli_connect_errno()) {
        echo("failed to connect to db:" . mysqli_connect_error());
    }
?>