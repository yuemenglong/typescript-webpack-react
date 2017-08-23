/**
 * Created by <yuemenglong@126.com> on 2017/8/22
 */
import * as express from "express"
import * as P from "path"

let port = 80;

let BASE_DIR = P.resolve(__dirname, "../../");

module.exports = function start() {
    let app = express();
    app.set('views', P.resolve(BASE_DIR, "jade"));
    app.set('view engine', 'jade');
    app.use("/bundle", express.static(P.resolve(BASE_DIR, "bundle")));
    app.get("/*", function (req, res) {
        res.render("App")
    });
    app.listen(port, function () {
        console.log(`Listen On ${port} Succ`);
    })
};
