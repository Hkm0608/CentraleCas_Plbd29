from flask import Flask, request, render_template,jsonify,redirect, url_for
import mysql.connector
app = Flask(__name__) 
db = mysql.connector.connect(host = 'localhost',user='User',password='Rh@kim0608', database='mkd') #C:\ProgramData\MySQL\MySQL Server 8.3\

@app.route('/') 
def index() :
    return render_template("Authentification.html")


@app.route('/Creation') 
def creer() :
    return render_template("Page de création de compte.html")


@app.route('/accueil') 
def accueil() :
    return render_template("accueil.html")

@app.route('/login', methods=['POST']) 
def login():
    email,password = request.json["email"], request.json["password"]
    
    cursor = db.cursor()
    cursor.execute("SELECT * FROM Client WHERE email = %s AND password = %s", (email,password))
    user = cursor.fetchone()
    
    if user is not None :
        return jsonify({'success': True})
    else :
        return jsonify({'success': False})
    
    
@app.route('/register', methods=['POST'])
def register():
    email,password,name,fname,age = request.json["signupEmail"], request.json["signupPassword"],request.json["lastName"],request.json["firstName"],request.json["age"]
    sql = "INSERT INTO Client (email,password,name,first_name,age) VALUES (%s,%s,%s,%s,%s)"
    val = (email,password,name,fname,int(age))
    cursor = db.cursor()
    cursor.execute(sql,val)
    return jsonify({'success': True})

if __name__ == '__main__' :
    app.run(debug=True)
    
