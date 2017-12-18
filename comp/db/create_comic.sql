insert into comics (title, issue, author)
values ($1, $2, $3)
returning *;