USE formsdev;

CREATE TABLE forms(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(50),
  phone VARCHAR(11),
  description TEXT,
  ip_addr VARCHAR(39),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX forms_ip ON forms(ip_addr);
