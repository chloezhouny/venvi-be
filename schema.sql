DROP DATABASE IF EXISTS venvi;
CREATE DATABASE venvi;

insert into venvi.User(name, username) values('alfred','alfred@gmail.com');
insert into venvi.User(name, username) values('chloe','chloe@gmail.com');
insert into venvi.User(name, username) values('esar','esar@gmail.com');
insert into venvi.User(name, username) values('phillip','phillip@gmail.com');


insert into venvi.Vehicle(make, model, year, rating, image) values("Jaguar", "XJ", "2018", 1, "https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/90bde009b511661b40b6fd14da51e308.png");
insert into venvi.Vehicle(make, model, year, rating, image) values("Porsche", "Panamera", "2017",2, "https://st.motortrend.com/uploads/sites/10/2017/08/2018-porsche-panamera-turbo-hatchback-angular-front.png");
insert into venvi.Vehicle(make, model, year, rating, image) values("BMW", "7", "2018", 3, "https://www.vehicledynamicsinternational.com/wp-content/uploads/2019/01/2019-bmw-7-series.png");
insert into venvi.Vehicle(make, model, year, rating, image) values("Bentley", "Continental", "2019",4,  "https://www.cstatic-images.com/car-pictures/xl/usc60bec062d01300.png");
insert into venvi.Vehicle(make, model, year, rating, image) values("Mercedes-Benz", "S", "2018", 5, "https://st.motortrend.com/uploads/sites/10/2017/10/2018-mercedes-benz-s-class-450-sedan-angular-front.png");




