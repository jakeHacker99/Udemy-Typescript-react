import path from "path";
import express from "express";

import fs from "fs/promises";

interface Cell {
    id: string;
    content: string;
    type: "text" | "code";
}
export const createCellsRouter = (filename: string, dir: string) => {
    const router = express.Router();
    router.use(express.json())

    const fullPath = path.join(dir, filename);
    router.get("/cells", async (req, res) => {
        try {
            const reuslt = await fs.readFile(fullPath, { encoding: "utf-8" });
            res.send(JSON.parse(reuslt));
        } catch (err) {
            if (err.code === "ENOENT") {
                await fs.writeFile(fullPath, "[]", "utf-8");
                res.send([]);
            } else {
                throw err;
            }
        }

        // Make sure the cell storage file exists
        // if it doesn't exist, add in default
        // read tje file
        // parse a list of cells out of it
        // send list of cells back to browser
    });
    router.post("/cells", async (req, res) => {
        // make sure the file exists
        // take the list of cells from the requst obj
        // serialize them
        const { cells }: { cells: Cell[] } = req.body;
        // write the cells into the file
        await fs.writeFile(fullPath, JSON.stringify(cells), "utf-8");

        res.send({ status: "ok" });
    });

    return router;
};
