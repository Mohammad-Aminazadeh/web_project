<?php
    // headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    // includes
    include_once '../../config/Database.php/';
    include_once '../../models/Post.php';

    // initialize DB and connect
    $database = new Database();
    $db = $database->connect();

    // initialize blog post object
    $post = new Post($db);

    // blog post query
    $result = $post->read();

    // get number of rows
    $num_rows = $result->rowCount();

    // check if there is any post
    if($num_rows > 0) {
        $posts_array = array();
        $posts_array['data'] = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            // direct access to columns
            extract($row);

            $post_item = array(
                'city_name' => $city_name,
                'city_description' => $city_description
            );

            // push post_item to post_array['data']
            array_push($posts_array['data'], $post_item);
        }

        // turn to JSON and ouput
        echo json_encode($posts_array);
    } else {
        // no posts
        echo json_encode(
            array('message' => 'no posts!')
        );
    }


?>
