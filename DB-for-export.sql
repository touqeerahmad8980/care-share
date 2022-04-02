-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 02, 2022 at 10:22 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.4.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog1`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `content` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `news_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categories_news_id_foreign` (`news_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `description`, `content`, `status`, `news_id`, `created_at`, `updated_at`) VALUES
(1, 'asdasd 12121', NULL, '<p>This is the initial editor content.</p>', 1, 1, '2022-01-23 14:41:20', '2022-01-23 14:41:35'),
(2, 'test', NULL, '<p><span style=\"background-color:transparent;color:#000000;\"><strong>WHAT IS&nbsp; STOMACH CANCER ?</strong></span></p><p><br>&nbsp;</p><p><span style=\"background-color:transparent;color:#000000;\">The stomach is an organ located in the upper oesophagus. Food enters the throat and chest through the oesophagus after it has been chewed and swallowed. It is in charge of breaking down food and transporting nutrients to the rest of the digestive system, including the small and large intestines.</span></p><p><br>&nbsp;</p><p><span style=\"background-color:transparent;color:#000000;\">Gastric cancer is another name for stomach cancer. It occurs when aberrant cells divide and replicate at an exceptional rate, resulting in a tumour mass in the stomach lining. Stomach cancer usually has no early symptoms and grows over a long period of time. In the early stages, it is frequently undetected. It goes untreated until it spreads to other sections of the stomach or to other parts of the body.</span></p><p><br>&nbsp;</p><p><span style=\"background-color:transparent;color:#000000;\"><img src=\"https://lh5.googleusercontent.com/oQ9N_Rk7TgjtbtUJMA_W-mfJXdnDgfdqpB65Xjfhbkai2P1zogYTRtgZcGc0eIqtMd9Gq-FfoNGqwMEnLQtNDUVvxCOzgS9LT-1Vx61QTokLpgn5WwNNaSRq0p_-CvFQPJ0QI4I_\"></span></p><p><br>&nbsp;</p><p><span style=\"background-color:transparent;color:#000000;\"><strong>FUNCTIONS OF STOMACH</strong></span></p><p><br>&nbsp;</p><ul><li><span style=\"background-color:transparent;color:#000000;\">The stomach produces acid and enzymes that aid in the digestion of meals.&nbsp;</span></li><li><span style=\"background-color:transparent;color:#000000;\">Rugae are muscular tissue ridges that run the length of the stomach.&nbsp;</span></li><li><span style=\"background-color:transparent;color:#000000;\">The stomach muscles flex on a regular basis, churning the food and aiding digestion.</span></li><li><span style=\"background-color:transparent;color:#000000;\">&nbsp;The pyloric sphincter is a muscle valve that allows food to flow from the stomach to the small intestine by opening and closing.</span></li></ul><p><br>&nbsp;</p><p><span style=\"background-color:transparent;color:#000000;\"><strong>SYMPTOMS OF STOMACH CANCER&nbsp;</strong></span></p><p><br>&nbsp;</p><p><span style=\"background-color:transparent;color:#000000;\">Early stage stomach cancer is frequently asymptomatic, which is why it is so difficult to detect in its early stages. The following are some of the indications and symptoms of stomach cancer:</span></p><p><br>&nbsp;</p><ul><li><span style=\"background-color:transparent;color:#000000;\">&nbsp;A lack of hunger</span></li><li><span style=\"background-color:transparent;color:#000000;\">&nbsp;Weight loss that isn\'t explained</span></li><li><span style=\"background-color:transparent;color:#000000;\">&nbsp;Pain in the abdomen</span></li><li><span style=\"background-color:transparent;color:#000000;\">&nbsp;Indigestion and heartburn</span></li><li><span style=\"background-color:transparent;color:#000000;\">&nbsp;Vomiting and nausea</span></li><li><span style=\"background-color:transparent;color:#000000;\">&nbsp;Abdominal swelling and fluid accumulation</span></li><li><span style=\"background-color:transparent;color:#000000;\">&nbsp;RBC count is low (anemia)</span></li><li><span style=\"background-color:transparent;color:#000000;\">&nbsp;Jaundice&nbsp;</span></li><li><span style=\"background-color:transparent;color:#000000;\">&nbsp;An upper-abdominal feeling of fullness</span></li></ul><p><br>&nbsp;</p><p><span style=\"background-color:transparent;color:#000000;\"><strong>CAUSES / RISK FACTORS OF STOMACH CANCER</strong></span></p><p><br>&nbsp;</p><p><span style=\"background-color:transparent;color:#000000;\">The following factors raise your chances of getting stomach cancer:</span></p><p><br>&nbsp;</p><ol><li><span style=\"background-color:transparent;color:#000000;\">Lymphoma</span></li></ol><p><br>&nbsp;</p><ol><li><span style=\"background-color:transparent;color:#000000;\">Bacterial infections caused by H. pylori</span></li></ol><p><br>&nbsp;</p><ol><li><span style=\"background-color:transparent;color:#000000;\">Tumors in various sections of the gastrointestinal tract</span></li></ol><p><br>&nbsp;</p><ol><li><span style=\"background-color:transparent;color:#000000;\">Polyps in the stomach</span></li></ol><p><br>&nbsp;</p><ol><li><span style=\"background-color:transparent;color:#000000;\">Stomach cancer is more likely in those over 50&nbsp;</span></li></ol><p><br>&nbsp;</p><ol><li><span style=\"background-color:transparent;color:#000000;\">People with a family history of stomach cancer</span></li></ol><p><br>&nbsp;</p><ol><li><span style=\"background-color:transparent;color:#000000;\">People of Asian (Korean and Japanese) heritage, and people of South American or Belarusian descent.</span></li></ol><p><br>&nbsp;</p><ol><li><span style=\"background-color:transparent;color:#000000;\">Consuming excessive amounts of salty or processed foods, and consuming excessive amounts of meat</span></li></ol><p><br>&nbsp;</p><ol><li><span style=\"background-color:transparent;color:#000000;\">Having a history of alcohol misuse,&nbsp;</span></li></ol><p><br>&nbsp;</p><ol><li><span style=\"background-color:transparent;color:#000000;\">Not exercising, or eating food that isn\'t properly cooked or kept are all lifestyle variables to consider.</span></li></ol><p><br><br><br>&nbsp;</p><p><span style=\"background-color:transparent;color:#000000;\"><img src=\"https://lh3.googleusercontent.com/LfUvW08-X9qXsQVSDWEEjCrtuQsKNJrkV0sKh7VZtcjl3nRVHRdRTFHtouVGtjjuF6TFxQ65C5FfsnCDHZZkb_t7rRL7MTk5gueWGHtXJ_NK1hdkqr2pWRvA7IQ-ouw2bbcSBwyk\"></span></p><p><br><br>&nbsp;</p><p><span style=\"background-color:transparent;color:#000000;\"><strong>HOW TO DIAGNOSE STOMACH CANCER ?</strong></span></p><p><span style=\"background-color:transparent;color:#000000;\">Learn more about how to diagnose stomach cancer&nbsp;</span><a href=\"https://docs.google.com/document/d/1Z08bZewKnhswNltc2omDeTYHxmLScv7_MVVQaSw_pcE/edit?usp=sharing\"><span style=\"background-color:transparent;color:#1155cc;\"><u>here</u></span></a><span style=\"background-color:transparent;color:#000000;\">.&nbsp;</span></p><p><br>&nbsp;</p><p><span style=\"background-color:transparent;color:#000000;\"><strong>HOW TO TREAT STOMACH CANCER?</strong></span></p><p><span style=\"background-color:transparent;color:#000000;\">There are a number of&nbsp;</span><a href=\"https://docs.google.com/document/d/1YWULTTx2ytkvih8J-5KWzyCtNdwQ62qKx6AG7bYXZBM/edit?usp=sharing\"><span style=\"background-color:transparent;color:#1155cc;\"><u>treatment</u></span></a><span style=\"background-color:transparent;color:#000000;\"> options available for stomach cancer.&nbsp;</span></p><p><br>&nbsp;</p><p><span style=\"background-color:transparent;color:#000000;\"><strong>DRUGS USED TO TREAT STOMACH CANCER</strong></span></p><p><span style=\"background-color:transparent;color:#000000;\">A number of&nbsp;</span><a href=\"https://docs.google.com/document/d/1_t-HlUNfNCQXxq2S58AYx4-xgIUIWcd00yba0le4A1o/edit?usp=sharing\"><span style=\"background-color:transparent;color:#1155cc;\"><u>drugs</u></span></a><span style=\"background-color:transparent;color:#000000;\"> are prescribed by your oncologist that can help treat stomach cancer.&nbsp;</span></p><p><br>&nbsp;</p><p><span style=\"background-color:transparent;color:#000000;\"><strong>HOW TO PREVENT STOMACH CANCER ?</strong></span></p><p><br>&nbsp;</p><ul><li><span style=\"background-color:transparent;color:#000000;\">Infections of the stomach should be treated.&nbsp;</span></li></ul><p><br>&nbsp;</p><ul><li><span style=\"background-color:transparent;color:#000000;\">Antibiotics can eliminate the bacteria, while other medications can mend sores in the stomach lining, lowering your cancer risk.</span></li></ul><p><br>&nbsp;</p><ul><li><span style=\"background-color:transparent;color:#000000;\">Eat a balanced diet. Every day, include extra fresh fruits and veggies on your meal. They\'re high in fibre and vitamins that can help you avoid cancer.&nbsp;</span></li></ul><p><br>&nbsp;</p><ul><li><span style=\"background-color:transparent;color:#000000;\">Hot dogs, processed lunch meats, and smoked cheeses are examples of foods that are particularly salty, pickled, cured, or smoked.</span></li></ul><p><br>&nbsp;</p><ul><li><span style=\"background-color:transparent;color:#000000;\">Please don\'t smoke. If you smoke, your chance of stomach cancer doubles.</span></li></ul><p><br>&nbsp;</p><ul><li><span style=\"background-color:transparent;color:#000000;\">&nbsp;Maintain a healthy weight, as well. Obesity or being overweight might also increase your risk of developing the condition.</span></li></ul><p><br>&nbsp;</p><ul><li><span style=\"background-color:transparent;color:#000000;\">Use caution when taking aspirin or other nonsteroidal anti-inflammatory drugs (NSAIDs). If you use aspirin every day to prevent heart attacks or NSAIDs for arthritis, talk to your oncologist about how these medications may impact your stomach.</span></li></ul><p><br><br>&nbsp;</p>', 1, 2, '2022-01-23 14:46:42', '2022-01-23 14:46:42'),
(3, 'sadas', NULL, '<p>&nbsp;</p><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=j_cWfKYaSr0\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/j_cWfKYaSr0\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure><p>This is the initial editor content.</p>', 1, 20, '2022-01-26 18:10:19', '2022-01-26 18:17:43');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_02_02_112609_create_settings_table', 1),
(4, '2019_03_20_115129_create_news_table', 1),
(5, '2019_04_01_053540_create_permission_tables', 1),
(6, '2022_01_16_190454_create_blog_category', 2),
(7, '2022_01_16_222347_categories', 3);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

DROP TABLE IF EXISTS `model_has_permissions`;
CREATE TABLE IF NOT EXISTS `model_has_permissions` (
  `permission_id` int(10) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

DROP TABLE IF EXISTS `model_has_roles`;
CREATE TABLE IF NOT EXISTS `model_has_roles` (
  `role_id` int(10) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL DEFAULT 'assets/images/blog/default_news_a.jpg',
  `uploaded_by` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `description`, `category`, `file_path`, `uploaded_by`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Blog 1', NULL, 'all', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:41:06', '2022-01-23 14:41:06'),
(3, 'Breast Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:49:18', '2022-01-23 14:49:18'),
(4, 'Ovarian Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:49:29', '2022-01-23 14:49:29'),
(5, 'Throat Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:49:40', '2022-01-23 14:49:40'),
(6, 'Lung Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:49:52', '2022-01-23 14:49:52'),
(7, 'Head and Neck Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:50:03', '2022-01-23 14:50:03'),
(8, 'Bone Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:50:16', '2022-01-23 14:50:16'),
(9, 'Pancreatic Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:50:28', '2022-01-23 14:50:28'),
(10, 'Colon cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:50:38', '2022-01-23 14:50:38'),
(11, 'Liver Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:50:47', '2022-01-23 14:50:47'),
(12, 'Blood Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:50:58', '2022-01-23 14:50:58'),
(13, 'Testicular Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:51:09', '2022-01-23 14:51:09'),
(14, 'Thyroid Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:51:21', '2022-01-23 14:51:21'),
(15, 'Prostate Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:51:32', '2022-01-23 14:51:32'),
(16, 'Gallbladder Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:51:42', '2022-01-23 14:51:42'),
(17, 'Skin Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:51:55', '2022-01-23 14:51:55'),
(18, 'Bladder Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:52:06', '2022-01-23 14:52:06'),
(19, 'Brain Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:52:17', '2022-01-23 14:52:17'),
(20, 'Stomach Cancer', NULL, 'cancer', 'assets/images/blog/default_news_a.jpg', 1, 1, '2022-01-23 14:52:28', '2022-01-23 14:52:28');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
CREATE TABLE IF NOT EXISTS `permissions` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'role-view', 'web', '2022-01-08 14:15:35', '2022-01-08 14:15:35'),
(2, 'role-create', 'web', '2022-01-08 14:15:35', '2022-01-08 14:15:35'),
(3, 'role-edit', 'web', '2022-01-08 14:15:35', '2022-01-08 14:15:35'),
(4, 'role-delete', 'web', '2022-01-08 14:15:35', '2022-01-08 14:15:35'),
(5, 'permission-view', 'web', '2022-01-08 14:15:35', '2022-01-08 14:15:35'),
(6, 'permission-create', 'web', '2022-01-08 14:15:35', '2022-01-08 14:15:35'),
(7, 'permission-edit', 'web', '2022-01-08 14:15:35', '2022-01-08 14:15:35'),
(8, 'permission-delete', 'web', '2022-01-08 14:15:35', '2022-01-08 14:15:35'),
(9, 'user-view', 'web', '2022-01-08 14:15:35', '2022-01-08 14:15:35'),
(10, 'user-create', 'web', '2022-01-08 14:15:35', '2022-01-08 14:15:35'),
(11, 'user-edit', 'web', '2022-01-08 14:15:35', '2022-01-08 14:15:35'),
(12, 'user-delete', 'web', '2022-01-08 14:15:35', '2022-01-08 14:15:35');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'web', '2022-01-08 14:15:35', '2022-01-08 14:15:35');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

DROP TABLE IF EXISTS `role_has_permissions`;
CREATE TABLE IF NOT EXISTS `role_has_permissions` (
  `permission_id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
CREATE TABLE IF NOT EXISTS `settings` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slogan` varchar(255) DEFAULT NULL,
  `reg` varchar(255) DEFAULT NULL,
  `stablished` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `layout` varchar(255) NOT NULL DEFAULT '1',
  `running_year` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `settings_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `name`, `slogan`, `reg`, `stablished`, `email`, `contact`, `address`, `website`, `logo`, `layout`, `running_year`, `created_at`, `updated_at`) VALUES
(1, 'W3 School Management System', 'Exploring Country', '12345', '1965', 'info@w3xplorers.com', '01851334237', 'Didar Market,Chittagong', 'http://www.w3xplorers.com', 'assets/images/logo/default.png', '1', '2019', '2022-01-07 19:00:00', '2022-01-07 19:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@admin.com', NULL, '$2y$10$W6S/9R9Iea.8pkumsyGZzuAj.m3xNfTrZaDajdF5OpcE3aKQtAuCW', NULL, '2022-01-07 19:00:00', '2022-01-07 19:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
