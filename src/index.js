
const express = require('express');
const {v4: uuidv4} = require('uuid');
const app = express();

mapp.use(express.json());

const customers = [];

/**
 * CONTAS
 * cpf - string
 * name - string 
 * id - uuid
 * statement - []array
 */

app.post('/account', (request, response) => {
    const {cpf, name} = request.body;
   

    const customerAlreadyExists = customers.some(
        (customer) => customer.cpf === cpf
    );

    if(customerAlreadyExists) {
        return response.status(400).json({error: "Customer already exists!"});
    }

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    });

    return response.status(201).send();

});

app.listen(3333);
