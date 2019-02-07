delete from products
where id = ${id} returning *;