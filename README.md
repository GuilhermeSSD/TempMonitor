# Sistema Inteligente de Monitoramento de Temperatura para Câmaras Frigoríficas tempmonitor

## Descrição do Projeto
Este projeto tem como objetivo criar um sistema de monitoramento de temperatura em câmaras frigoríficas de açougues e estabelecimentos similares. O sistema permite acompanhar a temperatura em tempo real, registrar histórico de medições e gerar alertas quando os valores estiverem fora da faixa ideal.

A coleta de dados é realizada por um sensor de temperatura conectado a um Arduino, que envia as informações para um sistema web. Os dados são armazenados em um banco de dados e apresentados ao usuário por meio de uma interface web.
A
## Objetivo
Permitir o controle contínuo da temperatura das câmaras frigoríficas, reduzindo perdas de produtos, riscos sanitários e facilitando o cumprimento de normas de armazenamento.

## Tecnologias Utilizadas
- Arduino  
- Sensor de temperatura  
- HTML, CSS e JavaScript  
- Backend web  
- Banco de dados SQL    
- Trello para organizaar o que cada um vai fazer  

## Funcionalidades
- Cadastro e login de usuários  
- Monitoramento de temperatura
- Armazenamento do histórico de temperatura  
- Dashboard para visualização dos dados   
- alertas em caso de variação fora do limite  

## Funcionamento do Sistema
O sistema irá funcionar a com a captura da temperatura realizada pelo sensor instalado na câmara frigorífica(preferencialmente de na porta do de entrada da câmara). O Arduino envia essas informações para o sistema web, onde os dados são armazenados no banco de dados. O usuário acessa o sistema por meio de um navegador e pode ver as informações em tempo real e consultar registros anteriores.

## Banco de Dados
O banco de dados foi feito para armazenar as informações, contendo as tabelas:
usuario, sensor, medicao, empresa, camara. 
	


