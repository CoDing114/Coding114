<?php
$conn = mysqli_connect("localhose","root","901207","opentutorials");
$sql = "
    INSERT INTO topic(
        title,
        description,
        created
    )   VALUES (
        'MYSQL',
        'MYSQL is,,,',
        NOW()
        )";
$result = mysqli_query($conn,$sql);
if($result === false){
    echo mysqli_error($conn);
}

?>