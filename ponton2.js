const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./baza.db');

var sqlupit=(id)=>{
    return new Promise((resolve,reject)=>{
    let sql = `SELECT * FROM skladiste where id=?`;
        db.all(sql,[id], function (err, rows) {
            if(err){
                reject(new Error(
                  "This promise is Rejected..."));
            }else{
                resolve(rows);
            }
        }); 
    })
    }

async function call(){
    try {
        let p=await sqlupit('a');

        if (p.length==0) throw new Error('greska');
        console.log(p[0].artikl);
    }catch(e)
    {
        console.log("message ",e.message);
    }
}

call();

