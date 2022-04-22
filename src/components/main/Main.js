import React from 'react'
import hello from '../../assets/hello.png'
import Chart from '../charts/Chart'

import './Main.css'

const Main = () => {
    return (
        <main>
            <div className="main-container">
                <div className="main-title">
                    <img src={hello} alt="hello" />
                    <div className="main-greeting">
                        <h1>Olá Marcos</h1>
                        <p>Bem vindo ao seu dashboard</p>
                    </div>
                </div>
                <div className="main-cards">
                    <div className="card">
                        <i className="fa fa-file-text fa-2x text-lightblue"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Número de pedidos</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-money fa-2x text-red"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">
                                Número de pagamentos
                            </p>
                            <span className="font-bold text-title">
                                R$ 6.126
                            </span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-archive fa-2x text-yellow"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Número de produtos</p>
                            <span className="font-bold text-title">169</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-bars fa-2x text-green"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Categorias</p>
                            <span className="font-bold text-title">39</span>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts-left">
                        <div className="charts-left-title">
                            <div>
                                <h1>Reports Diários</h1>
                                <p>São Paulo, SP, BR</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>

                        <Chart />
                    </div>

                    <div className="charts-right">
                        <div className="charts-right-title">
                            <div>
                                <h1>Reports Diários</h1>
                                <p>São Paulo, SP, BR</p>
                            </div>
                            <i className="fa fa-area-chart"></i>
                        </div>
                        <div className="charts-right-cards">
                            <div className="card1">
                                <h1>Lucro</h1>
                                <p>R$ 2780</p>
                            </div>
                            <div className="card2">
                                <h1>Pagamentos</h1>
                                <p>R$ 570</p>
                            </div>
                            <div className="card3">
                                <h1>Custos de Hospedagem</h1>
                                <p>R$ 280</p>
                            </div>
                            <div className="card4">
                                <h1>Banco de Dados</h1>
                                <p>R$ 180</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
