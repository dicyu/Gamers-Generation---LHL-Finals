

SELECT gamers.gamer_tag, friend_id
FROM friends_list
JOIN gamers ON gamer_id = gamers.id
WHERE friends_list.gamer_id = 7;