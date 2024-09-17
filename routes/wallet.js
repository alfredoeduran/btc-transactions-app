// routes/wallet.js
const express = require('express');
const axios = require('axios');
const { Parser } = require('json2csv');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// API key de BlockCypher
const apiKey = process.env.BLOCKCYPHER_API_KEY;  

router.post('/generate', async (req, res) => {
    const { walletAddress } = req.body;

    try {
        const url = `https://api.blockcypher.com/v1/btc/main/addrs/${walletAddress}/full?token=${apiKey}`;
        const response = await axios.get(url);
        const transactions = response.data.txs.map(tx => ({
            'Transaction Hash': tx.hash,
            'Total BTC (BTC)': tx.total / 100000000,  // convertir a BTC
            'Fees (BTC)': tx.fees / 100000000,        // convertir a BTC
            'Confirmation Date': tx.confirmed,
        }));

        // Generar CSV con json2csv
        const parser = new Parser();
        const csv = parser.parse(transactions);

        // Guardar archivo CSV en el servidor
        const filePath = path.join(__dirname, '..', 'public', 'transactions.csv');
        fs.writeFileSync(filePath, csv);

        // Enviar el enlace de descarga al cliente
        res.json({ fileUrl: '/transactions.csv' });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener transacciones' });
    }
});

module.exports = router;
