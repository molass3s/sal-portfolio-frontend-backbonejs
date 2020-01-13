// Order matters, so this must be included before any of the other JS files,
// but after the lib JS files.
let app = {};

$(function() {
    new app.UsersView();
});