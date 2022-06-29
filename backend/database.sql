-- CREATE DATABASE  IF NOT EXISTS `totallyspies`;
DROP DATABASE `totallyspies`;
CREATE DATABASE  IF NOT EXISTS `totallyspies`;
USE `totallyspies`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `firstname` varchar(255),
  `lastname` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `agence_id` int
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO
  `user` (firstname, lastname, email, password, agence_id)
VALUES
  (
    "Martin",
    "Dupont",
    "matin.dupont@gmail.com", 
    "$argon2i$v=19$m=16,t=2,p=1$UGt5NHpXVzNlNDdwVHJRRA$04lEGSUPaMRQeOYECTrSYQ", 
    1
  ),
  (
    "Jean-claude",
    "van damme",
    "jean-claude-ven-damme@gamil.com", 
    "$argon2i$v=19$m=16,t=2,p=1$UGt5NHpXVzNlNDdwVHJRRA$04lEGSUPaMRQeOYECTrSYQ", 
    2
  ),
  (
    "Leo",
    "Durant",
    "leo-durant@gamil.com", 
    "$argon2i$v=19$m=16,t=2,p=1$UGt5NHpXVzNlNDdwVHJRRA$04lEGSUPaMRQeOYECTrSYQ", 
    3
  ),
  (
    "John",
    "Smith",
    "john.smith@gmail.com", 
    "$argon2i$v=19$m=16,t=2,p=1$UGt5NHpXVzNlNDdwVHJRRA$04lEGSUPaMRQeOYECTrSYQ", 
    4
  );


DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `description` varchar(255),
  `avancement` int
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO
  `project` (title, description, avancement)
  VALUES
  (
    "hackathon", 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed ullamcorper eros. Mauris vestibulum commodo urna sed tincidunt. Nullam in consequat ligula.", 
    8
    ),
  (
    "hackathon2", 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed ullamcorper eros. Mauris vestibulum commodo urna sed tincidunt. Nullam in consequat ligula.", 
    6
    ),
      (
    "hackathon3", 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed ullamcorper eros. Mauris vestibulum commodo urna sed tincidunt. Nullam in consequat ligula.", 
    4
    ),
      (
    "hackathon4", 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed ullamcorper eros. Mauris vestibulum commodo urna sed tincidunt. Nullam in consequat ligula.", 
    2
    );


DROP TABLE IF EXISTS `agence`;
CREATE TABLE `agence` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `city` VARCHAR(255)
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO
  `agence` (city)
VALUES
  ("Nantes"),
  ("Strasbourg"),
  ("Lille"),
  ("Lyon");

DROP TABLE IF EXISTS `collaborators`;
CREATE TABLE `collaborators` (
  `project_id`int,
  `user_id`int
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO
  `collaborators` (project_id, user_id)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 1);

DROP TABLE IF EXISTS `tech`;
CREATE TABLE `tech` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `url` VARCHAR(255),
  `post_id` int
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO
  `tech` (url, post_id)
VALUES
  ("https://img2.freepng.fr/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg", 
  1
  ),
  ("https://img1.freepng.fr/20180502/fgw/kisspng-angularjs-single-page-application-web-application-angular-5aea7a2d8df230.6287313315253161415814.jpg", 
  2
  ),
  ("https://img2.freepng.fr/20180619/jaw/kisspng-node-js-javascript-express-js-server-side-scriptin-node-js-5b28f613031dd3.1561918615294110910128.jpg", 
  3
  ),
  ("https://img2.freepng.fr/20180422/qze/kisspng-php-server-side-scripting-computer-software-genera-php-5adc5e78de7813.0517335015243915449112.jpg", 
  1
  );


ALTER TABLE `user`ADD FOREIGN KEY (`agence_id`) REFERENCES `agence`(`id`);

ALTER TABLE `collaborators` ADD FOREIGN KEY (`project_id`) REFERENCES `project` (`id`);

ALTER TABLE `collaborators` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
