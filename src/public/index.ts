// If you are using JavaScript/ECMAScript modules:
import Dropzone from "dropzone";

// If you are using an older version than Dropzone 6.0.0,
// then you need to disabled the autoDiscover behaviour here:
Dropzone.autoDiscover = false;

let myDropzone = new Dropzone("#app", { url: "/api/photo", paramName: "image" });
myDropzone.on("addedfile", (file) => {
    console.log(`File added: ${file.name}`);
});
