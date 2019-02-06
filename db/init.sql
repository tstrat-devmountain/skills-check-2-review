drop table if exists products;

create table products (
    id serial primary key,
    name varchar(25),
    price integer,
    img text
);

--- THIS IS FOR TESTING IN SQL TABS ---

select * from products;

insert into products
( name, price, img )
values 
( 'PokEmoN CarD-O', 120, 'https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1069178.jpg');


select * from products;

-- if you see an empty table and then one filled with a product, your db is running ---