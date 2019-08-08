import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { NgForm } from '@angular/forms';
import { Menu } from 'src/app/models/menu';
declare var M: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  p: number = 1;
  isLoading = false;

  constructor(public menuService: MenuService) { } //Cambiar despues a private

  ngOnInit() {
    this.findAll();
  }

  addMenu(form: NgForm) {
    if (form.value._id) {
      this.isLoading = true;
      this.menuService.putMenu(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.isLoading = false;
          M.toast({ html: 'Update successfully!', classes: 'rounded' });
          this.findAll();
        })
    } else {
      this.isLoading = true;
      this.menuService.postMenu(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.isLoading = false;
          M.toast({ html: 'Saved successfully!', classes: 'rounded' });
          this.findAll();
        });
    }
  }

  findAll() {
    this.isLoading = true;
    this.menuService.findAll()
      .subscribe(res => {
        this.menuService.menus = res as Menu[];
        console.log(res);
        this.isLoading = false;
      });
  }

  editMenu(menu: Menu) {
    this.menuService.selectedMenu = menu;
  }

  deleteMenu(_id: string) {
    if (confirm('Are you sure want to delete it?')) {
      this.menuService.deleteMenu(_id)
        .subscribe(res => {
          this.findAll();
          M.toast({ html: 'Deleted successfully!', classes: 'rounded' })
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.menuService.selectedMenu = new Menu();
    }
  }

  /* Tabs */
  step = 0;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}//End class
