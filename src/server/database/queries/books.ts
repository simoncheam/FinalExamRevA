// ✅ OK
import { Query } from "../index";
import { MysqlResponse } from "../models";
import { Books, BooksJoined } from "../../types"

//get all joined
const get_all_joined = () => Query<BooksJoined[]>("CALL getBooksJoined()");


///get one by id
const get_one_by_id = (id: number) => Query<Books[]>("SELECT * FROM Books WHERE id =?", [id]);


//put
const update = (book: Books, id: Books['id']) => Query("UPDATE Books SET ? WHERE id=?", [book, id]);


//post
const create = (new_book: Books) => {
    return Query(`INSERT INTO Books SET ?`, [new_book]);
}

//delete
const destroy = (id: Books['id']) => Query("DELETE FROM Books WHERE id=?", [id]);


export default {
    get_all_joined,
    get_one_by_id,
    create,
    update,
    destroy

};