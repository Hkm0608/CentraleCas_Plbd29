import mysql.connector
#Connexion à la base de donnée
db = mysql.connector.connect(host = 'localhost',user='User',password='Rh@kim0608',database= 'mkd')

mc = db.cursor()

mc.execute("CREATE TABLE Client( id INT AUTO_INCREMENT PRIMARY KEY,email VARCHAR(25),password VARCHAR(25) ,name VARCHAR(15),first_name VARCHAR(20),age INT)")
sql = "INSERT INTO Client (email, password ,name, first_name, age) VALUES (%s,%s,%s,%s,%s)"
#val = ("Adresse@gmail.com", "Code", "Nom","Prénom",20)

sql="SELECT * FROM Client "
mc.execute(sql)

db.commit()
#Affichage
#for x in mc: 
#    print(x)

print(mc.rowcount)
