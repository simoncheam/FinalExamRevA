// ✅ OK
import { Query } from "../index";
import { Users } from "../../types"


const getUserBy = (column_name: string, value: string | number) =>
    Query<Users[]>("SELECT * FROM Users WHERE ??=?", [column_name, value]);


const create = (new_user: Users) => {
    return Query(`INSERT INTO Users SET ?`, [new_user]);
}


export default {
    getUserBy,
    create

};