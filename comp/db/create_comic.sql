insert into comics (author, title, issue)
values ($1, $2, $3)
returning *;