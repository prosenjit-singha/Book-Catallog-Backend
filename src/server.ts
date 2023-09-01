// Register alias always define it on top of module
import moduleAlias from "module-alias";
moduleAlias.addAlias("@", __dirname);

import config from "@/config";

console.log(__dirname);
console.log(config);
