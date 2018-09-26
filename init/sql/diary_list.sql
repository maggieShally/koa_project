CREATE TABLE   IF NOT EXISTS  `diary_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` longtext DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `location` varchar(1000) DEFAULT NULL,
  `weather` varchar(255) DEFAULT NULL,
  `fontSize` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

