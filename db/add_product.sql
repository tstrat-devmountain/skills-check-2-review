insert into products
( name, price, img )
values
( $1, $2, $3 ) returning *;