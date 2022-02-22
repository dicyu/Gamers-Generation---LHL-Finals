INSERT INTO gamers (name, gamer_tag, avatar , bio, email, password)
VALUES 
('Mary Liu', 'Checkers775', 'https://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG-2.png', 'Hey! Looking for casual players to group with after work hours are over', 'spawncheck@test.ca', '$2b$10$N.DWA68HUbfioAEQenls8O8hDcD1axiQ5QZjprJpubT6T0USXjFeW'),
('Charlie Richards', 'PWNmaster', 'https://www.pngall.com/wp-content/uploads/2016/06/Sparrow-PNG-Image.png', 'description', 'test@test.ca', '$2b$10$6bac8TvJ0qO3Q7GZyRTMvOMfjVJzD6CmZAd7uQZkI1cyqb20hKW2W'),
('Sam Wrait', 'TheLegend27', 'https://i.kym-cdn.com/photos/images/newsfeed/001/199/793/c39.png',  'description', 'arenaathena981@test.ca', '$2b$10$6bac8TvJ0qO3Q7GZyRTMvO0jpeNrGzoPRytF7iJR0Q32cCDQskbQ2'),
('Sasuke Uchiha', 'OneEyedUchiha', 'https://i.pinimg.com/564x/f2/9a/85/f29a85b01260d7a4f477b8e4646e94b4.jpg', 'description', 'avengeplant@test.ca', '$2b$10$6bac8TvJ0qO3Q7GZyRTMvOqeYyKMNOVZNg6ln//YTaS2McV7y45B.'),
('Suade Stokes', 'Suade', NULL, 'description', 'williamson@test.ca', '$2b$10$6bac8TvJ0qO3Q7GZyRTMvO8zUrfiK3eMFzrUn47gCEar/UaxmfMVu'),
('Lily Pots', 'WolfShaper', 'https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg', 'description', 'tybaltpie@test.ca', '$2b$10$6bac8TvJ0qO3Q7GZyRTMvOaJyW.k0BTJT5FpgJmKcq6wvDE9xTZwa'),
('Josh Yu', 'LovechildLuck888', NULL, 'description', 'belovedchild@test.ca', '$2b$10$6bac8TvJ0qO3Q7GZyRTMvOqeYyKMNOVZNg6ln//YTaS2McV7y45B.');

INSERT INTO games (game_name, released)
VALUES 
('Final Fantasy XIV', '2010-09-29 00:00:12'),
('World of Final Fantasy', '2016-10-24 00:00:12'),
('Demon Slayer',' 2010-09-29 00:00:12'),
('Epic Seven', '2010-09-29 00:00:12'),
('Contract Demon', '2019-03-30 00:00:12'),
('	
Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles', '2021-10-13 00:00:12'),
('Call of Duty: Black Ops Zombies', '2011-11-30 00:00:12'),
('Minecraft', '2011-11-17 00:00:12'),
('Dark Souls', '2011-09-21 00:00:12');

INSERT INTO gamers_games (gamer_id, game_id, play_style)
VALUES
(1, 1, 'Semi-casual'),
(1, 2),
(1, 3),
(1, 4, 'Hardcore'),
(2, 3),
(2, 9),
(2, 10),
(3, 3, 'Semi-casual'),
(3, 4),
(3, 9, 'Hardcore'),
(4, 6),
(4, 7),
(4, 8, 'Semi-casual'),
(5, 9, 'Hardcore'),
(6, 1),
(6, 2),
(6, 4),
(7, 1, 'Hardcore'),
(7, 7, 'Semi-casual'),
(7, 8),
(7, 9, 'Semi-casual');

INSERT INTO genres (name)
VALUES
('Simulation'),
('Racing'),
('Platformer'),
('Sandbox'),
('Puzzlers'),
('Party Games'),
('Hack and Slash'),
('Sport'),
('MMORPG'),
('Indie'),
('Role-playing game'),
('Mobile game'),
('Horror'),
('Real-time Strategy'),
('Strategy'),
('Adventure'),
('Otome'),
('Fighting'),
('Adult'),
('First-Person Shooter');

INSERT INTO messages (message, date)
VALUES 
('Why are you like this?', '2021-10-13'),
('How are you even afraid of the dark?', '2021-10-13'),
('Do you even know what you are doing in this game?', '2021-10-13'),
('U R not evn a guy', '2021-10-14'),
('Would you like to see my pancreas?', '2021-10-14'),
('I am going to find where u live', '2021-10-14'),
('Try me, I will end you', '2021-10-14'),
('U really scaring me D:', '2021-10-14'),
('U shud b afraid', '2021-10-14'),
('I will report you', '2021-10-14'),
('U not prov nthing', '2021-10-15');

INSERT INTO friends_list (gamer_id, friend_id)
VALUES 
(1, 2),
(2, 3),
(3, 1),
(2, 6),
(7, 3),
(5, 4),
(7, 2);

INSERT INTO blocked_list (gamer_id, blocked_id)
VALUES 
(1, 4),
(2, 5),
(3, 5),
(2, 4),
(7, 4),
(5, 6),
(7, 1);

INSERT INTO games_genres (game_id, genre_id)
VALUES
(1, 9),
(1, 11),
(2, 11),
(3, 11),
(4, 12),
(4, 13),
(5, 17),
(6, 18),
(7, 2),
(8, 1),
(9, 13),
(9, 16);

INSERT INTO reports (gamer_id, reported_id, message_id, reason)
VALUES 
(1, 2, 6, 'I feel threatened, he may visit my house'),
(2, 4, 9, 'This man DMed me later, saying he would kidnap my sister and rob my mom, will send screenshots later'),
(2, 2, 1, 'fnewialfhcwea'),
(3, 5, 11, 'this guy has been harassing me at skool and now has found me here'),
(7, 4, 11, 'I did nothing wrong, I dunno what even'),
(5, 3, 5, 'That sounds terrible and I want no part of this');

INSERT INTO likes (sent_like, received_like)
VALUES (1, 2), (1, 3), (1, 4), (4, 1), (2, 1);

INSERT INTO matches (gamer_first_id, gamer_second_id)
VALUES (1, 4), (1, 2);