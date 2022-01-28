import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  canShowMotivoRejeicao = false;
  canShowTipoIndeferimento = false;
  canShowAlteraStatusPedido = false;
  canShowAlterarMatricula = false;
  canShowRelatorios = false;
  canShowCadastroScore = false;
  canShowCadastroIndice = false;
  canShowPagamento = false;

  showMenu = false;
  toogleMenuAlterarPedido = false;
  toogleMenuRelatorio = false;
  toogleMenuIndice = false;
  toogleMenuPagamento = false;
  canShowPainel = false;
  roles = ['SDC_MANTER', 'SDC_TROCAR_MATRICULA', 'SDC_ALTERAR_SITUACAO', 'SDC_ANALISAR'];
  constructor(
  ) { }

  ngOnInit(): void {

  }

  logout(): void {
  }

  getUserName() {

  }

  getMatricula() {

  }

  toogleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  toogleMenuAlteraPedido(): void {
    this.toogleMenuAlterarPedido = !this.toogleMenuAlterarPedido;
  }

  toogleMenuRelatorios(): void {
    this.toogleMenuRelatorio = !this.toogleMenuRelatorio;
  }

  toogleMenuIndices(): void {
    this.toogleMenuIndice = !this.toogleMenuIndice;
  }

  toogleMenuPagamentos(): void {
    this.toogleMenuPagamento = !this.toogleMenuPagamento;
  }

  onFocusOut(): void {
    setTimeout(() => {this.showMenu = false; this.toogleMenuAlterarPedido = false; }, 3000);
  }
}
