"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var jsonwebtoken_1 = require("jsonwebtoken");
var api_config_1 = require("./api-config");
exports.handlerAuthorization = function (req, resp, next) {
    var token = extractToken(req);
    if (!token) {
        resp.header('WWW-Authenticate', 'Bearer token_type="JWT"');
        return resp.status(401).json({ message: 'Você precisa se autenticar.' });
    }
    else {
        jwt.verify(token, api_config_1.apiConfig.secret, function (error, decoded) {
            if (jsonwebtoken_1.decode) {
                next();
            }
            else {
                resp.status(403).json({ message: 'Não autorizado.' });
            }
        });
    }
};
function extractToken(req) {
    var token = undefined;
    if (req.headers && req.headers.authorization) {
        var parts = req.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }
    return token;
}
