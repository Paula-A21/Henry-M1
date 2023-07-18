const { Router } = require("express");

const router = Router();

router.get("/countries", getCountries); //le paso cada una de las funciones, de manera predeterminada se les envia a cada uno las req y res

router.get("/countries/:idPais", getCountryById);

router.get("/countries/name?=", getCountryByName);

router.post("/activities", postActivities);

router.get("/activities", getActivities);

module.exports = router;
