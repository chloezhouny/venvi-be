DROP DATABASE IF EXISTS z1viz9l7u9ew8m7i;
CREATE DATABASE z1viz9l7u9ew8m7i;

insert into z1viz9l7u9ew8m7i.User(name, username, profileID) values('alfred','alfred@gmail.com', 111);
insert into z1viz9l7u9ew8m7i.User(name, username, profileID) values('chloe','chloe@gmail.com', 222);
insert into z1viz9l7u9ew8m7i.User(name, username, profileID) values('esar','esar@gmail.com', 333);
insert into z1viz9l7u9ew8m7i.User(name, username, profileID) values('phillip','phillip@gmail.com', 444);


insert into z1viz9l7u9ew8m7i.Vehicle(make, model, year, rating, image) values("Mercedes-Benz", "S", "2018", 5, "https://st.motortrend.com/uploads/sites/10/2017/10/2018-mercedes-benz-s-class-450-sedan-angular-front.png");
insert into z1viz9l7u9ew8m7i.Vehicle(make, model, year, rating, image) values("Bentley", "Continental", "2019", 5,  "https://i.pinimg.com/originals/52/e0/1e/52e01e3f90581cee9479d17313b0cb58.png");
insert into z1viz9l7u9ew8m7i.Vehicle(make, model, year, rating, image) values("BMW", "7", "2018", 4.7, "https://purepng.com/public/uploads/large/purepng.com-bmw-7-series-carcarbmwvehicletransport-961524660822bix0u.png");
insert into z1viz9l7u9ew8m7i.Vehicle(make, model, year, rating, image) values("Porsche", "Panamera", "2017",4.8, "https://st.motortrend.com/uploads/sites/10/2017/08/2018-porsche-panamera-turbo-hatchback-angular-front.png");
insert into z1viz9l7u9ew8m7i.Vehicle(make, model, year, rating, image) values("Jaguar", "XJ", "2018", 4.7, "https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/90bde009b511661b40b6fd14da51e308.png");
insert into z1viz9l7u9ew8m7i.Vehicle(make, model, year, rating, image) values("Honda", "Accord", "2019", 4.5, "https://pictures.dealer.com/d/duvalhondajacksonville/1100/55185497669516b8d0211e5c7cf75531x.jpg");
insert into z1viz9l7u9ew8m7i.Vehicle(make, model, year, rating, image) values("Porsche", "911", "2017", 4.7, "https://i-love-png.com/images/2016-porsche-911-targa-4s-coupe-angular-front.png");
insert into z1viz9l7u9ew8m7i.Vehicle(make, model, year, rating, image) values("Volvo", "XC40", "2018", 4.4, "https://cnet4.cbsistatic.com/img/Yck0ntwEa1RLUaxXFlnLVkSMa14=/980x551/2018/02/19/d7567f82-8002-4950-8d4f-f3d79a79107b/001-2018-volvo-xc40-inscription.jpg");
insert into z1viz9l7u9ew8m7i.Vehicle(make, model, year, rating, image) values("Chevrolet", "Corvette", "2019", 4.6, "http://img2.sm360.ca/ir/w640h390c/images/newcar/ca/2019/chevrolet/corvette-zr1/1zr/coupe/exteriorColors/11204_cc0640_032_g8g.png");


insert into z1viz9l7u9ew8m7i.Listing(price, vin, UserId, make, model, year, mileage, image) values(78000, "5YJSA1E23JF266704", 1, "Tesla", "Model S", "2018", 15000, "https://www.cstatic-images.com/car-pictures/xl/usc70tsc024b021001.png");
insert into z1viz9l7u9ew8m7i.Listing(price, vin, UserId, make, model, year, mileage, image) values(22684, "JTHBE1BL9E5033613", 4, "Lexus", "GS", "2014", 70000, "https://www.cstatic-images.com/car-pictures/xl/cac30lec151a021001.png");
insert into z1viz9l7u9ew8m7i.Listing(price, vin, UserId, make, model, year, mileage, image) values(52995, "WBS8M9C58G5E68439", 3, "BMW", "M3", "2016", 42503, "https://www.cstatic-images.com/car-pictures/xl/usc60bmc111a021001.png");
insert into z1viz9l7u9ew8m7i.Listing(price, vin, UserId, make, model, year, mileage, image) values(59995, "WBA7F0C58HGM21274", 4, "BMW", "7", "2017", 28745, "https://purepng.com/public/uploads/large/purepng.com-bmw-7-series-carcarbmwvehicletransport-961524660822bix0u.png");
insert into z1viz9l7u9ew8m7i.Listing(price, vin, UserId, make, model, year, mileage, image) values(18996, "WAUAFAFL9GN010823", 2, "Audi", "A4", "2016", 38524, "https://st.motortrend.ca/uploads/sites/10/2015/11/2016-audi-a4-premium-sedan-angular-front1.png");
insert into z1viz9l7u9ew8m7i.Listing(price, vin, UserId, make, model, year, mileage, image) values(26655, "JF1ZNAE10K8700174", 1, "Toyota", "86", "2019", 8564, "https://www.cstatic-images.com/car-pictures/xl/usc90toc291c021001.png");
insert into z1viz9l7u9ew8m7i.Listing(price, vin, UserId, make, model, year, mileage, image) values(19595, "55SWF4JBXGU114792", 3, "Mercedes-Benz", "C", "2016", 37562, "https://st.motortrend.ca/uploads/sites/10/2016/08/2016-mercedes-benz-c-class-amg-c63-s-sedan-angular-front.png");
insert into z1viz9l7u9ew8m7i.Listing(price, vin, UserId, make, model, year, mileage, image) values(285000, "ZHWUD4ZF0JLA09084", 2, "Lamborghini", "Huracan", "2018", 5325, "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAyb1Qz.img?h=373&w=624&m=6&q=60&o=f&l=f");
insert into z1viz9l7u9ew8m7i.Listing(price, vin, UserId, make, model, year, mileage, image) values(68888, "WBY2Z2C57FV391210", 2, "BMW", "I8", "2015", 58975, "https://www.cstatic-images.com/car-pictures/xl/usc50bmc681a021001.png");
insert into z1viz9l7u9ew8m7i.Listing(price, vin, UserId, make, model, year, mileage, image) values(25730, "JM1NDAL74H0100591", 3, "Mazda", "MX 5", "2018", 11032, "https://www.mazdausa.com/siteassets/vehicles/2018/mx5-st/trims/gt/2018-Mazda-MX-5-Miata-grand-touring.png");
