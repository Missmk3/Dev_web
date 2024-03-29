CREATE TABLE PRODUCTS(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    categorie VARCHAR(255),
    priece INT(255),
    description VARCHAR(255)
);


CREATE TABLE USERS(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    rename VARCHAR(255),
    email INT(255),
    password VARCHAR(255)
);

CREATE TABLE IDEA (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    description VARCHAR NOT NULL,
    name VARCHAR(255)
);


CREATE TABLE `LIKE` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    id_events INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES UTILISATEUR(id),
    FOREIGN KEY (id_evenement) REFERENCES EVENEMENT(id)
);

CREATE TABLE EVENEMENT (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_id INT NOT NULL,
    description_id INT NOT NULL,
    START DATE NOT NULL,
    END date NOT NULL
    FOREIGN KEY (nom_id) REFERENCES NOM_EVENEMENT(id),
    FOREIGN KEY (description_id) REFERENCES DESCRIPTION_EVENEMENT(id)
);


CREATE TABLE CATEGORIE (
    id INT NOT NULL,
    nom VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)

);


CREATE TABLE categorie_products (
    id_categorie INT NOT NULL,
    id_products INT NOT NULL,
    PRIMARY KEY (id_categorie, id_produit),
    FOREIGN KEY (id_categorie) REFERENCES CATEGORIE(id),
    FOREIGN KEY (id_produit) REFERENCES PRODUIT(id)
);

CREATE TABLE IMAGE (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    id_events INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES UTILISATEUR(id),
    FOREIGN KEY (id_events) REFERENCES EVENEMENT(id)
);

CREATE TABLE COMMENTS(
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    id_products INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES UTILISATEUR(id),
    FOREIGN KEY (id_products) REFERENCES PRODUCTS(id),

);


CREATE TABLE BOXES_SHOP(
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    id_products INT NOT NULL,
    description TEXT NOT NULL,
);






