DROP DATABASE IF EXISTS venvi;
CREATE DATABASE venvi;

insert into venvi.User(name, username, profileID) values('alfred','alfred@gmail.com', 111);
insert into venvi.User(name, username, profileID) values('chloe','chloe@gmail.com', 222);
insert into venvi.User(name, username, profileID) values('esar','esar@gmail.com', 333);
insert into venvi.User(name, username, profileID) values('phillip','phillip@gmail.com', 444);


insert into venvi.Vehicle(make, model, year, rating, image) values("Jaguar", "XJ", "2018", 1, "https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/90bde009b511661b40b6fd14da51e308.png");
insert into venvi.Vehicle(make, model, year, rating, image) values("Porsche", "Panamera", "2017",2, "https://st.motortrend.com/uploads/sites/10/2017/08/2018-porsche-panamera-turbo-hatchback-angular-front.png");
insert into venvi.Vehicle(make, model, year, rating, image) values("BMW", "7", "2018", 3, "https://www.vehicledynamicsinternational.com/wp-content/uploads/2019/01/2019-bmw-7-series.png");
insert into venvi.Vehicle(make, model, year, rating, image) values("Bentley", "Continental", "2019",4,  "https://www.cstatic-images.com/car-pictures/xl/usc60bec062d01300.png");
insert into venvi.Vehicle(make, model, year, rating, image) values("Mercedes-Benz", "S", "2018", 5, "https://st.motortrend.com/uploads/sites/10/2017/10/2018-mercedes-benz-s-class-450-sedan-angular-front.png");




insert into venvi.Listing(price, vin, UserId, make, model, year, image) values(78000, "5YJSA1E23JF266704", 1, "Tesla", "Model S", "2018", "https://www.cstatic-images.com/car-pictures/xl/usc70tsc024b021001.png");
insert into venvi.Listing(price, vin, UserId, make, model, year, image) values(22684, "JTHBE1BL9E5033613", 2, "Lexus", "GS", "2014", "https://www.cstatic-images.com/car-pictures/xl/cac30lec151a021001.png");
insert into venvi.Listing(price, vin, UserId, make, model, year, image) values(52995, "WBS8M9C58G5E68439", 3, "BMW", "M3", "2016", "https://www.cstatic-images.com/car-pictures/xl/usc60bmc111a021001.png");
insert into venvi.Listing(price, vin, UserId, make, model, year, image) values(59995, "WBA7F0C58HGM21274", 4, "BMW", "7", "2017", "https://pictures.dealer.com/t/tischerbmwofsilversprings/1408/5d15488140965bd1d653586553e35147x.jpg");
insert into venvi.Listing(price, vin, UserId, make, model, year, image) values(18996, "WAUAFAFL9GN010823", 5, "Audi", "A4", "2016", "https://st.motortrend.ca/uploads/sites/10/2015/11/2016-audi-a4-premium-sedan-angular-front1.png");
insert into venvi.Listing(price, vin, UserId, make, model, year, image) values(26655, "JF1ZNAE10K8700174", 6, "Toyota", "86", "2019", "https://www.cstatic-images.com/car-pictures/xl/usc90toc291c021001.png");
insert into venvi.Listing(price, vin, UserId, make, model, year, image) values(19595, "55SWF4JBXGU114792", 7, "Mercedes-Benz", "C", "2016", "https://st.motortrend.ca/uploads/sites/10/2016/08/2016-mercedes-benz-c-class-amg-c63-s-sedan-angular-front.png");
insert into venvi.Listing(price, vin, UserId, make, model, year, image) values(285000, "ZHWUD4ZF0JLA09084", 8, "Lamborghini", "Huracan", "2018", "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAyb1Qz.img?h=373&w=624&m=6&q=60&o=f&l=f");
insert into venvi.Listing(price, vin, UserId, make, model, year, image) values(68888, "WBY2Z2C57FV391210", 9, "BMW", "I8", "2015", "https://www.cstatic-images.com/car-pictures/xl/usc50bmc681a021001.png");
insert into venvi.Listing(price, vin, UserId, make, model, year, image) values(25730, "JM1NDAL74H0100591", 10, "Mazda", "MX 5", "2018", "https://www.mazdausa.com/siteassets/vehicles/2018/mx5-st/trims/gt/2018-Mazda-MX-5-Miata-grand-touring.png");
