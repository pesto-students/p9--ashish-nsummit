
-- 01 Find the item that has minimum weight
SELECT * FROM items WHERE weight = (SELECT MIN(weight) AS weight FROM items);


-- 02 Find the different warehouses in “Pune”
SELECT wid, wname FROM warehouses WHERE city_id = (SELECT cid FROM cities WHERE city='Pune');
SELECT w.wid, w.wname FROM cities c INNER JOIN warehouses w ON c.cid = w.city_id AND c.city = 'Pune';


-- 03 Find the details of items ordered by a customer “Mr. Patil”.
SELECT cu.cname, i.idescription AS item, i.weight, i.cost 
FROM ((items i 
	INNER JOIN ordereditems oi ON oi.item_id = i.iid) 
	INNER JOIN orders o ON o.oid = oi.order_id) 
INNER JOIN customers cu ON cu.cuid = o.customer_id 
AND cu.cname = 'Mr. Patil';


-- 04 Find a Warehouse which has maximum stores.
SELECT w.wname AS warehouse FROM stores s 
    INNER JOIN warehouses w ON w.wid = s.warehouse_id 
GROUP BY warehouse_id HAVING COUNT(warehouse_id) > 1;


-- 05 Find an item which is ordered for a minimum number of times.
SELECT * FROM items WHERE iid IN (SELECT item_id FROM ordereditems 
    GROUP BY item_id HAVING COUNT(item_id) = 1
);


-- 06 Find the detailed orders given by each customer.
SELECT cu.cname, i.idescription 
AS item, i.weight, i.cost FROM 
((items i 
	INNER JOIN ordereditems oi ON oi.item_id = i.iid) 
	INNER JOIN orders o ON o.oid = oi.order_id) 
INNER JOIN customers cu ON cu.cuid = o.customer_id; 
