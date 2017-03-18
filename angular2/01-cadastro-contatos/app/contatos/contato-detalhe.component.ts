import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
})
export class ContatoDetalheComponent implements OnInit {

    contato: Contato;
    private isNew: boolean = true;

    constructor (
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.contato = new Contato(0, '', '', '');
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];

            if (id) {
                this.isNew = false;

                this.contatoService.find(id)
                    .then((contato: Contato) => {
                        this.contato = contato;
                    });
            }
        });
    }

    getFormGroupClass(isValid: boolean, isDirty: boolean) : {} {
        return {
            'form-group': true,
            'has-danger': !isValid && isDirty,
            'has-success': isValid && isDirty
        }
    }

    getFormControlClass(isValid: boolean, isDirty: boolean) : {} {
        return {
            'form-control': true,
            'form-control-danger': !isValid && isDirty,
            'form-control-success': isValid && isDirty
        }
    }

    onSubmit(): void {
        let promise;

        if (this.isNew) {
            console.log('Cadastrar Contato');
            promise = this.contatoService.create(this.contato);
        } else {
            console.log('Alterar Contrato');
            promise = this.contatoService.update(this.contato);
        }

        promise.then(contato => this.goBack());
    }

    goBack(): void {
        this.location.back()
    }

}
