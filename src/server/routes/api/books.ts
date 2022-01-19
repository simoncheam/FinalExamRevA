import * as express from 'express';
import { Books, ReqUser } from '../../types';
import booksDB from '../../database/queries/books'

import { tokenCheck } from '../../middleware/tokenCheck.mw'; //!!!!!!!

const router = express.Router();

//get all
router.get('/', async (req, res) => {

    try {
        const all_books = await booksDB.get_all_joined();

        res.status(200).json(all_books);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }

})

//get one by id ✅ OK
router.get('/:id', async (req, res) => {

    const id = Number(req.params.id);

    try {
        const [one_book] = await booksDB.get_one_by_id(id);

        if (!one_book) {
            res.status(404).json({ message: 'book does not exist' })

        }
        res.status(200).json(one_book);


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }
})

// POST ✅ OK
router.post('/', tokenCheck, async (req: ReqUser, res) => {

    const { title, author, price, categoryid }: Books = req.body;

    //input validation


    if (!title || !author || !price || !categoryid) {
        return res.status(400).json({ message: "Fill out everything!" })
    }

    try {
        const bookResults = await booksDB.create({ title, author, price, categoryid });
        res.status(200).json({ message: 'book added to store', bookResults });


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }
})


//PUT ✅ OK
router.put('/:id', tokenCheck, async (req: ReqUser, res) => {

    const { title, author, price, categoryid }: Books = req.body;

    if (!title || !author || !price || !categoryid) {
        return res.status(400).json({ message: "Fill out everything!" })
    }


    try {
        const id = Number(req.params.id);


        const bookUpdateResults = await booksDB.update({ title, author, price, categoryid }, id);

        if (bookUpdateResults.affectedRows) {

            res.status(201).json({ message: "Updated Book!" });

        } else {
            res.status(401).json({ message: "Not authorized!" })
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }
})




// DELETE ✅ OK

router.delete('/:id', tokenCheck, async (req, res) => {

    const id = Number(req.params.id);

    try {
        const results = await booksDB.destroy(id);

        res.status(200).json({ message: 'Book Deleted' });


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "A server errors occurred", error: error.sqlMessage });
    }
})

export default router;