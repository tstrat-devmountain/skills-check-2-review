update products set name = $1, price = $2, img = $3
where product_id = $4;

select * from products;
