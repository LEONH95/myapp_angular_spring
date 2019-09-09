import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    //subscribir metodo
    this.clienteService.getClientes().subscribe(

      /*
        function(clientes){
        this.clientes = clientes
      }
      */
      //Simplificar funciones anonimas -Observador
      clientes => this.clientes = clientes

    );
  }

  delete(cliente: Cliente): void{
    const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: 'Estas seguro?',
  text: `Estas seguro que deseas elminar el cliente ${cliente.nombre}`,
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Si, Eliminar!',
  cancelButtonText: 'No, cancelar!',
  reverseButtons: true
}).then((result) => {
  if (result.value) {

    this.clienteService.delete(cliente.id).subscribe(
      response => {
      this.clientes = this.clientes.filter(cli => cli !== cliente);
      swalWithBootstrapButtons.fire(
        'Eliminado!',
        `Cliente ${cliente.nombre} eliminado con exito`,
        'success'
      )
    }
    )


    }
    })
  }

}
