<?php
    class Post {
        // DB Properties
        private $conn;
        private $table = 'posts';

        // DB Properties
        public $user_id;
        public $user_username;
        public $user_password;
        
        public $city_id;
        public $city_name;
        public $city_description;
        
        // Constructor with DB
        public function __construct($db) {
            $this->conn = $db;
            
        }

        // Get Posts
        public function read() {
            // get cities query
            $get_cities_query = "
                select city_name, city_description
                from city
            ";
            // prepare statement
            $stmt = $this->conn->prepare($get_cities_query);
            
            // execute statement
            $stmt->execute();

            return $stmt;
        }
    }
?>