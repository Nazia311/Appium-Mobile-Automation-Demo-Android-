const { Client } = require('pg');

async function pinServer() {
    const client = new Client({
        user: "ibprod",
        password: "ibprod",
        host: "172.16.6.157",
        database: "ibprod",
        ssl: false,
        port: 5432
    });

    await client.connect();
    const res = await client.query("select DeleteBeneficiariesAndAccounts()");
    await client.end();
    return res.rows;
}


module.exports = {
    pinServer,
};
