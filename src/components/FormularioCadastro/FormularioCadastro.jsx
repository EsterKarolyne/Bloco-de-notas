import React, { Component } from "react";
import "./estilo.css";

export default class FormularioCadastro extends Component{
    
    constructor(props){
        super(props);
        this.titulo="";
        this.texto="";
    }
    
    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value
        console.log(this.titulo)
    }

    _handleMudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value
    }

    _criarNota(evento){
        evento.preventDefault(); // pra nao dar reloade
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
        
    }

    render(){
        return(
        <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
            <input className="form-cadastro_input" placeholder="título" type="text" onChange={this._handleMudancaTitulo.bind(this)}></input>
            <textarea className="form-cadastro_input" rows={15} placeholder="Escreva sua nota..." onChange={this._handleMudancaTexto.bind(this)}></textarea>
            <button className="form-cadastro_input form-cadastro_submit" >Criar nota</button>
        </form>
        );
    }
}
