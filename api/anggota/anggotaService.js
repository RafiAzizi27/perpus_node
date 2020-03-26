const db = require("../../config/connection")

module.exports ={
    serviceGetAnggota:(callBack)=>{
        db.query(
            'SELECT * FROM anggota',(err,result,fields)=>{
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, result)
                } 
            }
        )
    },
    serviceAddAnggota: (data, callBack)=>{
        db.query(
            'insert into anggota(nm_anggota, alamat, tlpn) values (?,?,?)',
            [
                data.nm_anggota,
                data.alamat,
                data.tlpn
            ],
            (err, result, fields) =>{
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, result)
                }
            }
        )
    },

serviceUpdateAnggota: (data, callBack) =>{
    db.query(
        'update anggota set nm_anggota=?, alamat=?, tlpn=?',
        [
            data.nm_anggota,
            data.alamat,
            data.tlpn,
            data.kd_anggota
        ],
        (err, results, fields) =>{
            if (err) {
                return callBack(err);
            } else {
                return callBack(null, results)
            }
        }
        )
    },

    serviceDeleteAnggota: (data, callBack) =>{
        db.query(
            `delete from anggota where kd_anggota=?`,
            [data.kd_anggota],
            (err, result)=>{
                if (err) {
                    return callBack(err)
                }if(!result){
                    callBack(result)
                }
                else {
                    return callBack(null, result)
                }
            }
        )
    }
}