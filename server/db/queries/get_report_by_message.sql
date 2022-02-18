
SELECT * FROM reports
JOIN messages ON messages.id = message_id
WHERE message_id = 1;