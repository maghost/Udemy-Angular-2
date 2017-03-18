"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InMemoryDataService {
    createDb() {
        let contatos = [
            { id: 1, nome: 'Matheus Marques', email: 'matheus@email.com', telefone: '(15) 98138-6431' },
            { id: 2, nome: 'Lucas Marques', email: 'lucas@email.com', telefone: '(15) 99652-3562' },
            { id: 3, nome: 'Felipe Paes', email: 'felipe@email.com', telefone: '(16) 3322-5544' },
            { id: 4, nome: 'Renato Viana', email: 'renato@email.com', telefone: '(15) 98564-2333' },
            { id: 5, nome: 'Cesar Sales', email: 'cesar@email.com', telefone: '0800-109-382' },
            { id: 6, nome: 'Paulo Cesar', email: 'pc@email.com', telefone: '' },
            { id: 6, nome: 'Wesler Viadão', email: 'wesler@email.com', telefone: '' }
        ];
        return {
            contatos
            // contatos é a mesma coisa que 'contatos': contatos
        };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map