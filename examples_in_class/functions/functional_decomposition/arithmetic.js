/*
    This file (module) contains simple arithmetic functions

    Filename: arithmetic.js
    Author: Josh Archer
    Date: 11/1/2021
 */

function add(oper1, oper2)
{
    return oper1 + oper2;
}

function sub(oper1, oper2)
{
    return oper1 - oper2;
}

function mult(oper1, oper2)
{
    return oper1 * oper2;
}

function div(oper1, oper2)
{
    if (oper2 === 0)
    {
        return undefined;
    }

    return oper1 / oper2;
}