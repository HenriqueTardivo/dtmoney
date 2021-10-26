import { access } from 'fs';
import React, {useContext} from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransaction } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary()
{
    const { transactions } = useTransaction();

    const summary = transactions.reduce((acc, trasaction)=> {
        if (trasaction.type == 'deposit') {
            acc.desposits += trasaction.amount;
            acc.total += trasaction.amount;
        }           
        else {
            acc.withdraws += trasaction.amount;
            acc.total += trasaction.amount;
        }

        return acc;
    },{
        desposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <Container>                
            <div>
                <header>
                  <p>Entradas</p>  
                  <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                    }).format(summary.desposits)}
                </strong>
            </div>
            <div>
                <header>
                  <p>Saídas</p>  
                  <img src={outcomeImg} alt="Saídas"/>
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                  <p>Total</p>  
                  <img src={totalImg} alt="Total"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                    }).format(summary.total)}     
                </strong>
            </div>    
        </Container>
    )
} 