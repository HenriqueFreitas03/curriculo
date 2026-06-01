export const dados = {
  nome: "HENRIQUE FREITAS",
  subtitulo: "Desenvolvedor Java Júnior (Backend / Full Stack)",
  contatos: [
    { label: "📍 Iguatu, CE", url: null },
    { label: "📞 (88) 99966-1633", url: "tel:88999661633" },
    { label: "✉️ henriquefreitas967@gmail.com", url: "mailto:henriquefreitas967@gmail.com" }
  ],
  redes: [
    { nome: "GitHub", url: "https://github.com/HenriqueFreitas03" },
    { nome: "LinkedIn", url: "https://linkedin.com/in/henrique-freitas-6048a5309" }
  ],
  resumo: "Recém-formado em Análise e Desenvolvimento de Sistemas na FIAP, focado no desenvolvimento Backend com Java e ecossistema Spring Boot, aplicando boas práticas de engenharia como Design Patterns. Possuo conhecimentos em Kotlin e noções de desenvolvimento frontend com React, o que me permite atuar com flexibilidade em times Full Stack. Experiência prática na orquestração de containers com Docker e fundamentos de computação em nuvem (AWS).",
  formacao: "Superior de Tecnologia em Análise e Desenvolvimento de Sistemas — FIAP (Conclusão: 2026)",
  skills: [
    "Java & Spring Boot", "Spring Data JPA & Security", "Kotlin & Python", 
    "Arquitetura RESTful", "React, TypeScript & CSS3", "Design Patterns & SOLID", 
    "Docker & Docker Compose", "AWS (EC2, S3, RDS)", "MySQL, Oracle & MongoDB"
  ],
  projetos: [
    {
      titulo: "MÁQUINA VIRTUAL & INTERPRETADOR BINÁRIO",
      tags: "Java / Hardware Virtual",
      desc: "Desenvolvimento de um emulador de hardware completo do zero: Memória RAM isolada gerenciando ponteiros, Processador decodificando Opcodes nativos em tempo real (Método B) com IO de caracteres, e Interpretador de arquivos capaz de gerenciar desvios de fluxo e loops complexos de leitura para frente e para trás em arquivos binários (.bin)."
    },
    {
      titulo: "SISTEMA DE PREVISÃO DE VENDAS PARA VAREJO",
      tags: "Spring Boot / API RESTful",
      desc: "Desenvolvimento de uma API RESTful utilizando dados reais de uma panificadora para predição de demanda. Integração com banco de dados e aplicação de Design Patterns para garantir o desacoplamento e a manutenção do código."
    },
    {
      titulo: "PADRONIZAÇÃO E CONTEINERIZAÇÃO COM DOCKER",
      tags: "DevOps / Full Stack",
      desc: "Implementação e configuração de ambientes isolados usando Docker e Docker Compose para aplicações Full Stack (Unindo API Java, Front End e Bancos de Dados), garantindo paridade total entre desenvolvimento e produção."
    },
    {
      titulo: "INTERFACE GRÁFICA DESKTOP (JAVA SWING)",
      tags: "Java / POO Pura",
      desc: "Criação de um jogo de 'Campo Minado' utilizando conceitos puros de Orientação a Objetos, gerenciamento de estados e manipulação de eventos em Java."
    },
    {
      titulo: "SISTEMA DESKTOP FINANCEIRO COM INTERFACES & DASHBOARD",
      tags: "Java Swing / SQLite / JDBC",
      desc: "Desenvolvimento de uma aplicação desktop para gestão financeira e auditoria. Implementou um motor de ETL nativo para ler, sanitizar e importar dados de planilhas Excel para um banco relacional local SQLite via JDBC. O sistema conta com uma interface gráfica completa contendo tabelas dinâmicas, geração de relatórios de pagamentos/taxas e um dashboard visual para análise de fluxo de caixa."
    }
  ],
  certificados: [
    "Java Completo: Do Zero ao Profissional + Projetos (Prof. Nélio Alves)",
    "Spring Boot REST API's do 0 à AWS e GCP com Java e Docker",
    "Qualificação Profissional em Análise de Sistemas e Prototipagem Web (FIAP)",
    "Algoritmos e Lógica de Programação"
  ]
};