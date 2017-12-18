update comics
set author = $2,
    title = $3,
    issue = $4
where id = $1

returning *