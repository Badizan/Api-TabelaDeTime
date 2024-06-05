import joi from 'joi';

export const modeloTime = joi.object({
    nome: joi.string().min(4).required(),
    sigla: joi.string().length(3).required(),
    pontos: joi.number().default(0),
    vitorias: joi.number().default(0),
    empates: joi.number().default(0),
    derrotas: joi.number().default(0),
    golsMarcados: joi.number().default(0),
    golsSofridos: joi.number().default(0),
    saldoGols: joi.number().default(0),
});

export const modeloAtualizaçaoTime = joi.object({
    nome: joi.string().min(4),
    sigla: joi.string().length(3),
    pontos: joi.number(),
    vitorias: joi.number(),
    empates: joi.number(),
    derrotas: joi.number(),
    golsMarcados: joi.number(),
    golsSofridos: joi.number(),
    saldoGols: joi.number(),
}).min(1);