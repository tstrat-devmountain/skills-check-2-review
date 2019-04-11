drop table if exists products;

create table products (
    product_id serial primary key,
    name text,
    price integer,
    img text
);

insert into products (name, price, img)
values
('Red Couch', 400, 'https://secure.img1-fg.wfcdn.com/im/62585904/resize-h310-w310%5Ecompr-r85/2358/23588487/lawrence-convertible-sleeper.jpg')
,('Blue Couch', 500, 'https://secure.img2-fg.wfcdn.com/im/18880499/resize-h310-w310%5Ecompr-r85/6797/67979837/derry-sofa.jpg')
,('Green Couch', 300, 'https://ak1.ostkcdn.com/images/products/14096471/P20705395.jpg?imwidth=320&impolicy=medium')
;
